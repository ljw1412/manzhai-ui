<template>
  <mz-navigation ref="sidebar"
    class="sidebar-navigation"
    auto-scroll
    round="mini"
    scroll-behavior="auto"
    :gutter="gutter"
    :auto-scroll-on-change="false"
    :data="data"
    v-on="$listeners"></mz-navigation>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import MzNavigation from '@packages/Navigation'

@Component
export default class Sidebar extends Vue {
  @Prop({ type: [Array, Object], default: () => [] })
  readonly data!: any[] | object
  @Prop({ type: String, default: '5px' })
  readonly gutter!: string
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
