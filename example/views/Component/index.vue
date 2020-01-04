<template>
  <div class="page-component"
    id="page-component">
    <sidebar></sidebar>
    <div id="page-component-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from './components/Sidebar.vue'

@Component({
  components: {
    Sidebar
  }
})
export default class PageComponent extends Vue {}
</script>

<style lang="scss" scoped>
#page-component {
  display: flex;
  height: 100%;
  #page-component-content {
    position: relative;
    flex-grow: 1;
    padding: 40px 30px;
    overflow: auto;
  }
}
</style>
