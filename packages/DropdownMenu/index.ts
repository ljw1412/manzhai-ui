import MzDropdownMenu from './DropdownMenu.vue'
import { VueConstructor } from 'vue'

MzDropdownMenu.componentName = 'MzDropdownMenu'

MzDropdownMenu.install = (Vue: VueConstructor) => {
  Vue.component(MzDropdownMenu.componentName, MzDropdownMenu)
}

export default MzDropdownMenu
