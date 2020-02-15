<template>
  <div class="mz-carousel"
    :style="[baseStyles]">
    <slot></slot>
    <slot name="indicator"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseAttribute from '@/mixins/BaseAttribute'
import { MzCarouselItem } from '.'

@Component({
  provide() {
    return { mzCarousel: this }
  }
})
export default class MzCarousel extends BaseAttribute {
  @Prop(Number)
  readonly initialIndex!: number
  @Prop({ type: Number, default: 3000 })
  readonly delay!: number

  index = -1
  itemList: MzCarouselItem[] = []
  timer: number | null = null

  start() {
    this.timer = setTimeout(() => {
      const len = this.itemList.length
      this.index = (this.index + 1) % len
      this.start()
    }, this.delay)
  }

  @Watch('index')
  onIndexChange(index: number) {
    this.$emit('change', index)
    this.itemList.forEach((item, i) => {
      item.active = i === index
    })
  }

  mounted() {
    this.index = this.initialIndex || 0
    this.start()
  }

  beforeDestroy() {
    this.timer && clearTimeout(this.timer)
  }
}
</script>

<style lang="scss">
.mz-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
