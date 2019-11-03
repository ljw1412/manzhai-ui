<template>
  <div class="component-tabs">
    动画效果:<mz-switch v-model="animation"></mz-switch>
    <span> </span>
    布局铺满:<mz-switch v-model="grow"></mz-switch>
    <span> </span>
    bar铺满:<mz-switch v-model="isFillBar"></mz-switch>
    <mz-button @click="count=(count+20)%21">-</mz-button>

    <mz-tabs v-model="value"
      align="right"
      :active-bar-mode="isFillBar?'fill':'none'"
      :animation="animation"
      :grow="grow">
      <mz-tab v-for="index of count"
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
  animation = true
  grow = false
  count = 20
  isFillBar = false
}
</script>

<style lang="scss" scoped>
</style>
