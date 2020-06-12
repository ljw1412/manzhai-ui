import MzSnackbar from './Snackbar'
import MzSnackbarPlugin from './plugin'
import { VueConstructor } from 'vue'

MzSnackbar.componentName = 'MzSnackbar'

MzSnackbar.plugin = (Vue: VueConstructor) => {
  Vue.prototype.$snackbar = MzSnackbarPlugin
}

MzSnackbar.install = (Vue: VueConstructor) => {
  Vue.component(MzSnackbar.componentName, MzSnackbar)
  MzSnackbar.plugin(Vue)
}

export default MzSnackbar
