<template>
  <div class="component-navigation">
    <mz-navigation :data="data"></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentNavigation extends Vue {
  data = [
    {
      label: '组1',
      list: [
        {
          label: '随随便便的1',
          value: '1',
          children: [
            {
              label: '子菜单1',
              value: 'subnav',
              children: [
                {
                  label: '子菜单1',
                  value: 'subnav',
                  children: [{ label: '子菜单1', value: 'subnav' }]
                }
              ]
            }
          ]
        },
        {
          label: '随随便便的2',
          value: '2'
        }
      ]
    },
    {
      label: '组2',
      list: [
        {
          label: '迷迷糊糊的1',
          value: '1'
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
</style>
