<script lang="tsx">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import { MzCarousel } from '.'
import { CreateElement } from 'vue'

export type PlacementTypes = 'top' | 'bottom' | 'left' | 'right' | 'outside'

@Component
export default class MzCarouselIndicator extends Vue {
  @Inject('mzCarousel')
  readonly mzCarousel!: MzCarousel | null
  @Prop({ type: String, default: 'bottom' })
  readonly placement!: PlacementTypes
  @Prop({ type: String, default: 'line' })
  readonly type!: 'line' | 'full-line' | 'circle'
  @Prop(String)
  readonly activeColor!: String
  @Prop(String)
  readonly inactiveColor!: String

  get indicatorVNodeList() {
    if (!this.mzCarousel) return null
    return this.mzCarousel.itemList.map((item, index) => {
      const data = {
        class: [
          'mz-carousel-indicator',
          { 'mz-carousel-indicator--active': item.active }
        ],
        style: {
          backgroundColor: item.active ? this.activeColor : this.inactiveColor
        },
        on: {
          click: () => {
            this.mzCarousel!.setIndexAndRestartTimer(index)
          }
        }
      }
      return <div {...data}></div>
    })
  }

  render(h: CreateElement) {
    const data = {
      class: [
        'mz-carousel-indicators',
        `mz-carousel-indicators--${this.type}`,
        `mz-carousel-indicators--${this.placement}`
      ]
    }
    return <div {...data}>{this.indicatorVNodeList}</div>
  }
}
</script>

<style lang="scss">
.mz-carousel-indicators {
  --mz-carousel-indicators__item-bg-color: var(--color-primary-5);
  --mz-carousel-indicators__item-bg-color--active: var(--color-primary);

  position: absolute;
  display: flex;
  .mz-carousel-indicator {
    display: inline-block;
    cursor: pointer;
    background-color: var(--mz-carousel-indicators__item-bg-color);
    transition: 0.3s;
    &--active {
      background-color: var(--mz-carousel-indicators__item-bg-color--active);
    }
  }
  &--line {
    .mz-carousel-indicator {
      width: 20px;
      height: 2px;
      margin: 5px;
    }
  }
  &--full-line {
    width: 100%;
    height: 4px;
    .mz-carousel-indicator {
      flex: 1 0 auto;
    }
  }
  &--top,
  &--bottom {
    left: 50%;
    transform: translateX(-50%);
  }
  &--left,
  &--right {
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    &.mz-carousel-indicators--line {
      .mz-carousel-indicator {
        width: 2px;
        height: 20px;
        margin: 5px;
      }
    }
    &.mz-carousel-indicators--full-line {
      width: 4px;
      height: 100%;
      .mz-carousel-indicator {
        flex: 1 0 auto;
      }
    }
  }

  &--outside {
    position: static;
    text-align: center;
    .mz-carousel-indicator {
      &:first-child {
        margin-left: auto;
      }
      &:last-child {
        margin-right: auto;
      }
    }
  }

  &--circle {
    .mz-carousel-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 5px;
    }
  }

  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
  &--top {
    top: 0;
  }
  &--bottom {
    bottom: 0;
  }
}
</style>
