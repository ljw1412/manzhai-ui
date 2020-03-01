<template>
  <transition name="mz-fade">
    <div v-show="visibleSync"
      class="mz-image-preview"
      :style="{zIndex: zIndex || mZIndex}"
      :class="{'mz-image-preview--drag': mouseDrag.moving}"
      @mousedown="mouseDrag.start($event)"
      @mousemove="handleMousemove">

      <div class="mz-image-preview__bg"></div>

      <div class="mz-image-preview__toolbar"
        @mousedown.stop
        @mouseenter="isStopTimer = true"
        @mouseleave="isStopTimer = false">
        <m-button icon="md-close"
          class="mz-image-preview__close"
          title="关闭"
          :visible="isDisplayButtons"
          @click="close"></m-button>
      </div>

      <m-button v-for="arrow of arrowButtons"
        :key="arrow.type"
        :icon="arrow.icon"
        :class="[
          'absolute-vertical-center',
          'mz-image-preview__arrow',
          `mz-image-preview__arrow--${arrow.type}`
        ]"
        :visible="arrow.visible"
        :disabled="arrow.disabled"
        @click="switchImage(arrow.offset)"
        @hover="(hover)=>isStopTimer=hover"></m-button>

      <transition name="mz-fade">
        <div class="mz-image-preview__image flex-double-center"
          :key="currentImage.url"
          :style="{transform:`translate(${mouseDrag.x}px,${mouseDrag.y}px)`}">
          <img draggable="false"
            :src="currentImage.url" />
        </div>
      </transition>

    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from 'vue-property-decorator'
import MButton from './Button.vue'
import getZIndex from '@/utils/zindex'
import MouseDrag from '@/classes/MouseDrag'

export type ImageItem = { url: string; title?: string; thumbnail?: string }

@Component({ components: { MButton } })
export default class MzImagePreview extends Vue {
  @PropSync('visible', Boolean)
  visibleSync!: boolean
  @Prop({ type: Boolean, default: true })
  readonly thumbnail!: boolean
  @Prop({ type: Array, default: () => [] })
  readonly images!: (string | ImageItem)[]
  @Prop(Number)
  readonly index!: number
  @Prop(String)
  readonly current!: string
  @Prop(Number)
  readonly zIndex!: number
  @Prop(Boolean)
  readonly loop!: boolean

  mIndex = 0
  mZIndex = getZIndex()
  mouseDrag = new MouseDrag(0, 0, 0, true)
  isDisplayButtons = false
  hideButtonsTimer: number | null = null
  isStopTimer = false

  get mImages(): ImageItem[] {
    return this.images
      .map(image => {
        if (typeof image === 'string') {
          return { url: image }
        } else if (typeof image === 'object' && image.url) {
          return image
        }
        return { url: '' }
      })
      .filter(image => !!image.url)
  }

  get currentImage() {
    return this.mImages[this.mIndex]
  }

  get isEmpty() {
    return !!this.mImages.length
  }

  get isSingle() {
    return this.mImages.length === 1
  }

  get isFirst() {
    return !this.loop && this.mIndex === 0
  }

  get isLast() {
    return !this.loop && this.mIndex === this.mImages.length - 1
  }

  get arrowButtons() {
    return [
      {
        type: 'previous',
        icon: 'md-arrow-back',
        visible: this.isDisplayButtons && !this.isFirst,
        disabled: this.isFirst,
        offset: -1
      },
      {
        type: 'next',
        icon: 'md-arrow-forward',
        visible: this.isDisplayButtons && !this.isLast,
        disabled: this.isLast,
        offset: 1
      }
    ]
  }

  handleMousemove() {
    !this.isStopTimer && this.showButtons()
  }

  close() {
    this.$emit('close')
    this.visibleSync = false
  }

  switchImage(offset: number) {
    const index =
      (this.mIndex + offset + this.mImages.length) % this.mImages.length
    this.mIndex = index
  }

  showButtons() {
    if (!this.visibleSync) return
    this.isDisplayButtons = true
    this.clearHideButtonsTimer()
    this.hideButtonsTimer = setTimeout(() => {
      this.isDisplayButtons = false
    }, 3000)
  }

  clearHideButtonsTimer() {
    if (this.hideButtonsTimer) {
      clearTimeout(this.hideButtonsTimer)
      this.hideButtonsTimer = null
    }
  }

  @Watch('visibleSync')
  onVisibleChange(visible: boolean) {
    this.isDisplayButtons = visible
    if (!visible) {
      return
    }
    this.mouseDrag.reset()
    if (this.index) {
      this.mIndex = Math.max(Math.min(this.index, this.mImages.length - 1), 0)
    } else if (this.current) {
      const index = this.mImages.findIndex(item => item.url === this.current)
      ~index && (this.mIndex = index)
    }
    if (!this.zIndex) {
      this.mZIndex = getZIndex()
    }
  }

  @Watch('mIndex')
  onIndexChange() {
    this.mouseDrag.reset()
  }

  @Watch('isStopTimer')
  onNeedStopTimerChange(val: boolean) {
    if (val) {
      this.clearHideButtonsTimer()
    } else {
      this.showButtons()
    }
  }
}
</script>

<style lang="scss">
.mz-image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: grab;
  user-select: none;

  &--drag {
    cursor: grabbing;
  }

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(30, 30, 30);
    opacity: 0.9;
  }

  &__image {
    position: relative;
    width: 100%;
    min-height: 100%;
    img {
      max-width: 100%;
    }
  }

  &__toolbar {
    z-index: 9995;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__close {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }

  &__arrow {
    z-index: 9994;
    width: 34px;
    height: 34px;
    margin: 0 6px;
    cursor: pointer;

    &--next {
      left: initial;
      right: 0;
    }
  }
}
</style>
