<template>
  <div class="mz-filter-section-item"
    :class="itemClass"
    @click="onItemClick">
    <div class="mz-filter-section-item__label"
      :style="labelStyle">
      <slot :selected="selected">{{label}}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Mixins } from 'vue-property-decorator'
import { MzFilterSection } from '.'
import FormElement from '../../src/mixins/FormElement'
import { typeOf } from '../../src/utils/assist'

@Component
export default class MzFilterSectionItem extends Mixins(FormElement) {
  @Inject({ default: null })
  section!: MzFilterSection
  @Prop({ required: true })
  readonly value!: any
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly custom!: boolean
  @Prop()
  readonly labelStyle!: any

  checked = false

  get isOutlined() {
    return (this.section && this.section.outlined) || this.outlined
  }

  get selected() {
    if (this.section) {
      if (this.section.multiple) {
        return typeOf(this.section.value) === 'array'
          ? this.section.value.includes(this.value)
          : false
      }
      return this.section.value === this.value
    }
    return this.checked
  }

  set selected(value: any) {
    this.checked = value
    if (this.section) {
      this.section.setValue(this.value)
    }
  }

  get itemClass() {
    const classes = { 'is-pointer': !this.disabled, 'is-custom': this.custom }
    if (!this.custom) {
      Object.assign(classes, {
        'is-outlined': this.isOutlined,
        'is-selected': this.selected
      })
    }
    return classes
  }

  onItemClick() {
    this.selected = !this.selected
  }

  created() {
    this.section && this.section.itemList.push(this)
  }

  beforeDestroy() {
    this.section && this.section.itemList.remove(this)
  }
}
</script>

<style lang="scss">
.mz-filter-section-item {
  --mz-filter-section-item__label-color: var(--color-text-primary);
  --mz-filter-section-item__background-color: transparent;
  --mz-filter-section-item__border-color: transparent;
  padding: 3px 5px;
  &__label {
    box-sizing: border-box;
    color: var(--mz-filter-section-item__label-color);
    background-color: var(--mz-filter-section-item__background-color);
    border: 1px solid var(--mz-filter-section-item__border-color);
  }
  &:not(.is-outlined).is-selected {
    --mz-filter-section-item__label-color: #ffffff;
    --mz-filter-section-item__background-color: var(--color-primary);
  }
  &.is-outlined.is-selected {
    --mz-filter-section-item__label-color: var(--color-primary);
    --mz-filter-section-item__border-color: var(--color-primary);
  }
}
</style>
