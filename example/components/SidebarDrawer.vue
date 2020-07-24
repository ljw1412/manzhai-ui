<template>
  <mz-drawer v-model="mVisible"
    v-resize="handleResize"
    divider
    placement="left"
    width="220px"
    class="sidebar-drawer"
    :content-style="{padding: 0}">
    <template #title>
      <div class="pb-16">ManZhai</div>
      <sidebar class="page-navigation"
        gutter="0"
        :data="topbarNavigate"
        @item-click="mVisible = false"></sidebar>
    </template>

    <sidebar v-show="!hideSidebarNavigation"
      class="sub-navigation"
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
.sidebar-drawer {
  .page-navigation {
    margin-left: -16px;
    margin-right: -32px;
    > ul {
      display: flex;
      flex-wrap: wrap;
      > a {
        width: 50%;
        text-align: center;
      }
    }
  }
  .sub-navigation {
    padding: 0 16px;
  }
}
</style>
