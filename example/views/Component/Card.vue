<template>
  <div class="component-card">
    <p>当前层级：{{elevation}}</p>
    <mz-card :elevation="elevation"
      outline
      style="margin:10px;width:200px;height:200px;"
      @click.native="elevation = (elevation + 1) % 25">
      <span>点我</span>
    </mz-card>
    <br>
    <mz-card outline
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
