<template>
  <div class="component-radio">
    <mz-radio v-model="value"
      value="1">测试1</mz-radio>
    <mz-radio v-model="value"
      value="2">测试2</mz-radio>
    <mz-radio v-model="value"
      square
      value="3">测试3</mz-radio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentRadio extends Vue {
  value = 0
}
</script>

<style lang="scss" scoped>
</style>
