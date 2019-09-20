import MzIcon from './Icon.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzIcon.install = (Vue: VueConstructor) => {
  Vue.component(MzIcon.name, MzIcon)
}

export default MzIcon
