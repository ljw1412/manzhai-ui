import MzTabs from './Tabs.vue'
import MzTab from './Tab.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzTabs.install = (Vue: VueConstructor) => {
  Vue.component(MzTabs.name, MzTabs)
  Vue.component(MzTab.name, MzTab)
}

export { MzTabs, MzTab, MzTabs as Tabs, MzTab as Tab }
