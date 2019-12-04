<template>
  <div class="component-select">
    <mz-select :list="list"></mz-select>
    <mz-select v-model="value"
      :dropdownMatchSelectWidth="true"
      :list="list"></mz-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentSelect extends Vue {
  value = ''
  list = [
    { value: 1, label: '甲' },
    { value: 2, label: '乙' },
    { value: 3, label: '丙' }
  ]
}
</script>

<style lang="scss" scoped>
.component-select {
  height: 200%;
}
</style>
