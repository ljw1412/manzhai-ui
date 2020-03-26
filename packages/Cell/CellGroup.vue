<template>
  <div class="mz-cell-group"
    :class="groupClasses">
    <div v-if="$slots.title || title"
      class="mz-cell-group__title color-transition">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="mz-cell-group__list color-transition">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzCellGroup extends Vue {
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly type!: string

  get groupClasses() {
    const classes: (string | Record<string, boolean>)[] = []
    if (['card'].includes(this.type)) {
      classes.push(`mz-cell-group--${this.type}`)
    }
    return classes
  }
}
</script>

<style lang="scss">
.mz-cell-group {
  --mz-cell-group__list-box-shadow: 0 1px 2px 0
      rgba(var(--color-shadow-rgb), 0.3),
    0 3px 6px 2px rgba(var(--color-shadow-rgb), 0.15);

  &__title {
    font-size: 14px;
    padding: 8px 0;
    color: var(--color-text-regular);
  }

  &__list {
    background-color: var(--color-card-background, #ffffff);
  }

  &--card {
    padding: 0 5px;
    .mz-cell-group__list {
      display: flex;
      flex-direction: column;
      position: relative;
      max-height: 100%;
      opacity: 1;
      box-shadow: var(--mz-cell-group__list-box-shadow);
      border-radius: 3px;
      overflow: hidden;
    }
  }
}
</style>
