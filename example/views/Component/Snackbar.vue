<template>
  <div class="component-snackbar">
    <mz-dropdown v-model="placement"
      :list="placementList"
      :placement="placement">
      <mz-button type="primary"
        style="width: 100px;">{{placement}}</mz-button>
    </mz-dropdown>
    <mz-snackbar></mz-snackbar>
    <mz-snackbar fixed
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
}
</script>

<style lang="scss" scoped>
.component-snackbar {
  position: relative;
}
</style>
