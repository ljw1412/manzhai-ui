import MzProgress from './Progress.vue'
import MzProgressCircle from './ProgressCircle.vue'
import { VueConstructor } from 'vue'

MzProgress.componentName = 'MzProgress'
MzProgressCircle.componentName = 'MzProgressCircle'

MzProgress.install = (Vue: VueConstructor) => {
  Vue.component(MzProgress.componentName, MzProgress)
  Vue.component(MzProgressCircle.componentName, MzProgressCircle)
}

export {
  MzProgress,
  MzProgressCircle,
  MzProgress as Progress,
  MzProgressCircle as ProgressCircle
}
