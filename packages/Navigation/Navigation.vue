<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup, MzListItemGroup } from '../List/index'
import { CreateElement, VNodeData } from 'vue'
import { RawLocation, NavigationGuard } from 'vue-router'
import { typeOf } from '../../src/utils/assist'

let tempValue = 0

interface NavigationItem {
  value: any
  group?: string
  icon?: string
  label?: string
  text?: string
  to?: RawLocation
  isCollapsed?: boolean
  children?: NavigationItem[]
}

@Component({
  components: { MzList, MzListItem, MzListGroup }
})
export default class MzNavigation extends Vue {
  @Prop({ default: () => [] })
  readonly data!: NavigationItem | NavigationItem[]
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object

  value = ''

  render(h: CreateElement) {
    if (!['object', 'array'].includes(typeOf(this.data)))
      throw new TypeError('请传入正确的导航栏格式!')

    const data = typeOf(this.data) === 'object' ? [this.data] : this.data

    const navItems = this.renderItem(data as NavigationItem[])

    return (
      <div class="mz-navigation">
        <mz-list gutter="5px">{navItems}</mz-list>
      </div>
    )
  }

  renderItem(data: NavigationItem[]): any {
    return data.map(item => {
      if (!item.value && !item.group) item.value = item.label
      const baseProps: VNodeData = {
        props: {
          ...item,
          round: this.round,
          link: true,
          ripple: this.ripple
        }
      }
      // 但凡有 group 字段的都认为是列表组模式
      if (item.group) {
        const groupItems = this.renderItem(item.children || [])
        return <mz-list-group label={item.group}>{groupItems}</mz-list-group>
      }

      // 没有 group 有 children 的认为是列表元素组模式(即可展开组模式)
      if (item.children) {
        const childrenItem = this.renderItem(item.children)
        return (
          <mz-list-item-group {...baseProps}>{childrenItem}</mz-list-item-group>
        )
      }
      // 都没有的为普通列表元素
      const itemNode = <mz-list-item {...baseProps}></mz-list-item>
      return item.to ? (
        <router-link to={item.to}>{itemNode}</router-link>
      ) : (
        itemNode
      )
    })
  }
}
</script>
