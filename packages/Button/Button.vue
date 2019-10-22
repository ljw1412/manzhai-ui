<template>
  <button v-ripple="ripple"
    class="mz-button"
    v-on="$listeners"
    :class="buttonClasses"
    :disabled="disabled">
    <span v-if="$slots.default"
      class="mz-button__content flex-double-center">
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
  @Prop(Boolean)
  readonly circle!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly round!: boolean

  get buttonClasses() {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    const type = types.includes(this.type) ? this.type : 'default'
    const classes: any[] = [
      { 'is-circle': this.circle },
      { 'mz-button--icon': this.icon },
      { 'mz-button--round': this.round },
      { 'mz-button--flat': this.flat },
      { 'mz-button--outlined': this.outlined },
      { 'mz-button--disabled': this.disabled }
    ]
    classes.push(`mz-button--${type}`)
    return classes
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
:root {
  --mz-button__background-color--disabled: rgba(0, 0, 0, 0.12);
  --mz-button__box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 3px 6px 2px rgba(60, 64, 67, 0.15);
}
.mz-button {
  -webkit-appearance: none;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  color: var(--color-text-regular);
  fill: var(--color-text-regular);
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  outline: none;
  position: relative;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), var(--color-transition);
  overflow: hidden;
  vertical-align: middle;

  &__content {
    position: relative;
    z-index: 50;
  }

  &.is-circle::before {
    border-radius: 50%;
  }

  &:not(.mz-button--disabled) {
    @include before-background;
    will-change: box-shadow;
    &:active {
      box-shadow: var(--mz-button__box-shadow);
    }
  }

  &--round {
    border-radius: 100px;
    &::before {
      border-radius: 100px;
    }
  }

  &--icon {
    height: auto;
    padding: 8px;
    .mz-button__content {
      display: flex;
    }
  }

  &--flat {
    background-color: transparent !important;
  }

  &--outlined {
    padding: 0 15px;
    line-height: 30px;
    background-color: transparent !important;
  }

  @each $type in (primary, success, warning, danger, info) {
    &--#{$type} {
      color: #ffffff;
      fill: #ffffff;
      background-color: var(--color-#{$type});
      &.mz-button--outlined,
      &.mz-button--flat {
        color: var(--color-#{$type});
        fill: var(--color-#{$type});
      }
      &.mz-button--outlined {
        border: 1px solid var(--color-#{$type});
      }
    }
  }

  &--default {
    background-color: transparent;
    &.mz-button--outlined {
      color: var(--color-text-regular);
      fill: var(--color-text-regular);
      border: 1px solid var(--color-text-regular);
    }
  }

  &--disabled {
    cursor: not-allowed;
    color: var(--color-text-placeholder);
    fill: var(--color-text-placeholder);
    background-color: var(--mz-button__background-color--disabled);
    &.mz-button--outlined {
      color: var(--color-text-placeholder);
      fill: var(--color-text-placeholder);
      border: 1px solid var(--color-text-placeholder);
    }
  }
}
</style>
