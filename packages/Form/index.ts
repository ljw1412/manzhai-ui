import MzMzForm from './MzForm.vue'
import { VueConstructor } from 'vue'

MzMzForm.componentName = 'MzMzForm'

MzMzForm.install = (Vue: VueConstructor) => {
  Vue.component(MzMzForm.componentName, MzMzForm)
}

export default MzMzForm
