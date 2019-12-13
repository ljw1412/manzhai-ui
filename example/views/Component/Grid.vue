<template>
  <div class="component-grid">
    <mz-row>
      <mz-col :span="1">aaaaaa</mz-col>
      <mz-col :span="1">bbbbbb</mz-col>
      <mz-col :span="1">cccccc</mz-col>
    </mz-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentGrid extends Vue {}
</script>

<style lang="scss" scoped>
</style>
