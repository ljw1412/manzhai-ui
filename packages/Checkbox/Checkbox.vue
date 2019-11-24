<template>
  <label class="mz-checkbox">
  </label>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import FormElement from '@/mixins/FormElement'

@Component
export default class MzCheckbox extends Mixins(FormElement) {}
</script>

<style lang="scss">
</style>
