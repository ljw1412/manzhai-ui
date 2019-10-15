<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup } from '../List/index'
import { CreateElement } from 'vue'
import { RawLocation } from 'vue-router'
import { typeOf } from '../../src/utils/assist'

interface NavigationItem {
  icon?: string
  label?: string
  value: any
  route?: RawLocation
  isCollapsed?: boolean
  children?: NavigationItem[]
}

interface NavigationGroup {
  label?: string
  list: NavigationItem[]
}

@Component({
  components: { MzList, MzListItem, MzListGroup }
})
export default class MzNavigation extends Vue {
  @Prop({ default: () => [] })
  readonly data!: NavigationGroup | NavigationGroup[]

  render(h: CreateElement) {
    if (!['object', 'array'].includes(typeOf(this.data)))
      throw new TypeError('请传入正确的导航栏格式!')
    let data = this.data
    if (typeOf(this.data) === 'object') data = [this.data as NavigationGroup]

    const groups = this.renderGroup(data as NavigationGroup[])

    return <div class="mz-navigation">{groups}</div>
  }

  renderGroup(data: NavigationGroup[]) {
    return data.map(item => {
      const listItems = this.renderItem(item.list)
      return (
        <mz-list-group label={item.label}>
          <mz-list>{listItems}</mz-list>
        </mz-list-group>
      )
    })
  }

  renderItem(data: NavigationItem[]): any {
    return data.map(item => {
      if (item.isCollapsed === undefined) this.$set(item, 'isCollapsed', false)
      if (item.children) {
        const childrenItem = this.renderItem(item.children)
        return (
          <mz-list-group>
            <mz-list-item
              label={item.label}
              value={item.value}
              on-click={() => (item.isCollapsed = !item.isCollapsed)}
            ></mz-list-item>
            <div style="padding:0 5px" v-show={!item.isCollapsed}>
              {childrenItem}
            </div>
          </mz-list-group>
        )
      }
      return <mz-list-item label={item.label} value={item.value}></mz-list-item>
    })
  }
}
</script>

<style lang="scss">
</style>
