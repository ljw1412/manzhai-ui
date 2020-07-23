<template>
  <mz-drawer v-model="mVisible"
    placement="left"
    width="220px"
    class="sidebar-drawer"
    title="菜单"
    v-resize="handleResize">
    <sidebar class="mb-20"
      :data="topbarNavigate"
      @item-click="mVisible = false"></sidebar>
    <sidebar v-show="!hideSidebarNavigation"
      ref="sidebar"
      :data="data"
      @item-click="mVisible = false"></sidebar>
  </mz-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch, Ref } from 'vue-property-decorator'
import topbarNavigate from '@example/options/topbar-navigate'
import Sidebar from './Sidebar.vue'

@Component({ components: { Sidebar } })
export default class SidebarDrawer extends Vue {
  @Model('visible:change', Boolean)
  readonly visible!: boolean
  @Prop({ type: [Array, Object], default: () => [] })
  readonly data!: any[] | object
  @Prop(Boolean)
  readonly hideSidebarNavigation!: boolean
  @Ref('sidebar')
  readonly sidebarRef!: Sidebar

  isFirst = true
  topbarNavigate = topbarNavigate

  get mVisible() {
    return this.visible
  }

  set mVisible(visible: boolean) {
    this.$emit('visible:change', visible)
  }

  handleResize() {
    if (document.body.clientWidth >= 992) {
      this.mVisible = false
    }
  }

  @Watch('visible')
  handleVisibleChange(visible: boolean) {
    if (visible && this.sidebarRef) {
      this.sidebarRef.scrollToCurrent(this.isFirst ? 'init' : undefined)
      this.isFirst = false
    }
  }
}
</script>

<style lang="scss">
</style>
