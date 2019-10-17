<template>
  <div id="sidebar">
    <mz-navigation :data="data"
      round='mini'></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  data = [
    {
      group: '组件',
      children: [
        {
          label: 'Button',
          text: '按钮',
          to: { name: 'ComponentButton' }
        },
        {
          label: 'Card',
          text: '卡片',
          to: { name: 'ComponentCard' }
        },
        {
          label: 'Cell',
          text: '单元',
          to: { name: 'ComponentCell' }
        },
        {
          label: 'Dropdown',
          text: '下拉菜单',
          to: '/component/dropdown'
        },
        {
          label: 'Icon',
          text: '图标',
          to: { name: 'ComponentIcon' }
        },
        {
          label: 'List',
          text: '列表',
          to: { name: 'ComponentList' }
        },
        {
          label: 'Navigation',
          text: '导航',
          to: { name: 'ComponentNavigation' }
        },
        {
          label: 'Switch',
          text: '开关',
          to: { name: 'ComponentSwitch' }
        }
      ]
    }
  ]
}
</script>

<style lang="scss">
#sidebar {
  box-sizing: border-box;
  width: 216px;
  padding: 0 8px;
}
</style>
