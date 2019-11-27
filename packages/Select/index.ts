import MzSelect from './Select.vue'
import { VueConstructor } from 'vue'

MzSelect.componentName = 'MzSelect'

MzSelect.install = (Vue: VueConstructor) => {
  Vue.component(MzSelect.componentName, MzSelect)
}

export { MzSelect, MzSelect as Select }
