import MzRow from './Row'
import { VueConstructor } from 'vue'

MzRow.componentName = 'MzRow'

MzRow.install = (Vue: VueConstructor) => {
  Vue.component(MzRow.componentName, MzRow)
}

export default MzRow
