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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCheckbox extends Vue {
  value = 1
  value2 = true
}
</script>

<style lang="scss" scoped>
</style>
