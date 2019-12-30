<template>
  <div class="mz-form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MzForm extends Vue {}
</script>

<style lang="scss" >
</style>
