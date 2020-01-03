<template>
  <div class="page-theme">
    <div v-for="(item,index) of colorConfig"
      :key="index">
      <div>{{item.title}}</div>
      <mz-card v-for="color of item.colorList||[]"
        :elevation="0"
        :key="color.name"
        :background="`var(${color.name})`"
        :style="{color:color.fontColor}">{{color.name}} {{color.label}} {{color.hex}}</mz-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import colorConfig, { updateHex } from './colorConfig'

@Component
export default class PageTheme extends Vue {
  colorConfig = colorConfig

  mounted() {
    updateHex()
    this.$mzEventBus.$on('theme-change', (val: string) => {
      updateHex()
    })
  }

  beforeDestroy() {
    this.$mzEventBus.$off('theme-change')
  }
}
</script>

<style lang="scss" scoped>
.page-theme {
  box-sizing: border-box;
  height: 100%;
  padding: 10px 10px 0 10px;
  overflow-y: auto;
}
</style>
