import MzRadio from './Radio.vue'
import MzRadioGroup from './RadioGroup.vue'
import { VueConstructor } from 'vue'

MzRadio.componentName = 'MzRadio'
MzRadioGroup.componentName = 'MzRadioGroup'

MzRadio.install = (Vue: VueConstructor) => {
  Vue.component(MzRadio.componentName, MzRadio)
  Vue.component(MzRadioGroup.componentName, MzRadioGroup)
}

export { MzRadio, MzRadioGroup, MzRadio as Radio, MzRadioGroup as RadioGroup }
