<script lang="tsx">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import MzTab from './Tab.vue'
import MzSlideGroup from '../SlideGroup'
import { CreateElement } from 'vue'

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

  render(h: CreateElement) {
    return (
      <div class="mz-tabs">
        <mz-slide-group ref="slideGroup" key="slideGroupInTabs">
          {this.renderNav(this.navClasses)}
        </mz-slide-group>
        <div class="mz-tabs__content" key="tabsContent">
          {this.$slots.default}
        </div>
      </div>
    )
  }

  get navClasses() {
    const classes = ['mz-tabs__nav']
    if (['left', 'center', 'right'].includes(this.align)) {
      classes.push(`mz-tabs__nav--${this.align}`)
    }
    return classes
  }

  renderNav(classes: any[]) {
    const data = { class: classes, key: 'tabsNav' }
    return <div {...data}>{this.itemList.map(item => item.getTabNode())}</div>
  }

  selectItem(vm: MzTab) {
    // 动画方向判断
    let preActiveItemIndex = this.itemList.findIndex(item => item.active)
    const currentItemIndex = this.itemList.findIndex(item => item === vm)
    if (preActiveItemIndex === -1) preActiveItemIndex = 0
    this.itemList[preActiveItemIndex].reverse = vm.reverse =
      preActiveItemIndex > currentItemIndex
    // 修改选中状态
    this.itemList.forEach(item => {
      item.active = false
    })
    this.$nextTick(() => {
      vm.active = true
    })
  }

  setValue(vm: MzTab) {
    if (this.value !== vm.value) {
      this.$emit('change', vm.value)
      this.$emit('input', vm.value)
      // this.selectItem(vm)
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

  @Watch('value')
  onValueChange(value: any) {
    const vm = this.itemList.find(item => item.value === value)
    if (vm) this.selectItem(vm)
  }

  @Watch('itemList.length')
  onItemListChange() {
    if (this.slideGroupRef) {
      this.$nextTick(() => {
        this.slideGroupRef.sizeChange()
      })
    }
  }
}
</script>

<style lang="scss">
.mz-tabs {
  &__nav {
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
      .mz-tab:first-child {
        margin-left: auto;
      }
    }
  }

  &__content {
    position: relative;
    overflow: hidden;
  }
}
</style>
