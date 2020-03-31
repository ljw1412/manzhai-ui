import MzCell from './Cell.vue'
import MzCellGroup from './CellGroup.vue'
import { VueConstructor } from 'vue'

MzCell.componentName = 'MzCell'
MzCellGroup.componentName = 'MzCellGroup'

MzCell.install = (Vue: VueConstructor) => {
  Vue.component(MzCell.componentName, MzCell)
  Vue.component(MzCellGroup.componentName, MzCellGroup)
}

export { MzCell, MzCellGroup, MzCell as Cell, MzCellGroup as CellGroup }
