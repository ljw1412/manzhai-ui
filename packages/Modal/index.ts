import MzModal from './Modal'
import MzModalPlugin from './plugin'

MzModal.componentName = 'MzModal'

MzModal.plugin = Vue => {
  Vue.prototype.$modal = MzModalPlugin
}

MzModal.install = Vue => {
  Vue.component(MzModal.componentName, MzModal)
}

export default MzModal
