<template>
  <div class="page-component">
    <mz-button style="margin-bottom:10px"
      @click="onChangeThemeClick">切换主题</mz-button>

    <!-- <mz-card :elevation="elevation"
      outline
      style="margin:10px">
      <span @click="elevation = (elevation + 1) % 25">测试</span>
    </mz-card>

    <div style="margin:50px 100px">
      <mz-dropdown v-model="placement"
        :list="placementList"
        :placement="placement">
        <mz-button type="primary"
          style="width: 100px;">{{placement}}</mz-button>
      </mz-dropdown>
    </div> -->

    <!-- <mz-button type="primary"
      round
      :ripple="{circle:true,circle:true}"
      >a</mz-button> -->

    <!-- <mz-switch v-model="outlined"
      style="margin-right:20px"></mz-switch>
    <mz-button v-for="type of colorTypeList"
      :outlined="outlined"
      :key="type"
      :type="type"
      ripple>测试按钮</mz-button>
    <mz-button disabled
      :outlined="outlined"
      ripple>禁用按钮</mz-button> -->

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageComponent extends Vue {
  colorTypeList = ['', 'primary', 'success', 'warning', 'danger', 'info']

  placementList = [
    { value: 'left' },
    { value: 'right' },
    { value: 'top' },
    { value: 'bottom' }
  ]
  placement = 'bottom'
  elevation = 0
  outlined = false
  value = '1'

  onChangeThemeClick() {
    this.$changeTheme(this.$getCurrentTheme() === 'dark' ? '' : 'dark')
  }
}
</script>

<style lang="scss" scoped>
.mz-button + .mz-button {
  margin-left: 10px;
}
</style>
