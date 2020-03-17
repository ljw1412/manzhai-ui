import MzModal from './Modal'
import { VueConstructor } from 'vue'

MzModal.componentName = 'MzModal'

MzModal.install = (Vue: VueConstructor) => {
  Vue.component(MzModal.componentName, MzModal)
}

export default MzModal
