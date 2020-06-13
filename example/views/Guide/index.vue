<template>
  <div class="page-guide">
    <mz-checkbox v-model="value2">选择项</mz-checkbox>

    <mz-checkbox-group v-model="value">
      <mz-checkbox value="A">选择项A</mz-checkbox>
      <mz-checkbox value="B">选择项B</mz-checkbox>
    </mz-checkbox-group>

    <mz-radio-group name="radio-group-2"
      v-model="value2">
      <mz-radio value="1">选项1</mz-radio>
      <mz-radio value="2">选项2</mz-radio>
      <mz-radio value="3">选项3</mz-radio>
    </mz-radio-group>

    <mz-rate :value="3.7"
      readonly
      show-text />

    <mz-select v-model="value"
      placeholder="目标">

    </mz-select>

    <mz-button color="primary">发多少</mz-button>

    <mz-tag size="small">标签</mz-tag>
    <mz-tag size="medium">标签</mz-tag>
    <mz-tag>标签</mz-tag>
    <mz-tag size="large">标签</mz-tag>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageGuide extends Vue {
  countries = [
    { label: '全部', value: 'All' },
    { label: '中国', value: 'China' },
    { label: '日本', value: 'Janpan' },
    { label: '新加坡', value: 'Singapore' },
    { label: '美国', value: 'America' },
    { label: '英国', value: 'England' }
  ]
}
</script>

<style lang="scss" scoped>
</style>
