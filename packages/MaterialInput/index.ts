import MzMaterialInput from './MaterialInput'
import { VueConstructor } from 'vue'

MzMaterialInput.componentName = 'MzMaterialInput'

MzMaterialInput.install = (Vue: VueConstructor) => {
  Vue.component(MzMaterialInput.componentName, MzMaterialInput)
}

export default MzMaterialInput
