import MzCell from './Cell.vue'
import { VueConstructor } from 'vue'

MzCell.componentName = 'MzCell'

MzCell.install = (Vue: VueConstructor) => {
  Vue.component(MzCell.componentName, MzCell)
}

export default MzCell
