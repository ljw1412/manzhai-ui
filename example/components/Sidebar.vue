<template>
  <div class="sidebar">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly data!: any[]
}
</script>

<style lang="scss">
</style>
