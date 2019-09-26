<template>
  <div class="mz-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator'
import ListItem from './ListItem.vue'
@Component({
  provide() {
    return { mzList: this }
  }
})
export default class MzList extends Vue {
  @Prop()
  readonly value!: any

  itemList: ListItem[] = []

  setValue(value: any, data: any, vm: ListItem) {
    this.$emit('input', value)
    this.$emit('change', value, data)
    this.itemList.forEach(item => {
      item.active = false
    })
    vm.active = true
  }

  addItem(vm: ListItem) {
    if (vm instanceof ListItem) {
      this.itemList.push(vm)
    }
  }

  removeItem(vm: ListItem) {
    const index = this.itemList.indexOf(vm)
    if (index != -1) {
      this.itemList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
</style>
