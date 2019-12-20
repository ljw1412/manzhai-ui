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
    是否垂直：<mz-switch v-model="vertical"></mz-switch>
    <mz-button @click="onCodeTestClick">指令测试</mz-button>

    <mz-snackbar ref="snackbar"
      v-model="isShow"
      fixed
      color="success"
      text="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测"
      buttonText="关闭"
      :vertical="vertical"
      :buttonProps="{fontColor:'#ffffff',flat:true,color:'#ccc'}"
      :placement="placement"
      :timeout="0"
      @buttonClick="isShow = false"></mz-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import MzSnackbar from '../../../packages/Snackbar'
import { SnackbarPlacementTypes } from '../../../packages/Snackbar/Snackbar'

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
  placement: SnackbarPlacementTypes = 'bottom'

  isShow = false
  vertical = false

  onShowClick() {
    this.snackbar.show()
  }

  onCodeTestClick() {
    this.$snackbar.show({
      text: '123',
      buttonText: '关闭',
      buttonProps: { fontColor: '#ffffff', flat: true },
      buttonClick: () => {
        this.$snackbar.close()
      },
      placement: this.placement
    })
  }
}
</script>

<style lang="scss" scoped>
.component-snackbar {
  position: relative;
}
</style>
