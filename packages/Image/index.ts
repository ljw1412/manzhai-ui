import MzImage from './Image.vue'
import { VueConstructor } from 'vue'

MzImage.componentName = 'MzImage'

MzImage.install = (Vue: VueConstructor) => {
  Vue.component(MzImage.componentName, MzImage)
}

export default MzImage
