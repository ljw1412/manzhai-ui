import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import { CreateElement } from 'vue'
import { colorInTypes } from 'manzhai-ui/src/utils/theme'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'

const MixinClass = Mixins(MzSize, FormElement, BaseAttribute)

@Component
export default class MzButton extends MixinClass {
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly textColor!: string
  @Prop(String)
  readonly borderColor!: string
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
  @Prop(Boolean)
  readonly dense!: boolean
  @Prop(Boolean)
  readonly shadow!: boolean
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
        'rounded-circle': this.circle,
        'mz-button--icon': this.icon,
        'mz-button--round': this.round,
        'mz-button--flat': this.flat,
        'mz-button--outlined': this.outlined,
        'mz-button--disabled': this.disabled,
        'mz-button--dense': this.dense,
        'mz-button--shadow': this.shadow
      }
    ]
  }

  get styles() {
    return {
      ...this.baseStyles,
      color: this.textColor,
      backgroundColor: this.color,
      borderColor: this.borderColor || this.textColor,
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
      class: [
        'mz-button__content',
        'd-flex',
        'justify-content-center',
        'align-items-center'
      ]
    }
    return <span {...data}>{this.$slots.default || this.value}</span>
  }
}
