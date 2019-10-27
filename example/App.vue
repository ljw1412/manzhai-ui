<template>
  <div id="app">
    <topbar id="topbar"></topbar>
    <div id="content">
      <router-view></router-view>
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
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
$topbar-height: 60px;
#app {
  height: 100%;
  overflow: hidden;
  #topbar {
    height: $topbar-height;
    background-color: var(--color-primary);
    box-shadow: 0 -4px 10px var(--color-primary);
  }
  #content {
    height: calc(100% - #{$topbar-height});
  }
}
</style>
