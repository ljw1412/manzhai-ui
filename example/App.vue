<template>
  <div id="app">
    <topbar id="topbar"></topbar>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="copyright">
      <span></span>
      <a href="http://www.beian.miit.gov.cn"
        target="_blank"></a>
    </div>
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

<style lang="scss" scoped>
$topbar-height: 60px;
$copyright-height: 20px;
#app {
  height: 100%;
  overflow: hidden;
  #topbar {
    height: $topbar-height;
    background-color: var(--color-primary);
    box-shadow: 0 -4px 10px var(--color-primary);
  }
  #content {
    height: calc(100% - #{$topbar-height + $copyright-height});
  }
  #copyright {
    font-size: 14px;
    height: $copyright-height;
    line-height: $copyright-height;
    text-align: center;
    background-color: var(--color-primary);
    color: var(--app-topbar__navigation-font-color);
    a {
      margin-left: 5px;
      color: var(--app-topbar__navigation-font-color);
      &:hover {
        color: var(--color-primary-3);
      }
    }
  }
}
</style>
