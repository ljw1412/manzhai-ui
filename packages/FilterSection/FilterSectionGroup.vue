<template>
  <div class="mz-filter-section-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MzFilterSectionGroup extends Vue {}
</script>

<style lang="scss">
</style>
