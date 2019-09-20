import MzCellGroup from './CellGroup.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzCellGroup.install = (Vue: VueConstructor) => {
  Vue.component(MzCellGroup.name, MzCellGroup)
}

export default MzCellGroup
