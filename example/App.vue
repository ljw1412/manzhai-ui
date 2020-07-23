<template>
  <mz-layout id="app"
    class="overflow-hidden h-100">
    <mz-header id="topbar"
      class="bg-primary">
      <topbar></topbar>
    </mz-header>

    <mz-layout>
      <mz-aside id="sidebar"
        v-show="pageType && navigate.length">
        <sidebar :data="navigate"></sidebar>
      </mz-aside>

      <mz-main id="content">
        <router-view></router-view>
      </mz-main>
    </mz-layout>

    <!-- <mz-footer id="copyright"
      class="position-relative h-20 lh-20 fs-14 text-center bg-primary">
      <span></span>
      <a href="http://www.beian.miit.gov.cn"
        style="ml-5"
        target="_blank"></a>
    </mz-footer> -->
  </mz-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'
import navigateMap from '@example/options/sidebar-navigate'

@Component({
  components: { Sidebar, Topbar }
})
export default class APP extends Vue {
  pageType = ''

  get navigate() {
    return navigateMap[this.pageType] || []
  }

  @Watch('$route', { immediate: true })
  handleRouteChange(route: Route) {
    if (Array.isArray(route.matched) && route.matched.length) {
      this.pageType = route.matched[0].name || ''
      return
    }
    this.pageType = ''
  }
}
</script>

<style lang="scss">
#app {
  #topbar {
    box-shadow: 0 0 10px $primary;
    transition: all 0.3s;
  }

  #sidebar {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  #copyright a {
    @include state-color($white, $success-400, $success-300);
  }
}
</style>
