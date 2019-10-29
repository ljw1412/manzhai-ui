import MzIcon from './Icon.vue'
import { VueConstructor } from 'vue'

MzIcon.componentName = 'MzIcon'

MzIcon.install = (Vue: VueConstructor) => {
  Vue.component(MzIcon.componentName, MzIcon)
}

export default MzIcon
