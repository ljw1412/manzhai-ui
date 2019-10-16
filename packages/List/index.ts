import MzList from './List.vue'
import MzListItem from './ListItem.vue'
import MzListGroup from './ListGroup.vue'
import MzListItemGroup from './ListItemGroup.vue'
import { VueConstructor } from 'vue'

// @ts-ignore
MzList.install = (Vue: VueConstructor) => {
  Vue.component(MzList.name, MzList)
  Vue.component(MzListItem.name, MzListItem)
  Vue.component(MzListGroup.name, MzListGroup)
  Vue.component(MzListItemGroup.name, MzListItemGroup)
}

// export default { List: MzList, ListItem: MzListItem, ListGroup: MzListGroup }

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
