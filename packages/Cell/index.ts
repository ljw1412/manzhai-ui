import MzCell from './Cell.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzCell.install = (Vue: VueConstructor) => {
  Vue.component(MzCell.name, MzCell)
}

export default MzCell
