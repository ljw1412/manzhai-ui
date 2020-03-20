<template>
  <label class="mz-checkbox"
    :class="checkboxClasses">
    <span class="mz-checkbox__icon color-transition"></span>
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
import {
  Component,
  Vue,
  Mixins,
  Prop,
  Model,
  Inject
} from 'vue-property-decorator'
import FormElement from '@/mixins/FormElement'
import { MzCheckboxGroup } from '.'

@Component
export default class MzCheckbox extends Mixins(FormElement) {
  @Inject({ from: 'mzCheckboxGroup', default: null })
  readonly mzCheckboxGroup!: MzCheckboxGroup
  @Model('input')
  readonly inputValue!: any
  @Prop(Boolean)
  readonly indeterminate!: boolean
  @Prop(Boolean)
  readonly border!: boolean
  @Prop(Number)
  readonly tabIndex!: number
  @Prop()
  readonly trueValue!: any
  @Prop()
  readonly falseValue!: any

  get checked() {
    if (this.mzCheckboxGroup) {
      return this.mzCheckboxGroup.checkedList.includes(this.value)
    }
    return this.inputValue || false
  }

  set checked(value) {
    if (this.mzCheckboxGroup) {
      if (value) {
        this.mzCheckboxGroup.checkedList.push(this.value)
      } else {
        this.mzCheckboxGroup.checkedList.remove(this.value)
      }
      return
    }
    this.$emit('input', value)
  }

  get checkboxClasses() {
    return {
      indeterminate: this.indeterminate,
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

  created() {
    if (this.mzCheckboxGroup) this.mzCheckboxGroup.itemList.push(this)
  }

  beforeDestroy() {
    if (this.mzCheckboxGroup) this.mzCheckboxGroup.itemList.remove(this)
  }
}
</script>

<style lang="scss">
.mz-checkbox {
  --mz-checkbox__padding: 0;
  --mz-checkbox__icon-size: 16px;
  --mz-checkbox__icon-color: var(--color-text-primary);
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

  &__label {
    position: relative;
    vertical-align: middle;
    margin-left: 5px;
    font-size: var(--mz-checkbox__label-font-size);
    line-height: 1;
    z-index: 1;
  }

  &__icon {
    position: relative;
    display: inline-block;
    width: var(--mz-checkbox__icon-size);
    height: var(--mz-checkbox__icon-size);
    box-sizing: border-box;
    border: 1px solid var(--mz-checkbox__icon-color);
    vertical-align: middle;
    z-index: 1;
    &::before {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--mz-checkbox__icon-color);
      transition: var(--color-transition);
      transform: scale(0);
      transform-origin: center;
    }
    &::after {
      box-sizing: content-box;
      content: '';
      position: absolute;
      top: 2px;
      left: 5px;
      height: 7px;
      width: 3px;
      transform: scaleY(0);
      border-style: solid;
      border-color: #ffffff;
      border-width: 0 1px 0 0;
      transition: transform 0.15s ease-in 0.05s;
      transform-origin: center;
    }
  }

  &.indeterminate,
  &.checked {
    --mz-checkbox__icon-color: var(--color-primary);
    .mz-checkbox__icon {
      &::before {
        visibility: visible;
        transform: scale(1);
        transition: var(--color-transition), transform 0.15s;
      }
    }
  }

  &.indeterminate {
    .mz-checkbox__icon::after {
      transform: rotate(90deg) scaleY(1);
    }
  }

  &.checked {
    --mz-checkbox__label-font-color: var(--color-primary);
    .mz-checkbox__icon::after {
      border-width: 0 1px 1px 0;
      transform: rotate(45deg) scaleY(1);
    }
  }

  &.disabled {
    --mz-checkbox__cursor: not-allowed;
    &:not(.checked) {
      --mz-checkbox__label-font-color: var(--color-text-placeholder);
      --mz-checkbox__icon-color: var(--color-text-placeholder);
    }
    &.checked {
      opacity: 0.6;
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
