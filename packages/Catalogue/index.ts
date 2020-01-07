import MzCatalogue from './Catalogue.vue'
import MzCatalogueItem from './CatalogueItem.vue'
import { VueConstructor } from 'vue'

MzCatalogue.componentName = 'MzCatalogue'
MzCatalogueItem.componentName = 'MzCatalogueItem'

MzCatalogue.install = (Vue: VueConstructor) => {
  Vue.component(MzCatalogue.componentName, MzCatalogue)
  Vue.component(MzCatalogueItem.componentName, MzCatalogueItem)
}

export {
  MzCatalogue,
  MzCatalogueItem,
  MzCatalogue as Catalogue,
  MzCatalogueItem as CatalogueItem
}
