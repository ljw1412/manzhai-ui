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

    <mz-snackbar></mz-snackbar>
    <mz-snackbar ref="snackbar"
      v-model="isShow"
      fixed
      color="success"
      buttonText="按钮"
      :placement="placement"></mz-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentSnackbar extends Vue {
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
    // this.isShow = false
    // this.$nextTick().then(() => {
    // this.isShow = true
    // })
    // @ts-ignore
    this.$refs.snackbar.show()
  }
}
</script>

<style lang="scss" scoped>
.component-snackbar {
  position: relative;
}
</style>
