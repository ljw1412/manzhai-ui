<template>
  <div class="component-image">
    图片地址：<input v-model="src" />
    <br>
    <mz-image :src="src"
      @load="onload"
      width="100px"
      height='100px'
      fit="contain"></mz-image>
    <br>
    <mz-image background
      :src="src"
      @load="onload"
      width="100px"
      height='100px'
      fit="contain"></mz-image>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentImage extends Vue {
  src = 'https://www.baidu.com/img/bd_logo1.png'

  onload(e: Event) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
</style>
