import MzSubHeader from './SubHeader.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzSubHeader.install = (Vue: VueConstructor) => {
  Vue.component(MzSubHeader.name, MzSubHeader)
}

export default MzSubHeader
