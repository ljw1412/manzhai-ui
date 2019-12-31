<template>
  <mz-row class="demo-block">
    <mz-col class="example">
      <slot name="example"></slot>
    </mz-col>
    <mz-col class="source-code">
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </mz-col>
  </mz-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentName extends Vue {}
</script>

<style lang="scss">
</style>
