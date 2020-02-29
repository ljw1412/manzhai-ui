<template>
  <div v-show="visibleSync"
    class="mz-image-preview"
    :style="{zIndex: zIndex || mZIndex}"
    :class="{'mz-image-preview--drag': mouseDrag.moving}"
    @mousedown="mouseDrag.start($event)">
    <!-- 关闭按钮 -->
    <div class="mz-image-preview__close"
      @click="close"></div>

    <div class="mz-image-preview__image"
      :style="{transform:`translate(${mouseDrag.x}px,${mouseDrag.y}px)`}">
      <img draggable="false"
        :src="currentImage.url" />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from 'vue-property-decorator'
import getZIndex from '@/utils/zindex'
import MouseDrag from '@/classes/MouseDrag'

export type ImageItem = { url: string; title?: string; thumbnail?: string }

@Component
export default class MzImagePreview extends Vue {
  @PropSync('visible', Boolean)
  visibleSync!: boolean
  @Prop(Boolean)
  readonly thumbnail!: boolean
  @Prop({ type: Array, default: () => [] })
  readonly images!: (string | ImageItem)[]
  @Prop(Number)
  readonly index!: number
  @Prop(String)
  readonly current!: string
  @Prop(Number)
  readonly zIndex!: number

  mIndex = 0
  mZIndex = getZIndex()
  mouseDrag = new MouseDrag(0, 0, 0, true)

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

  close() {
    this.$emit('close')
    this.visibleSync = false
  }

  @Watch('visibleSync')
  onVisibleChange(visible: boolean) {
    if (!visible) {
      return
    }
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
}
</script>

<style lang="scss">
.mz-image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: grab;

  &--drag {
    cursor: grabbing;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fff;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
