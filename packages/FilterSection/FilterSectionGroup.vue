<template>
  <div class="mz-filter-section-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Prop } from 'vue-property-decorator'
import BaseAttribute from '../../src/mixins/BaseAttribute'
import FormElement from '../../src/mixins/FormElement'
import { MzFilterSectionItem } from '.'

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

  itemList: MzFilterSectionItem[] = []

  setValue(name: string, value: any) {
    if (!name) {
      console.error(
        '[MzFilterSectionGroup]',
        '在Group下的Section必须包含name属性来区别，且name值必须唯一！'
      )
      return
    }
    this.$emit('input', { ...this.value, [name]: value })
  }
}
</script>

<style lang="scss">
</style>
