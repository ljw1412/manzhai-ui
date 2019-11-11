<template>
  <div class="mz-input"
    :class="{'mz-input--error':error}">
    <div class="mz-input__container">
      <div v-if="$slots.prepend"
        class="mz-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="mz-input__content">
        <label class="mz-input__label"
          :class="{
            'mz-input__label--above':isFocused || value,
            'mz-input__label--focus':isFocused
          }"
          :for="$attrs.id">{{label}}</label>
        <input class="mz-input__inner"
          ref="input"
          v-bind="$attrs"
          :value="value"
          :type="type"
          :maxlength="maxlength"
          :readonly="readonly"
          :autocomplete="autocomplete?'on':'off'"
          @compositionstart="onCompositionstart"
          @compositionupdate="onCompositionUpdate"
          @compositionend="onCompositionEnd"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @change="onChange" />
      </div>
      <div v-if="$slots.append"
        class="mz-input__append">
        <slot name="append"></slot>
      </div>
      <div class="mz-input__line"
        :class="{'mz-input__line--active':isFocused}"></div>
    </div>
    <div class="mz-input__helper-line flex-center-space-between">
      <div class="mz-input__helper-text">{{error?errorMessage:hint}}</div>
      <div v-if="showWordCount"
        class="mz-input__counter">{{countStr}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Mixins } from 'vue-property-decorator'
import SizeMixin from '@/mixins/size'

@Component
export default class MzInput extends Mixins(SizeMixin) {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop({ type: Boolean, default: false })
  readonly autocomplete!: boolean
  @Prop(Boolean)
  readonly showWordCount!: boolean
  @Prop(Boolean)
  readonly error!: boolean
  @Prop(String)
  readonly errorMessage!: string
  @Prop([String, Number])
  readonly maxlength!: string | number
  @Prop(String)
  readonly label!: string
  @Prop(String)
  readonly hint!: string
  @Prop(Object)
  readonly rule!: object
  @Ref('input')
  readonly inputRef!: HTMLInputElement

  isFocused = false
  isComposing = false

  get count() {
    if (typeof this.value === 'string') return this.value.length
    return this.value
  }

  get countStr() {
    return this.maxlength ? this.count + ' / ' + this.maxlength : this.count
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
    this.isFocused = true
    this.$emit('focus', event)
  }

  onBlur(event: InputEvent) {
    this.isFocused = false
    this.$emit('blur', event)
  }

  onChange(event: InputEvent) {
    this.$emit('change', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-input {
  --mz-input__input-padding: 20px 6px 6px;
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

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--mz-input__line-color);
    }
  }

  &__prepend {
    flex-shrink: 0;
    display: flex;
    padding-left: 6px;
    .mz-icon {
      @include mzColor(var(--mz-input__icon-color));
    }
  }

  &__append {
    flex-shrink: 0;
    display: flex;
    padding-right: 6px;
    .mz-icon {
      @include mzColor(var(--mz-input__icon-color));
    }
  }

  &__content {
    position: relative;
    flex-grow: 1;
  }

  &__label {
    pointer-events: none;
    position: absolute;
    left: 6px;
    right: initial;
    top: 50%;
    color: var(--mz-input__label-color);
    transform: translateY(-50%);
    transform-origin: left center;
    transition: transform 150ms map-get($transition, 'fast-in-fast-out'),
      color 150ms map-get($transition, 'fast-in-fast-out'),
      opacity 150ms map-get($transition, 'fast-in-fast-out');
    opacity: 0.5;
    &--above {
      opacity: 1;
      transform: translateY(-106%) scale(0.75);
    }
    &--focus {
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

  &__helper-line {
    padding: 2px 6px;
    color: var(--mz-input__message-color);
    font-size: var(--mz-input__message-font-size);
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
}
</style>
