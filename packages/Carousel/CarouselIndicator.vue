<script lang="tsx">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import MzCarousel from './Carousel.vue'
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
          'mz-carousel-indicator bg-white d-inline-block cursor-pointer',
          { 'is-active': item.active }
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
        `is-${this.type}`,
        `is-${this.placement}`,
        'position-absolute d-flex'
      ]
    }
    return <div {...data}>{this.indicatorVNodeList}</div>
  }
}
</script>
