<template>
  <div class="component-tabs">
    <mz-tabs>
      <mz-tab v-for="index of 4"
        :key="index"
        :label="'Tab'+index"
        :value="index"></mz-tab>
    </mz-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentTabs extends Vue {}
</script>

<style lang="scss" scoped>
</style>
