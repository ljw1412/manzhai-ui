<template>
  <button v-ripple="ripple"
    class="mz-button"
    v-on="$listeners"
    :type="nativeType"
    :class="buttonClasses"
    :style="buttonStyles"
    :disabled="disabled">
    <span v-if="$slots.default"
      class="mz-button__content flex-double-center">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import SizeMixin from '@/mixins/size'
import { COLOR_TYPES } from '@/constants/index'

@Component
export default class MzButton extends Mixins(SizeMixin) {
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly icon!: string | boolean
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object
  @Prop(Boolean)
  readonly circle!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly round!: boolean
  @Prop({ type: String, default: 'button' })
  readonly nativeType!: string
  @Prop(String)
  readonly fontColor!: string
  @Prop(String)
  readonly color!: string

  get buttonClasses() {
    const type = COLOR_TYPES.includes(this.type) ? this.type : 'default'
    const classes: any[] = [
      { 'is-circle': this.circle },
      { 'mz-button--icon': this.icon },
      { 'mz-button--round': this.round },
      { 'mz-button--flat': this.flat },
      { 'mz-button--outlined': this.outlined },
      { 'mz-button--disabled': this.disabled }
    ]
    if (!this.disabled) classes.push(`mz-button--${type}`)
    this.mzSizeClass('mz-button', this.size, classes)
    return classes
  }

  get buttonStyles() {
    return {
      '--mz-button__font-color': this.fontColor,
      '--mz-button__background-color': this.color
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/index.scss';
.mz-button {
  --mz-button__height: 32px;
  --mz-button__line-height: 32px;
  --mz-button__padding: 0 16px;
  --mz-button__font-size: 14px;
  --mz-button__font-color: var(--color-text-regular);
  --mz-button__border: none;
  --mz-button__border-radius: 4px;
  --mz-button__background-color: transparent;
  --mz-button__cursor: pointer;
  --mz-button__box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 3px 6px 2px rgba(60, 64, 67, 0.15);

  -webkit-appearance: none;
  box-sizing: border-box;
  border: var(--mz-button__border);
  border-radius: var(--mz-button__border-radius);
  color: var(--mz-button__font-color);
  cursor: var(--mz-button__cursor);
  font-size: var(--mz-button__font-size);
  height: var(--mz-button__height);
  line-height: var(--mz-button__line-height);
  padding: var(--mz-button__padding);
  background-color: var(--mz-button__background-color);
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  transition: height 0.3s linear, width 0.3s linear, var(--color-transition);
  overflow: hidden;

  &__content {
    display: inline-flex;
    color: var(--mz-button__font-color);
    position: relative;
    z-index: 50;
    vertical-align: top;
    transition: all 0.3s map-get($transition, 'fast-in-fast-out');
  }

  &::before {
    border-radius: var(--mz-button__border-radius);
  }

  &:not(.mz-button--disabled) {
    @include before-background;
    will-change: box-shadow;
    &:not(.mz-button--flat):active {
      box-shadow: var(--mz-button__box-shadow);
    }
  }

  &--small {
    --mz-button__height: 30px;
    --mz-button__line-height: 30px;
    --mz-button__padding: 0 14px;
    --mz-button__font-size: 12px;
    &.mz-button--outlined {
      --mz-button__line-height: 28px;
      --mz-button__padding: 0 13px;
    }
  }

  &--large {
    --mz-button__height: 34px;
    --mz-button__line-height: 34px;
    --mz-button__padding: 0 18px;
    --mz-button__font-size: 16px;
    &.mz-button--outlined {
      --mz-button__line-height: 30px;
      --mz-button__padding: 0 17px;
    }
  }

  &.is-circle {
    --mz-button__border-radius: 50%;
  }

  &--round {
    --mz-button__border-radius: 100px;
  }

  &--icon {
    --mz-button__height: auto;
    --mz-button__padding: 8px !important;
    .mz-button__content {
      display: flex;
    }
  }

  &--flat {
    --mz-button__background-color: transparent !important;
  }

  &--outlined {
    --mz-button__padding: 0 15px;
    --mz-button__line-height: 30px;
    --mz-button__background-color: transparent !important;
  }

  @each $type in (primary, success, warning, danger, info) {
    &--#{$type} {
      --mz-button__font-color: #ffffff;
      --mz-button__background-color: var(--color-#{$type});
      &.mz-button--outlined,
      &.mz-button--flat {
        --mz-button__font-color: var(--color-#{$type});
      }
      &.mz-button--outlined {
        --mz-button__border: 1px solid var(--color-#{$type});
      }
    }
  }

  &--default {
    background-color: transparent;
    &.mz-button--outlined {
      --mz-button__font-color: var(--color-text-regular);
      --mz-button__border: 1px solid var(--color-text-regular);
    }
  }

  &--disabled {
    --mz-button__cursor: not-allowed;
    --mz-button__background-color: rgba(0, 0, 0, 0.12) !important;
    --mz-button__font-color: var(--color-text-placeholder) !important;
    &.mz-button--outlined {
      --mz-button__border: 1px solid var(--color-text-placeholder);
    }
  }
}
</style>
