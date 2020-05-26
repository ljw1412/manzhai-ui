import MzTableSimple from './TableSimple'
import { VueConstructor } from 'vue'

MzTableSimple.componentName = 'MzTableSimple'

MzTableSimple.install = (Vue: VueConstructor) => {
  Vue.component(MzTableSimple.componentName, MzTableSimple)
}

export default MzTableSimple
