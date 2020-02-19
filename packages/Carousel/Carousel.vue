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
        },
        mouseout: () => {
          this.isHover = false
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
            this.setIndexAndRestartTimer(
              this.index + (item === 'next' ? 1 : -1),
              false
            )
            this.setItemReverse(item === 'previous')
          }
        }
      }
      if (this.arrow === 'hover') {
        return (
          <transition name="mz-fade">
            <div v-show={this.isHover} {...data}></div>
          </transition>
        )
      }
      return <div {...data}></div>
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

  &--vertical {
    .mz-carousel-arrow {
      left: 50%;
      margin-left: -20px;
      &--previous {
        transform: rotate(90deg);
        top: 10px;
      }
      &--next {
        transform: rotate(-90deg) scaleX(-1);
        bottom: 10px;
      }
    }
  }
  &:not(&--vertical) {
    .mz-carousel-arrow {
      top: 50%;
      transform: translateY(-50%);
      &--previous {
        left: 10px;
      }
      &--next {
        right: 10px;
      }
    }
  }
}

.mz-carousel-arrow {
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.2);
  border-radius: 50%;
  transition-duration: 0.5s;
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    margin-left: 6px;
    margin-top: 13px;
    border-width: 7px 8px;
    border-style: solid;
    border-color: transparent #ffffff transparent transparent;
    opacity: 0.75;
  }
  &--next::after {
    transform: scaleX(-1);
    transform-origin: 14px 12px;
  }
}
</style>
