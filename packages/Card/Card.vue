<template>
  <div v-elevation="outlined ? 0 : elevation"
    class="mz-card"
    :class="classes"
    :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'

@Component
export default class MzCard extends Mixins(BaseAttribute) {
  @Prop({ type: [String, Number], default: 3 })
  readonly elevation!: string | number
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(String)
  readonly background!: string

  get classes() {
    return [{ border: this.outlined }]
  }

  get styles() {
    return [this.baseStyles, { background: this.background }]
  }
}
</script>