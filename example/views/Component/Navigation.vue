<template>
  <div class="component-navigation">
    <mz-navigation :data="data"
      style="width:250px"></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentNavigation extends Vue {
  data = [
    {
      group: '组1',
      children: [
        {
          label: '随随便便的1',
          value: '1',
          children: [
            {
              label: '随随便便的1-子菜单',
              value: 'subnav1',
              children: [
                {
                  label: '随随便便的1-子菜单-子菜单',
                  value: 'subnav2',
                  children: [
                    {
                      label: '随随便便的1-子菜单-子菜单-子菜单1',
                      value: 'subnav3'
                    }
                  ]
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
      group: '组2',
      children: [
        {
          label: '迷迷糊糊的1',
          value: '3'
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
</style>
