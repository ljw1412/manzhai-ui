<template>
  <div class="page-component">
    <mz-dropdown></mz-dropdown>
    <mz-button type="primary"
      round
      :ripple="{circle:true,circle:true}"
      @click="onButtonClick">a</mz-button>
    <div style="width:200px;border:1px solid #ccc;">
      <mz-list v-model="value"
        @change="onChange">
        <mz-list-item v-for="item of list"
          ripple
          text="文本"
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
      @click="onItemClick"></mz-list-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageComponent extends Vue {
  list = [
    { label: '测试 1', value: '1' },
    { label: '测试 2', value: '2' },
    { label: '测试 3', value: '3' }
  ]

  value = ''

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
</style>
