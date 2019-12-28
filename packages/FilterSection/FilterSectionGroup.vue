<template>
  <div class="mz-filter-section-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Prop, Watch } from 'vue-property-decorator'
import BaseAttribute from '../../src/mixins/BaseAttribute'
import FormElement from '../../src/mixins/FormElement'
import { MzFilterSection } from '.'
import { typeOf } from '../../src/utils/assist'

@Component({
  provide() {
    return { mzFilterSectionGroup: this }
  }
})
export default class MzFilterSectionGroup extends Mixins(
  BaseAttribute,
  FormElement
) {
  @Prop({ type: Object, default: () => ({}) })
  readonly value!: Record<string, any>

  itemList: MzFilterSection[] = []

  updateSection(val: Record<string, any>) {
    Object.keys(val).forEach(name => {
      const item = this.itemList.find(el => el.name === name)
      item && item.updateItem(val[name])
    })
  }

  updateGroupValue(val: Record<string, any>) {
    this.$emit('input', Object.assign({}, this.value, val))
  }

  @Watch('value', { immediate: true })
  onValueChange(val: Record<string, any>) {
    this.$nextTick(() => {
      this.updateSection(val)
    })
  }
}
</script>

<style lang="scss">
</style>
