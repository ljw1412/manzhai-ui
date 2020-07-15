import MzSlideGroup from './SlideGroup'
import { VueConstructor } from 'vue'

MzSlideGroup.componentName = 'MzSlideGroup'

MzSlideGroup.install = (Vue: VueConstructor) => {
  Vue.component(MzSlideGroup.componentName, MzSlideGroup)
}

export default MzSlideGroup
