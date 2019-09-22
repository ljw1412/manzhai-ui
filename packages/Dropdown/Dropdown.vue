<template>
  <div class="mz-dropdown">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MzDropdown extends Vue {}
</script>

<style lang="scss">
</style>
