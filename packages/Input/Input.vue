<script lang="tsx">
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
import SizeMixin from '@/mixins/size'
import FormElement from '@/mixins/FormElement'
import { CreateElement } from 'vue'

@Component({
  components: {
    MzIcon,
    MzImage
  }
})
export default class MzInput extends Mixins(SizeMixin, FormElement) {
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
      class: `mz-input__icon-${type}`,
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
            style={{ width: this.notchWidth + 'px' }}
          ></div>
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
</script>

<style lang="scss">
@import '@/scss/index.scss';
.mz-input {
  --mz-input__input-left: 16px;
  --mz-input__input-padding: 20px var(--mz-input__input-left) 6px;
  --mz-input__input-font-size: 16px;
  --mz-input__input-font-color: var(--color-text-primary);
  --mz-input__input-caret-color: var(--color-primary);
  --mz-input__icon-color: var(--color-text-primary);
  --mz-input__label-color: var(--color-text-secondary);
  --mz-input__label-color--focused: var(--color-primary);
  --mz-input__line-color: var(--color-border-base);
  --mz-input__line-color--focused: var(--color-primary);
  --mz-input__message-color: var(--color-text-secondary);
  --mz-input__message-font-size: 12px;

  margin-top: 8px;

  &__container {
    position: relative;
    height: 56px;
  }

  &__icon-prepend {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: var(--mz-input__icon-color);
    pointer-events: none;
  }

  &__icon-append {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: var(--mz-input__icon-color);
    cursor: pointer;
  }

  &__label {
    pointer-events: none;
    position: absolute;
    left: var(--mz-input__input-left);
    right: initial;
    top: 50%;
    color: var(--mz-input__label-color);
    transform: translateY(-50%);
    transform-origin: left center;
    transition: transform 150ms map-get($transition, 'fast-in-fast-out'),
      top 150ms map-get($transition, 'fast-in-fast-out'),
      color 150ms map-get($transition, 'fast-in-fast-out'),
      opacity 150ms map-get($transition, 'fast-in-fast-out');
    opacity: 0.5;
    &--above {
      opacity: 1;
      transform: translateY(25%) scale(0.75);
      top: 0;
    }
    &--focused {
      color: var(--mz-input__label-color--focused);
    }
  }

  &__inner {
    box-sizing: border-box;
    font-size: var(--mz-input__input-font-size);
    color: var(--mz-input__input-font-color);
    width: 100%;
    height: 100%;
    padding: var(--mz-input__input-padding);
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--mz-input__line-color);
    outline: none;
    background: none;
    appearance: none;
    caret-color: var(--mz-input__input-caret-color);
  }

  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform 180ms map-get($transition, 'fast-in-fast-out'),
      opacity 180ms map-get($transition, 'fast-in-fast-out');
    opacity: 0;
    z-index: 2;
    background-color: var(--mz-input__line-color--focused);
    &--active {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  &-outline {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
    &__leading {
      border-radius: 4px 0 0 4px;
      border-left: 1px solid;
      border-right: none;
      width: 12px;
    }
    &__notch {
      flex: 0 0 auto;
      width: auto;
      max-width: calc(100% - 12px * 2);
    }
    &__trailing {
      border-radius: 0 4px 4px 0;
      border-left: none;
      border-right: 1px solid;
      flex-grow: 1;
    }
    &__leading,
    &__notch,
    &__trailing {
      box-sizing: border-box;
      height: 100%;
      border-top: 1px solid;
      border-bottom: 1px solid;
      pointer-events: none;
      border-color: var(--mz-input__line-color);
    }
  }

  &__helper-line {
    padding: 2px 16px;
    color: var(--mz-input__message-color);
    font-size: var(--mz-input__message-font-size);
  }

  &--prepend {
    --mz-input__input-left: 48px;
  }

  &--append {
    .mz-input__inner {
      padding-right: 48px;
    }
  }

  &--error {
    --mz-input__input-font-color: var(--color-danger) !important;
    --mz-input__input-caret-color: var(--color-danger) !important;
    --mz-input__icon-color: var(--color-danger) !important;
    --mz-input__label-color: var(--color-danger) !important;
    --mz-input__label-color--focused: var(--color-danger) !important;
    --mz-input__line-color: var(--color-danger) !important;
    --mz-input__line-color--focused: var(--color-danger) !important;
    --mz-input__message-color: var(--color-danger) !important;
  }

  &--outlined {
    --mz-input__input-padding: 12px var(--mz-input__input-left) 14px;
    .mz-input {
      &__inner {
        border: none !important;
      }
      &__label--above {
        transform: translateY(-50%) scale(0.75);
        top: 0;
      }
    }
  }

  &--focused,
  &--label-up,
  &:not(.mz-input--empty) {
    .mz-input-outline__notch {
      border-top: none !important;
    }
  }
  &--focused,
  .mz-select--active & {
    .mz-input-outline {
      &__leading,
      &__notch,
      &__trailing {
        border-width: 2px;
        border-color: var(--mz-input__line-color--focused);
      }
    }
  }
}
</style>
