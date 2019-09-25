<template>
  <div class="page-component">
    <mz-dropdown></mz-dropdown>
    <mz-button type="primary"
      :ripple="{circle:true,circle:true}"
      round>a</mz-button>
    <mz-list v-model="value"
      @change="onChange">
      <mz-list-item v-for="item of list"
        :ripple="{center:true}"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :data="item"></mz-list-item>
    </mz-list>
    <mz-list @change="onChange">
      <mz-list-item v-for="item of list"
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
