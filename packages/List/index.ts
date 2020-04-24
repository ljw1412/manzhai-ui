import MzList from './List'
import MzListItem from './ListItem'
import MzListGroup from './ListGroup'
import MzListItemGroup from './ListItemGroup'
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
