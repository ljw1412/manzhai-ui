import MzCellGroup from './CellGroup.vue'
import { VueConstructor } from 'vue'

MzCellGroup.componentName = 'MzCellGroup'

MzCellGroup.install = (Vue: VueConstructor) => {
  Vue.component(MzCellGroup.componentName, MzCellGroup)
}

export default MzCellGroup
