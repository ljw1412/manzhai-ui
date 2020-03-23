import MzAnchor from './Anchor'
import { VueConstructor } from 'vue'

MzAnchor.componentName = 'MzAnchor'

MzAnchor.install = (Vue: VueConstructor) => {
  Vue.component(MzAnchor.componentName, MzAnchor)
}

export default MzAnchor
