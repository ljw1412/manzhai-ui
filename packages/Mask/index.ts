import MzMask from './Mask'
import { VueConstructor } from 'vue'

MzMask.componentName = 'MzMask'

MzMask.install = (Vue: VueConstructor) => {
  Vue.component(MzMask.componentName, MzMask)
}

export default MzMask
