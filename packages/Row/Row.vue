<template>
  <div class="mz-row"
    :class="rowClasses"
    :style="rowStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component
export default class MzRow extends Vue {
  @Provide('gutter')
  @Prop(Number)
  readonly gutter!: number
  @Prop(Boolean)
  readonly flex!: boolean
  @Prop({
    type: String,
    validator: val =>
      [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly'
      ].includes(val)
  })
  readonly justify!: string

  get rowClasses() {
    const classes: (Record<string, any> | string)[] = [
      { 'mz-row--flex': this.flex }
    ]
    if (this.justify) classes.push(`justify-${this.justify}`)
    return classes
  }

  get rowStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) {
      styles.marginLeft = `-${this.gutter / 2}px`
      styles.marginRight = `-${this.gutter / 2}px`
    }
    return styles
  }
}
</script>

<style lang="scss">
.mz-row {
  position: relative;
  box-sizing: border-box;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }

  &--flex {
    display: flex;
    &.justify {
      &-start {
        justify-content: flex-start;
      }
      &-center {
        justify-content: center;
      }
      &-end {
        justify-content: flex-end;
      }
      &-space-between {
        justify-content: space-between;
      }
      &-space-around {
        justify-content: space-around;
      }
      &-space-evenly {
        justify-content: space-evenly;
      }
    }
  }
}
</style>
