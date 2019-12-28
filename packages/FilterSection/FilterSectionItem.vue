<template>
  <div class="mz-filter-section-item"
    :class="itemClass"
    @click="onItemClick">
    <div class="mz-filter-section-item__label"
      :style="labelStyle">
      <slot :checked="checked">{{label}}</slot>
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
  @Inject({ from: 'mzFilterSection', default: null })
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

  get itemClass() {
    const classes = { 'is-pointer': !this.disabled, 'is-custom': this.custom }
    if (!this.custom) {
      Object.assign(classes, {
        'is-outlined': this.isOutlined,
        'is-checked': this.checked
      })
    }
    return classes
  }

  onItemClick() {
    this.checked = (this.section && !this.section.multiple) || !this.checked
    this.$emit('change', this.checked)
    if (this.section) {
      this.section.updateValue(this.value)
    }
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
  user-select: none;
  &__label {
    box-sizing: border-box;
    color: var(--mz-filter-section-item__label-color);
    background-color: var(--mz-filter-section-item__background-color);
    border: 1px solid var(--mz-filter-section-item__border-color);
  }
  &:not(.is-outlined).is-checked {
    --mz-filter-section-item__label-color: #ffffff;
    --mz-filter-section-item__background-color: var(--color-primary);
  }
  &.is-outlined.is-checked {
    --mz-filter-section-item__label-color: var(--color-primary);
    --mz-filter-section-item__border-color: var(--color-primary);
  }
}
</style>
