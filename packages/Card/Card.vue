<template>
  <div v-elevation="outlined? 0 : elevation"
    class="mz-card"
    :class="classes">
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

  get classes() {
    return [{ 'mz-card--outlined': this.outlined }]
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-card {
  color: var(--color-text-primary);
  fill: var(--color-text-primary);
  background-color: var(--color-body-background);
  &--outlined {
    border: 1px solid getColor(border-base);
  }
}
</style>
