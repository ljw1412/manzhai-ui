import { VueConstructor } from 'vue'
import { getCurrentTheme } from './utils/theme'
import { hyphenate } from './utils/string'
import * as blanking from './utils/blanking'
import mzEventBus from './bus'
import * as directives from './directives'
import Anchor from '../packages/Anchor/index'
import Badge from '../packages/Badge/index'
import { Button, ButtonGroup } from '../packages/Button/index'
import Card from '../packages/Card/index'
import {
  Carousel,
  CarouselItem,
  CarouselIndicator
} from '../packages/Carousel/index'
import { Catalogue, CatalogueItem } from '../packages/Catalogue/index'
import { Cell, CellGroup } from '../packages/Cell/index'
import { Checkbox, CheckboxGroup } from '../packages/Checkbox/index'
import Col from '../packages/Col/index'
import Drawer from '../packages/Drawer/index'
import { Dropdown, DropdownCard } from '../packages/Dropdown/index'
import Form from '../packages/Form/index'
import {
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem
} from '../packages/FilterSection/index'
import FixedSection from '../packages/FixedSection/index'
import Heading from '../packages/Heading/index'
import Icon from '../packages/Icon/index'
import Image from '../packages/Image/index'
import ImagePreview from '../packages/ImagePreview/index'
import { Input, InputGroup } from '../packages/Input/index'
import Layout from '../packages/Layout/index'
import {
  List,
  ListItem,
  ListGroup,
  ListItemGroup
} from '../packages/List/index'
import Loading from '../packages/Loading/index'
import Mask from '../packages/Mask/index'
import { Masonry, MasonryItem } from '../packages/Masonry/index'
import Modal from '../packages/Modal/index'
import Navigation from '../packages/Navigation/index'
import { Progress, ProgressCircle } from '../packages/Progress/index'
import { Radio, RadioButton, RadioGroup } from '../packages/Radio/index'
import Rate from '../packages/Rate/index'
import Row from '../packages/Row/index'
import { Select, Option } from '../packages/Select/index'
import SubHeader from '../packages/SubHeader/index'
import Switch from '../packages/Switch/index'
import Scrollbar from '../packages/Scrollbar/index'
import SildeGroup from '../packages/SlideGroup/index'
import Snackbar from '../packages/Snackbar/index'
import State from '../packages/State/index'
import { Tabs, Tab } from '../packages/Tabs/index'
import Table from '../packages/Table/index'
import TableSimple from '../packages/TableSimple/index'
import Tag from '../packages/Tag/index'
import Tooltip from '../packages/Tooltip/index'
import MaterialInput from '../packages/MaterialInput/index'
// inject import

interface InstallationOptions {
  size?: string
}

const components: VueConstructor[] = [
  // inject component
  Anchor,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  CarouselIndicator,
  Catalogue,
  CatalogueItem,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Drawer,
  Dropdown,
  DropdownCard,
  Form,
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem,
  FixedSection,
  Heading,
  Icon,
  Image,
  ImagePreview,
  Input,
  InputGroup,
  Layout,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Loading,
  Mask,
  Masonry,
  MasonryItem,
  Modal,
  Navigation,
  Option,
  Progress,
  ProgressCircle,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Snackbar,
  State,
  Tabs,
  Tab,
  Table,
  TableSimple,
  Tag,
  Tooltip,
  MaterialInput
]

/**
 * 绑定自定义指令
 * @param Vue
 */
function bindDirectives(Vue: VueConstructor) {
  Object.keys(directives).forEach(key => {
    Vue.directive(hyphenate(key), (directives as Record<string, any>)[key])
  })
}

/**
 * 绑定组件
 * @param Vue
 */
function bindComponents(Vue: VueConstructor) {
  components.forEach(component => {
    // 如果包含install方法则在Vue原型中注册组件
    component.install && Vue.use(component)
    // 如果包含插件则在Vue原型中注册
    component.plugin && component.plugin(Vue)
  })
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
  Vue.prototype.$blanking = blanking
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
}

export default {
  install,
  directives,
  // inject component
  Anchor,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  CarouselIndicator,
  Catalogue,
  CatalogueItem,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Drawer,
  Dropdown,
  DropdownCard,
  Form,
  FilterSection,
  FilterSectionGroup,
  FilterSectionItem,
  FixedSection,
  Heading,
  Icon,
  Image,
  ImagePreview,
  Input,
  InputGroup,
  Layout,
  List,
  ListItem,
  ListGroup,
  ListItemGroup,
  Loading,
  Mask,
  Masonry,
  Modal,
  MasonryItem,
  Navigation,
  Option,
  Progress,
  ProgressCircle,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  SubHeader,
  Switch,
  Scrollbar,
  SildeGroup,
  Snackbar,
  State,
  Tabs,
  Tab,
  Table,
  TableSimple,
  Tag,
  Tooltip,
  MaterialInput
}
