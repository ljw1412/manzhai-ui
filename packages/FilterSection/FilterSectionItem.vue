<template>
  <div class="mz-filter-section-item-wrapper"
    @click="onItemClick">
    <div class="mz-filter-section-item"
      :class="itemClass">
      <slot>{{label}}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Mixins } from 'vue-property-decorator'
import { MzFilterSection } from '.'
import FormElement from '../../src/mixins/FormElement'

@Component
export default class MzFilterSectionItem extends Mixins(FormElement) {
  @Inject({ default: null })
  section!: MzFilterSection
  @Prop({ required: true })
  readonly value!: any

  checked = false

  get selected() {
    return this.section ? this.section.value === this.value : this.checked
  }

  set selected(value: any) {
    this.checked = value
    if (this.section) {
      this.section.setValue(this.value)
    }
  }

  get itemClass() {
    return { 'is-selected': this.selected, 'is-pointer': !this.disabled }
  }

  onItemClick() {
    this.selected = !this.selected
  }
}
</script>

<style lang="scss">
.mz-filter-section-item-wrapper {
  padding: 3px 5px;
}

.mz-filter-section-item {
  padding: 3px 5px;
  color: var(--color-text-primary);
  &.is-selected {
    background-color: var(--color-primary);
  }
}
</style>
