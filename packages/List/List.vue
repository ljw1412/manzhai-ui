<template>
  <div class="mz-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MzList extends Vue {}
</script>

<style lang="scss">
</style>
