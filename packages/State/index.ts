import MzState from './State'
import { VueConstructor } from 'vue'

MzState.componentName = 'MzState'

MzState.install = (Vue: VueConstructor) => {
  Vue.component(MzState.componentName, MzState)
}

export default MzState
