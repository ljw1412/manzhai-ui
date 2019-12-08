<template>
  <div class="component-checkbox">
    <mz-checkbox v-model="value"
      name="checkbox"
      :trueValue="1"
      :falseValue="2">测试</mz-checkbox>
    <mz-checkbox v-model="value2"
      name="checkbox"
      label="测试"
      value="test">测试</mz-checkbox>
    <br>
    <mz-checkbox v-model="isAll"
      :indeterminate="indeterminate"
      @change="onCheckAll">全选</mz-checkbox>

    <mz-checkbox-group v-model="groupValue"
      ref="checkboxGroup"
      @change="onGroupChange">
      <mz-checkbox v-for="item of list"
        :key="item"
        :label="'测试'+item"
        :value="item"></mz-checkbox>
    </mz-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCheckbox extends Vue {
  value = 1
  value2 = true

  isAll = false

  groupValue = ['1']
  list = ['1', '2', '3']
  get indeterminate() {
    return (
      this.groupValue.length > 0 && this.groupValue.length < this.list.length
    )
  }

  onCheckAll(value: boolean) {
    console.log('onCheckAll', value)
    this.groupValue = value ? this.list : []
  }

  onGroupChange(data: any[]) {
    console.log('onGroupChange', data)
    this.isAll = data.length === this.list.length
  }
}
</script>

<style lang="scss" scoped>
</style>
