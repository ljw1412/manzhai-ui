import { Component, Vue, Prop, Mixins, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from '@/mixins/MzSize'
import FormElement from '@/mixins/FormElement'
import MzButton from '../Button/Button'

@Component({ components: { MzButton } })
export default class MzInput extends Mixins(MzSize, FormElement) {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop({ type: String, default: 'text' })
  readonly type!: string
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
  @Prop()
  readonly max!: any
  @Prop()
  readonly min!: any
  @Prop()
  readonly step!: any
  @Prop(Boolean)
  readonly rounded!: boolean
  @Prop(String)
  readonly prefix!: string
  @Prop(String)
  readonly suffix!: string
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly shadow!: boolean
  @Ref('input')
  readonly inputRef!: HTMLInputElement

  isComposing = false
  focused = false

  renderIcon(position: 'prefix' | 'suffix') {
    if (!this[position] && !this.$slots[position]) return
    return (
      <span class={`mz-input__${position}`}>
        {this.$slots[position] || this[position]}
      </span>
    )
  }

  renderInput() {
    return (
      <input
        class="mz-input__inner"
        ref="input"
        attrs={this.$attrs}
        value={this.value}
        type={this.type}
        name={this.name}
        max={this.max}
        min={this.min}
        step={this.step}
        maxlength={this.maxlength}
        placeholder={this.placeholder}
        readonly={this.readonly}
        disabled={this.disabled}
        autocomplete={this.autocomplete}
        on-compositionstart={this.onCompositionstart}
        on-compositionupdate={this.onCompositionUpdate}
        on-compositionend={this.onCompositionEnd}
        on-input={this.onInput}
        on-focus={this.onFocus}
        on-blur={this.onBlur}
        on-change={this.onChange}
      />
    )
  }

  render(h: CreateElement) {
    const prefix = this.renderIcon('prefix')
    const suffix = this.renderIcon('suffix')

    const data = {
      class: [
        'mz-input d-inline-flex align-items-center',
        this.mzSize,
        {
          'has-prefix': prefix,
          'has-suffix': suffix,
          'is-focused': this.focused,
          'is-rounded': this.rounded,
          'is-disabled': this.disabled,
          'is-shadow': this.shadow,
          'is-flat': this.flat || this.shadow
        }
      ],
      directives: [
        { name: 'ripple', value: this.ripple },
        { name: 'elevation', value: this.shadow ? (this.focused ? 8 : 2) : 0 }
      ],
      on: { click: () => this.inputRef.focus() }
    }
    return (
      <span {...data}>
        {prefix}
        {this.renderInput()}
        {suffix}
      </span>
    )
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
    this.inputRef && this.inputRef.focus()
  }

  blur() {
    this.inputRef && this.inputRef.blur()
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
