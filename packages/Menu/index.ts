import MzMenu from './Menu'
import { VueConstructor } from 'vue'

MzMenu.componentName = 'MzMenu'

MzMenu.install = (Vue: VueConstructor) => {
  Vue.component(MzMenu.componentName, MzMenu)
}

export default MzMenu
