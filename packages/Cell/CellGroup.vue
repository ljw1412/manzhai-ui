<template>
  <div class="mz-cell-group"
    :class="groupClasses">
    <div v-if="$slots.title || title"
      class="mz-cell-group__title fs-14 py-8 text-gray-900">
      <slot name="title">{{title}}</slot>
    </div>
    <div v-elevation="type === 'card' ? elevation : 0"
      class="mz-cell-group__list bg-card rounded-md">
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
  @Prop({ type: Number, default: 3 })
  readonly elevation!: number

  get groupClasses() {
    const classes: (string | Record<string, boolean>)[] = []
    if (['card', 'border'].includes(this.type)) {
      classes.push(`is-${this.type}`)
    }
    return classes
  }
}
</script>
