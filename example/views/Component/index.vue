<template>
  <div class="page-component"
    id="page-component">
    <sidebar></sidebar>
    <mz-catalogue ref="catalogue"
      scroll-smooth
      sidebar
      fixed
      width="200px"
      container="#page-component-content"
      anchor-class-name=".mz-document-anchor"
      :offset="{top:'80px',right:'20px'}"></mz-catalogue>
    <div id="page-component-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref } from 'vue-property-decorator'
import Sidebar from './components/Sidebar.vue'
import { MzCatalogue } from '../../../packages/Catalogue'

@Component({
  components: {
    Sidebar
  }
})
export default class PageComponent extends Vue {
  @Ref('catalogue')
  readonly catalogueRef!: MzCatalogue

  @Watch('$route.name')
  onRouteNameChange(val: string) {
    this.$nextTick(this.catalogueRef.initCatalogue)
  }
}
</script>

<style lang="scss" scoped>
#page-component {
  display: flex;
  height: 100%;
  #page-component-content {
    position: relative;
    flex-grow: 1;
    padding: 40px 30px;
    padding-right: 230px;
    overflow-y: scroll;
    overflow-x: auto;
    transition: padding-right 0.3s;
  }
}
</style>
