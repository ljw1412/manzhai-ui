import MzMasonry from './Masonry.vue'
import MzMasonryItem from './MasonryItem.vue'
import { VueConstructor } from 'vue'

MzMasonry.componentName = 'MzMasonry'
MzMasonryItem.componentName = 'MzMasonryItem'

MzMasonry.install = (Vue: VueConstructor) => {
  Vue.component(MzMasonry.componentName, MzMasonry)
  Vue.component(MzMasonryItem.componentName, MzMasonryItem)
}

export {
  MzMasonry,
  MzMasonryItem,
  MzMasonry as Masonry,
  MzMasonryItem as MasonryItem
}
