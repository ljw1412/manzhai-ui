import MzTooltip from './Tooltip.vue'
import { VueConstructor } from 'vue'

MzTooltip.componentName = 'MzTooltip'

MzTooltip.install = (Vue: VueConstructor) => {
  Vue.component(MzTooltip.componentName, MzTooltip)
}

export default MzTooltip
