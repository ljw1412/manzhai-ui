import { Component, Vue, Prop } from 'vue-property-decorator'
import MzSize from '@/mixins/MzSize'
import { CreateElement } from 'vue'
import { getMzColor, colorInTypes } from '@/utils/theme'

@Component
export default class MzButton extends MzSize {
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly textColor!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object
  @Prop(Boolean)
  readonly icon!: boolean
  @Prop(Boolean)
  readonly circle!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly round!: boolean
  @Prop({ type: String, default: 'button' })
  readonly nativeType!: string
  @Prop(String)
  readonly radius!: string

  get classes() {
    let buttonTheme = ''
    if (!this.color) {
      buttonTheme = 'mz-button--default'
    } else if (colorInTypes(this.color)) {
      buttonTheme = `mz-button--${this.color}`
    }
    return [
      'mz-button',
      buttonTheme,
      this.mzSize,
      {
        'is-circle': this.circle,
        'mz-button--icon': this.icon,
        'mz-button--round': this.round,
        'mz-button--flat': this.flat,
        'mz-button--outlined': this.outlined,
        'mz-button--disabled': this.disabled
      }
    ]
  }

  get styles() {
    return {
      color: this.textColor,
      backgroundColor: this.color,
      borderColor: this.color,
      borderRadius: this.radius
    }
  }

  render(h: CreateElement) {
    const data = {
      attrs: { disabled: this.disabled, type: this.nativeType },
      class: this.classes,
      style: this.styles,
      directives: [{ name: 'ripple', value: this.ripple }],
      on: this.$listeners
    }
    return <button {...data}>{this.renderContent()}</button>
  }

  renderContent() {
    const data = {
      class: ['mz-button__content', 'flex-double-center']
    }
    return <span {...data}>{this.$slots.default}</span>
  }
}
