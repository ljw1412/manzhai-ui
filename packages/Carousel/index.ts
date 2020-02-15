import MzCarousel from './Carousel.vue'
import MzCarouselItem from './CarouselItem.vue'
import MzCarouselIndicator from './CarouselIndicator.vue'
import { VueConstructor } from 'vue'

MzCarousel.componentName = 'MzCarousel'
MzCarouselItem.componentName = 'MzCarouselItem'
MzCarouselIndicator.componentName = 'MzCarouselIndicator'

MzCarousel.install = (Vue: VueConstructor) => {
  Vue.component(MzCarousel.componentName, MzCarousel)
  Vue.component(MzCarouselItem.componentName, MzCarouselItem)
  Vue.component(MzCarouselIndicator.componentName, MzCarouselIndicator)
}

export {
  MzCarousel,
  MzCarouselItem,
  MzCarouselIndicator,
  MzCarousel as Carousel,
  MzCarouselItem as CarouselItem,
  MzCarouselIndicator as CarouselIndicator
}
