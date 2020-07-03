import { Component, Prop, Watch } from 'vue-property-decorator'
import InputField from 'manzhai-ui/src/mixins/InputField'

@Component
export default class MzTextarea extends InputField {
  @Prop(String)
  readonly value!: string
  @Prop(String)
  readonly resize!: 'none' | 'both' | 'horizontal' | 'vertical'
  @Prop({ type: [Number, String], default: 5 })
  readonly rows!: number | string

  renderTextarea() {
    return (
      <textarea
        class="mz-textarea__inner"
        ref="field"
        attrs={this.$attrs}
        v-ripple={this.ripple}
        v-elevation={this.shadow ? (this.focused ? 8 : 2) : 0}
        rows={this.rows}
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
        on-change={this.onChange}></textarea>
    )
  }

  render() {
    return (
      <div class={['mz-textarea', this.wrapClass]}>{this.renderTextarea()}</div>
    )
  }

  setNativeValue() {
    if (!this.fieldRef || this.fieldRef.value === this.value) return
    this.fieldRef.value = this.value
  }

  @Watch('value', { immediate: true })
  handleValueChange(value: string) {
    this.$nextTick(this.setNativeValue)
  }
}
