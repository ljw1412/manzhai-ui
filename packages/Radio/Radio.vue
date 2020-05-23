<template>
  <label class="mz-radio"
    v-ripple="border && !disabled && ripple"
    :class="radioClasses"
    @click="onRadioClick">
    <span v-ripple="!border && !disabled && ripple"
      class="mz-radio__icon color-transition">
      <span style="display:block;"></span>
    </span>
    <input type="radio"
      class="mz-radio__input mz-hidden-input"
      :name="name"
      :checked="checked"
      :value="value" />
    <span class="mz-radio__label color-transition"
      role="radio">
      <slot>{{label||value}}</slot>
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
  @Inject({ from: 'mzRadioGroup', default: null })
  readonly mzRadioGroup?: MzRadioGroup
  @Prop(Boolean)
  readonly border!: boolean
  @Prop({
    type: [Boolean, Object],
    default: () => ({ value: true, center: true })
  })
  readonly ripple!: boolean | object

  get currentValue() {
    if (this.mzRadioGroup) return this.mzRadioGroup.value
    return this.inputValue
  }

  get checked() {
    return this.value === this.currentValue
  }

  get icon() {
    return this.checked ? 'radio-button-on' : 'radio-button-off'
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
    if (this.mzRadioGroup) this.mzRadioGroup.setValue(this.value)
  }
}
</script>

