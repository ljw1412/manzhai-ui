import './styles/index.scss'
import { VueConstructor } from 'vue'
import { InstallationOptions } from '../types/index'
import { getCurrentTheme } from './utils/theme'
import mzEventBus from './bus'
import * as directives from './directives'
import Button from '../packages/Button/index'
import Card from '../packages/Card/index'
import Cell from '../packages/Cell/index'
import { Checkbox, CheckboxGroup } from '../packages/Checkbox/index'
import CellGroup from '../packages/CellGroup/index'
import Col from '../packages/Col/index'
import { Dropdown, DropdownCard } from '../packages/Dropdown/index'
import {
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem
} from '../packages/FilterSection/index'
import Icon from '../packages/Icon/index'
import Image from '../packages/Image/index'
import Input from '../packages/Input/index'
import {
  List,
  ListItem,
  ListGroup,
  ListItemGroup
} from '../packages/List/index'
import Navigation from '../packages/Navigation/index'
import { Radio, RadioButton, RadioGroup } from '../packages/Radio/index'
import Row from '../packages/Row/index'
import { Select, Option } from '../packages/Select/index'
import SubHeader from '../packages/SubHeader/index'
import Switch from '../packages/Switch/index'
import Scrollbar from '../packages/Scrollbar/index'
import SildeGroup from '../packages/SlideGroup/index'
import Snackbar from '../packages/Snackbar/index'
import { Tabs, Tab } from '../packages/Tabs/index'
// inject import

const components: VueConstructor[] = [
  // inject component
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Dropdown,
  DropdownCard,
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem,
  Icon,
  Image,
  Input,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Navigation,
  Option,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Select,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Snackbar,
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
    // 如果包含插件则在Vue原型中注册
    if (component.plugin) {
      component.plugin(Vue)
    }
  })
}

/**
 * 图标注册
 */
function registerIcon() {
  const svgs = require.context('@/icons', false, /\.svg$/)
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().map(requireContext)
  requireAll(svgs)
}

const inject = () => {
  Array.prototype.remove = function(item) {
    const index = this.indexOf(item)
    if (~index) {
      this.splice(index, 1)
      return true
    }
    return false
  }
}

// Vue原型注入
const injectVuePrototype = (
  Vue: VueConstructor,
  options: InstallationOptions = {}
) => {
  Vue.prototype.$mzEventBus = mzEventBus
  Vue.prototype.$changeTheme = mzEventBus.changeTheme
  Vue.prototype.$getCurrentTheme = getCurrentTheme
  Vue.prototype.$MANZHAI = {
    size: options.size || ''
  }
}

const install = function(
  Vue: VueConstructor,
  options: InstallationOptions = {}
) {
  inject()
  injectVuePrototype(Vue, options)
  bindDirectives(Vue)
  bindComponents(Vue)
  registerIcon()
}

export default {
  install,
  // inject component
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Dropdown,
  DropdownCard,
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem,
  Icon,
  Image,
  Input,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Navigation,
  Option,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Select,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Snackbar,
  Tabs,
  Tab
}
