import MzTag from './Tag'
import { VueConstructor } from 'vue'

MzTag.componentName = 'MzTag'

MzTag.install = (Vue: VueConstructor) => {
  Vue.component(MzTag.componentName, MzTag)
}

export default MzTag
