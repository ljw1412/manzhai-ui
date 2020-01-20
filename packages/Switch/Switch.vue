<template>
  <div class="mz-switch"
    :aria-checked="value"
    :class="wrapperClasses"
    @click.stop="onSwitchClick"
    @mousedown.stop>
    <input ref="input"
      type="checkbox"
      class="mz-switch__input"
      :name="name" />
    <div class="mz-switch__core color-transition">
      <div class="mz-switch__thumb">
        <mz-icon v-if="icon"
          :name="icon"
          :color="iconColor"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Mixins } from 'vue-property-decorator'
import SizeMixin from '@/mixins/size'
import FormElement from '@/mixins/FormElement'
import MzIcon from '../Icon/index'
@Component({
  components: {
    MzIcon
  }
})
export default class MzSwitch extends Mixins(SizeMixin, FormElement) {
  @Prop(Boolean)
  readonly value!: boolean
  @Prop(String)
  readonly activeIcon!: string
  @Prop(String)
  readonly inactiveIcon!: string
  @Prop(String)
  readonly iconColor!: string
  @Prop(Boolean)
  readonly circle!: boolean
  @Ref('input')
  readonly input!: HTMLInputElement

  get icon() {
    return this.value ? this.activeIcon : this.inactiveIcon
  }

  get wrapperClasses() {
    const classes = [
      this.disabled ? 'is-not-allowed' : 'is-pointer',
      {
        'mz-switch--checked': this.value,
        'mz-switch--circle': this.circle,
        'mz-switch--disabled': this.disabled
      }
    ]
    this.mzSizeClass('mz-switch', this.size, classes)
    return classes
  }

  onSwitchClick() {
    if (this.disabled) return
    this.input.checked = !this.value
    this.$emit('change', !this.value)
    this.$emit('input', !this.value)
  }

  mounted() {
    this.input.checked = this.value
  }
}
</script>

<style lang="scss" >
@import '@/scss/index.scss';
.mz-switch {
  --mz-switch__bar-width: 40.5px;
  --mz-switch__bar-height: 18px;
  --mz-switch__bar-border-radius: 2px;
  --mz-switch__bar-box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px;
  --mz-switch__bar-background-color: #dcdfe6;
  --mz-switch__bar-background-color--checked: var(--color-primary);
  --mz-switch__thumb-background-color: #ffffff;
  --mz-switch__thumb-box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px;
  --mz-switch__thumb-border-radius: 2px;

  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 1px;
  z-index: 50;
  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  &__core {
    position: relative;
    width: var(--mz-switch__bar-width);
    height: var(--mz-switch__bar-height);
    background-color: var(--mz-switch__bar-background-color);
    box-shadow: var(--mz-switch__bar-box-shadow);
    border-radius: var(--mz-switch__bar-border-radius);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  &__thumb {
    position: absolute;
    top: -1px;
    left: 0;
    width: var(--mz-switch__bar-height);
    height: 100%;
    background-color: var(--mz-switch__thumb-background-color);
    box-shadow: var(--mz-switch__thumb-box-shadow);
    transition: all 0.2s linear;
    transform-origin: left center;
    border: 1px solid transparent;
    border-radius: var(--mz-switch__thumb-border-radius);
    .mz-icon {
      width: var(--mz-switch__bar-height) !important;
      height: var(--mz-switch__bar-height) !important;
    }
  }

  &:not(&--disabled):active &__thumb {
    transform: scaleX(1.1);
  }

  &--checked {
    .mz-switch {
      &__core {
        background-color: var(--mz-switch__bar-background-color--checked);
      }
      &__thumb {
        left: calc(100% - var(--mz-switch__bar-height));
        transform-origin: right center;
      }
    }
  }

  &--circle {
    --mz-switch__thumb-border-radius: 100%;
    --mz-switch__bar-border-radius: 100px;
  }

  &--disabled {
    .mz-switch {
      opacity: 0.75;
    }
  }

  &--large {
    --mz-switch__bar-width: 45px;
    --mz-switch__bar-height: 20px;
  }

  &--small {
    --mz-switch__bar-width: 36px;
    --mz-switch__bar-height: 16px;
  }
}
</style>
