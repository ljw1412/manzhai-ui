import MzInput from './Input'
import { VueConstructor } from 'vue'

MzInput.componentName = 'MzInput'

MzInput.install = (Vue: VueConstructor) => {
  Vue.component(MzInput.componentName, MzInput)
}

export default MzInput
