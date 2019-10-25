<template>
  <div class="component-button">
    <div>
      <mz-button outlined
        @click="size='small'">小</mz-button>
      <mz-button outlined
        @click="size=''">正常</mz-button>
      <mz-button outlined
        @click="size='large'">大</mz-button>
    </div>
    <br>
    <div>
      <span>普通按钮：</span>
      <mz-button v-for="type of colorTypeList"
        :outlined="outlined"
        :key="type"
        :type="type"
        :size="size"
        ripple>测试按钮</mz-button>
      <mz-button ripple
        disabled
        :outlined="outlined"
        :size="size">禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>线条按钮：</span>
      <mz-button v-for="type of colorTypeList"
        outlined
        :key="type"
        :type="type"
        :size="size"
        ripple>测试按钮</mz-button>
      <mz-button disabled
        outlined
        :size="size">禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>扁平按钮：</span>
      <mz-button v-for="type of colorTypeList"
        flat
        :key="type"
        :type="type"
        ripple
        :size="size">测试按钮</mz-button>
      <mz-button disabled
        flat
        :size="size">禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>圆角按钮：</span>
      <mz-button v-for="type of colorTypeList"
        round
        :key="type"
        :type="type"
        ripple
        :size="size">
        测试按钮
      </mz-button>
      <mz-button round
        disabled
        :size="size">禁用按钮</mz-button>
    </div>
    <br>
    <div>
      <span>圆形按钮：</span>
      <mz-button v-for="type of colorTypeList"
        circle
        icon
        :key="type"
        :type="type"
        ripple
        :size="size">
        <mz-icon name="md-alarm"
          size="20"></mz-icon>
      </mz-button>
      <mz-button circle
        icon
        disabled
        :size="size">
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
  size = ''
}
</script>

<style lang="scss" scoped>
.mz-button + .mz-button {
  margin-left: 10px;
}
</style>
