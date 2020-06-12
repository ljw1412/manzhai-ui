<script lang="tsx">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import { RawLocation, NavigationGuard } from 'vue-router'
import { typeOf } from 'manzhai-ui/src/utils/assist'
import { MzList, MzListItem, MzListGroup, MzListItemGroup } from '../List/index'

interface NavigationItem {
  value: any
  group?: string
  icon?: string
  title?: string
  text?: string
  to?: RawLocation
  isCollapsed?: boolean
  children?: NavigationItem[]
}

@Component({ components: { MzList, MzListItem, MzListGroup } })
export default class MzNavigation extends Vue {
  @Prop({ default: () => [] })
  readonly data!: NavigationItem | NavigationItem[]
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object
  @Prop(Boolean)
  readonly autoScroll!: boolean
  @Prop({ type: Boolean, default: true })
  readonly autoScrollOnChange!: boolean
  @Prop({ type: String, default: 'smooth' })
  readonly scrollBehavior!: ScrollBehavior
  @Ref('navigation')
  readonly navigation!: HTMLDivElement

  slide(value?: string) {
    if (this.autoScroll && (this.autoScrollOnChange || value === 'init')) {
      setTimeout(() => {
        const active = this.navigation.querySelector('.router-link-active')
        active &&
          active.scrollIntoView({
            block: 'center',
            behavior: this.scrollBehavior
          })
      }, 0)
    }
  }

  onChange(value: string) {
    this.slide()
    this.$emit('change', value)
  }

  onItemClick() {
    this.$emit('item-click', ...arguments)
  }

  render(h: CreateElement) {
    if (!['object', 'array'].includes(typeOf(this.data)))
      throw new TypeError('请传入正确的导航栏格式!')

    const data = typeOf(this.data) === 'object' ? [this.data] : this.data
    const listData = {
      props: {
        clickable: true,
        gutter: '5px'
      },
      on: {
        change: this.onChange,
        itemClick: this.onItemClick
      }
    }

    const navItems = this.renderItem(data as NavigationItem[])

    return (
      <div ref="navigation" class="mz-navigation">
        <mz-list {...listData}>{navItems}</mz-list>
      </div>
    )
  }

  renderItem(data: NavigationItem[]): any {
    return data.map(item => {
      if (!item.value && !item.group) item.value = item.title
      const baseProps: VNodeData = {
        props: {
          ...item,
          round: this.round,
          clickable: true,
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
      if (item.to) {
        return <router-link to={item.to}>{itemNode}</router-link>
      }
      return itemNode
    })
  }

  mounted() {
    this.slide('init')
  }
}
</script>
