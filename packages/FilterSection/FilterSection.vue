<template>
  <mz-row class="mz-filter-section"
    :class="sectionClasses">
    <mz-col v-if="$slots.label || label"
      class="mz-filter-section__label"
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
  ProvideReactive,
  Inject,
  Watch
} from 'vue-property-decorator'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import { typeOf } from 'manzhai-ui/src/utils/assist'
import MzFilterSectionGroup from './FilterSectionGroup.vue'
import MzFilterSectionItem from './FilterSectionItem.vue'

@Component({
  provide() {
    return { mzFilterSection: this }
  }
})
export default class MzFilterSection extends Mixins(FormElement) {
  @Inject({ from: 'mzFilterSectionGroup', default: null })
  readonly group!: MzFilterSectionGroup
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

  itemList: MzFilterSectionItem[] = []
  mValue: any = null

  get sectionValue() {
    return this.group ? this.mValue : this.value
  }

  set sectionValue(value: any) {
    this.$emit('input', value)
    this.$emit('change', value)
    if (this.group) {
      this.mValue = value
      if (!this.name) {
        console.error(
          '[MzFilterSectionGroup]',
          '在Group下的Section必须包含name属性来区别，且name值必须唯一！'
        )
        return
      }
      this.group.updateGroupValue({ [this.name]: value })
    }
  }

  get sectionClasses() {
    const classes: (Record<string, any> | string)[] = []
    if (['top', 'left', 'right'].includes(this.labelPosition)) {
      classes.push(`mz-filter-section--${this.labelPosition}`)
    }
    return classes
  }

  // 更新子的选中状态
  updateItem(value: any) {
    if (!value) return
    this.$nextTick(() => {
      this.itemList.forEach(item => {
        item.checked =
          this.multiple && typeOf(value) === 'array'
            ? value.includes(item.value)
            : item.value === value
      })
    })
  }

  updateValue(value: any) {
    if (this.multiple) {
      value = this.itemList.filter(item => item.checked).map(item => item.value)
    }
    this.sectionValue = value
  }

  @Watch('sectionValue', { immediate: true })
  onValueChange(val: any) {
    this.updateItem(val)
  }

  created() {
    this.group && this.group.itemList.push(this)
  }

  beforeDestroy() {
    this.group && this.group.itemList.remove(this)
  }
}
</script>