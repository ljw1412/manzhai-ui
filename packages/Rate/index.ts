import MzRate from './Rate'
import { VueConstructor } from 'vue'

MzRate.componentName = 'MzRate'

MzRate.install = (Vue: VueConstructor) => {
  Vue.component(MzRate.componentName, MzRate)
}

export default MzRate
