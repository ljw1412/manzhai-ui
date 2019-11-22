import MzCheckbox from './Checkbox.vue'
import MzCheckboxGroup from './CheckboxGroup.vue'
import { VueConstructor } from 'vue'

MzCheckbox.componentName = 'MzCheckbox'
MzCheckboxGroup.componentName = 'MzCheckboxGroup'

MzCheckbox.install = (Vue: VueConstructor) => {
  Vue.component(MzCheckbox.componentName, MzCheckbox)
  Vue.component(MzCheckboxGroup.componentName, MzCheckboxGroup)
}

export {
  MzCheckbox,
  MzCheckboxGroup,
  MzCheckbox as Checkbox,
  MzCheckboxGroup as CheckboxGroup
}
