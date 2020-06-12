import Layout from './Layout'
import { VueConstructor } from 'vue'

Layout.componentName = 'MzLayout'
Layout.Header.componentName = 'MzHeader'
Layout.Footer.componentName = 'MzFooter'
Layout.Main.componentName = 'MzMain'
Layout.Aside.componentName = 'MzAside'

Layout.install = (Vue: VueConstructor) => {
  Vue.component(Layout.componentName, Layout)
  Vue.component(Layout.Header.componentName, Layout.Header)
  Vue.component(Layout.Footer.componentName, Layout.Footer)
  Vue.component(Layout.Main.componentName, Layout.Main)
  Vue.component(Layout.Aside.componentName, Layout.Aside)
}

export default Layout as VueConstructor
