<template>
  <div class="component-switch">
    <mz-switch v-model="value"
      size="small"></mz-switch>
    <mz-switch v-model="value"></mz-switch>
    <mz-switch v-model="value"
      size="large"></mz-switch>
    <mz-switch disabled></mz-switch>
    <mz-switch v-model="value"
      circle></mz-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentSwitch extends Vue {
  value = true
}
</script>

<style lang="scss" scoped>
.mz-switch + .mz-switch {
  margin-left: 10px;
}
</style>
