<template>
  <mz-dropdown ref="dropdown"
    class="mz-select"
    tag="div"
    :arrow="arrow"
    :animation="animation"
    :disabled="disabled"
    :offset="arrow? undefined : [0, 0]"
    @show="handleDropdownShow"
    @hide="active = false">
    <mz-input ref="input"
      readonly
      :value="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size">
      <mz-icon :name="this.active ? 'chevron-up' : 'chevron-down'"
        slot="suffix"></mz-icon>
    </mz-input>

    <mz-list v-model="mValue"
      slot="content"
      clickable
      :size="size"
      :width="dropdownWidth">
      <slot></slot>
    </mz-list>
  </mz-dropdown>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref } from 'vue-property-decorator'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzOption from './Option.vue'
import MzInput from '../Input/Input'
import MzDropdown from '../Dropdown/Dropdown'
import MzList from '../List/List'

@Component({
  components: { MzInput, MzDropdown, MzList },
  provide() {
    return { mzSelect: this }
  }
})
export default class MzSelect extends Mixins(FormElement, MzSize) {
  @Prop(String)
  readonly placeholder!: string
  @Prop(Boolean)
  readonly filterable!: boolean
  @Prop(String)
  readonly size!: string
  @Prop(Boolean)
  readonly arrow!: boolean
  @Prop({ type: [String, Boolean], default: 'shift-away-subtle' })
  readonly animation!: string | boolean
  @Ref('input')
  readonly inputRef!: MzInput
  @Ref('content')
  readonly contentRef!: MzList
  @Ref('dropdown')
  readonly dropdownRef!: MzDropdown

  optionList: MzOption[] = []

  text = ''
  active = false
  dropdownWidth = ''

  get mValue() {
    return this.value
  }

  set mValue(val: any) {
    this.$emit('input', val)
    this.$emit('change', val)
  }

  handleDropdownShow() {
    this.active = true
    const inputEl = this.inputRef.$el as HTMLElement
    this.dropdownWidth = inputEl.offsetWidth + 'px'
  }

  handleOptionChange({ value, label }: { value: string; label: string }) {
    this.text = label
    this.mValue = value
    this.dropdownRef.handleVisibleChange(false)
  }
}
</script>

<style lang="scss">
</style>
