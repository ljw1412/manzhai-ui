import { Component, Model, Prop, PropSync } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import MzButton from 'manzhai-ui/packages/Button/Button'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'

@Component({ components: { MzButton, MzIcon } })
export default class MzPagination extends MzSize {
  @Model('index:change', { type: Number, default: 1 })
  readonly index!: number
  @PropSync('pageSize', { type: Number, default: 10 })
  readonly pageSizeSync!: number
  @Prop(Number)
  readonly pageCount!: number
  @Prop(Number)
  readonly total!: number
  @Prop({
    type: Number,
    default: 7,
    validator: val => (val | 0) === val && val > 4 && val < 20 && val % 2 === 1
  })
  readonly max!: number

  quickIcon = { prev: 'ellipsis-horizontal', next: 'ellipsis-horizontal' }

  get mPageCount() {
    if (typeof this.total === 'number') {
      return Math.max(1, Math.ceil(this.total / this.pageSizeSync))
    } else if (typeof this.pageCount === 'number') {
      return Math.max(1, Math.ceil(this.pageCount))
    }
    return 0
  }

  get halfPagerCount() {
    return (this.max - 1) / 2
  }

  get exceed() {
    return this.mPageCount > this.max
  }

  get displayQuickPrev() {
    return this.exceed && Number(this.index) > this.max - this.halfPagerCount
  }

  get displayQuickNext() {
    return (
      this.exceed && Number(this.index) < this.mPageCount - this.halfPagerCount
    )
  }

  get pagers() {
    const currentPage = Number(this.index)
    const list = []
    let start = 2
    let count = this.mPageCount
    if (this.displayQuickPrev && !this.displayQuickNext) {
      start = this.mPageCount - (this.max - 2)
    } else if (!this.displayQuickPrev && this.displayQuickNext) {
      count = this.max
    } else if (this.displayQuickPrev && this.displayQuickNext) {
      const offset = Math.floor(this.max / 2) - 1
      start = currentPage - offset
      count = currentPage + offset + 1
    }
    for (let i = start; i < count; i++) {
      list.push(i)
    }
    return list
  }

  render(h: CreateElement) {
    return <div class="mz-pagination">{this.renderPagers()}</div>
  }

  renderPagerNumber(num: number) {
    const active = this.index === num
    const data: VNodeData = {
      props: { flat: true, icon: true },
      class: ['mz-page-number', { active }],
      on: {
        click: () => {
          this.handlePageChange(num)
        }
      }
    }
    if (active) {
      Object.assign(data.props, { color: 'primary', flat: false })
    }
    return <mz-button {...data}>{num}</mz-button>
  }

  renderPagerQuick(type: 'prev' | 'next') {
    const data: VNodeData = {
      props: { flat: true, icon: true },
      class: [`mz-page-${type}`],
      directives: [
        {
          name: 'hover',
          value: {
            enter: () => {
              this.quickIcon[type] =
                type === 'prev' ? 'play-back' : 'play-forward'
            },
            leave: () => {
              this.quickIcon[type] = 'ellipsis-horizontal'
            }
          }
        }
      ],
      on: {
        click: () => {
          if (type === 'prev') {
            this.handlePageChange(this.pagers[0] - 1)
          } else {
            this.handlePageChange(this.pagers[this.pagers.length - 1] + 1)
          }
        }
      }
    }
    return (
      <mz-button {...data}>
        <mz-icon name={this.quickIcon[type]}></mz-icon>
      </mz-button>
    )
  }

  renderPagers() {
    if (!this.mPageCount) return
    return (
      <div class="mz-pagination-pager">
        {this.renderPagerNumber(1)}
        {this.displayQuickPrev && this.renderPagerQuick('prev')}
        {this.pagers.map(i => this.renderPagerNumber(i))}
        {this.displayQuickNext && this.renderPagerQuick('next')}
        {this.renderPagerNumber(this.mPageCount)}
      </div>
    )
  }

  handlePageChange(num: number) {
    this.$emit('change', num)
    this.$emit('index:change', num)
  }
}
