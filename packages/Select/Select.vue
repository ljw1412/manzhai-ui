<template>
  <div class="mz-select"
    v-click-outside="{
      fn: onClickoutside,
      disabled: !isActive
    }"
    :class="{
      'mz-select--active':isActive,
      'mz-select--search':search
    }">
    <mz-input ref="input"
      outlined
      :value="searchFocus ? '' : current"
      :placeholder="searchFocus ? '': placeholder"
      :size="size"
      :readonly="true"
      :disabled="disabled"
      @click.native="onClick">
      <mz-icon :name="arrowIcon"
        slot="suffix"></mz-icon>
    </mz-input>
    <span v-if="!disabled && search"
      class="mz-input mz-select__search-input"
      :class="mzSize">
      <input ref="searchInput"
        class="mz-input__inner"
        v-model="filterText"
        :placeholder="searchFocus ? current:''"
        @focus="searchFocus = true" />
    </span>
    <mz-dropdown-card :visiable.sync="isActive"
      :dropdownMatchReferenceWidth="dropdownMatchSelectWidth"
      :width="width"
      :reference="inputRef"
      :placement="under?'bottom':undefined"
      :container="appendToBody? 'body' : null">
      <mz-list :value="value"
        :size="size"
        :filter-text="filterText"
        @change="onValueChange">
        <slot>
          <mz-list-item v-for="item of list"
            ripple
            :data="item"
            :key="item[valueName]"
            :value="item[valueName]"
            :title="item[labelName] || item[valueName]"
            @click="onItemClick"></mz-list-item>
        </slot>
      </mz-list>
    </mz-dropdown-card>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Ref,
  Watch,
  Mixins
} from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup } from '../List/index'
import { MzInput } from '../Input'
import MzSize from '@/mixins/MzSize'
import FormElement from '@/mixins/FormElement'
import { typeOf } from '@/utils/assist'
import { MzOption } from '.'

@Component({
  components: {
    MzInput
  },
  provide() {
    return { mzSelect: this }
  }
})
export default class MzSelect extends Mixins(MzSize, FormElement) {
  @Prop({ default: () => [] })
  readonly list!: Record<string, any>[]
  @Prop()
  readonly value!: any
  @Prop({ default: 'value' })
  readonly valueName!: string
  @Prop({ default: 'label' })
  readonly labelName!: string
  @Prop(Boolean)
  readonly search!: boolean
  @Prop(Boolean)
  readonly dropdownMatchSelectWidth!: boolean
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop(Boolean)
  readonly under!: boolean
  @Ref('input')
  readonly inputRef!: MzInput
  @Ref('searchInput')
  readonly searchInputRef!: HTMLInputElement

  optionList: MzOption[] = []

  isActive = false
  left = ''
  top = ''
  width = '100px'
  filterText = ''
  searchFocus = false

  get mList() {
    return this.optionList.length ? this.optionList : this.list
  }

  get current() {
    if (this.optionList.length) {
      const item = this.optionList.find(item => item.value === this.value)
      return item ? item.label || item.value : ''
    } else {
      const item = this.list.find(item => item[this.valueName] === this.value)
      return item ? item[this.labelName] || item[this.valueName] : ''
    }
  }

  get arrowIcon() {
    return this.isActive ? 'md-arrow-dropup' : 'md-arrow-dropdown'
  }

  onClick() {
    if (this.disabled) return
    this.isActive = !this.isActive
  }

  onClickoutside() {
    this.searchFocus = false
    this.isActive = false
    if (this.search && this.searchInputRef) this.searchInputRef.blur()
  }

  onSearchInputFocus() {
    this.searchFocus = true
    this.isActive = true
  }

  onValueChange(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }

  onItemClick(value: any, data: any) {
    this.isActive = false
    setTimeout(() => {
      this.searchFocus = false
    }, 200)
  }

  @Watch('searchFocus')
  onSearchFocusChange(focus: boolean) {
    if (!focus) {
      this.filterText = ''
      this.inputRef.focused = false
    } else {
      this.isActive = true
      this.inputRef.focused = true
    }
  }
}
</script>

