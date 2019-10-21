<template>
  <div class="page">
    <div class="page__topbar">
      <mz-button style="margin-bottom:10px"
        @click="onChangeThemeClick">切换主题</mz-button>
      <router-link :to="{name:'pageComponent'}">组件</router-link>
    </div>
    <div class="page__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
  }
}
</script>

<style lang="scss" scoped>
$topbar-height: 50px;
.page {
  height: 100%;
  overflow: hidden;
  &__topbar {
    height: $topbar-height;
    background-color: var(--color-primary);
    box-shadow: 0 -4px 10px var(--color-primary);
  }
  &__content {
    height: calc(100% - #{$topbar-height});
  }
}
</style>
