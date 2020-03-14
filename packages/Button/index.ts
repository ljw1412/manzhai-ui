import MzButton from './Button'
import MzButtonGroup from './ButtonGroup'
import { VueConstructor } from 'vue'

MzButton.componentName = 'MzButton'
MzButtonGroup.componentName = 'MzButtonGroup'

MzButton.install = (Vue: VueConstructor) => {
  Vue.component(MzButton.componentName, MzButton)
  Vue.component(MzButtonGroup.componentName, MzButtonGroup)
}

export {
  MzButton,
  MzButtonGroup,
  MzButton as Button,
  MzButtonGroup as ButtonGroup
}
