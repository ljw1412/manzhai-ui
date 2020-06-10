import { Component, Model, Prop, PropSync } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import MzButton from 'manzhai-ui/packages/Button/Button'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzPager from './Pager'

const CHEVRON_ICON = { prev: 'chevron-back', next: 'chevron-forward' }

@Component({ components: { MzButton, MzIcon, MzPager } })
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
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly circle!: boolean
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop({ type: String, default: '共%d条' })
  readonly totalText!: string

  get mPageCount() {
    if (typeof this.total === 'number') {
      return Math.max(1, Math.ceil(this.total / this.pageSizeSync))
    } else if (typeof this.pageCount === 'number') {
      return Math.max(1, Math.ceil(this.pageCount))
    }
    return 0
  }

  get totalTextFormat() {
    return this.totalText.replace(/%d/g, this.total + '')
  }

  get buttonProp() {
    return {
      icon: true,
      size: this.size,
      circle: this.circle,
      flat: !this.outlined,
      outlined: this.outlined,
      disabled: this.disabled
    }
  }

  handlePageChange(num: number) {
    this.$emit('change', num)
    this.$emit('index:change', num)
  }

  renderController(type: 'prev' | 'next') {
    const isPrev = type === 'prev'
    const disabled = isPrev ? this.index === 1 : this.index === this.mPageCount
    const data = {
      class: `mz-page-${type}`,
      props: { ...this.buttonProp, disabled: this.disabled || disabled },
      on: {
        click: () => {
          this.handlePageChange(this.index + (isPrev ? -1 : 1))
        }
      }
    }
    return (
      <mz-button {...data}>
        <mz-icon name={CHEVRON_ICON[type]}></mz-icon>
      </mz-button>
    )
  }

  renderTotal() {
    if (!this.total && !this.$slots.total) return
    return (
      <span class="mz-pagination-total">
        {this.$slots.total || this.totalTextFormat}
      </span>
    )
  }

  render(h: CreateElement) {
    return (
      <div class={['mz-pagination', { 'is-outlined': this.outlined }]}>
        {this.renderTotal()}
        {this.renderController('prev')}
        <mz-pager
          index={this.index}
          pageCount={this.mPageCount}
          max={this.max}
          size={this.size}
          buttonProp={this.buttonProp}
          on-change={this.handlePageChange}></mz-pager>
        {this.renderController('next')}
      </div>
    )
  }
}
