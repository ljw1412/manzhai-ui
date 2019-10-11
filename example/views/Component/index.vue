<template>
  <div class="page-component">
    <mz-button style="margin-bottom:10px"
      @click="onChangeThemeClick">切换主题</mz-button>

    <mz-card :elevation="elevation"
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
    </div>

    <!-- <mz-button type="primary"
      round
      :ripple="{circle:true,circle:true}"
      @click="onButtonClick">a</mz-button> -->

    <mz-switch v-model="outlined"
      style="margin-right:20px"></mz-switch>
    <mz-button v-for="type of colorTypeList"
      :outlined="outlined"
      :key="type"
      :type="type"
      ripple>测试按钮</mz-button>
    <mz-button disabled
      :outlined="outlined"
      ripple>禁用按钮</mz-button>
    <!--
    <div style="width:200px;border:1px solid #ccc;margin-top:10px">
      <mz-list v-model="value"
        @change="onChange">
        <mz-list-item v-for="item of list"
          text="文本"
          link
          round
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :data="item"></mz-list-item>
      </mz-list>
    </div>
    <mz-list @change="onChange">
      <mz-list-item v-for="(item,index) of list"
        :disabled="index===0"
        text="文本"
        :key="item.value"
        :value="item.value"
        @click="onItemClick"></mz-list-item>
    </mz-list>
    <br />
    <mz-list-item v-for="item of list"
      :key="item.value"
      :value="item.value"
      @click="onItemClick"></mz-list-item> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageComponent extends Vue {
  colorTypeList = ['', 'primary', 'success', 'warning', 'danger', 'info']

  list = [
    { label: '测试 1', value: '1' },
    { label: '测试 2', value: '2' },
    { label: '测试 3', value: '3' }
  ]

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

  onButtonClick() {
    this.list.pop()
  }

  onChange(value: any, data: any) {
    console.log('onChange', value, data)
  }

  onItemClick(value: any, data: any) {
    console.log('onItemClick', value, data)
  }
}
</script>

<style lang="scss" scoped>
.mz-button + .mz-button {
  margin-left: 10px;
}
</style>
