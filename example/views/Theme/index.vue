<template>
  <div id="page-theme"
    class="page-theme">
    <div class="mt-20 mx-auto"
      style="width:1200px">
      <mz-heading :level="1"
        class="mb-10">默认主题</mz-heading>
      <mz-tabs v-model="active"
        active-bar-mode="fill">
        <mz-tab v-for="(value,key) of tabs"
          :key="key"
          :value="key"
          :label="value">
          <palette class="mt-10"
            :data="config[key]"></palette>
        </mz-tab>
      </mz-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from './config.json'
import Palette from './Palette.vue'

@Component({ components: { Palette } })
export default class PageTheme extends Vue {
  config = config
  tabs = { theme: '主题色', common: '常用色', gray: '灰色' }
  active = 'theme'
}
</script>

<style lang="scss">
.page-theme {
  box-sizing: border-box;
  height: 100%;
  padding: 10px 10px 0 10px;
  overflow: auto;
}
</style>
