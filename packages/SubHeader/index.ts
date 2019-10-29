import MzSubHeader from './SubHeader.vue'
import { VueConstructor } from 'vue'

MzSubHeader.componentName = 'MzSubHeader'

MzSubHeader.install = (Vue: VueConstructor) => {
  Vue.component(MzSubHeader.componentName, MzSubHeader)
}

export default MzSubHeader
