<template>
  <div class="app-topbar flex-center-space-between">
    <ul class="app-topbar__navigation">
      <li id="app-logo">
        <router-link class="app-topbar__logo"
          :to="{name:'home'}">ManZhai</router-link>
      </li>
      <li v-for="(navigation,index) of navigations"
        :key="index">
        <router-link :to="navigation.route">{{navigation.label}}</router-link>
      </li>
    </ul>
    <div>
      <mz-button icon
        circle
        outlined
        size="small"
        color="success"
        @click="onChangeThemeClick">
        <mz-icon :name="!isDark?'md-moon':'md-sunny'"></mz-icon>
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
    { label: '组件', route: { name: 'pageComponent' } },
    { label: '主题', route: { name: 'pageTheme' } }
  ]

  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
    this.isDark = !this.isDark
  }
}
</script>

<style lang="scss" scoped>
#app-logo {
  padding: 0;
  margin-left: 5px;
  margin-right: 20px;
}

.app-topbar {
  user-select: none;
  box-sizing: border-box;
  padding: 10px 15px;
  &__logo {
    line-height: 24px;
    font-size: 24px;
  }

  &__navigation {
    display: flex;
    align-items: center;
    li {
      flex: 0 1 auto;
      font-size: 16px;
      padding: 0 20px;
      a {
        color: var(--app-topbar__navigation-font-color);
        &:hover {
          color: var(--app-topbar__navigation-font-color--hover);
        }
        &:active {
          color: var(--app-topbar__navigation-font-color--active);
        }
      }
    }
    li + li {
      margin-left: 10px;
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
}
</style>
