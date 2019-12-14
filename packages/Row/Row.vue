<template>
  <div class="mz-row"
    :style="rowStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component
export default class MzRow extends Vue {
  @Provide('gutter')
  @Prop(Number)
  readonly gutter!: number

  get rowStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) {
      styles.margin = `0 -${this.gutter / 2}px`
    }
    return styles
  }
}
</script>

<style lang="scss">
.mz-row {
  position: relative;
  box-sizing: border-box;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }
}
</style>
