<template>
  <div class="component-list">
    <mz-list-item-group value="test">
      <mz-list-item v-for="item of list"
        link
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :data="item"></mz-list-item>
    </mz-list-item-group>

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
      @click="onItemClick"></mz-list-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentList extends Vue {
  value = '1'
  list = [
    { label: '测试 1', value: '1' },
    { label: '测试 2', value: '2' },
    { label: '测试 3', value: '3' }
  ]

  onItemClick(value: any, data: any) {
    console.log('onItemClick', value, data)
  }

  onChange(value: any, data: any) {
    console.log('onChange', value, data)
  }
}
</script>

<style lang="scss" scoped>
</style>
