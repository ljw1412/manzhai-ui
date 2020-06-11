import { Component, Model, Prop, PropSync } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import MzSelect from 'manzhai-ui/packages/Select/Select.vue'
import MzOption from 'manzhai-ui/packages/Select/Option.vue'
import MzButton from 'manzhai-ui/packages/Button/Button'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzPager from './Pager'

const CHEVRON_ICON = { prev: 'chevron-back', next: 'chevron-forward' }

@Component({ components: { MzSelect, MzOption, MzButton, MzIcon, MzPager } })
export default class MzPagination extends MzSize {
  @Model('index:change', { type: Number, default: 1 })
  readonly index!: number
  @PropSync('pageSize', { type: Number, default: 10 })
  pageSizeSync!: number
  @Prop({ type: Array, default: () => [10, 20, 30, 40, 50] })
  readonly pageSizes!: number[]
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
  @Prop({ type: Array, default: () => ['prev', 'pager', 'next'] })
  readonly layout!: string[]
  @Prop({ type: String, default: '共 %d 条' })
  readonly totalText!: string
  @Prop({ type: String, default: '%d 条/页' })
  readonly sizeText!: string

  jumpNum: string | number = ''

  renderStore: Record<string, () => VNode | Element | undefined> = {
    prev: () => this.renderController('prev'),
    next: () => this.renderController('next'),
    sizes: () => this.renderPageSizes(),
    pager: () => this.renderPager(),
    jumper: () => this.renderJumper(),
    total: () => this.renderTotal()
  }

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

  get renderItems() {
    return this.layout.map(key => {
      const render = this.renderStore[key]
      return render && render()
    })
  }

  handlePageChange(num: number) {
    this.jumpNum = num
    this.$emit('change', num)
    this.$emit('index:change', num)
  }

  renderPager() {
    return (
      <mz-pager
        index={this.index}
        pageCount={this.mPageCount}
        max={this.max}
        size={this.size}
        buttonProp={this.buttonProp}
        on-change={this.handlePageChange}></mz-pager>
    )
  }

  renderController(type: 'prev' | 'next') {
    const isPrev = type === 'prev'
    const disabled = isPrev ? this.index === 1 : this.index === this.mPageCount
    const data = {
      class: `mz-page-${type}`,
      props: { ...this.buttonProp, disabled: this.disabled || disabled },
      on: {
        click: () => {
          const index = this.index + (isPrev ? -1 : 1)
          this.handlePageChange(index)
          this.$emit(`${type}-click`, index)
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

  renderPageSizes() {
    const data = {
      class: 'mz-pagination-sizes',
      props: {
        value: this.pageSizeSync,
        size: this.size
      },
      on: {
        change: (val: number) => {
          this.pageSizeSync = val
          this.$emit('size-change', val)
        }
      }
    }

    return (
      <mz-select {...data}>
        {this.pageSizes.map(num => (
          <mz-option
            value={num}
            label={this.sizeText.replace(/%d/g, num + '')}></mz-option>
        ))}
      </mz-select>
    )
  }

  renderJumper() {
    const inputData = {
      props: {
        value: this.jumpNum,
        type: 'number',
        size: this.size
      },
      on: { input: (val: number) => (this.jumpNum = val) },
      nativeOn: {
        keydown: (event: KeyboardEvent) => {
          if (event.keyCode === 13) {
            let num = Number(this.jumpNum)
            num = Math.max(1, Math.min(num, this.mPageCount))
            this.handlePageChange(num)
          }
        }
      }
    }

    return (
      <span class="mz-pagination-jumper">
        跳转到<mz-input {...inputData}></mz-input>页
      </span>
    )
  }

  render(h: CreateElement) {
    return (
      <div class={['mz-pagination', { 'is-outlined': this.outlined }]}>
        {this.renderItems}
      </div>
    )
  }

  mounted() {
    this.jumpNum = this.index
  }
}
