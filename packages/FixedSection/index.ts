import MzFixedSection from './FixedSection.vue'
import { VueConstructor } from 'vue'

MzFixedSection.componentName = 'MzFixedSection'

MzFixedSection.install = (Vue: VueConstructor) => {
  Vue.component(MzFixedSection.componentName, MzFixedSection)
}

export default MzFixedSection
