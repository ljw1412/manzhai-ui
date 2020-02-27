import MzImagePreview from './ImagePreview.vue'
import { VueConstructor } from 'vue'

MzImagePreview.componentName = 'MzImagePreview'

MzImagePreview.install = (Vue: VueConstructor) => {
  Vue.component(MzImagePreview.componentName, MzImagePreview)
}

export default MzImagePreview
