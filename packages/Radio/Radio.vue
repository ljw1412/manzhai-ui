<template>
  <label class="mz-radio"
    v-ripple="!disabled && ripple"
    :class="radioClasses"
    @click="onRadioClick">
    <mz-icon cssSize
      :name="icon"></mz-icon>
    <input type="radio"
      class="mz-radio__input"
      :name="currentName"
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
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object

  get currentValue() {
    if (this.radioGroup) return this.radioGroup.value
    return this.inputValue
  }

  get currentName() {
    return this.radioGroup ? this.radioGroup.name : this.name
  }

  get currentBorder() {
    return this.border || (this.radioGroup && this.radioGroup.border)
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
      border: this.currentBorder
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
  --mz-radio__icon-size: 20px;
  --mz-radio__label-font-size: 16px;
  --mz-radio__label-font-color: var(--color-text-primary);
  --mz-radio__cursor: pointer;

  position: relative;
  cursor: var(--mz-radio__cursor);
  user-select: none;
  display: inline-block;
  color: var(--mz-radio__label-font-color);
  padding: var(--mz-radio__padding);
  margin: 10px 10px 0 0;
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
    line-height: var(--mz-radio__icon-size);
  }

  &.checked {
    --mz-radio__label-font-color: var(--color-primary);
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
