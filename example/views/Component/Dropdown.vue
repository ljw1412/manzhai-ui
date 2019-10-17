<template>
  <div class="component-dropdown">
    <div style="margin:100px 100px">
      <mz-dropdown v-model="placement"
        :list="placementList"
        :placement="placement">
        <mz-button type="primary"
          style="width: 100px;">{{placement}}</mz-button>
      </mz-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentDropdown extends Vue {
  placement = 'bottom'
  placementList = [
    { value: 'left' },
    { value: 'right' },
    { value: 'top' },
    { value: 'bottom' }
  ]
}
</script>

<style lang="scss" scoped>
</style>
