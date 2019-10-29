import MzTabs from './Tabs.vue'
import MzTab from './Tab.vue'
import { VueConstructor } from 'vue'

MzTabs.componentName = 'MzTabs'
MzTab.componentName = 'MzTab'

MzTabs.install = (Vue: VueConstructor) => {
  Vue.component(MzTabs.componentName, MzTabs)
  Vue.component(MzTab.componentName, MzTab)
}

export { MzTabs, MzTab, MzTabs as Tabs, MzTab as Tab }
