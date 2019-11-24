<template>
  <label class="mz-radio"
    v-ripple="border && !disabled && ripple"
    :class="radioClasses"
    @click="onRadioClick">
    <span v-ripple="!border && !disabled && ripple"
      class="mz-radio__icon">
      <span style="display:block;"></span>
    </span>
    <input type="radio"
      class="mz-radio__input"
      :name="name"
      :checked="checked"
      :value="value" />
    <span class="mz-radio__label color-transition"
      role="radio">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Model,
  Inject,
  Mixins
} from 'vue-property-decorator'
import MzRadioGroup from './RadioGroup.vue'
import FormElement from '@/mixins/FormElement'

@Component
export default class MzRadio extends Mixins(FormElement) {
  @Model('input')
  readonly inputValue!: any
  @Inject({ from: 'radioGroup', default: null })
  readonly radioGroup?: MzRadioGroup
  @Prop()
  readonly value!: any
  @Prop(Boolean)
  readonly border!: boolean
  @Prop({
    type: [Boolean, Object],
    default: () => ({ value: true, center: true })
  })
  readonly ripple!: boolean | object

  get currentValue() {
    if (this.radioGroup) return this.radioGroup.value
    return this.inputValue
  }

  get checked() {
    return this.value === this.currentValue
  }

  get icon() {
    return this.checked ? 'md-radio-button-on' : 'md-radio-button-off'
  }

  get radioClasses() {
    return {
      checked: this.checked,
      disabled: this.disabled,
      border: this.border
    }
  }

  onRadioClick() {
    if (this.disabled) return
    this.$emit('input', this.value)
    if (this.radioGroup) this.radioGroup.setValue(this.value)
  }
}
</script>

<style lang="scss">
.mz-radio {
  --mz-radio__padding: 0;
  --mz-radio__icon-size: 16px;
  --mz-radio__label-font-size: 14px;
  --mz-radio__label-font-color: var(--color-text-primary);
  --mz-radio__cursor: pointer;

  position: relative;
  cursor: var(--mz-radio__cursor);
  user-select: none;
  display: inline-block;
  color: var(--mz-radio__label-font-color);
  padding: var(--mz-radio__padding);
  margin: 10px 10px 0 0;

  &__icon {
    position: relative;
    display: inline-block;
    width: var(--mz-radio__icon-size);
    height: var(--mz-radio__icon-size);
    box-sizing: border-box;
    border: 1px solid var(--mz-radio__label-font-color);
    border-radius: 100px;
    vertical-align: sub;
    &::after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--mz-radio__label-font-color);
      border-radius: 50%;
      transform: scale(0.6);
      visibility: hidden;
    }
  }

  .mz-icon {
    font-size: var(--mz-radio__icon-size);
  }

  &__input {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  &__label {
    vertical-align: top;
    margin-left: 5px;
    font-size: var(--mz-radio__label-font-size);
    line-height: 1.5;
  }

  &.checked {
    --mz-radio__label-font-color: var(--color-primary);
    .mz-radio__icon::after {
      visibility: visible;
    }
  }

  &.disabled {
    --mz-radio__cursor: not-allowed;
    --mz-radio__label-font-color: var(--color-text-placeholder);
    &.checked {
      --mz-radio__label-font-color: var(--color-primary-light-5);
    }
  }

  &.border {
    --mz-radio__padding: 5px 10px;
    border: 1px solid var(--mz-radio__label-font-color);
    border-radius: 3px;
  }

  &:not(.checked):not(.disabled):active {
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
