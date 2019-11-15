import MzRadio from './Radio.vue'
import { VueConstructor } from 'vue'

MzRadio.componentName = 'MzRadio'

MzRadio.install = (Vue: VueConstructor) => {
  Vue.component(MzRadio.componentName, MzRadio)
}

export { MzRadio, MzRadio as Radio }
