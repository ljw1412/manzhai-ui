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
  readonly pagerCount!: number

  get mPageCount() {
    if (typeof this.total === 'number') {
      return Math.max(1, Math.ceil(this.total / this.pageSizeSync))
    } else if (typeof this.pageCount === 'number') {
      return Math.max(1, Math.ceil(this.pageCount))
    }
    return null
  }

  get displayQuickPrev() {
    const pagerCount = this.pagerCount
    const halfPagerCount = (pagerCount - 1) / 2

    const currentPage = Number(this.index)
    const pageCount = Number(this.mPageCount)

    return pageCount > pagerCount && currentPage > pagerCount - halfPagerCount
  }

  get displayQuickNext() {
    const pagerCount = this.pagerCount
    const halfPagerCount = (pagerCount - 1) / 2

    const currentPage = Number(this.index)
    const pageCount = Number(this.mPageCount)

    return pageCount > pagerCount && currentPage < pagerCount - halfPagerCount
  }

  render(h: CreateElement) {
    return <div class="mz-pagination">{this.renderPagers()}</div>
  }

  renderPagerNumber(num: number) {
    const active = this.index === num
    const data: VNodeData = {
      props: { flat: true, icon: true },
      class: ['page-number', { active }],
      key: num
    }
    return <mz-button {...data}>{num}</mz-button>
  }

  renderPagerIcon(icon: string) {
    return (
      <mz-button flat icon class="page-number">
        <mz-icon name={icon}></mz-icon>
      </mz-button>
    )
  }

  renderPagers() {
    if (!this.mPageCount) return
    return (
      <div class="mz-pagination-pager">
        {this.renderPagerNumber(1)}
        {this.renderPagerNumber(this.mPageCount)}
      </div>
    )
  }
}
