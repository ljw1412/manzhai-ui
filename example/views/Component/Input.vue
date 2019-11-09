<template>
  <div class="component-input">
    <mz-input v-model="value"
      label="Test"
      id="test"></mz-input>
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
