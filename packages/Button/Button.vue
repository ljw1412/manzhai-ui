<template>
  <button v-ripple="ripple"
    class="mz-button color-transition"
    v-on="$listeners"
    :class="buttonClasses"
    :disabled="disabled">
    <span v-if="$slots.default"
      class="mz-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class MzButton extends Vue {
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly icon!: string | boolean
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
  @Prop([Boolean])
  readonly circle!: boolean

  get buttonClasses() {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    const classes: any[] = [
      { 'is-circle': this.circle },
      { 'mz-button--icon': this.icon },
      { 'mz-button--disabled': this.disabled }
    ]
    if (types.includes(this.type)) classes.push(`mz-button--${this.type}`)

    return classes
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
:root {
  --mz-button__background-color: transparent;
  --mz-button__background-color--disabled: rgba(0, 0, 0, 0.12);
  --mz-button__box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 3px 6px 2px rgba(60, 64, 67, 0.15);
}
.mz-button {
  -webkit-appearance: none;
  box-sizing: border-box;
  border: none;
  // border: 1px solid getColor(border-base);
  border-radius: 4px;
  background-color: getVar(mz-button, background-color);
  color: getColor(text-regular);
  fill: getColor(text-regular);
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  line-height: 1;
  outline: none;
  position: relative;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  vertical-align: middle;

  &:not(.mz-button--disabled) {
    @include bgHover;
    will-change: box-shadow;
    &:active {
      border-color: transparent;
      box-shadow: getVar(mz-button, box-shadow);
    }
  }

  &--icon {
    height: auto;
    padding: 0;
    .mz-button__content {
      display: flex;
    }
  }

  @each $type in (primary, success, warning, danger, info) {
    &--#{$type} {
      color: getColor('white');
      fill: getColor('white');
      background-color: getColor(#{$type});
    }
  }

  &--disabled {
    cursor: not-allowed;
    // pointer-events: none;
    fill: getColor(text-secondary);
    color: getColor(text-secondary);
    background-color: getVar(mz-button, background-color, disabled);
  }
}
</style>
