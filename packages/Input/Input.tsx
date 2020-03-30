import {
  Component,
  Vue,
  Prop,
  Ref,
  Mixins,
  Watch
} from 'vue-property-decorator'
import MzIcon from '../Icon/index'
import MzImage from '../Image/index'
import MzSize from '@/mixins/MzSize'
import FormElement from '@/mixins/FormElement'
import { CreateElement } from 'vue'

@Component({
  components: {
    MzIcon,
    MzImage
  }
})
export default class MzInput extends Mixins(MzSize, FormElement) {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(String)
  readonly placeholder!: string
  @Prop({ type: Boolean, default: false })
  readonly autocomplete!: boolean
  @Prop(Boolean)
  readonly showWordCount!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly error!: boolean
  @Prop(String)
  readonly prependIcon!: string
  @Prop(String)
  readonly prependSrc!: string
  @Prop(String)
  readonly appendIcon!: string
  @Prop(String)
  readonly appendSrc!: string
  @Prop(String)
  readonly errorMessage!: string
  @Prop([String, Number])
  readonly maxlength!: string | number
  @Prop(String)
  readonly hint!: string
  @Prop(Object)
  readonly rule!: object
  @Prop(Boolean)
  readonly labelUp!: boolean
  @Prop(Boolean)
  readonly isFocus!: boolean
  @Ref('input')
  readonly inputRef!: HTMLInputElement
  @Ref('label')
  readonly labelRef!: HTMLElement

  focus = false
  isComposing = false
  notchWidth = 0

  get inputFocus() {
    return this.isFocus || this.focus
  }

  get mzInputClasses() {
    return [
      'mz-input',
      'color-transition',
      {
        'mz-input--error': this.error,
        'mz-input--outlined': this.outlined,
        'mz-input--label-up': this.labelUp,
        'mz-input--focused': this.inputFocus,
        'mz-input--empty': !this.value,
        'mz-input--prepend': this.prependIcon || this.prependSrc,
        'mz-input--append': this.appendIcon || this.appendSrc
      }
    ]
  }

  get count() {
    if (typeof this.value === 'string') return this.value.length
    return this.value
  }

  get countStr() {
    return this.maxlength ? this.count + ' / ' + this.maxlength : this.count
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
        maxlength={this.maxlength}
        placeholder={this.placeholder}
        readonly={this.readonly}
        disabled={this.disabled}
        autocomplete={this.autocomplete ? 'on' : 'off'}
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

  renderIcon(type: string, icon?: string, src?: string) {
    const data = {
      class: `mz-input__icon mz-input__icon--${type}`,
      on: {
        click: () => {
          this.$emit(`${type}Click`)
          this.$emit(`${type}-click`)
        }
      }
    }

    if (icon) {
      const props = { name: icon, size: '24' }
      Object.assign(data, { props })
      return <mz-icon {...data}></mz-icon>
    }
    if (src) {
      const props = { src, fit: 'contain', width: '24px', height: '24px' }
      Object.assign(data, { props })
      return <mz-image {...data}></mz-image>
    }
    return null
  }

  renderLine() {
    if (this.outlined) {
      return (
        <div class="mz-input-outline">
          <div class="mz-input-outline__leading"></div>
          <div
            class="mz-input-outline__notch"
            style={{ width: this.notchWidth + 'px' }}></div>
          <div class="mz-input-outline__trailing"></div>
        </div>
      )
    }
    const classes = {
      'mz-input__line': true,
      'mz-input__line--active': this.inputFocus
    }
    return <div class={classes}></div>
  }

  renderContainer() {
    const classes = {
      'mz-input__label': true,
      'mz-input__label--above':
        this.labelUp || this.placeholder || this.value || this.inputFocus,
      'mz-input__label--focused': this.inputFocus
    }
    const label = (
      <label ref="label" class={classes} for={this.$attrs.id}>
        {this.label}
      </label>
    )

    return (
      <div class="mz-input__container">
        {this.renderInput()}
        {this.renderIcon('prepend', this.prependIcon, this.prependSrc)}
        {this.renderIcon('append', this.appendIcon, this.appendSrc)}
        {label}
        {this.renderLine()}
      </div>
    )
  }

  renderHelper() {
    return (
      <div class="mz-input__helper-line flex-center-space-between">
        <div class="mz-input__helper-text">
          {this.error ? this.errorMessage : this.hint}
        </div>
        {this.showWordCount && (
          <div class="mz-input__counter">{this.countStr}</div>
        )}
      </div>
    )
  }

  render(h: CreateElement) {
    return (
      <div class={this.mzInputClasses}>
        {this.renderContainer()}
        {this.renderHelper()}
      </div>
    )
  }

  getNotchWidth() {
    if (this.outlined && this.labelRef) {
      this.notchWidth = this.labelRef.offsetWidth
        ? this.labelRef.offsetWidth * 0.75 + 8
        : 0
    }
  }

  onCompositionstart(event: CompositionEvent) {
    this.isComposing = true
  }
  onCompositionUpdate(event: CompositionEvent) {
    const text = (event.target as HTMLInputElement).value
    const lastCharacter = text[text.length - 1] || ''
  }
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
    this.focus = true
    this.getNotchWidth()
    this.$emit('focus', event)
  }

  onBlur(event: InputEvent) {
    this.focus = false
    this.$emit('blur', event)
  }

  onChange(event: InputEvent) {
    this.$emit('change', (event.target as HTMLInputElement).value)
  }

  mounted() {
    this.getNotchWidth()
  }
}
