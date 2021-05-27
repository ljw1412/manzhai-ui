import MzResult from './Result.vue'
import { VueConstructor } from 'vue'

MzResult.componentName = 'MzResult'

MzResult.install = (Vue: VueConstructor) => {
  Vue.component(MzResult.componentName, MzResult)
}

export default MzResult
