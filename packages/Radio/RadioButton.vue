<template>
  <label class="mz-radio-button color-transition"
    v-ripple="!disabled && ripple"
    :class="radioClasses"
    @click="onRadioClick">
    <input type="radio"
      class="mz-radio__input"
      :name="name"
      :checked="checked"
      :value="value" />
    <span class="mz-radio-button__label"
      role="radio">
      <slot>{{label||value}}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MzRadio } from '.'

@Component
export default class MzRadioButton extends MzRadio {}
</script>

<style lang="scss" >
.mz-radio-button {
  --mz-radio-button__padding: 5px 10px;
  --mz-radio-button__background-color: var(--color-body-background);
  --mz-radio-button__label-font-color: var(--color-text-primary);
  --mz-radio-button__border-color: var(--color-border-base);
  --mz-radio-button__cursor: pointer;

  display: inline-block;
  padding: var(--mz-radio-button__padding);
  color: var(--mz-radio-button__label-font-color);
  background-color: var(--mz-radio-button__background-color);
  cursor: var(--mz-radio-button__cursor);
  text-align: center;

  &__label {
    position: relative;
    z-index: 1;
  }

  &.checked {
    --mz-radio-button__background-color: var(--color-primary);
    --mz-radio-button__label-font-color: #ffffff;
  }

  &.disabled {
    --mz-radio-button__cursor: not-allowed;
    --mz-radio-button__label-font-color: var(--color-text-placeholder);
    &.checked {
      --mz-radio-button__background-color: var(--color-primary-light-5);
    }
  }

  &.border {
    border: 1px solid var(--mz-radio-button__border-color);
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
    & + & {
      border-left: none;
    }
  }
}
</style>
