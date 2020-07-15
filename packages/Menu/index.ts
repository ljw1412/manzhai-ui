import MzMenu from './Menu'
import MzSubMenu from './SubMenu'
import MzMenuItem from './MenuItem'
import MzMenuGroup from './MenuGroup'
import { VueConstructor } from 'vue'

MzMenu.componentName = 'MzMenu'
MzSubMenu.componentName = 'MzSubMenu'
MzMenuItem.componentName = 'MzMenuItem'
MzMenuGroup.componentName = 'MzMenuGroup'

MzMenu.install = (Vue: VueConstructor) => {
  Vue.component(MzMenu.componentName, MzMenu)
  Vue.component(MzSubMenu.componentName, MzSubMenu)
  Vue.component(MzMenuItem.componentName, MzMenuItem)
  Vue.component(MzMenuGroup.componentName, MzMenuGroup)
}

export {
  MzMenu,
  MzSubMenu,
  MzMenuItem,
  MzMenuGroup,
  MzMenu as Menu,
  MzSubMenu as SubMenu,
  MzMenuItem as MenuItem,
  MzMenuGroup as MenuGroup
}
