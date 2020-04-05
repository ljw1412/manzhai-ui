import MzBadge from './Badge'
import { VueConstructor } from 'vue'

MzBadge.componentName = 'MzBadge'

MzBadge.install = (Vue: VueConstructor) => {
  Vue.component(MzBadge.componentName, MzBadge)
}

export default MzBadge
