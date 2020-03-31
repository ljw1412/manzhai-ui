<template>
  <div role="progressbar"
    class="mz-progress"
    :class="{
      'mz-progress--indeterminate': indeterminate,
      'mz-progress--alternate': alternate,
      'mz-progress--rounded': rounded,
      'mz-progress--striped': striped || stripedAnimation,
      'mz-progress--striped-animation': stripedAnimation
    }"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="value"
    :style="wrapperStyles">
    <div class="mz-progress__background"
      :style="backgroundStyles"></div>
    <div class="mz-progress__buffer"
      :style="bufferStyles"></div>
    <div class="mz-progress__progress"
      :style="progressStyls"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzProgress extends Vue {
  @Prop({ type: Number, default: 0 })
  readonly value!: number
  @Prop({ type: Number, default: 100 })
  readonly max!: number
  @Prop({ type: Number, default: 0 })
  readonly buffer!: number
  @Prop({ type: Number, default: 6 })
  readonly strokeWidth!: number
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly bufferColor!: string
  @Prop(String)
  readonly backgroundColor!: string
  @Prop(Boolean)
  readonly indeterminate!: boolean
  @Prop(Boolean)
  readonly alternate!: boolean
  @Prop(Boolean)
  readonly rounded!: boolean
  @Prop(Boolean)
  readonly striped!: boolean
  @Prop(Boolean)
  readonly stripedAnimation!: boolean

  get wrapperStyles() {
    return {
      height: this.strokeWidth + 'px'
    }
  }

  get backgroundStyles() {
    return {
      backgroundColor: this.backgroundColor || this.color,
      opacity: this.backgroundColor ? 1 : undefined
    }
  }

  get bufferStyles() {
    return {
      backgroundColor: this.bufferColor || this.color,
      width: this.bufferPercentage + '%',
      opacity: this.bufferColor ? 1 : undefined
    }
  }

  get progressStyls() {
    return {
      backgroundColor: this.color,
      width: this.percentage + '%'
    }
  }

  get percentage() {
    return this.getPercentage(this.value)
  }

  get bufferPercentage() {
    return this.getPercentage(this.buffer)
  }

  getPercentage(value: number) {
    if (value > this.max) return 100
    if (value < 0) return 0
    return parseInt((value / this.max) * 100 + '')
  }
}
</script>
