import MzLoading from './Loading'
import { VueConstructor } from 'vue'

MzLoading.componentName = 'MzLoading'

MzLoading.install = (Vue: VueConstructor) => {
  Vue.component(MzLoading.componentName, MzLoading)
}

export default MzLoading
