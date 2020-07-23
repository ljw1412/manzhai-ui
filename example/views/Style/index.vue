<template>
  <div id="page-style"
    class="page-style h-100">
    <div id="page-style-content">
      <router-view></router-view>
    </div>
  </div>
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
