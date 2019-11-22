import MzCheckbox from './Checkbox.vue'
import { VueConstructor } from 'vue'

MzCheckbox.componentName = 'MzCheckbox'

MzCheckbox.install = (Vue: VueConstructor) => {
  Vue.component(MzCheckbox.componentName, MzCheckbox)
}

export default MzCheckbox
