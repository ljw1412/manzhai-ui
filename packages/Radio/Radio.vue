<template>
  <div class="mz-radio"
    :class="radioClasses"
    @click="onRadioClick">
    <mz-icon cssSize
      :name="icon"></mz-icon>
    <input type="radio"
      class="mz-radio__input"
      :name="name"
      :checked="checked"
      :value="value" />
    <label class="mz-radio__label color-transition"
      role="radio">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator'

@Component
export default class MzRadio extends Vue {
  @Model('input')
  readonly inputValue!: any
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly name!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly circle!: boolean

  get checked() {
    return this.value === this.inputValue
  }

  get icon() {
    if (this.circle)
      return this.checked ? 'md-radio-button-on' : 'md-radio-button-off'
    return this.checked ? 'md-square' : 'md-square-outline'
  }

  get radioClasses() {
    return {
      'mz-radio--checked': this.checked,
      'mz-radio--disabled': this.disabled
    }
  }

  onRadioClick() {
    this.$emit('input', this.value)
  }
}
</script>

<style lang="scss">
.mz-radio {
  --mz-radio__icon-size: 20px;
  --mz-radio__label-font-size: 16px;
  --mz-radio__label-font-color: var(--color-text-primary);

  position: relative;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  color: var(--mz-radio__label-font-color);
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
    cursor: pointer;
    vertical-align: middle;
    margin-left: 5px;
    font-size: var(--mz-radio__label-font-size);
    line-height: var(--mz-radio__icon-size);
  }

  &--checked {
    --mz-radio__label-font-color: var(--color-primary);
  }

  &:not(&--checked):active {
    opacity: 0.6;
    transition: opacity 0.2s;
  }
}
</style>
