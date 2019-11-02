<script lang="tsx">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import MzTab from './Tab.vue'
import MzSlideGroup from '../SlideGroup'
import { CreateElement, VNode } from 'vue'

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
  @Ref('slideGroup')
  readonly slideGroupRef!: MzSlideGroup
  itemList: MzTab[] = []
  activedTabVNode: VNode | null = null

  get activedTab() {
    return this.itemList.find(item => item.active)
  }

  get activeBarStyle() {
    if (this.activedTabVNode && this.activedTabVNode.elm) {
      const elm = this.activedTabVNode.elm as HTMLElement
      return {
        width: elm.clientWidth + 'px',
        left: elm.offsetLeft + 'px',
        bottom: 0
      }
    }
    return { display: 'none' }
  }

  render(h: CreateElement) {
    return (
      <div class="mz-tabs">
        <mz-slide-group ref="slideGroup" key="slideGroupInTabs">
          {this.renderNav()}
        </mz-slide-group>
        <div class="mz-tabs__content" key="tabsContent">
          {this.$slots.default}
        </div>
      </div>
    )
  }

  renderNav() {
    const data = { class: ['mz-tabs__nav'], key: 'tabsNav' }
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

  addItem(vm: MzTab) {
    this.itemList.push(vm)
    if (vm.value === this.value) {
      vm.active = true
    }
  }

  removeItem(vm: MzTab) {
    const index = this.itemList.findIndex(item => item === vm)
    if (index != -1) {
      this.itemList.splice(index, 1)
    }
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
    this.$nextTick(() => {
      if (this.activedTab && this.activedTab.vnode) {
        this.activedTabVNode = this.activedTab.vnode
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-tabs {
  --mz-tabs__active-bar-color: var(--color-primary);

  &__nav {
    position: relative;
    display: flex;
    height: 36px;
    line-height: 36px;
    &--center,
    &--left {
      .mz-tab:last-child {
        margin-right: auto;
      }
    }
    &--center,
    &--right {
      .mz-tabs__active-bar + .mz-tab {
        margin-left: auto;
      }
    }
  }

  &__active-bar {
    position: absolute;
    height: 2px;
    background-color: var(--mz-tabs__active-bar-color);
    transition: all $primary-transition;
  }

  &__content {
    position: relative;
    overflow: hidden;
  }
}
</style>
