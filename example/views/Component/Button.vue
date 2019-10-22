<template>
  <div class="component-button">
    <div>
      <span>普通按钮：</span>
      <mz-button v-for="type of colorTypeList"
        :outlined="outlined"
        :key="type"
        :type="type"
        ripple>测试按钮</mz-button>
      <mz-button disabled
        :outlined="outlined"
        ripple>禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>线条按钮：</span>
      <mz-button v-for="type of colorTypeList"
        outlined
        :key="type"
        :type="type"
        ripple>测试按钮</mz-button>
      <mz-button disabled
        outlined>禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>扁平按钮：</span>
      <mz-button v-for="type of colorTypeList"
        flat
        :key="type"
        :type="type"
        ripple>测试按钮</mz-button>
      <mz-button disabled
        flat>禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>圆角按钮：</span>
      <mz-button v-for="type of colorTypeList"
        round
        :key="type"
        :type="type"
        ripple>测试按钮</mz-button>
      <mz-button round
        disabled>禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>圆形按钮：</span>
      <mz-button v-for="type of colorTypeList"
        circle
        icon
        :key="type"
        :type="type"
        ripple>
        <mz-icon name="md-alarm"
          size="20"></mz-icon>
      </mz-button>
      <mz-button circle
        icon
        disabled>
        <mz-icon name="md-alarm"
          size="20"></mz-icon>
      </mz-button>
    </div>
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
