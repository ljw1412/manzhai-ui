import MzPagination from './Pagination'
import { VueConstructor } from 'vue'

MzPagination.componentName = 'MzPagination'

MzPagination.install = (Vue: VueConstructor) => {
  Vue.component(MzPagination.componentName, MzPagination)
}

export default MzPagination
