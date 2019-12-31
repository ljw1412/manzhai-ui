import MzTable from './Table.vue'
import { VueConstructor } from 'vue'

MzTable.componentName = 'MzTable'

MzTable.install = (Vue: VueConstructor) => {
  Vue.component(MzTable.componentName, MzTable)
}

export default MzTable
