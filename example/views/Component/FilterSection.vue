<template>
  <div class="component-filter-section">
    标题位置： <mz-radio-group name="test3"
      v-model="position">
      <mz-radio value="top">top</mz-radio>
      <mz-radio value="left">left</mz-radio>
      <mz-radio value="right">right</mz-radio>
    </mz-radio-group>
    <br><br>
    当前值：{{value}}
    <mz-filter-section v-model="value"
      label="类型1："
      :label-position="position"
      outlined>
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>

    <mz-filter-section v-model="value"
      label="类型1："
      :label-position="position"
      outlined>
      <mz-filter-section-item v-for="i of 10"
        custom
        :key="i"
        :value="i">
        <div slot-scope="{ selected }"
          :class="{'is-item-selected':selected}">选项{{i}}</div>
      </mz-filter-section-item>
    </mz-filter-section>
    <br>
    当前值：{{value2}}
    <mz-filter-section v-model="value2"
      label="类型1："
      :label-position="position"
      label-width="100px"
      multiple>
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>
    <br>
    当前值：{{this.groupValue}}
    <mz-filter-section-group v-model="groupValue">
      <mz-filter-section name="type1"
        label="类型1(name=type1)："
        :label-position="position"
        outlined>
        <mz-filter-section-item v-for="i of 10"
          :key="i"
          :value="i">选项{{i}}</mz-filter-section-item>
      </mz-filter-section>
      <mz-filter-section label="类型2(name=type2)："
        name="type2"
        :label-position="position"
        label-width="200px"
        multiple>
        <mz-filter-section-item v-for="i of 10"
          :key="i"
          :value="i">选项{{i}}</mz-filter-section-item>
      </mz-filter-section>
    </mz-filter-section-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentFilterSection extends Vue {
  position = 'top'
  value = ''
  value2 = []
  groupValue = { type1: 5 }
}
</script>

<style lang="scss" scoped>
.component-filter-section {
  color: var(--color-text-primary);
}

.is-item-selected {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
  }
}
</style>
