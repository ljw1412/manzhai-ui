<script lang="tsx">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import { MzCarousel } from '.'
import { CreateElement } from 'vue'

@Component
export default class MzCarouselIndicator extends Vue {
  @Inject('mzCarousel')
  readonly mzCarousel!: MzCarousel | null
  @Prop({ type: String, default: 'bottom' })
  readonly placement!: string

  get indicatorVNodeList() {
    if (!this.mzCarousel) return null
    return this.mzCarousel.itemList.map((item, index) => {
      const data = {
        class: [
          'mz-carousel-indicator',
          { 'mz-carousel-indicator--active': item.active }
        ]
      }
      return <div {...data}>{index + 1}</div>
    })
  }

  render(h: CreateElement) {
    return <div class="mz-carousel-indicators">{this.indicatorVNodeList}</div>
  }
}
</script>

<style lang="scss">
.mz-carousel-indicators {
  position: absolute;
}
</style>
