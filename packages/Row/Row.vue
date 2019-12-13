<template>
  <div class="mz-row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MzRow extends Vue {}
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
}
</style>
