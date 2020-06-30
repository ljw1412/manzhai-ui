<template>
  <mz-dropdown ref="dropdown"
    class="mz-select"
    tag="div"
    v-model="active"
    :arrow="arrow"
    :animation="animation"
    :disabled="disabled"
    :offset="arrow? undefined : [0, 0]"
    @show="handleDropdownShow">
    <mz-input ref="input"
      readonly
      :value="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size"
      @keydown.native.tab="active = false"
      @keydown.native.esc.stop.prevent="active = false"
      @keydown.native.up.prevent="handleSwitchOption('prev')"
      @keydown.native.down.prevent="handleSwitchOption('next')"
      @keydown.native.enter.prevent="handleEnter">
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
  hoverIndex = -1

  get mValue() {
    return this.value
  }

  set mValue(val: any) {
    this.$emit('input', val)
    this.$emit('change', val)
  }

  get activeIndex() {
    return this.optionList.findIndex(item => item.active)
  }

  handleDropdownShow() {
    const inputEl = this.inputRef.$el as HTMLElement
    this.dropdownWidth = inputEl.offsetWidth + 'px'
    this.hoverIndex = this.activeIndex
    this.updateHoverState()
    this.active = true
  }

  handleEnter() {
    if (this.active && this.hoverIndex !== -1) {
      const option = this.optionList[this.hoverIndex]
      this.text = option.label
      this.mValue = option.value
    }
    this.active = !this.active
  }

  handleSwitchOption(to: 'prev' | 'next') {
    if (!this.active) {
      this.active = true
      return
    }

    const len = this.optionList.length
    if (this.hoverIndex === -1 && to === 'prev') {
      this.hoverIndex = len - 1
    } else {
      this.hoverIndex = (this.hoverIndex + len + (to === 'prev' ? -1 : 1)) % len
    }
    this.updateHoverState()
  }

  updateHoverState() {
    this.optionList.forEach((option, index) => {
      option.isHover = index === this.hoverIndex
    })
  }

  handleOptionChange(data: Record<string, any>) {
    this.text = data.label
    this.active = false
  }
}
</script>