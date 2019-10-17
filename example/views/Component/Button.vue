<template>
  <div class="component-button">
    <mz-switch v-model="outlined"
      style="margin-right:20px"></mz-switch>
    <mz-button v-for="type of colorTypeList"
      :outlined="outlined"
      :key="type"
      :type="type"
      ripple>测试按钮</mz-button>
    <mz-button disabled
      :outlined="outlined"
      ripple>禁用按钮</mz-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentButton extends Vue {
  outlined = false
  colorTypeList = ['', 'primary', 'success', 'warning', 'danger', 'info']
}
</script>

<style lang="scss" scoped>
.mz-button + .mz-button {
  margin-left: 10px;
}
</style>
