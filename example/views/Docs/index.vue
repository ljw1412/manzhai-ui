<template>
  <div class="page-component"
    id="page-component">
    <mz-catalogue ref="catalogue"
      scroll-smooth
      sidebar
      fixed
      width="200px"
      max-height="300px"
      container="#page-component-content"
      target=".mz-document-anchor"
      :key="'catalogue'+$route.name"
      :offset="{top:'80px',right:'20px'}"></mz-catalogue>
    <div id="page-component-content"
      :key="$route.name">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref } from 'vue-property-decorator'
import { MzCatalogue } from '../../../packages/Catalogue'

@Component
export default class PageDocs extends Vue {
  @Ref('catalogue')
  readonly catalogueRef!: MzCatalogue

  scrollToHashPosition() {
    const hash = location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView()
    }
  }

  mounted() {
    this.scrollToHashPosition()
  }

  @Watch('$route.name')
  onRouteNameChange(val: string) {
    this.$nextTick(this.catalogueRef.initCatalogue)
    this.$nextTick(this.scrollToHashPosition)
  }
}
</script>

<style lang="scss">
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
