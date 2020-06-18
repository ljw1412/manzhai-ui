import MzDropdown from './Dropdown'
import { VueConstructor } from 'vue'

MzDropdown.componentName = 'MzDropdown'

MzDropdown.install = (Vue: VueConstructor) => {
  Vue.component(MzDropdown.componentName, MzDropdown)
}

export default MzDropdown
