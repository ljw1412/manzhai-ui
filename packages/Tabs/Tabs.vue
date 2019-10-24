<template>
  <div class="mz-tabs">
    <mz-tab-nav></mz-tab-nav>
    <div class="mz-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import MzTabNav from './TabNav.vue'
import MzTab from './Tab.vue'

@Component({
  components: {
    MzTabNav
  },
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
  itemList: MzTab[] = []

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
  &__content {
    position: relative;
    overflow: hidden;
  }
}
</style>
