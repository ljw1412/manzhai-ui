import MzCatalogue from './Catalogue.vue'
import { VueConstructor } from 'vue'

MzCatalogue.componentName = 'MzCatalogue'

MzCatalogue.install = (Vue: VueConstructor) => {
  Vue.component(MzCatalogue.componentName, MzCatalogue)
}

export default MzCatalogue
