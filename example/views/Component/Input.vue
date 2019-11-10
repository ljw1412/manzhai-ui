<template>
  <div class="component-input">
    <mz-input v-model="value"
      label="Test"
      id="test"
      hint="请输入"
      show-word-count
      maxlength="10"></mz-input>
    <mz-input v-model="value"
      type="password"
      label="Password"
      show-word-count
      id="password">
      <mz-icon slot="prepend"
        name="md-key"
        color="#ffffff"
        size="26"></mz-icon>

      <mz-icon slot="append"
        name="md-eye"
        color="#ffffff"
        size="26"></mz-icon>
    </mz-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentInput extends Vue {
  value = ''
}
</script>

<style lang="scss" scoped>
</style>
