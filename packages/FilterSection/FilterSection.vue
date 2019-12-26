<template>
  <mz-row class="mz-filter-section"
    :class="sectionClasses">
    <mz-col class="mz-filter-section__title"
      :style="{width:titleWidth}">
      <slot name="title">{{title}}</slot>
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
  readonly title!: string
  @Prop({ type: String, default: 'top' })
  readonly titlePosition!: 'top' | 'left' | 'right'
  @Prop(String)
  readonly titleWidth!: string

  get sectionClasses() {
    const classes = []
    if (['top', 'left', 'right'].includes(this.titlePosition)) {
      classes.push(`mz-filter-section--${this.titlePosition}`)
    }
    return classes
  }

  setValue(value: any) {
    this.$emit('input', value)
    this.$emit('change', value)
  }
}
</script>

<style lang="scss" >
.mz-filter-section {
  &__title {
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
      &__title {
        flex-shrink: 0;
        line-height: 34px;
      }

      &__content {
        flex-grow: 1;
      }
    }
  }

  &--right {
    .mz-filter-section__title {
      text-align: right;
    }
  }
}
</style>
