import MzInput from './Input'
import MzInputGroup from './InputGroup'
import { VueConstructor } from 'vue'

MzInput.componentName = 'MzInput'
MzInputGroup.componentName = 'MzInputGroup'

MzInput.install = (Vue: VueConstructor) => {
  Vue.component(MzInput.componentName, MzInput)
  Vue.component(MzInputGroup.componentName, MzInputGroup)
}

export { MzInput, MzInputGroup, MzInput as Input, MzInputGroup as InputGroup }
