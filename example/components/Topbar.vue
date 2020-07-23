<template>
  <div class="app-topbar d-flex justify-content-between align-items-center user-select-none px-16 h-100">
    <div id="app-logo"
      class="p-0 lh-1 fs-26 lh-30 text-center">
      <router-link class="topbar-nav-link"
        :to="{name:'home'}">ManZhai</router-link>
    </div>
    <div class="d-flex align-items-center">
      <ul class="app-topbar-navigation d-flex align-items-center">
        <li v-for="(navigation,index) of navigations"
          class="px-20 fs-16 flex-grow-0 flex-shrink-1"
          :key="index">
          <router-link class="topbar-nav-link"
            :to="navigation.route">{{navigation.label}}</router-link>
        </li>
      </ul>
      <mz-button icon
        circle
        outlined
        size="small"
        color="success"
        class="ml-20"
        @click="onChangeThemeClick">
        <mz-icon :name="!isDark?'moon':'sunny'"></mz-icon>
      </mz-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Topbar extends Vue {
  isDark = this.$getCurrentTheme() === 'dark'
  navigations = [
    { label: '指南', route: { name: 'pageGuide' } },
    { label: '文档', route: { name: 'pageDocs' } },
    { label: '样式', route: { name: 'pageStyle' } },
    { label: '主题', route: { name: 'pageTheme' } }
  ]

  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
    this.isDark = !this.isDark
  }
}
</script>

<style lang="scss">
#app-logo {
  width: 160px;
}

.topbar-nav-link {
  @include state-color($white, $success-400, $success-300);
}
</style>
