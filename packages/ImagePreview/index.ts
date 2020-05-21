import MzImagePreview from './ImagePreview'
import MzImagePreviewPlugin from './plugin'
import { VueConstructor } from 'vue'

MzImagePreview.componentName = 'MzImagePreview'

MzImagePreview.plugin = (Vue: VueConstructor) => {
  Vue.prototype.$imagePreview = MzImagePreviewPlugin
}

MzImagePreview.install = (Vue: VueConstructor) => {
  Vue.component(MzImagePreview.componentName, MzImagePreview)
}

export default MzImagePreview
