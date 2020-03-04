<template>
  <transition name="mz-fade">
    <div v-show="visibleSync"
      class="mz-image-preview"
      :class="{
        'mz-image-preview--drag': mouseDrag.moving,
        'mz-image-preview--thumbnail': isDisplayThumbnail
      }"
      :style="{zIndex: zIndex || mZIndex}">
      <!-- 背景 -->
      <div class="mz-image-preview__bg"></div>
      <!-- 工具栏 -->
      <div class="mz-image-preview__toolbar"
        @mouseenter="isStopTimer = true"
        @mouseleave="isStopTimer = false">
        <m-button :icon="isPlay ? 'md-pause' : 'md-play'"
          class="toolbar-button"
          title="播放"
          :visible="isDisplayButtons && playable"
          @click="isPlay = !isPlay"></m-button>
        <m-button icon="md-images"
          class="toolbar-button"
          title="缩略图"
          :visible="isDisplayThumbnail || isDisplayButtons && thumbnail"
          @click="isDisplayThumbnail = !isDisplayThumbnail"></m-button>
        <m-button icon="md-close"
          class="toolbar-button"
          title="关闭"
          :visible="isDisplayThumbnail || isDisplayButtons"
          @click="close"></m-button>
      </div>
      <!-- 缩略图列表 -->
      <transition name="mz-x-zoom">
        <div v-show="isDisplayThumbnail"
          class="mz-image-preview__thumbnails">
          <mz-scrollbar v-if="thumbnail"
            bar-size="5px"
            @mouseenter="isStopTimer = true"
            @mouseleave="isStopTimer = false">
            <div v-for="(image,index) of mImages"
              :key="index"
              class="thumbnail-wrapper"
              :class="{'thumbnail-wrapper--active':index === mIndex}"
              @click="mIndex = index">
              <mz-image fit="cover"
                draggable="false"
                :src="image.thumbnail || image.url"></mz-image>
              <span class="thumbnail-title">{{image.title || index+1}}</span>
            </div>
          </mz-scrollbar>
        </div>
      </transition>
      <!-- 切换箭头按钮 -->
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
      <!-- 事件层 -->
      <div class="mz-image-preview__watcher"
        @mousedown="mouseDrag.start($event)"
        @mousemove="handleMousemove"></div>
      <!-- 播放进度条 -->
      <mz-progress v-if="playable"
        v-show="isPlay"
        v-model="timeCount"
        class="mz-image-preview__timer"></mz-progress>
      <!-- 图片 -->
      <transition name="mz-fade">
        <div class="mz-image-preview__image flex-double-center"
          :class="{'mz-image-preview__image--height-first':imageMode==='height'}"
          :key="currentImage.url"
          :style="{transform:`translate(${mouseDrag.x}px,${mouseDrag.y}px)`}">
          <img v-if="rendered"
            draggable="false"
            :src="currentImage.url"
            @load="handleImageLoad" />
        </div>
      </transition>

    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from 'vue-property-decorator'
import MButton from './Button.vue'
import MzImage from '../Image/index'
import { MzProgress } from '../Progress/index'
import getZIndex from '@/utils/zindex'
import MouseDrag from '@/classes/MouseDrag'

export type ImageItem = { url: string; title?: string; thumbnail?: string }

@Component({ components: { MButton, MzImage, MzProgress } })
export default class MzImagePreview extends Vue {
  @PropSync('visible', Boolean)
  visibleSync!: boolean
  @Prop(Boolean)
  readonly thumbnail!: boolean
  @Prop(Boolean)
  readonly playable!: boolean
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

  rendered = false
  mIndex = 0
  mZIndex = getZIndex()
  imageMode = 'width'
  mouseDrag = new MouseDrag(0, 0, 0, true)
  isDisplayThumbnail = false
  // 播放
  isPlay = false
  timeCount = 0
  playTimer: number | null = null
  // 功能按钮相关
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

  handleImageLoad(e: Event) {
    const img = e.target as HTMLImageElement
    // 当高宽比小于2时，让图片在页面中完全展示
    this.imageMode =
      img.naturalHeight / img.naturalWidth < 2 ? 'height' : 'width'
  }

  handleMousemove() {
    !this.isStopTimer && this.showButtons()
  }

  close() {
    this.$emit('close')
    this.visibleSync = false
  }

  // 切换图片
  switchImage(offset: number) {
    const index =
      (this.mIndex + offset + this.mImages.length) % this.mImages.length
    this.mIndex = index
  }

  // 显示按钮 在3秒后隐藏
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

  clearPlayTimer() {
    this.playTimer && clearInterval(this.playTimer)
    this.timeCount = 0
  }

  @Watch('visibleSync')
  onVisibleChange(visible: boolean) {
    this.isDisplayButtons = visible
    if (!visible) {
      this.clearPlayTimer()
      return
    }
    this.rendered = true
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
    this.timeCount = 0
  }

  @Watch('isStopTimer')
  onNeedStopTimerChange(val: boolean) {
    if (val) {
      this.clearHideButtonsTimer()
    } else {
      this.showButtons()
    }
  }

  @Watch('isPlay')
  onPlayChange(isPlay: boolean) {
    if (isPlay) {
      this.playTimer = setInterval(() => {
        if (this.timeCount === 100) {
          this.timeCount = 0
          this.switchImage(1)
        }
        this.timeCount++
      }, 50)
    } else {
      this.clearPlayTimer()
    }
  }
}
</script>

<style lang="scss">
$thumbnails-block-width: 120px;

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
    .mz-image-preview__thumbnails {
      cursor: grabbing;
    }
  }

  &--thumbnail {
    .mz-image-preview {
      &__watcher,
      &__image {
        width: calc(100% - #{$thumbnails-block-width});
      }
      &__arrow--next {
        right: $thumbnails-block-width;
      }
    }
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

  &__toolbar {
    z-index: 9995;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    .toolbar-button {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  &__thumbnails {
    position: absolute;
    right: 0;
    width: $thumbnails-block-width;
    height: 100%;
    padding-top: 40px;
    box-sizing: border-box;
    background-color: rgba(30, 30, 30, 0.95);
    z-index: 9994;
    cursor: default;
    transform-origin: right;
    transition: transform 0.15s linear;
    .mz-scrollbar {
      height: 100%;
    }

    .thumbnail-wrapper {
      cursor: pointer;
      padding: 5px;
      text-align: center;
      &:not(.thumbnail-wrapper--active):hover {
        background-color: rgba(255, 255, 255, 0.3);
      }

      &--active {
        background-color: rgba(255, 255, 255, 0.5);
        color: #333333;
      }

      img {
        width: 110px;
        height: 110px;
      }
      .thumbnail-title {
        white-space: nowrap;
      }
    }
  }

  &__arrow {
    z-index: 9993;
    width: 34px;
    height: 34px;
    margin: 0 6px;
    cursor: pointer;

    &--next {
      left: initial;
      right: 0;
      transition: right 0.15s linear;
    }
  }

  &__watcher {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9992;
  }

  &__timer.mz-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9991;
    transition: all 0.05s;
  }

  &__image {
    position: relative;
    z-index: 9990;
    width: 100%;
    min-height: 100%;
    transition: width 0.15s linear;
    img {
      max-width: 100%;
    }
  }

  &__image--height-first {
    height: 100%;
    width: initial;
    img {
      max-height: 100%;
    }
  }
}
</style>
