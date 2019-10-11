import MzNavigation from './Navigation.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzNavigation.install = (Vue: VueConstructor) => {
  Vue.component(MzNavigation.name, MzNavigation)
}

export default MzNavigation
