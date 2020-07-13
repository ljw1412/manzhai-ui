<template>
  <label class="mz-checkbox position-relative d-inline-block user-select-none text-gray-800 text-nowrap mr-20"
    :class="checkboxClasses">
    <span class="mz-checkbox__icon position-relative d-inline-block align-bottom"></span>
    <input v-if="trueValue || falseValue"
      type="checkbox"
      class="mz-checkbox__input hidden-node"
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
      class="mz-checkbox__input hidden-node"
      v-model="checked"
      :value="value"
      :name="name"
      :disabled="disabled"
      :tabIndex="tabIndex"
      @change="onCheckboxChange" />
    <span class="mz-checkbox__label position-relative d-inline-block ml-5"
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
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import MzCheckboxGroup from './CheckboxGroup.vue'

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
