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
  @Prop({ type: Boolean, default: true })
  readonly loop!: boolean
  @Prop({ type: Boolean, default: true })
  readonly autoplay!: boolean
  @Prop({ type: Boolean, default: true })
  readonly stopOnHover!: boolean
  @Prop({ type: String, default: 'hover' })
  readonly arrow!: 'always' | 'hover' | 'never'
  @Prop({ type: String, default: 'none' })
  readonly indicator!: 'none' | 'line' | 'full-line' | 'circle'
  @Prop({ type: String, default: 'bottom' })
  readonly indicatorPlacement!: PlacementTypes

  index = -1
  itemList: MzCarouselItem[] = []
  timer: number | null = null
  initing = true
  isHover = false

  get currentItem() {
    if (this.index === -1) return null
    return this.itemList[this.index]
  }

  get itemCount() {
    return this.itemList.length
  }

  renderCarousel() {
    const props = {
      class: [
        'mz-carousel',
        { 'mz-carousel--vertical': this.vertical, 'is-hover': this.isHover }
      ],
      style: [this.baseStyles],
      on: {
        mouseover: () => {
          this.isHover = true
          if (this.stopOnHover) this.stop()
        },
        mouseout: () => {
          this.isHover = false
          if (this.stopOnHover) this.start()
        }
      }
    }
    return (
      <div {...props}>
        {this.$slots.default}
        {this.renderArrow()}
      </div>
    )
  }

  renderArrow() {
    if (this.arrow === 'never') return null
    return ['previous', 'next'].map(item => {
      const data = {
        class: ['mz-carousel-arrow', `mz-carousel-arrow--${item}`],
        on: {
          click: () => {
            const index = this.index + (item === 'next' ? 1 : -1)
            if (!this.loop && (index < 0 || index >= this.itemCount)) return
            this.setIndexAndRestartTimer(index, false)
            this.setItemReverse(item === 'previous')
          }
        }
      }

      const disabled =
        !this.loop &&
        ((item === 'previous' && this.index <= 0) ||
          (item === 'next' && this.index >= this.itemCount - 1))
      const isShow =
        (this.arrow === 'hover' && this.isHover) || this.arrow === 'always'

      return (
        <transition name="mz-fade">
          <div v-show={!disabled && isShow} {...data}></div>
        </transition>
      )
    })
  }

  renderIndicator() {
    if (this.initing) return
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
          placement={this.indicatorPlacement}></mz-carousel-indicator>
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
      this.setItemReverse(false)
      this.setActiveIndex(this.index + 1)
      this.start()
    }, this.delay)
  }

  stop() {
    this.timer && clearTimeout(this.timer)
  }

  setItemReverse(reverse: boolean) {
    this.itemList.forEach(item => {
      item.reverse = reverse
    })
  }

  setActiveIndex(index: number, checkReverse?: boolean) {
    const len = this.itemList.length
    index = (index + len) % len
    if (checkReverse) {
      this.setItemReverse(this.index > index)
    }
    this.index = index
  }

  setIndexAndRestartTimer(index: number, checkReverse = true) {
    this.setActiveIndex(index, checkReverse)
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
    if (this.autoplay) this.start()
    this.$nextTick(() => {
      this.initing = false
    })
  }

  beforeDestroy() {
    this.stop()
  }
}
</script>
