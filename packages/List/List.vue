<template>
  <div class="mz-list"
    :class="{'mz-list--disabled':disabled}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
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
  @Prop(String)
  readonly size!: string

  itemList: ListItem[] = []

  selectItem(vm: ListItem) {
    this.itemList.forEach(item => {
      item.mActive = false
    })
    vm.mActive = true
  }

  setValue(value: any, data: any, vm: ListItem) {
    if (this.value === undefined || this.value !== value) {
      this.$emit('input', value)
      this.$emit('change', value, data)
      // this.selectItem(vm)
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
@import '@/styles/common/index.scss';
</style>
