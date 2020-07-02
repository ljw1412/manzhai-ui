import MzTextarea from './Textarea'
import { VueConstructor } from 'vue'

MzTextarea.componentName = 'MzTextarea'

MzTextarea.install = (Vue: VueConstructor) => {
  Vue.component(MzTextarea.componentName, MzTextarea)
}

export default MzTextarea
