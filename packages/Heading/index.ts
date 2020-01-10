import MzHeading from './Heading.vue'
import { VueConstructor } from 'vue'

MzHeading.componentName = 'MzHeading'

MzHeading.install = (Vue: VueConstructor) => {
  Vue.component(MzHeading.componentName, MzHeading)
}

export default MzHeading
