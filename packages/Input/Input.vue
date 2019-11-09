<template>
  <div class="mz-input">
    <div class="mz-input__container">
      <div v-if="$slots.prepend"
        class="mz-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <input class="mz-input__inner"
        ref="input"
        v-bind="$attrs"
        :value="value"
        :autocomplete="autocomplete?'on':'off'"
        @compositionstart="onCompositionstart"
        @compositionupdate="onCompositionUpdate"
        @compositionend="onCompositionEnd"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange" />
      <div v-if="$slots.append"
        class="mz-input__append">
        <slot name="append"></slot>
      </div>
      <div class="mz-input__line"
        :class="{'mz-input__line--active':isFocused}"></div>
      <label class="mz-input__label"
        :class="{
          'mz-input__label--above':isFocused || value,'mz-input__label--focus':isFocused
        }"
        :for="$attrs.id">{{label}}</label>
    </div>
    <div class="mz-input__helper-line">
      <div class="mz-input__helper-text"></div>
      <div class="mz-input__counter"></div>
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
  @Prop(String)
  readonly label!: string
  @Ref('input')
  readonly inputRef!: HTMLInputElement

  isFocused = false
  isComposing = false

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
  --mz-input__input-padding: 20px 16px 6px;
  --mz-input__font-size: 16px;
  --mz-input__font-color: var(--color-text-primary);
  --mz-input__line-color: var(--color-primary);
  --mz-input__caret-color: var(--color-primary);
  --mz-input__label-color: var(--color-text-secondary);
  --mz-input__label-color--focus: var(--color-primary);

  &__container {
    position: relative;
  }

  &__label {
    pointer-events: none;
    position: absolute;
    left: 14px;
    right: initial;
    top: 50%;
    color: var(--mz-input__label-color);
    transform: translateY(-50%);
    transition: transform 150ms map-get($transition, 'fast-in-fast-out'),
      color 150ms map-get($transition, 'fast-in-fast-out'),
      opacity 150ms map-get($transition, 'fast-in-fast-out');
    opacity: 0.5;
    &--above {
      opacity: 1;
      transform: translateY(-106%) scale(0.75);
    }
    &--focus {
      color: var(--mz-input__label-color--focus);
    }
  }

  &__inner {
    box-sizing: border-box;
    font-size: var(--mz-input__font-size);
    color: var(--mz-input__font-color);
    width: 100%;
    height: 100%;
    padding: var(--mz-input__input-padding);
    border-radius: 0;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    background: none;
    appearance: none;
    caret-color: var(--mz-input__caret-color);
  }

  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: 2;
    background-color: var(--mz-input__line-color);
    &--active {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}
</style>
