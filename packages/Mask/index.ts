import MzMask from './Mask'
import MzMaskPlugin from './plugin'
import { VueConstructor } from 'vue'

MzMask.componentName = 'MzMask'

MzMask.plugin = (Vue: VueConstructor) => {
  Vue.prototype.$mask = MzMaskPlugin
}

MzMask.install = (Vue: VueConstructor) => {
  Vue.component(MzMask.componentName, MzMask)
}

export default MzMask
