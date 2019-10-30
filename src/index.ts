import './styles/global/index.scss'
import { VueConstructor } from 'vue'
import { InstallationOptions } from '../types/index'
import { changeTheme, getCurrentTheme } from './utils/theme'
import * as directives from './directives'
import Icon from '../packages/Icon/index'
import Button from '../packages/Button/index'
import Card from '../packages/Card/index'
import Cell from '../packages/Cell/index'
import CellGroup from '../packages/CellGroup/index'
import Dropdown from '../packages/Dropdown/index'
import {
  List,
  ListItem,
  ListGroup,
  ListItemGroup
} from '../packages/List/index'
import Navigation from '../packages/Navigation/index'
import SubHeader from '../packages/SubHeader/index'
import Switch from '../packages/Switch/index'
import Scrollbar from '../packages/Scrollbar/index'
import SildeGroup from '../packages/SlideGroup/index'
import { Tabs, Tab } from '../packages/Tabs/index'

const components: VueConstructor[] = [
  Icon,
  Button,
  Card,
  Cell,
  CellGroup,
  Dropdown,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Navigation,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Tabs,
  Tab
]

/**
 * 绑定自定义指令
 * @param Vue
 */
function bindDirectives(Vue: VueConstructor) {
  Object.keys(directives).forEach(key => {
    Vue.directive(key.toLowerCase(), (directives as Record<string, any>)[key])
  })
}

/**
 * 绑定组件
 * @param Vue
 */
function bindComponents(Vue: VueConstructor) {
  components.forEach(component => {
    Vue.component(component.componentName, component)
  })
}

function registerIcon() {
  const svgs = require.context('@/icons', false, /\.svg$/)
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().map(requireContext)
  requireAll(svgs)
}

function init(options: InstallationOptions) {
  registerIcon()
  changeTheme(getCurrentTheme())
}

const install = function(
  Vue: VueConstructor,
  options: InstallationOptions = {}
) {
  Vue.prototype.$changeTheme = changeTheme
  Vue.prototype.$getCurrentTheme = getCurrentTheme
  bindDirectives(Vue)
  bindComponents(Vue)

  init(options)
}

export default {
  install,
  Icon,
  Button,
  Card,
  Cell,
  CellGroup,
  Dropdown,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Navigation,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Tabs,
  Tab
}
