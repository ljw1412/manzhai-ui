import { Component, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import InputField from 'manzhai-ui/src/mixins/InputField'
import MzButton from '../Button/Button'

@Component({ components: { MzButton } })
export default class MzInput extends Mixins(MzSize, InputField) {
  @Prop({ type: String, default: 'text' })
  readonly type!: string
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
        ref="field"
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
        this.wrapClass,
        {
          'has-prefix': prefix,
          'has-suffix': suffix,
          'is-rounded': this.rounded
        }
      ],
      directives: [
        { name: 'ripple', value: this.ripple },
        { name: 'elevation', value: this.shadow ? (this.focused ? 8 : 2) : 0 }
      ],
      on: { click: () => this.fieldRef.focus() }
    }
    return (
      <span {...data}>
        {prefix}
        {this.renderInput()}
        {suffix}
      </span>
    )
  }
}
