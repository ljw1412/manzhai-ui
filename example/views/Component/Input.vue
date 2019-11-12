<template>
  <div class="component-input">
    <mz-input v-model="value"
      label="Test"
      id="test"
      hint="请输入"
      error
      error-message="错误"
      show-word-count
      maxlength="10"></mz-input>
    <br>
    <mz-input v-model="value"
      type="password"
      label="Password"
      show-word-count
      prepend-icon="md-key"
      append-icon="md-eye"
      id="password"
      @prependClick="iconClick"
      @appendClick="iconClick">
    </mz-input>

    <mz-input v-model="value"
      type="password"
      label="Password"
      show-word-count
      outlined
      id="password2">
      <div slot="prepend">{{value}}</div>

      <mz-icon slot="append"
        name="md-eye"
        size="26"></mz-icon>
    </mz-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentInput extends Vue {
  value = ''

  iconClick() {
    console.log('!!!')
  }
}
</script>

<style lang="scss" scoped>
</style>
