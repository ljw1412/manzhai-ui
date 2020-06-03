import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'

import MzIcon from '../Icon/Icon.vue'
import { VNodeData } from 'vue/types/umd'

@Component({ components: { MzIcon } })
export default class MzRate extends Vue {
  @Model('input', { type: Number, default: 0 })
  readonly value!: number
  @Prop({ type: Number, default: 5, validator: val => !(val % 5) && val })
  readonly max!: number
  @Prop({ type: Number, default: 20 })
  readonly size!: number
  @Prop(Boolean)
  readonly allowHalf!: boolean
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(Boolean)
  readonly showText!: boolean
  @Prop({ type: Function, default: (val: number) => val })
  readonly format!: (val: number) => any
  @Prop({ type: [String, Function], default: 'star' })
  readonly icon!: string | ((val: number) => string)
  @Prop({ type: [String, Function], default: '#F7BA2A' })
  readonly color!: string | ((val: number) => string)
  @Prop({ type: String, default: '#E8E8E8' })
  readonly voidColor!: string
  @Prop({ type: [String, Function], default: '' })
  readonly textColor!: string | ((val: number) => string)

  isHover = false
  hoverValue = -1
  mValue = this.getValue(this.value)

  get integral() {
    return Math.floor(this.mValue)
  }

  get decimal() {
    return ((this.mValue * 10) % 10) / 10
  }

  get ratio() {
    return this.max / 5
  }

  get currentValue() {
    return !this.readonly && this.isHover ? this.hoverValue : this.mValue
  }

  get text() {
    return this.format(this.currentValue)
  }

  get activeColor() {
    if (typeof this.color === 'function') {
      return this.color(this.currentValue)
    }
    return this.color
  }

  get finalTextColor() {
    if (typeof this.textColor === 'function') {
      return this.textColor(this.currentValue)
    }
    return this.textColor
  }

  get finalIcon() {
    if (typeof this.icon === 'function') {
      return this.icon(this.currentValue)
    }
    return this.icon
  }

  render(h: CreateElement) {
    return (
      <div
        class={['mz-rate', { 'mz-rate--readonly': this.readonly }]}
        style={{ 'font-size': this.size + 'px' }}>
        {this.renderStars()}
        {this.showText && (
          <span class="mz-rate__text" style={{ color: this.finalTextColor }}>
            {this.text}
          </span>
        )}
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
            'is-active': i * this.ratio <= this.currentValue,
            'is-half': (i - 0.5) * this.ratio === this.currentValue
          }
        ],
        style: {
          color: i * this.ratio <= this.currentValue ? this.activeColor : ''
        }
      }
      this.addStarListener(data, i)
      stars.push(
        <span {...data}>
          {this.renderIcon()}
          {this.renderDecimalStar(i)}
        </span>
      )
    }

    const starsData: VNodeData = {
      class: 'mz-rate__stars',
      style: { color: this.voidColor },
      directives: []
    }
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

  // 渲染小数部分
  renderDecimalStar(index: number) {
    if (
      (this.readonly && (index !== this.integral + 1 || !this.decimal)) ||
      (!this.readonly && !this.allowHalf)
    ) {
      return
    }

    const decimal = this.readonly ? this.decimal : 0.5
    const data: VNodeData = {
      class: ['mz-rate__decimal'],
      style: { width: decimal * 100 + '%', color: this.activeColor }
    }
    this.addStarListener(data, index - 0.5, true)
    return <span {...data}>{this.renderIcon()}</span>
  }

  renderIcon() {
    return <mz-icon name={this.finalIcon}></mz-icon>
  }

  // 评分图标的事件绑定
  addStarListener(data: VNodeData = {}, value: number, stop: boolean = false) {
    value = value * this.ratio
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
    if (this.readonly || (this.allowHalf && baseValue % 10 === 5)) {
      return baseValue / 10
    }
    return Math.round(val)
  }

  @Watch('value')
  onValueChange(val: number) {
    this.mValue = this.getValue(val)
  }
}
