<template>
  <div class="mz-col"
    :class="colClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzCol extends Vue {
  @Prop(Number)
  readonly span!: number

  get colClasses() {
    const classes = []
    if (this.span) classes.push(`mz-col-span-${this.span}`)
    return classes
  }
}
</script>

<style lang="scss">
</style>
