<template>
  <mz-layout class="page-style">
    <mz-aside>
      <sidebar :data="navigate"></sidebar>
    </mz-aside>
    <mz-main id="page-component-content">
      <router-view></router-view>
    </mz-main>
  </mz-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@example/components/Sidebar.vue'
import styleNavigate from '@example/options/navigate/style.json'

@Component({ components: { Sidebar } })
export default class PageStyle extends Vue {
  navigate = styleNavigate
}
</script>

<style lang="scss">
</style>
