<template>
  <svg class="mz-icon"
    aria-hidden="true"
    v-on="$listeners"
    :style="svgStyles">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzIcon extends Vue {
  @Prop({ required: true })
  readonly name!: string

  @Prop({ default: 20 })
  readonly size!: number

  @Prop(String)
  readonly color!: string

  get iconName() {
    return `#icon-${this.name}`
  }

  get svgStyles() {
    return {
      width: this.size + 'px',
      height: this.size + 'px',
      fill: this.color
    }
  }
}
</script>

<style lang="scss">
</style>
