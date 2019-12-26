<template>
  <mz-row class="mz-filter-section"
    :class="sectionClasses">
    <mz-col class="mz-filter-section__label"
      :style="{width:labelWidth}">
      <slot name="label">{{label}}</slot>
    </mz-col>
    <mz-col class="mz-filter-section__content flex-wrap">
      <slot></slot>
    </mz-col>
  </mz-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Mixins,
  ProvideReactive
} from 'vue-property-decorator'
import BaseAttribute from '../../src/mixins/BaseAttribute'
import FormElement from '../../src/mixins/FormElement'
import { typeOf } from '../../src/utils/assist'
import { FilterSectionItem } from '.'

@Component({
  provide() {
    return { section: this }
  }
})
export default class MzFilterSection extends Mixins(
  BaseAttribute,
  FormElement
) {
  @Prop(String)
  readonly label!: string
  @Prop({ type: String, default: 'top' })
  readonly labelPosition!: 'top' | 'left' | 'right'
  @Prop(String)
  readonly labelWidth!: string
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly multiple!: boolean

  itemList: FilterSectionItem[] = []

  get sectionClasses() {
    const classes: (Record<string, any> | string)[] = []
    if (['top', 'left', 'right'].includes(this.labelPosition)) {
      classes.push(`mz-filter-section--${this.labelPosition}`)
    }
    return classes
  }

  setValue(value: any) {
    if (this.multiple) {
      value = this.itemList.filter(item => item.checked).map(item => item.value)
    }

    this.$emit('input', value)
    this.$emit('change', value)
  }
}
</script>

<style lang="scss" >
.mz-filter-section {
  &__label {
    color: var(--color-text-primary);
    margin-bottom: 2px;
  }

  &__content {
    margin: 0 -5px;
  }

  &--right,
  &--left {
    display: flex;
    .mz-filter-section {
      &__label {
        flex-shrink: 0;
        line-height: 34px;
      }

      &__content {
        flex-grow: 1;
      }
    }
  }

  &--right {
    .mz-filter-section__label {
      text-align: right;
    }
  }
}
</style>
