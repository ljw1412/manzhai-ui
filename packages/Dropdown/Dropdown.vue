<template>
  <div class="mz-dropdown">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class MzDropdown extends Vue {
  @Prop({ default: () => [] })
  readonly list!: Record<string, any>
  @Prop()
  readonly value!: any
}
</script>

<style lang="scss">
</style>
