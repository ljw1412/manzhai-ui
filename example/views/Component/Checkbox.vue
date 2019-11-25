<template>
  <div class="component-checkbox">
    <form>
      <mz-checkbox name="checkbox"
        :trueValue="1"
        :falseValue="2">测试</mz-checkbox>
      <mz-checkbox name="checkbox"
        label="测试">测试</mz-checkbox>
      <mz-input name="input"
        value="123"></mz-input>
      <button type="submit">123</button>
    </form>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentCheckbox extends Vue {}
</script>

<style lang="scss" scoped>
</style>
