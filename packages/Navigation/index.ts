import MzNavigation from './Navigation.vue'
import { VueConstructor } from 'vue'

MzNavigation.componentName = 'MzNavigation'

MzNavigation.install = (Vue: VueConstructor) => {
  Vue.component(MzNavigation.componentName, MzNavigation)
}

export default MzNavigation
