<template>
  <div class="component-navigation">
    <mz-navigation :data="data"></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentNavigation extends Vue {
  data = { label: '组1', list: [{ label: '随随便便的1', value: '1' }] }
}
</script>

<style lang="scss" scoped>
</style>
