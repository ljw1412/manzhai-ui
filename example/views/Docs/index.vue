<template>
  <div id="page-component"
    class="page-component h-100">
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
#page-component-content {
  padding-right: 230px;
  transition: padding-right 0.3s;
}

@include only-screen-mw-992 {
  #page-component > .mz-catalogue {
    display: none;
  }
  #page-component-content {
    padding-right: 30px;
  }
}
</style>
