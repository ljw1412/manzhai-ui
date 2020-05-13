<template>
  <div id="app">
    <topbar id="topbar"></topbar>
    <div id="content">
      <router-view></router-view>
    </div>
    <!-- <div id="copyright">
      <span></span>
      <a href="http://www.beian.miit.gov.cn"
        target="_blank"></a>
    </div> -->
  </div>
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
    height: $topbar-height;
    background-color: $color-primary;
    box-shadow: 0 -4px 10px $color-primary;
    transition: all 0.3s;
  }
  #content {
    height: calc(100% - #{$topbar-height});
    // height: calc(100% - #{$topbar-height + $copyright-height});
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
