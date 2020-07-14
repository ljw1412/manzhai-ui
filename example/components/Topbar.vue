<template>
  <div class="app-topbar d-flex justify-content-between align-items-center user-select-none px-15 h-100">
    <ul class="app-topbar-navigation d-flex align-items-center">
      <li id="app-logo"
        class="p-0 ml-5 mr-20 lh-1 px-20 fs-24 lh-28">
        <router-link class="topbar-nav-link"
          :to="{name:'home'}">ManZhai</router-link>
      </li>
      <li v-for="(navigation,index) of navigations"
        class="px-20 fs-16 flex-grow-0 flex-shrink-1"
        :key="index">
        <router-link class="topbar-nav-link"
          :to="navigation.route">{{navigation.label}}</router-link>
      </li>
    </ul>
    <div>
      <mz-button icon
        circle
        outlined
        size="small"
        color="success"
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
.topbar-nav-link {
  @include state-color($white, $success-400, $success-300);
}
</style>
