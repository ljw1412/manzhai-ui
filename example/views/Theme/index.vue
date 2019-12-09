<template>
  <div class="page-theme">
    <div v-for="(item,index) of colorConfig"
      :key="index">
      <div>{{item.title}}</div>
      <mz-card v-for="color of item.colorList||[]"
        outlined
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
  }
}
</script>

<style lang="scss" scoped>
.page-theme {
  padding: 10px 10px 0 10px;
}
</style>
