<template>
  <div class="page-component"
    id="page-component">
    <sidebar ref="sidebar"></sidebar>
    <div class="menu-icon">
      <mz-button icon
        radius="0"
        @click="$refs.sidebar.visible=true">
        <mz-icon name="md-menu"
          size="20"></mz-icon>
      </mz-button>
    </div>
    <mz-catalogue ref="catalogue"
      scroll-smooth
      sidebar
      fixed
      width="200px"
      max-height="300px"
      container="#page-component-content"
      target=".mz-document-anchor"
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
export default class PageDocs extends Vue {
  @Ref('catalogue')
  readonly catalogueRef!: MzCatalogue

  @Watch('$route.name')
  onRouteNameChange(val: string) {
    this.$nextTick(this.catalogueRef.initCatalogue)
  }
}
</script>

<style lang="scss">
@import '@example/styles/theme/base.scss';
.menu-icon {
  position: fixed;
  top: 15px;
  left: 10px;
  z-index: 100;
  display: none;
  .mz-button {
    color: $topbar-navigation-text-color;
  }
}

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
