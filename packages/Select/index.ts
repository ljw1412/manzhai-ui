import MzSelect from './Select.vue'
import MzOption from './Option.vue'
import { VueConstructor } from 'vue'

MzSelect.componentName = 'MzSelect'
MzOption.componentName = 'MzOption'

MzSelect.install = (Vue: VueConstructor) => {
  Vue.component(MzSelect.componentName, MzSelect)
  Vue.component(MzOption.componentName, MzOption)
}

export { MzSelect, MzSelect as Select, MzOption, MzOption as Option }
