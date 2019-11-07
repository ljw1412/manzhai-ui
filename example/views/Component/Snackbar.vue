<template>
  <div class="component-snackbar">
    <mz-dropdown v-model="placement"
      :list="placementList"
      :placement="placement">
      <mz-button type="primary"
        style="width: 100px;">{{placement}}</mz-button>
    </mz-dropdown>
    <mz-button type="success"
      @click="onShowClick">显示</mz-button>

    <mz-snackbar ref="snackbar"
      v-model="isShow"
      fixed
      color="success"
      text="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
      buttonText="关闭"
      :buttonProps="{type:'primary'}"
      :placement="placement"
      @buttonClick="isShow = false"></mz-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import MzSnackbar from '../../../packages/Snackbar'

@Component
export default class ComponentSnackbar extends Vue {
  @Ref('snackbar')
  readonly snackbar!: MzSnackbar

  placementList = [
    'top',
    'top-start',
    'top-end',
    'center',
    'bottom',
    'bottom-start',
    'bottom-end'
  ]
  placement = 'bottom'

  isShow = false

  onShowClick() {
    this.snackbar.show()
  }
}
</script>

<style lang="scss" scoped>
.component-snackbar {
  position: relative;
}
</style>
