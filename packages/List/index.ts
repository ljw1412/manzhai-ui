import MzList from './List.vue'
import MzListItem from './ListItem.vue'
import MzListGroup from './ListGroup.vue'
import MzListItemGroup from './ListItemGroup.vue'
import { VueConstructor } from 'vue'

MzList.componentName = 'MzList'
MzListItem.componentName = 'MzListItem'
MzListGroup.componentName = 'MzListGroup'
MzListItemGroup.componentName = 'MzListItemGroup'

MzList.install = (Vue: VueConstructor) => {
  Vue.component(MzList.componentName, MzList)
  Vue.component(MzListItem.componentName, MzListItem)
  Vue.component(MzListGroup.componentName, MzListGroup)
  Vue.component(MzListItemGroup.componentName, MzListItemGroup)
}

export {
  MzList,
  MzListItem,
  MzListGroup,
  MzListItemGroup,
  MzList as List,
  MzListItem as ListItem,
  MzListGroup as ListGroup,
  MzListItemGroup as ListItemGroup
}
