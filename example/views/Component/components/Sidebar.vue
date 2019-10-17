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
          children: [{ label: '子1' }]
        },
        { label: 'Card', text: '卡片' },
        { label: 'Cell', text: '单元' },
        { label: 'Dropdown', text: '下拉菜单' },
        { label: 'Icon', text: '图标' },
        { label: 'List', text: '列表' },
        { label: 'Navigation', text: '导航' },
        { label: 'Switch', text: '开关' }
      ]
    }
  ]
}
</script>

<style lang="scss">
#sidebar {
  width: 200px;
  box-sizing: border-box;
}
</style>
