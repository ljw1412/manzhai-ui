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
  @Prop(Number)
  readonly pull!: number
  @Prop(Number)
  readonly push!: number

  get colClasses() {
    const classes = []
    if (this.span) classes.push(`mz-col-${this.span}`)
    if (this.offset) classes.push(`mz-col-offset-${this.offset}`)
    if (this.pull) classes.push(`mz-col-pull-${this.pull}`)
    if (this.push) classes.push(`mz-col-push-${this.push}`)
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

@for $i from 1 through 12 {
  .mz-col-push-#{$i} {
    left: 100% * $i / 12;
  }
  .mz-col-pull-#{$i} {
    right: 100% * $i / 12;
  }
}
</style>
