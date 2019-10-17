<template>
  <div class="component-card">
    <mz-card :elevation="elevation"
      outline
      style="margin:10px">
      <span @click="elevation = (elevation + 1) % 25">测试</span>
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
