import MzDropdown from './Dropdown.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzDropdown.install = (Vue: VueConstructor) => {
  Vue.component(MzDropdown.name, MzDropdown)
}

export default MzDropdown
