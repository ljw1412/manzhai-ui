<template>
  <div class="mz-list"
    :class="{'mz-list--disabled':disabled}">
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
  @Prop(String)
  readonly gutter!: string
  @Prop(Boolean)
  readonly disabled!: boolean

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
      if (vm.value === this.value) {
        vm.active = true
      }
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
@import '@/styles/common/index.scss';

// .mz-list {
//   &--disabled {
//     .mz-list-item {
//       pointer-events: none;
//       &:not(.mz-list-item--active) {
//         font-weight: bold;
//         color: getColor(text-secondary);
//       }
//     }
//   }
// }
</style>
