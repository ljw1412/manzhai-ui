<template>
  <div class="home">
    <section class="container">
      <div class="responsive">
        <mz-row flex
          justify="center">
          <mz-col>ManZhai是一个基于Vue开发的UI组件库</mz-col>
        </mz-row>
        <mz-row flex
          justify="center">
          <mz-col>目前状态:正在开发中</mz-col>
        </mz-row>
        <mz-row flex
          justify="center">
          <mz-button color="success"
            size="large"
            width="100px"
            @click="$router.push({name:'pageDocs'})">快速入门</mz-button>
          <mz-button outlined
            size="large"
            text-color="#ffffff"
            width="100px"
            @click="toGithub">
            <mz-icon name="logo-github"
              :size="20"></mz-icon>
            <span style="margin-left:3px;">GitHub</span>
          </mz-button>
        </mz-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  toGithub() {
    window.open('https://github.com/ljw1412/manzhai-ui', '_blank')
  }
}
</script>

<style lang="scss">
.container {
  background-color: $primary;
  transition: all 0.3s;
}

.responsive {
  position: relative;
  padding: 30px;
  min-height: 100vh;
  color: #ffffff;

  .mz-button + .mz-button {
    margin-left: 20px;
  }
}
.mz-row + .mz-row {
  margin-top: 20px;
}
</style>
