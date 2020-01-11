<template>
  <div class="mz-anchor"
    :id="name"
    :data-level="level"
    :class="[
      `mz-level-${level}`,
      {'mz-anchor--invisible': invisible}
    ]">
    <a :href="`#${name}`"
      class="mz-anchor-symbol"
      :class="anchorClass">{{symbol}}</a>
    <slot>{{title}}</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzAnchor extends Vue {
  @Prop({
    type: String,
    required: true,
    validator: name => /^[a-zA-Z0-9-_]+$/.test(name)
  })
  readonly name!: string
  @Prop(String)
  readonly title!: string
  @Prop({ type: Number, default: 3 })
  readonly level!: number
  @Prop(Boolean)
  readonly invisible!: boolean
  @Prop({ type: String, default: '¶' })
  readonly symbol!: string
  @Prop([String])
  readonly anchorClass!: string
}
</script>

<style lang="scss">
.mz-anchor {
  --mz-anchor__symbol-color: var(--color-primary);

  position: relative;
  color: var(--color-text-primary);
  &--invisible {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .mz-anchor-symbol {
    position: absolute;
    left: -20px;
    opacity: 0;
    color: var(--mz-anchor__symbol-color);
  }

  &:hover {
    .mz-anchor-symbol {
      opacity: 0.4 !important;
    }
  }
}
</style>
