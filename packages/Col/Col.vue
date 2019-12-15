<template>
  <div class="mz-col"
    :class="colClasses"
    :style="colStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

@Component
export default class MzCol extends Vue {
  @Inject('gutter')
  readonly gutter!: number
  @Prop(Number)
  readonly span!: number
  @Prop(Number)
  readonly offset!: number

  get colClasses() {
    const classes = []
    if (this.span) classes.push(`mz-col-${this.span}`)
    if (this.offset) classes.push(`mz-col-offset-${this.offset}`)
    return classes
  }

  get colStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) styles.padding = `0 ${this.gutter / 2}px`
    return styles
  }
}
</script>

<style lang="scss">
[class*='mz-col-'] {
  float: left;
  box-sizing: border-box;
}

.mz-col {
  position: relative;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .mz-col-#{$i} {
    width: 100% * $i / 24;
  }
  .mz-col-offset-#{$i} {
    margin-left: 100% * $i / 24;
  }
}
</style>
