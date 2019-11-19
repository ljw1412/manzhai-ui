import MzRadio from './Radio.vue'
import MzRadioButton from './RadioButton.vue'
import MzRadioGroup from './RadioGroup.vue'
import { VueConstructor } from 'vue'

MzRadio.componentName = 'MzRadio'
MzRadioButton.componentName = 'MzRadioButton'
MzRadioGroup.componentName = 'MzRadioGroup'

MzRadio.install = (Vue: VueConstructor) => {
  Vue.component(MzRadio.componentName, MzRadio)
  Vue.component(MzRadioButton.componentName, MzRadioButton)
  Vue.component(MzRadioGroup.componentName, MzRadioGroup)
}

export {
  MzRadio,
  MzRadioButton,
  MzRadioGroup,
  MzRadio as Radio,
  MzRadioButton as RadioButton,
  MzRadioGroup as RadioGroup
}
