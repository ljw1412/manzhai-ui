<template>
  <mz-navigation class="sidebar-navigation"
    :data="data"
    auto-scroll
    round="mini"
    scroll-behavior="auto"
    :auto-scroll-on-change="false"></mz-navigation>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  @Prop({ type: [Array, Object], default: () => [] })
  readonly data!: any[] | object
}
</script>

<style lang="scss">
.sidebar-navigation {
  .mz-list-group + .mz-list-group {
    margin-top: 60px;
  }
}
</style>
