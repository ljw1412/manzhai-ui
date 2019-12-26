<template>
  <div class="component-filter-section">
    标题位置： <mz-radio-group name="test3"
      v-model="position">
      <mz-radio value="top">top</mz-radio>
      <mz-radio value="left">left</mz-radio>
      <mz-radio value="right">right</mz-radio>
    </mz-radio-group>

    <mz-filter-section v-model="value"
      title="类型1："
      :title-position="position">
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>

    <!-- <mz-filter-section-item v-for="i of 10"
      :key="i"
      :value="i">选项{{i}}</mz-filter-section-item> -->

    <mz-filter-section v-model="value"
      title="类型1："
      :title-position="position"
      title-width="100px">
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>

    <mz-button @click="value = (Number(value)+1)%10">+</mz-button>
    {{value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentFilterSection extends Vue {
  position = 'top'
  value = ''
}
</script>

<style lang="scss" scoped>
.component-filter-section {
  color: var(--color-text-primary);
}
</style>
