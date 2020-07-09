<template>
  <mz-layout id="app"
    class="overflow-hidden h-100">
    <mz-header id="topbar"
      class="bg-primary">
      <topbar></topbar>
    </mz-header>

    <mz-main id="content">
      <router-view></router-view>
    </mz-main>

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
import { Component, Vue } from 'vue-property-decorator'
import Topbar from './components/Topbar.vue'

@Component({
  components: {
    Topbar
  }
})
export default class APP extends Vue {}
</script>

<style lang="scss">
#app {
  #topbar {
    box-shadow: 0 0 10px $primary;
    transition: all 0.3s;
  }

  #copyright a {
    @include state-color($white, $success-400, $success-300);
  }
}
</style>
