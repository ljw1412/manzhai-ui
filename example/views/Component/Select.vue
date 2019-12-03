<template>
  <div class="component-select">
    <mz-select></mz-select>
    <mz-select :dropdownMatchSelectWidth="true"></mz-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentSelect extends Vue {}
</script>

<style lang="scss" scoped>
.component-select {
  height: 200%;
}
</style>
