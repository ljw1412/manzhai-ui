<template>
  <div class="component-grid">
    <mz-row :gutter="20">
      <mz-col :span="1">
        <div class="col-card">1</div>
      </mz-col>
      <mz-col :span="2">
        <div class="col-card">2</div>
      </mz-col>
      <mz-col :span="3">
        <div class="col-card">3</div>
      </mz-col>
    </mz-row>

    <mz-row :gutter="20">
      <mz-col :span="1">aaaaaa</mz-col>
      <mz-col :span="1"
        :offset="5">bbbbbb</mz-col>
      <mz-col :span="1">cccccc</mz-col>
    </mz-row>

    <mz-row flex
      justify="center"
      :gutter="20">
      <mz-col :span="1">
        <div class="col-card">1</div>
      </mz-col>
      <mz-col :span="2">
        <div class="col-card">2</div>
      </mz-col>
      <mz-col :span="3">
        <div class="col-card">3</div>
      </mz-col>
    </mz-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentGrid extends Vue {}
</script>

<style lang="scss" scoped>
.component-grid {
  color: var(--color-text-primary);
}

.col-card {
  height: 30px;
  background-color: var(--color-card-background);
  border-radius: 5px;
}
</style>
