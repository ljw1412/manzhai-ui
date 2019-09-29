import './styles/global/index.scss'
import { VueConstructor } from 'vue'
import { changeTheme } from './utils/theme'
import * as directives from './directives'
import Icon from '../packages/Icon/index'
import Button from '../packages/Button/index'
import Cell from '../packages/Cell/index'
import CellGroup from '../packages/CellGroup/index'
import Switch from '../packages/Switch/index'
import Card from '../packages/Card/index'
import Dropdown from '../packages/Dropdown/index'
import { List, ListItem, ListGroup } from '../packages/List/index'

const components = [
  Icon,
  Button,
  Cell,
  CellGroup,
  Switch,
  Card,
  Dropdown,
  List,
  ListItem,
  ListGroup
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
    Vue.component(component.name, component)
  })
}

const install = function(Vue: VueConstructor, options = {}) {
  Vue.prototype.$changeTheme = changeTheme
  bindDirectives(Vue)
  bindComponents(Vue)
}

export default {
  install,
  Icon,
  Button,
  Cell,
  CellGroup,
  Switch,
  Dropdown,
  List,
  ListItem,
  ListGroup
}
