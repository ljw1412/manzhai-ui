<template>
  <div class="mz-input">
    <div></div>
    <input class="mz-input__inner"
      ref="input"
      :value="value"
      :autocomplete="autocomplete"
      @compositionstart="onCompositionstart"
      @compositionupdate="onCompositionUpdate"
      @compositionend="onCompositionEnd"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange" />
    <div></div>
    <div class="mz-input__line"
      :class="{'mz-input__line--active':isFocused}"></div>
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
  @Prop(Boolean)
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
.mz-input {
  --mz-input__font-size: 16px;
  --mz-input__line-color: var(--color-primary);

  position: relative;
  &__inner {
    box-sizing: border-box;
    font-size: var(--mz-input__font-size);
    width: 100%;
    height: 100%;
    padding: 20px 16px 6px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    background: none;
    appearance: none;
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
