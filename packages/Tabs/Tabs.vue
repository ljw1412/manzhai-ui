<script lang="tsx">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import MzTab from './Tab.vue'
import MzSlideGroup from '../SlideGroup'

@Component({
  provide() {
    return { mzTabs: this }
  }
})
export default class MzTabs extends Vue {
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly position!: string
  @Prop({ type: Boolean, default: true })
  readonly animation!: boolean
  @Prop(Boolean)
  readonly grow!: boolean
  @Prop(String)
  readonly align!: 'left' | 'center' | 'right'
  @Prop(String)
  readonly activeBarMode!: 'fill' | 'none'
  @Ref('slideGroup')
  readonly slideGroupRef!: MzSlideGroup

  itemList: MzTab[] = []
  activedTabVNode: VNode | null = null

  get activedTab() {
    return this.itemList.find(item => item.active)
  }

  get activeBarStyle() {
    let styles: Record<string, any> = { display: 'none' }
    if (this.activedTabVNode && this.activedTabVNode.elm) {
      const elm = this.activedTabVNode.elm as HTMLElement
      styles = {
        width: elm.clientWidth + 'px',
        left: elm.offsetLeft + 'px',
        bottom: 0
      }
    }
    return styles
  }

  render(h: CreateElement) {
    return (
      <div class="mz-tabs">
        <mz-slide-group
          ref="slideGroup"
          key="slideGroupInTabs"
          on-resize={this.flushActiveBar}>
          {this.renderNav()}
        </mz-slide-group>
        <div class="mz-tabs__content" key="tabsContent">
          {this.$slots.default}
        </div>
      </div>
    )
  }

  renderNav() {
    const data = {
      class: [
        'mz-tabs__nav',
        { 'mz-tabs__nav--fill': this.activeBarMode === 'fill' }
      ],
      key: 'tabsNav'
    }
    if (['left', 'center', 'right'].includes(this.align)) {
      data.class.push(`mz-tabs__nav--${this.align}`)
    }
    return (
      <div {...data}>
        <div class="mz-tabs__active-bar" style={this.activeBarStyle}></div>
        {this.itemList.map(item => item.getTabNode())}
      </div>
    )
  }

  reverseItemTransiton(vm: MzTab) {
    let preActiveItemIndex = this.itemList.findIndex(item => item.active)
    const currentItemIndex = this.itemList.findIndex(item => item === vm)
    if (preActiveItemIndex === -1) preActiveItemIndex = 0
    this.itemList[preActiveItemIndex].reverse = vm.reverse =
      preActiveItemIndex > currentItemIndex
  }

  selectItem(vm: MzTab) {
    // 动画方向判断
    this.reverseItemTransiton(vm)
    // 修改选中状态
    if (this.activedTab) this.activedTab.active = false
    // this.itemList.forEach(item => {
    //   item.active = false
    // })
    this.$nextTick(() => {
      vm.active = true
    })
  }

  setValue(vm: MzTab) {
    if (this.value !== vm.value) {
      this.$emit('change', vm.value)
      this.$emit('input', vm.value)
      this.selectItem(vm)
    }
  }

  flushActiveBar() {
    const activedTabVNode = this.activedTabVNode
    this.activedTabVNode = null
    this.$nextTick(() => {
      this.activedTabVNode = activedTabVNode
    })
  }

  @Watch('itemList.length')
  onItemListChange() {
    if (this.slideGroupRef) {
      this.$nextTick(() => {
        this.slideGroupRef.sizeChange()
      })
    }
  }

  @Watch('activedTab')
  onActivedTab(vm: any) {
    setTimeout(() => {
      if (this.activedTab && this.activedTab.vnode) {
        this.activedTabVNode = this.activedTab.vnode
      }
    }, 0)
  }

  @Watch('grow')
  onGrowChange(val: boolean) {
    this.flushActiveBar()
  }
  @Watch('align')
  onAlignChange(val: string) {
    this.flushActiveBar()
  }
}
</script>
