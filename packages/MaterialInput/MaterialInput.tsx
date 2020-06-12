import { Component, Prop, Ref, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzIcon from '../Icon/index'
import MzImage from '../Image/index'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import FormElement from 'manzhai-ui/src/mixins/FormElement'

@Component({ components: { MzIcon, MzImage } })
export default class MzMaterialInput extends Mixins(MzSize, FormElement) {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(String)
  readonly placeholder!: string
  @Prop({ type: String, default: 'off' })
  readonly autocomplete!: 'on' | 'off'
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
      'mz-material-input',
      'color-transition',
      {
        'mz-material-input--error': this.error,
        'mz-material-input--outlined': this.outlined,
        'mz-material-input--label-up':
          this.labelUp || (this.label && this.placeholder),
        'mz-material-input--focused': this.inputFocus,
        'mz-material-input--empty': !this.value,
        'mz-material-input--prepend': this.prependIcon || this.prependSrc,
        'mz-material-input--append': this.appendIcon || this.appendSrc
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
        class="mz-material-input__inner"
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
    )
  }

  renderIcon(type: string, icon?: string, src?: string) {
    if (!icon && !src) return null
    const data = {
      class: [
        `mz-material-input__icon mz-material-input__icon--${type}`,
        {
          'is-pointer':
            this.$listeners[`${type}-icon-click`] ||
            this.$listeners[`${type}IconClick`]
        }
      ],
      on: {
        click: () => {
          this.$emit(`${type}IconClick`)
          this.$emit(`${type}-icon-click`)
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
        <div class="mz-material-input-outline">
          <div class="mz-material-input-outline__leading"></div>
          <div
            class="mz-material-input-outline__notch"
            style={{ width: this.notchWidth + 'px' }}></div>
          <div class="mz-material-input-outline__trailing"></div>
        </div>
      )
    }
    const classes = {
      'mz-material-input__line': true,
      'mz-material-input__line--active': this.inputFocus
    }
    return <div class={classes}></div>
  }

  renderContainer() {
    const classes = {
      'mz-material-input__label': true,
      'mz-material-input__label--above':
        this.labelUp || this.placeholder || this.value || this.inputFocus,
      'mz-material-input__label--focused': this.inputFocus
    }
    const label = (
      <label ref="label" class={classes} for={this.$attrs.id}>
        {this.label}
      </label>
    )

    return (
      <div class="mz-material-input__container">
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
      <div class="mz-material-input__helper-line flex-center-space-between">
        <div class="mz-material-input__helper-text">
          {this.error ? this.errorMessage : this.hint}
        </div>
        {this.showWordCount && (
          <div class="mz-material-input__counter">{this.countStr}</div>
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
