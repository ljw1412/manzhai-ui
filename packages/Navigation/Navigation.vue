<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup, MzListItemGroup } from '../List/index'
import { CreateElement } from 'vue'
import { RawLocation } from 'vue-router'
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

  @Watch('data', { immediate: true })
  onDataChange(data: NavigationItem | NavigationItem[]) {
    this.$nextTick(() => {
      const list = typeOf(data) === 'object' ? [this.data] : this.data
      this.findCurrent(list as NavigationItem[])
    })
  }

  findCurrent(data: NavigationItem[]) {
    const found = false
    data.forEach(item => {
      if (item.to) {
        const { name, path } = this.$router.resolve(item.to).resolved
        if (this.$route.name === name || this.$route.path === path) {
          this.value = item.value || item.label
        }
      }
      if (item.children && !found) {
        this.findCurrent(item.children)
      }
    })
  }

  go(item: NavigationItem) {
    return () => {
      if (item.to) {
        const { name, path } = this.$router.resolve(item.to).resolved
        if (this.$route.name !== name && this.$route.path !== path) {
          this.$router.push(item.to)
        }
      }
    }
  }

  render(h: CreateElement) {
    if (!['object', 'array'].includes(typeOf(this.data)))
      throw new TypeError('请传入正确的导航栏格式!')

    const data = typeOf(this.data) === 'object' ? [this.data] : this.data

    const navItems = this.renderItem(data as NavigationItem[])

    return (
      <div class="mz-navigation">
        <mz-list v-model={this.value} gutter="5px">
          {navItems}
        </mz-list>
      </div>
    )
  }

  renderItem(data: NavigationItem[]): any {
    return data.map(item => {
      if (!item.value && !item.group) item.value = item.label
      const baseProps = {
        props: {
          ...item,
          round: this.round,
          link: true,
          ripple: this.ripple
        },
        on: {
          click: this.go(item)
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
      return <mz-list-item {...baseProps}></mz-list-item>
    })
  }
}
</script>

<style lang="scss">
</style>
