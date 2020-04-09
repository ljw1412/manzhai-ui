import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from '@/mixins/MzSize'
import FormElement from '@/mixins/FormElement'

@Component
export default class MzInput extends Mixins(MzSize, FormElement) {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(String)
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
  @Prop(Boolean)
  readonly rounded!: boolean
  @Prop(String)
  readonly prefix!: string
  @Prop(String)
  readonly suffix!: string

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

  renderContainer() {
    const prefix = this.renderIcon('prefix')
    const suffix = this.renderIcon('suffix')

    const data = {
      class: [
        'mz-input__container flex align-items-center',
        {
          prefix,
          suffix,
          focused: this.focused,
          rounded: this.rounded,
          disabled: this.disabled
        }
      ],
      directives: [{ name: 'ripple', value: this.ripple }]
    }
    return (
      <div {...data}>
        {prefix}
        <input
          class="mz-input__inner"
          ref="input"
          attrs={this.$attrs}
          value={this.value}
          type={this.type}
          name={this.name}
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
        {suffix}
      </div>
    )
  }

  render(h: CreateElement) {
    return <div class={['mz-input', this.mzSize]}>{this.renderContainer()}</div>
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
