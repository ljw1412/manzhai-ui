import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'

import MzIcon from '../Icon/Icon.vue'
import { VNodeData } from 'vue/types/umd'

@Component({ components: { MzIcon } })
export default class MzRate extends Vue {
  @Model('input', { type: Number, default: 0 })
  readonly value!: number
  @Prop({ type: Number, default: 20 })
  readonly size!: number
  @Prop(Boolean)
  readonly allowHalf!: boolean
  @Prop(Boolean)
  readonly exact!: boolean
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(Boolean)
  readonly showText!: boolean
  @Prop({ type: String, default: 'star' })
  readonly icon!: string

  @Prop({ type: Function, default: (val: number) => val })
  readonly format!: (val: number) => any

  isHover = false
  hoverValue = -1
  mValue = this.getValue(this.value)

  get integral() {
    return Math.floor(this.mValue)
  }

  get decimal() {
    return ((this.mValue * 10) % 10) / 10
  }

  get text() {
    return this.format(
      !this.readonly && this.isHover ? this.hoverValue : this.mValue
    )
  }

  render(h: CreateElement) {
    return (
      <div
        class={['mz-rate', { 'mz-rate--readonly': this.readonly }]}
        style={{ 'font-size': this.size + 'px' }}>
        {this.renderStars()}
        {this.showText && <span class="mz-rate__text">{this.text}</span>}
      </div>
    )
  }

  renderStars() {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const data: VNodeData = {
        class: [
          'mz-rate__star',
          {
            'is-active':
              i <=
              (!this.readonly && this.isHover ? this.hoverValue : this.mValue)
          }
        ]
      }
      this.addStarListener(data, i)
      stars.push(
        <span {...data}>
          <mz-icon name={this.icon}></mz-icon>
          {this.renderDecimalStar(i)}
        </span>
      )
    }

    const starsData: VNodeData = { class: 'mz-rate__stars', directives: [] }
    if (!this.readonly) {
      starsData.directives!.push({
        name: 'hover',
        value: {
          enter: () => (this.isHover = true),
          leave: () => {
            this.isHover = false
            this.hoverValue = -1
          }
        }
      })
    }
    return <div {...starsData}>{stars}</div>
  }

  renderDecimalStar(index: number) {
    if (
      (this.readonly && (index !== this.integral + 1 || !this.decimal)) ||
      (!this.readonly && !this.allowHalf)
    ) {
      return
    }

    const decimal = this.readonly ? this.decimal : 0.5
    const data: VNodeData = {
      class: [
        'mz-rate__decimal',
        {
          'is-active':
            this.readonly ||
            (this.isHover ? this.hoverValue : this.value) === index - 0.5
        }
      ],
      style: { width: decimal * 100 + '%' }
    }
    this.addStarListener(data, index - 0.5, true)
    return (
      <span {...data}>
        <mz-icon name={this.icon}></mz-icon>
      </span>
    )
  }

  addStarListener(data: VNodeData = {}, value: number, stop: boolean = false) {
    if (!this.readonly) {
      if (!data.on) data.on = {}
      data.on.mouseover = (e: MouseEvent) => {
        stop && e.stopPropagation()
        this.hoverValue = value
      }
      data.on.mouseup = (e: MouseEvent) => {
        stop && e.stopPropagation()
        this.mValue = this.getValue(value)
        this.$emit('change', this.mValue)
        this.$emit('input', this.mValue)
      }
    }
    return data
  }

  getValue(val: number) {
    const baseValue = Math.floor(val * 10)
    if (this.exact || (this.allowHalf && baseValue % 10 === 5)) {
      return baseValue / 10
    }
    return Math.round(val)
  }

  @Watch('value')
  onValueChange(val: number) {
    this.mValue = this.getValue(val)
  }
}
