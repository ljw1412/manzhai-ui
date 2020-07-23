<template>
  <div class="app-topbar position-relative d-flex justify-content-between align-items-center user-select-none px-16 h-100">
    <div class="app-topbar-menu-icon show-md">
      <mz-button icon
        text-color="#fff"
        @click="$emit('menu-toggle')">
        <mz-icon name="menu"
          size="24"></mz-icon>
      </mz-button>
    </div>
    <div id="app-logo"
      class="p-0 lh-1 fs-26 lh-30 text-center">
      <router-link class="topbar-nav-link"
        :to="{name:'home'}">ManZhai</router-link>
    </div>
    <div class="app-topbar-right d-flex align-items-center">
      <ul class="app-topbar-navigation d-flex align-items-center hide-md">
        <li v-for="(navigation,index) of navigations"
          class="px-20 fs-16 flex-grow-0 flex-shrink-1"
          :key="index">
          <router-link class="topbar-nav-link"
            :to="navigation.to">{{navigation.title}}</router-link>
        </li>
      </ul>
      <mz-button icon
        circle
        outlined
        size="small"
        color="success"
        class="theme-switch ml-20"
        @click="onChangeThemeClick">
        <mz-icon :name="!isDark?'moon':'sunny'"></mz-icon>
      </mz-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import topbarNavigate from '@example/options/topbar-navigate'

@Component
export default class Topbar extends Vue {
  isDark = this.$getCurrentTheme() === 'dark'
  navigations = topbarNavigate

  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
    this.isDark = !this.isDark
  }
}
</script>

<style lang="scss">
#app-logo {
  left: 0;
  width: 160px;
}

.app-topbar-menu-icon {
  display: none;
}

.topbar-nav-link {
  @include state-color($white, $success-400, $success-300);
}

@include only-screen-mw-992 {
  #app-logo {
    position: absolute;
    width: 100%;
  }
}
</style>
