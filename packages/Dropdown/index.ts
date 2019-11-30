import MzDropdown from './Dropdown.vue'
import MzDropdownCard from './DropdownCard.vue'
import { VueConstructor } from 'vue'

MzDropdown.componentName = 'MzDropdown'
MzDropdownCard.componentName = 'MzDropdownCard'

MzDropdown.install = (Vue: VueConstructor) => {
  Vue.component(MzDropdown.componentName, MzDropdown)
  Vue.component(MzDropdownCard.componentName, MzDropdownCard)
}

export {
  MzDropdown,
  MzDropdownCard,
  MzDropdown as Dropdown,
  MzDropdownCard as DropdownCard
}
