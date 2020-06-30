import { Component, Vue, Prop } from 'vue-property-decorator'
import { VNodeData } from 'vue'

@Component
export default class MzPaginationPager extends Vue {
  @Prop(Number)
  readonly index!: number
  @Prop(Number)
  readonly pageCount!: number
  @Prop(Number)
  readonly max!: number
  @Prop(String)
  readonly size!: string
  @Prop({ type: Object, default: () => ({}) })
  readonly buttonProp!: Record<string, any>

  quickIcon = { prev: 'ellipsis-horizontal', next: 'ellipsis-horizontal' }

  get halfPagerCount() {
    return (this.max - 1) / 2
  }

  get exceed() {
    return this.pageCount > this.max
  }

  get displayQuickPrev() {
    return this.exceed && Number(this.index) > this.max - this.halfPagerCount
  }

  get displayQuickNext() {
    return (
      this.exceed && Number(this.index) < this.pageCount - this.halfPagerCount
    )
  }

  get pagers() {
    const currentPage = Number(this.index)
    const list = []
    let start = 2
    let count = this.pageCount
    if (this.displayQuickPrev && !this.displayQuickNext) {
      start = this.pageCount - (this.max - 2)
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

  renderPagerNumber(num: number) {
    const active = this.index === num
    const data: VNodeData = {
      props: { ...this.buttonProp },
      class: ['mz-page-number', { active }],
      on: {
        click: () => {
          this.$emit('change', num)
        }
      }
    }
    if (active) {
      Object.assign(data.props, {
        color: 'primary',
        outlined: false
      })
    }
    return <mz-button {...data}>{num}</mz-button>
  }

  renderPagerQuick(type: 'prev' | 'next') {
    const data: VNodeData = {
      props: this.buttonProp,
      class: [`mz-page-quick-${type}`],
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
            this.$emit('change', this.pagers[0] - 1)
          } else {
            this.$emit('change', this.pagers[this.pagers.length - 1] + 1)
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

  render() {
    if (!this.pageCount) return
    return (
      <div class="mz-pagination-pager">
        {this.renderPagerNumber(1)}
        {this.displayQuickPrev && this.renderPagerQuick('prev')}
        {this.pagers.map(i => this.renderPagerNumber(i))}
        {this.displayQuickNext && this.renderPagerQuick('next')}
        {this.pageCount > 1 && this.renderPagerNumber(this.pageCount)}
      </div>
    )
  }
}
