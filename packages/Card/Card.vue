<template>
  <div v-elevation="outlined ? 0 : elevation"
    class="mz-card color-transition"
    :class="classes"
    :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzCard extends Vue {
  @Prop({ type: [String, Number], default: 3 })
  readonly elevation!: string | number
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(String)
  readonly background!: string

  get classes() {
    return [{ 'mz-card--outlined': this.outlined }]
  }

  get styles() {
    return { background: this.background }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-card {
  @include mzColor(--color-text-primary);
  background-color: var(--color-card-background, #ffffff);
  &--outlined {
    border: 1px solid var(--color-border-base);
  }
}
</style>
