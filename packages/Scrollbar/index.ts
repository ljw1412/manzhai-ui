import MzScrollbar from './Scrollbar.vue'
import { VueConstructor } from 'vue'

MzScrollbar.componentName = 'MzScrollbar'

MzScrollbar.install = (Vue: VueConstructor) => {
  Vue.component(MzScrollbar.componentName, MzScrollbar)
}

export default MzScrollbar
