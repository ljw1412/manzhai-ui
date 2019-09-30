<template>
  <div class="mz-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MzCard extends Vue {}
</script>

<style lang="scss">
</style>
