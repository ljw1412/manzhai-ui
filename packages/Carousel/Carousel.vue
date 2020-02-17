<template>
  <div class="mz-carousel"
    :class="{'mz-carousel--vertical': vertical}"
    :style="[baseStyles]">
    <slot></slot>
    <slot name="indicator"
      :index="index"
      :item="currentItem"
      :length="itemCount">
      <mz-carousel-indicator></mz-carousel-indicator>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseAttribute from '@/mixins/BaseAttribute'
import MzCarouselItem from './CarouselItem.vue'
import MzCarouselIndicator from './CarouselIndicator.vue'

@Component({
  provide() {
    return { mzCarousel: this }
  },
  components: {
    MzCarouselIndicator
  }
})
export default class MzCarousel extends BaseAttribute {
  @Prop({ type: Number, default: 0 })
  readonly initialIndex!: number
  @Prop({ type: Number, default: 5000 })
  readonly delay!: number
  @Prop(String)
  readonly transition!: string
  @Prop(String)
  readonly reverseTransition!: string
  @Prop(Boolean)
  readonly vertical!: boolean
  @Prop(Boolean)
  readonly indicator!: boolean

  index = -1
  itemList: MzCarouselItem[] = []
  timer: number | null = null
  initing = true

  get currentItem() {
    if (this.index === -1) return null
    return this.itemList[this.index]
  }

  get itemCount() {
    return this.itemList.length
  }

  start() {
    this.timer = setTimeout(() => {
      this.setActiveIndex(this.index + 1)
      this.start()
    }, this.delay)
  }

  setActiveIndex(index: number) {
    const len = this.itemList.length
    this.index = index % len
  }

  @Watch('index')
  onIndexChange(index: number) {
    this.$emit('change', index)
    this.itemList.forEach((item, i) => {
      item.active = i === index
    })
  }

  mounted() {
    this.setActiveIndex(this.initialIndex)
    this.start()
    this.$nextTick(() => {
      this.initing = false
    })
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
