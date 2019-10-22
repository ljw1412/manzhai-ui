<template>
  <div class="mz-tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MzTab from './Tab.vue'

@Component({
  provide() {
    return { mzTabs: this }
  }
})
export default class MzTabs extends Vue {
  @Prop()
  readonly value!: any
  itemList: MzTab[] = []

  selectItem(vm: MzTab) {
    this.itemList.forEach(item => {
      item.active = false
    })
    vm.active = true
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
  }

  removeItem(vm: MzTab) {
    const index = this.itemList.findIndex(item => item === vm)
    if (index != -1) {
      this.itemList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.mz-tabs {
  display: flex;
  height: 36px;
  line-height: 36px;
}
</style>
