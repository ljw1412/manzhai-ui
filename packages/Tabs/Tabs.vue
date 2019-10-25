<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import MzTab from './Tab.vue'
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
  itemList: MzTab[] = []

  render(h: CreateElement) {
    return (
      <div class="mz-tabs">
        <div class="mz-tabs__nav">
          {this.itemList.map(item => item.getTabNode())}
        </div>
        <div class="mz-tabs__content">{this.$slots.default}</div>
      </div>
    )
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
}
</script>

<style lang="scss">
.mz-tabs {
  &__nav {
    display: flex;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
  }

  &__content {
    position: relative;
    overflow: hidden;
  }
}
</style>
