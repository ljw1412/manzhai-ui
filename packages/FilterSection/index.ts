import MzFilterSection from './FilterSection.vue'
import MzFilterSectionGroup from './FilterSectionGroup.vue'
import MzFilterSectionItem from './FilterSectionItem.vue'
import { VueConstructor } from 'vue'

MzFilterSection.componentName = 'MzFilterSection'
MzFilterSectionGroup.componentName = 'MzFilterSectionGroup'
MzFilterSectionItem.componentName = 'MzFilterSectionItem'

MzFilterSection.install = (Vue: VueConstructor) => {
  Vue.component(MzFilterSection.componentName, MzFilterSection)
  Vue.component(MzFilterSectionGroup.componentName, MzFilterSectionGroup)
  Vue.component(MzFilterSectionItem.componentName, MzFilterSectionItem)
}

export {
  MzFilterSection,
  MzFilterSectionGroup,
  MzFilterSectionItem,
  MzFilterSection as FilterSection,
  MzFilterSectionGroup as FilterSectionGroup,
  MzFilterSectionItem as FilterSectionItem
}
