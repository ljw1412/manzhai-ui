import MzButton from './Button'
import { VueConstructor } from 'vue'

MzButton.componentName = 'MzButton'

MzButton.install = (Vue: VueConstructor) => {
  Vue.component(MzButton.componentName, MzButton)
}

export default MzButton
