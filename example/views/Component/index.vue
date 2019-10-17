<template>
  <div class="page-component">
    <mz-button style="margin-bottom:10px"
      @click="onChangeThemeClick">切换主题</mz-button>
    <div id="page-component">
      <sidebar></sidebar>
      <div id="page-component-content">
        <router-view></router-view>
      </div>
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
export default class PageComponent extends Vue {
  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
  }
}
</script>

<style lang="scss" scoped>
#page-component {
  display: flex;
  .sidebar {
    flex-shrink: 0;
  }
  #page-component-content {
    flex-grow: 1;
  }
}
</style>
