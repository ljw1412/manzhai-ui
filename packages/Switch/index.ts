import MzSwitch from './Switch.vue'
import { VueConstructor } from 'vue'

MzSwitch.componentName = 'MzSwitch'

MzSwitch.install = (Vue: VueConstructor) => {
  Vue.component(MzSwitch.componentName, MzSwitch)
}

export default MzSwitch
