import MzSwitch from './Switch.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzSwitch.install = (Vue: VueConstructor) => {
  Vue.component(MzSwitch.name, MzSwitch)
}

export default MzSwitch
