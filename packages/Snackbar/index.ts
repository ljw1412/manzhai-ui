import MzSnackbar from './Snackbar.vue'
import { VueConstructor } from 'vue'

MzSnackbar.componentName = 'MzSnackbar'

MzSnackbar.install = (Vue: VueConstructor) => {
  Vue.component(MzSnackbar.componentName, MzSnackbar)
}

export default MzSnackbar
