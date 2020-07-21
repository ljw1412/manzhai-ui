<template>
  <div class="sidebar">
    <mz-navigation :data="this.data"
      auto-scroll
      round="mini"
      scroll-behavior="auto"
      :auto-scroll-on-change="false"></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  @Prop({ type: [Array, Object], default: () => [] })
  readonly data!: any[] | object
}
</script>

<style lang="scss">
</style>
