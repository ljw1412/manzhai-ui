import MzForm from './Form.vue'
import { VueConstructor } from 'vue'

MzForm.componentName = 'MzForm'

MzForm.install = (Vue: VueConstructor) => {
  Vue.component(MzForm.componentName, MzForm)
}

export default MzForm
