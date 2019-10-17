<template>
  <div class="component-cell">
    <mz-cell-group title="单元格组测试"
      type="card">
      <mz-cell title="单元格"
        desc="描述性文字">
        <mz-cell slot="child"
          title="子单元格"
          desc="子单元格描述性文字">
          <mz-cell slot="child"
            title="子单元格"
            desc="子单元格描述性文字">
          </mz-cell>
        </mz-cell>
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        size="small">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        v-model="checked">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        size="large">
      </mz-cell>
      <mz-cell title="单元格">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
    </mz-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCell extends Vue {
  checked = false
}
</script>

<style lang="scss" scoped>
</style>
