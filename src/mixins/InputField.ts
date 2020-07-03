import { Component, Prop, Ref } from 'vue-property-decorator'
import FormElement from './FormElement'

@Component
export default class InputField extends FormElement {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(String)
  readonly placeholder!: string
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
  @Prop({ type: String, default: 'off' })
  readonly autocomplete!: 'on' | 'off'
  @Prop([String, Number])
  readonly maxlength!: string | number
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly shadow!: boolean
  @Ref('field')
  readonly fieldRef!: HTMLInputElement

  isComposing = false
  focused = false

  get wrapClass() {
    return {
      'is-focused': this.focused,
      'is-disabled': this.disabled,
      'is-shadow': this.shadow,
      'is-flat': this.flat || this.shadow
    }
  }

  onCompositionstart(event: CompositionEvent) {
    this.isComposing = true
  }

  onCompositionUpdate(event: CompositionEvent) {}

  onCompositionEnd(event: CompositionEvent) {
    if (this.isComposing) {
      this.isComposing = false
      this.onInput(event)
    }
  }

  onInput(event: InputEvent | CompositionEvent) {
    if (this.isComposing) return
    this.$emit('input', (event.target as HTMLInputElement).value)
  }

  focus() {
    this.fieldRef && this.fieldRef.focus()
  }

  blur() {
    this.fieldRef && this.fieldRef.blur()
  }

  onFocus(event: InputEvent) {
    this.focused = true
    this.$emit('focus', event)
  }

  onBlur(event: InputEvent) {
    this.focused = false
    this.$emit('blur', event)
  }

  onChange(event: InputEvent) {
    this.$emit('change', (event.target as HTMLInputElement).value)
  }
}
