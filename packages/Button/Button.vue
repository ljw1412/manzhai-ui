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
  @Prop(Boolean)
  readonly circle!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly round!: boolean

  get buttonClasses() {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    const type = types.includes(this.type) ? this.type : 'default'
    const classes: any[] = [
      { 'is-circle': this.circle },
      { 'mz-button--icon': this.icon },
      { 'mz-button--round': this.round },
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
  --mz-button__background-color: transparent;
  --mz-button__background-color--disabled: rgba(0, 0, 0, 0.12);
  --mz-button__box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 3px 6px 2px rgba(60, 64, 67, 0.15);
}
.mz-button {
  -webkit-appearance: none;
  box-sizing: border-box;
  border: none;
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

  &__content {
    position: relative;
    z-index: 50;
  }

  &.is-circle::before {
    border-radius: 50%;
  }

  $outlined: & + --outlined;
  $disabled: & + --disabled;
  $round: & + --round;
  $icon: & + --icon;

  &:not(.mz-button--disabled) {
    @include before-background;
    will-change: box-shadow;
    &:active {
      box-shadow: getVar(mz-button, box-shadow);
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
    padding: 0;
    .mz-button__content {
      display: flex;
    }
  }

  // (状态名称,文字颜色,outlined时文字颜色,背景颜色,outlined时边框颜色)
  // prettier-ignore
  $typeColorMap:
(default,null,var(--color-text-regular),transparent,var(--color-text-regular)),
    (primary, #ffffff, null, null, null),
    (success, #ffffff, null, null, null),
    (warning, #ffffff, null, null, null),
    (danger, #ffffff, null, null, null),
    (info, #ffffff, null, null, null),
    (disabled,var(--color-text-placeholder),var(--color-text-placeholder),var(--mz-button__background-color--disabled),var(--color-text-placeholder));

  @each $type, $color, $outlinedColor, $background,
    $outlinedBorder in $typeColorMap
  {
    &--#{$type} {
      @if ($type == disabled) {
        cursor: not-allowed;
      }
      color: $color;
      fill: $color;
      background-color: var(--color-#{$type}, $background);
    }
    &--#{$type}#{$outlined} {
      color: var(--color-#{$type}, $outlinedColor);
      fill: var(--color-#{$type}, $outlinedColor);
      border: 1px solid var(--color-#{$type}, $outlinedBorder);
      background-color: transparent;
    }
  }
}
</style>
