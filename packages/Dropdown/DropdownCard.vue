<template>
  <transition name="mz-fade">
    <mz-card v-show="mVisiable"
      v-clickoutside="{
        fn: close,
        disabled: isDisabledClickoutside
      }"
      ref="popper"
      class="mz-dropdown-card"
      :style="styles">
      <slot></slot>
    </mz-card>
  </transition>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  PropSync,
  Prop,
  Watch,
  Mixins
} from 'vue-property-decorator'
import getZIndex from '@/utils/zindex'
import BaseAttribute from '../../src/mixins/BaseAttribute'

@Component
export default class MzDropdownCard extends Mixins(BaseAttribute) {
  @PropSync('visiable')
  mVisiable!: boolean
  @Prop([Number, String])
  readonly zIndex!: number | string
  @Prop({ type: [String, Object] })
  readonly reference!: string | Element | Vue | null
  @Prop({ type: [String, Object], default: 'body' })
  readonly container!: string | Element | Vue | null
  @Prop(Boolean)
  readonly dropdownMatchReferenceWidth!: boolean
  @Prop(String)
  readonly placement?: 'bottom'
  @Prop(Boolean)
  readonly clickoutside!: boolean

  top = '0'
  left = '0'
  mZIndex = 1000
  referenceWidth = ''
  isAddContainer = false
  disabledClickoutside = true

  get isBottom() {
    return this.placement === 'bottom'
  }

  get isDisabledClickoutside() {
    return !this.clickoutside || !this.mVisiable || this.disabledClickoutside
  }

  set isDisabledClickoutside(value) {
    this.disabledClickoutside = value
  }

  get styles() {
    return {
      ...this.baseStyles,
      zIndex: this.mZIndex,
      left: this.left,
      top: this.top,
      width: this.dropdownMatchReferenceWidth ? this.referenceWidth : this.width
    }
  }

  get containerElement() {
    let container = null
    if (typeof this.container === 'string') {
      container = document.querySelector(this.container)
    } else if (this.container instanceof Vue) {
      container = (this.reference as Vue).$el
    }
    return container
  }

  get referenceElement() {
    let reference = null
    if (!this.reference) {
      console.warn('[MzDropdownCard] 请传入 reference，以判断绑定的引用元素！')
      reference = null
    }
    if (typeof this.reference === 'string') {
      reference = document.querySelector(this.reference)
    } else if (this.reference instanceof Vue) {
      reference = (this.reference as Vue).$el
    }
    return reference
  }

  close() {
    console.log('close')
    this.mVisiable = false
  }

  getReferenceRect() {
    return this.referenceElement
      ? this.referenceElement.getBoundingClientRect()
      : null
  }

  updateCardPosition() {
    if (this.mVisiable) {
      const rect = this.getReferenceRect()
      if (rect) {
        this.top = (this.isBottom ? rect.height : 0) + 'px'
        this.left = '0px'
        this.referenceWidth = rect.width + 'px'
      }
    }
  }

  @Watch('mVisiable', { immediate: true })
  onVisiableChange(val: boolean) {
    if (val) {
      this.mZIndex = getZIndex()
      if (this.containerElement && !this.isAddContainer) {
        this.containerElement.appendChild(this.$el)
        this.isAddContainer = true
      }
      setTimeout(() => {
        this.isDisabledClickoutside = false
      }, 0)
    } else {
      this.isDisabledClickoutside = true
    }
    this.updateCardPosition()
  }
}
</script>

<style lang="scss">
.mz-dropdown-card {
  position: absolute;
}
</style>
