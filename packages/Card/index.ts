import MzCard from './Card.vue'
import { VueConstructor } from 'vue'

MzCard.componentName = 'MzCard'

MzCard.install = (Vue: VueConstructor) => {
  Vue.component(MzCard.componentName, MzCard)
}

export default MzCard
