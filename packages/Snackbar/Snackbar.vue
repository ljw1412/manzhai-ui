<template>
  <transition :name="transitionName">
    <div v-if="visible"
      class="mz-snackbar"
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
import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator'
import { MzButton } from '../Button'
import { SnackbarPlacementTypes } from './Snackbar'
import { COLOR_TYPES } from '@/constants'
import PopupManager from '@/utils/popup-manager'

@Component({
  components: {
    MzButton
  }
})
export default class MzSnackbar extends Vue {
  @Model('visible:change', { type: Boolean, default: true })
  readonly visible!: boolean
  @Prop(Boolean)
  readonly absolute!: boolean
  @Prop(Boolean)
  readonly fixed!: boolean
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
  mZIndex = PopupManager.zIndex

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
    this.$emit('visible:change', false)
    this.$nextTick(() => {
      this.$emit('visible:change', true)
    })
  }

  @Watch('visible')
  onVisibleChange(val: boolean) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (val) {
      this.mZIndex = PopupManager.zIndex
      if (this.timeout) {
        this.timer = setTimeout(() => {
          this.$emit('visible:change', false)
        }, this.timeout)
      }
    }
  }
}
</script>
