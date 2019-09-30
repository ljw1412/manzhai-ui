<template>
  <div v-elevation="elevation"
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
  readonly outline!: boolean

  get classes() {
    return [{ 'mz-card--outline': this.outline }]
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-card {
  &--outline {
    border: 1px solid getColor(border-base);
  }
}
</style>
