import MzCol from './Col.vue'
import { VueConstructor } from 'vue'

MzCol.componentName = 'MzCol'

MzCol.install = (Vue: VueConstructor) => {
  Vue.component(MzCol.componentName, MzCol)
}

export default MzCol
