<template>
  <transition :name="transitionName">
    <div v-if="value"
      class="mz-snackbar flex-double-center"
      :class="snackbarClasses"
      :style="snackbarStyles">
      <div class="mz-snackbar__wrapper"
        :class="wrapperClasses">
        <div class="mz-snackbar__content flex-center-space-between">
          <slot>
            <div class="mz-snackbar__text">
              <slot name="text">{{this.text}}</slot>
            </div>
            <div v-if="$slots.action || buttonText"
              class="mz-snackbar__action">
              <slot name="action">
                <mz-button v-if="buttonText"
                  ripple
                  v-bind="buttonProps"
                  @click="onButtonClick">{{buttonText}}</mz-button>
              </slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import MzButton from '../Button'
import { SnackbarPlacementTypes } from './Snackbar'
import { COLOR_TYPES } from '@/constants'
import getZIndex from '@/utils/zindex'

@Component({
  components: {
    MzButton
  }
})
export default class MzSnackbar extends Vue {
  @Prop(Boolean)
  readonly absolute!: boolean
  @Prop(Boolean)
  readonly fixed!: boolean
  @Prop(Boolean)
  readonly value!: boolean
  @Prop({ type: Number, default: 5000 })
  readonly timeout!: number
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly fontColor!: string
  @Prop(String)
  readonly text!: string
  @Prop(String)
  readonly buttonText!: string
  @Prop(Object)
  readonly buttonProps!: Object
  @Prop(Boolean)
  readonly vertical!: boolean
  @Prop({ type: String, default: 'bottom' })
  readonly placement!: SnackbarPlacementTypes
  @Prop({ type: Number })
  readonly zIndex!: number

  timer: number | null = null
  mZIndex = getZIndex()

  get placementList() {
    if (!/^(top|bottom|center)(-start|-end)?$/g.test(this.placement)) {
      console.warn(`[ManZhaiUI] placement 属性值无法解析 "${this.placement}"`)
      return ['bottom']
    }
    return this.placement.split('-')
  }

  get transitionName() {
    return this.placementList[0] === 'center' ? 'mz-zoom' : 'mz-y-zoom'
  }

  get snackbarClasses() {
    const classes: (Record<string, any> | string)[] = [
      {
        'mz-snackbar--fixed': this.fixed,
        'mz-snackbar--absolute': this.absolute,
        'mz-snackbar--vertical': this.vertical
      }
    ]
    this.placementList.forEach(item => {
      classes.push(`mz-snackbar--${item}`)
    })
    return classes
  }

  get snackbarStyles() {
    const styles: Record<string, any> = {
      zIndex: this.zIndex || this.mZIndex,
      transformOrigin: this.placementList[0],
      '--mz-snackbar__font-color': this.fontColor
    }
    if (this.color && !COLOR_TYPES.includes(this.color)) {
      styles['--mz-snackbar__background-color'] = this.color
    }
    return styles
  }

  get wrapperClasses() {
    const classes: (Record<string, any> | string)[] = []
    if (COLOR_TYPES.includes(this.color)) {
      classes.push(`mz-snackbar__wrapper--${this.color}`)
    }
    return classes
  }

  onButtonClick() {
    this.$emit('buttonClick')
    this.$emit('button-click')
  }

  show() {
    this.$emit('input', false)
    this.$nextTick(() => {
      this.$emit('input', true)
    })
  }

  @Watch('value')
  onValueChange(val: boolean) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (val) {
      this.mZIndex = getZIndex()
      if (this.timeout) {
        this.timer = setTimeout(() => {
          this.$emit('input', false)
        }, this.timeout)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mz-snackbar {
  --mz-snackbar__background-color: #323232;
  --mz-snackbar__min-width: 100%;
  --mz-snackbar__max-width: none;
  --mz-snackbar__font-color: #ffffff;

  width: 100%;
  pointer-events: none;

  &__wrapper {
    pointer-events: auto;
    min-width: var(--mz-snackbar__min-width);
    max-width: var(--mz-snackbar__max-width);
    background-color: var(--mz-snackbar__background-color);
    @each $type in (primary, success, warning, danger) {
      &--#{$type} {
        --mz-snackbar__background-color: var(--color-#{$type});
      }
    }
  }

  &__content {
    box-sizing: border-box;
    min-height: 48px;
    width: 100%;
    padding: 8px 16px;
    overflow: hidden;
    color: var(--mz-snackbar__font-color);
  }

  &__action {
    margin-left: 42px;
  }

  &--fixed {
    position: fixed;
  }

  &--absolute {
    position: absolute;
  }

  &--vertical {
    .mz-snackbar__content {
      flex-direction: column;
    }
    .mz-snackbar__action {
      margin-top: 5px;
      margin-left: unset;
      width: 100%;
      text-align: right;
    }
  }

  &--bottom {
    left: 0;
    bottom: 0;
  }

  &--top {
    left: 0;
    top: 0;
  }

  &--center {
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    // transform: translate(-50%, -50%);
  }

  &--start {
    justify-content: flex-start;
  }

  &--end {
    justify-content: flex-end;
  }
}

@media only screen and (min-width: 600px) {
  .mz-snackbar {
    &--fixed,
    &--absolute {
      --mz-snackbar__min-width: 344px;
      --mz-snackbar__max-width: 672px;
    }
  }
}
</style>
