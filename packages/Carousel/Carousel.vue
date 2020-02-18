<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseAttribute from '@/mixins/BaseAttribute'
import MzCarouselItem from './CarouselItem.vue'
import MzCarouselIndicator, { PlacementTypes } from './CarouselIndicator.vue'
import { CreateElement } from 'vue'

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
  @Prop({ type: String, default: 'none' })
  readonly indicator!: 'none' | 'line' | 'full-line' | 'circle'
  @Prop({ type: String, default: 'bottom' })
  readonly indicatorPlacement!: PlacementTypes

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

  renderCarousel() {
    const props = {
      class: ['mz-carousel', { 'mz-carousel--vertical': this.vertical }],
      style: [this.baseStyles]
    }
    return <div {...props}>{this.$slots.default}</div>
  }

  renderIndicator() {
    if (this.$scopedSlots.indicator) {
      return this.$scopedSlots.indicator({
        item: this.currentItem,
        index: this.index,
        pageIndex: this.index + 1,
        length: this.itemCount
      })
    } else if (this.$slots.indicator) {
      return this.$slots.indicator
    } else if (['line', 'full-line', 'circle'].includes(this.indicator)) {
      return (
        <mz-carousel-indicator
          type={this.indicator}
          placement={this.indicatorPlacement}
        ></mz-carousel-indicator>
      )
    }
    return null
  }

  render(h: CreateElement) {
    return (
      <div class="mz-carousel-wrapper">
        {this.renderCarousel()}
        {this.renderIndicator()}
      </div>
    )
  }

  start() {
    this.stop()
    this.timer = setTimeout(() => {
      this.setActiveIndex(this.index + 1)
      this.start()
    }, this.delay)
  }

  stop() {
    this.timer && clearTimeout(this.timer)
  }

  setActiveIndex(index: number) {
    const len = this.itemList.length
    this.index = index % len
  }

  setIndexAndRestartTimer(index: number) {
    this.setActiveIndex(index)
    this.start()
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
    this.stop()
  }
}
</script>

<style lang="scss">
.mz-carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.mz-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
