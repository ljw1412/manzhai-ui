<template>
  <div class="component-tabs">
    <mz-tabs v-model="value"
      :animation="true">
      <mz-tab v-for="index of 4"
        :key="index"
        :label="'Tab'+index"
        :value="index">{{index}}:测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</mz-tab>
    </mz-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentTabs extends Vue {
  value = 1
}
</script>

<style lang="scss" scoped>
</style>
