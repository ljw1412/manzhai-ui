<template>
  <div role="progressbar"
    class="mz-progress"
    :class="{
      'mz-progress--indeterminate': indeterminate,
      'mz-progress--round': round
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
  @Prop({ type: String, default: 'var(--mz-progress__background-color)' })
  readonly color!: string
  @Prop(String)
  readonly bufferColor!: string
  @Prop(String)
  readonly backgroundColor!: string
  @Prop(Boolean)
  readonly indeterminate!: boolean
  @Prop(Boolean)
  readonly round!: boolean

  get wrapperStyles() {
    return {
      height: this.strokeWidth + 'px'
    }
  }

  get backgroundStyles() {
    return {
      backgroundColor: this.backgroundColor || this.color
    }
  }

  get bufferStyles() {
    return {
      backgroundColor: this.bufferColor || this.color,
      width: this.bufferPercentage + '%'
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

<style lang="scss" >
.mz-progress {
  --mz-progress__background-color: var(--color-primary);

  position: relative;
  overflow: hidden;
  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  &__background,
  &__buffer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &__background,
  &__buffer,
  &__progress {
    height: inherit;
    transition: inherit;
  }

  &__background {
    z-index: 0;
    opacity: 0.3;
  }
  &__buffer {
    z-index: 1;
    opacity: 0.5;
  }

  &--indeterminate {
    .mz-progress {
      &__progress {
        position: absolute;
        width: 30% !important;
        z-index: 3;
        animation: mz-progress-indeterminate 2.2s ease-in infinite;
        will-change: left;
      }
      &__buffer {
        display: none;
      }
    }
  }

  &--round {
    border-radius: 100px;
    .mz-progress {
      &__background,
      &__buffer,
      &__progress {
        border-radius: inherit;
      }
    }
  }
}

@keyframes mz-progress-indeterminate {
  0%,
  20% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}
</style>
