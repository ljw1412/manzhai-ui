import MzButton from './Button.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzButton.install = (Vue: VueConstructor) => {
  Vue.component(MzButton.name, MzButton)
}

export default MzButton
