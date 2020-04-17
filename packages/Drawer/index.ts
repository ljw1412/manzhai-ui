import MzDrawer from './Drawer'
import { VueConstructor } from 'vue'

MzDrawer.componentName = 'MzDrawer'

MzDrawer.install = (Vue: VueConstructor) => {
  Vue.component(MzDrawer.componentName, MzDrawer)
}

export default MzDrawer
