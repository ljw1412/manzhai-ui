<template>
  <label class="mz-checkbox"
    :class="checkboxClasses">
    <span class="mz-checkbox__icon"></span>
    <input v-if="trueValue || falseValue"
      type="checkbox"
      class="mz-checkbox__input mz-hidden-input"
      v-model="checked"
      :name="name"
      :disabled="disabled"
      :tabIndex="tabIndex"
      :true-value="trueValue"
      :false-value="falseValue"
      :value="checked"
      @change="onCheckboxChange" />
    <input v-else
      type="checkbox"
      class="mz-checkbox__input mz-hidden-input"
      v-model="checked"
      :value="value"
      :name="name"
      :disabled="disabled"
      :tabIndex="tabIndex"
      @change="onCheckboxChange" />
    <span class="mz-checkbox__label color-transition"
      role="checkbox">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Prop, Model } from 'vue-property-decorator'
import FormElement from '@/mixins/FormElement'

@Component
export default class MzCheckbox extends Mixins(FormElement) {
  @Model('input')
  readonly inputValue!: any
  @Prop(Boolean)
  readonly border!: boolean
  @Prop(Number)
  readonly tabIndex!: number
  @Prop()
  readonly trueValue!: any
  @Prop()
  readonly falseValue!: any

  get checked() {
    return this.inputValue
  }

  set checked(value) {
    this.$emit('input', value)
  }

  get checkboxClasses() {
    return {
      checked: this.trueValue === this.checked || this.checked === true,
      disabled: this.disabled,
      border: this.border
    }
  }

  onCheckboxChange(ev: InputEvent) {
    let value
    if ((ev.target as HTMLInputElement).checked) {
      value = this.trueValue === undefined ? true : this.trueValue
    } else {
      value = this.falseValue === undefined ? false : this.falseValue
    }
    this.$emit('change', value, ev)
  }
}
</script>

<style lang="scss">
.mz-checkbox {
  --mz-checkbox__padding: 0;
  --mz-checkbox__icon-size: 16px;
  --mz-checkbox__label-font-size: 14px;
  --mz-checkbox__label-font-color: var(--color-text-primary);
  --mz-checkbox__cursor: pointer;

  position: relative;
  cursor: var(--mz-checkbox__cursor);
  user-select: none;
  display: inline-block;
  color: var(--mz-checkbox__label-font-color);
  padding: var(--mz-checkbox__padding);
  margin: 10px 10px 0 0;

  &__icon {
    position: relative;
    display: inline-block;
    width: var(--mz-checkbox__icon-size);
    height: var(--mz-checkbox__icon-size);
    box-sizing: border-box;
    border: 1px solid var(--mz-checkbox__label-font-color);
    vertical-align: sub;
    z-index: 1;
  }

  &__label {
    position: relative;
    vertical-align: top;
    margin-left: 5px;
    font-size: var(--mz-checkbox__label-font-size);
    line-height: 1.5;
    z-index: 1;
  }

  &.checked {
    --mz-checkbox__label-font-color: var(--color-primary);
    .mz-checkbox__icon::after {
      visibility: visible;
    }
  }

  &.disabled {
    --mz-checkbox__cursor: not-allowed;
    --mz-checkbox__label-font-color: var(--color-text-placeholder);
    &.checked {
      --mz-checkbox__label-font-color: var(--color-primary-light-5);
    }
  }

  &.border {
    --mz-checkbox__padding: 5px 10px;
    border: 1px solid var(--mz-checkbox__label-font-color);
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
