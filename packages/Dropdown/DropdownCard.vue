<template>
  <transition name="mz-fade">
    <mz-card v-show="mVisiable"
      v-clickoutside="{fn:close,disabled:!mVisiable}"
      ref="popper"
      class="mz-dropdown-card"
      v-bind="$attrs"
      :style="styles">
      <slot></slot>
    </mz-card>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, PropSync, Prop, Watch } from 'vue-property-decorator'
import getZIndex from '@/utils/zindex'

@Component
export default class MzDropdownCard extends Vue {
  @PropSync('visiable')
  mVisiable!: boolean
  @Prop([Number, String])
  readonly zIndex!: number | string
  @Prop([Number, String])
  readonly top!: string
  @Prop([Number, String])
  readonly left!: string

  isAddBody = false
  mZIndex = 1000

  get styles() {
    return { left: this.left, top: this.top }
  }

  close() {
    console.log('close')
    this.mVisiable = false
  }

  @Watch('mVisiable', { immediate: true })
  onVisiableChange(val: boolean) {
    if (val) {
      this.mZIndex = getZIndex()
      if (!this.isAddBody) {
        document.body.appendChild(this.$el)
        this.isAddBody = true
      }
    }
  }
}
</script>

<style lang="scss">
.mz-dropdown-card {
  position: absolute;
}
</style>
