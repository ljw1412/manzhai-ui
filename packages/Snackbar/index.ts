import MzSnackbar from './Snackbar.vue'
import MzSnackbarPlugin from './plugin'
import { VueConstructor } from 'vue'

export type SnackbarPlacementTypes =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'center'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

MzSnackbar.componentName = 'MzSnackbar'

MzSnackbar.plugin = (Vue: VueConstructor) => {
  Vue.prototype.$snackbar = MzSnackbarPlugin
}

MzSnackbar.install = (Vue: VueConstructor) => {
  Vue.component(MzSnackbar.componentName, MzSnackbar)
  MzSnackbar.plugin(Vue)
}

export default MzSnackbar
