<template>
  <mz-layout id="app">
    <mz-header id="topbar">
      <topbar></topbar>
    </mz-header>

    <mz-main id="content">
      <router-view></router-view>
    </mz-main>

    <!-- <mz-footer id="copyright">
      <span></span>
      <a href="http://www.beian.miit.gov.cn"
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
@import '@example/styles/theme/base.scss';
#app {
  height: 100%;
  overflow: hidden;
  #topbar {
    background-color: $color-primary;
    box-shadow: 0 -4px 10px $color-primary;
    transition: all 0.3s;
  }
  #copyright {
    position: relative;
    font-size: 14px;
    height: $copyright-height;
    line-height: $copyright-height;
    text-align: center;
    background-color: var(--color-primary);
    color: $topbar-navigation-text-color;
    a {
      margin-left: 5px;
      color: $topbar-navigation-text-color;
      &:hover {
        color: var(--color-primary-3);
      }
    }
  }
}
</style>
