<template>
  <div class="mz-anchor"
    :id="name"
    :class="{'mz-anchor--invisible': invisible}">
    <slot>{{label}}</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzAnchor extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string
  @Prop(String)
  readonly title!: string
  @Prop(Boolean)
  readonly invisible!: boolean

  get label() {
    return this.title || this.$slots.default
  }
}
</script>

<style lang="scss">
.mz-anchor {
  &--invisible {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }
}
</style>
