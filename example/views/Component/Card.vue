<template>
  <div class="component-card">
    <mz-sub-header>当前层级：{{elevation}}</mz-sub-header>
    <mz-card :elevation="elevation"
      style="margin:10px;width:200px;height:200px;"
      @click.native="elevation = (elevation + 1) % 25">
      <span>点我</span>
    </mz-card>
    <br>
    <mz-card outlined
      style="margin:10px;width:200px;height:200px;">
      <span>扁平边框模式</span>
    </mz-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCard extends Vue {
  elevation = 0
}
</script>

<style lang="scss" scoped>
</style>
