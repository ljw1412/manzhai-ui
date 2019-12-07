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
    <mz-checkbox :group="$refs.checkboxGroup">全选</mz-checkbox>

    <mz-checkbox-group v-model="groupValue"
      ref="checkboxGroup">
      <mz-checkbox label="测试1"
        value="1"></mz-checkbox>
      <mz-checkbox label="测试2"
        value="2"></mz-checkbox>
      <mz-checkbox label="测试3"
        value="3"></mz-checkbox>
    </mz-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCheckbox extends Vue {
  value = 1
  value2 = true

  groupValue = ['1']
}
</script>

<style lang="scss" scoped>
</style>
