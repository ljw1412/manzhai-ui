<template>
  <mz-navigation ref="sidebar"
    class="sidebar-navigation"
    :data="data"
    auto-scroll
    round="mini"
    scroll-behavior="auto"
    :auto-scroll-on-change="false"
    v-on="$listeners"></mz-navigation>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import MzNavigation from '@packages/Navigation'

@Component
export default class Sidebar extends Vue {
  @Prop({ type: [Array, Object], default: () => [] })
  readonly data!: any[] | object
  @Ref('sidebar')
  readonly sidebarRef!: MzNavigation

  scrollToCurrent(value?: string) {
    this.sidebarRef.slide(value)
  }
}
</script>

<style lang="scss">
.sidebar-navigation {
  .mz-list-group + .mz-list-group {
    margin-top: 60px;
  }
}
</style>
