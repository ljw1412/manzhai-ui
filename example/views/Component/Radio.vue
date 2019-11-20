<template>
  <div class="component-radio">
    <mz-radio v-model="value"
      value="1">测试1</mz-radio>
    <mz-radio v-model="value"
      value="2">测试2</mz-radio>
    <mz-radio v-model="value"
      circle
      value="3"
      disabled>测试3</mz-radio>
    <br>
    <br>
    <mz-radio-group name="test2"
      v-model="value"
      block
      :data="list"></mz-radio-group>
    <br>
    <mz-radio-group name="test3"
      v-model="value">
      <mz-radio value="1">测试1</mz-radio>
      <mz-radio value="2">测试2</mz-radio>
      <mz-radio circle
        value="3">测试3</mz-radio>
    </mz-radio-group>
    <br />
    <mz-radio-group name="test4"
      v-model="value">
      <mz-radio-button value="1"
        border></mz-radio-button>
      <mz-radio-button value="2"
        border></mz-radio-button>
      <mz-radio-button value="3"
        border
        disabled></mz-radio-button>
    </mz-radio-group>
    <br />
    <mz-radio-group name="test2"
      v-model="value"
      :data="list"
      block
      button
      border></mz-radio-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentRadio extends Vue {
  value = 0
  list = [
    { value: '1', label: '测试1' },
    { value: '2', label: '测试2' },
    { value: '3', label: '测试3' }
  ]
}
</script>

<style lang="scss" scoped>
</style>
