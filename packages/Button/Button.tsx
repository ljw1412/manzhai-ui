import { Component, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { getPresetColorClass } from 'manzhai-ui/src/utils/theme'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzColor from 'manzhai-ui/src/mixins/MzColor'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'

const MixinClass = Mixins(MzSize, MzColor, FormElement, BaseAttribute)

@Component
export default class MzButton extends MixinClass {
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

  get mColorClass(): any {
    if (this.flat) {
      return {
        text: getPresetColorClass(this.textColor || this.color, 'text')
      }
    }
    if (this.outlined) {
      return {
        text: getPresetColorClass(this.textColor || this.color, 'text'),
        border: getPresetColorClass(this.borderColor || this.color, 'border')
      }
    }

    return {
      bg: getPresetColorClass(this.color, 'bg'),
      text: getPresetColorClass(this.textColor, 'text'),
      border: getPresetColorClass(this.borderColor, 'border')
    }
  }

  get mColorStyle(): any {
    const { bg, text, border } = this.mColorClass
    return {
      backgroundColor: bg || this.flat || this.outlined ? null : this.color,
      color: text || this.flat ? null : this.textColor || this.color,
      borderColor: border ? null : this.borderColor || this.color
    }
  }

  get classes() {
    return [
      'mz-button',
      {
        'text-white': this.color && !this.textColor,
        'rounded-circle': this.circle,
        'is-primary': this.color === 'primary',
        'is-icon': this.icon,
        'is-round': this.round,
        'is-flat': this.flat,
        'is-outlined': this.outlined,
        'is-disabled': this.disabled,
        'is-dense': this.dense,
        'is-shadow': this.shadow
      },
      Object.values(this.mColorClass),
      this.mzSize
    ]
  }

  get styles() {
    return {
      ...this.baseStyles,
      ...this.mColorStyle,
      // color: this.textColor,
      // backgroundColor: this.color,
      // borderColor: this.borderColor || this.textColor,
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
