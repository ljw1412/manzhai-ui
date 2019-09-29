import MzCard from './Card.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzCard.install = (Vue: VueConstructor) => {
  Vue.component(MzCard.name, MzCard)
}

export default MzCard
