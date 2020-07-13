<template>
  <div class="mz-filter-section-item p-4 user-select-none d-inline-flex align-items-center"
    :class="itemClass"
    @click="onItemClick">
    <div class="mz-filter-section-item__label w-100 text-center py-4 px-6 fs-14 lh-14"
      :class="{
        'font-weight-bold': checked,
        'text-gray-900':!checked,
        'text-primary':checked && !isBackground,
        'text-white bg-primary':checked && isBackground,
        'border-primary':checked && (isBackground || isOutlined)
      }"
      :style="labelStyle">
      <slot :checked="checked">{{label||value}}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Mixins } from 'vue-property-decorator'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import { typeOf } from 'manzhai-ui/src/utils/assist'
import MzFilterSection from './FilterSection.vue'

@Component
export default class MzFilterSectionItem extends Mixins(FormElement) {
  @Inject({ from: 'mzFilterSection', default: null })
  section!: MzFilterSection
  @Prop({ required: true })
  readonly value!: any
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop(Boolean)
  readonly background!: boolean
  @Prop(Boolean)
  readonly custom!: boolean
  @Prop()
  readonly labelStyle!: any

  checked = false

  get isOutlined() {
    return (this.section && this.section.outlined) || this.outlined
  }

  get isBackground() {
    return (this.section && this.section.background) || this.background
  }

  get itemClass() {
    const classes = {
      'cursor-pointer': !this.disabled,
      'is-custom': this.custom
    }
    if (!this.custom) {
      Object.assign(classes, {
        'is-outlined': this.isOutlined,
        'is-background': this.isBackground,
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