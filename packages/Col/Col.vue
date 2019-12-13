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
    if (this.span) classes.push(`mz-col-${this.span}`)
    return classes
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
    width: 100%/24 * $i;
  }
}
</style>
