<template>
  <div class="mz-select"
    :class="{
      'mz-select--active':isActive,
      'mz-select--search':search
    }">
    <mz-input ref="input"
      outlined
      :append-icon="arrowIcon"
      :value="current"
      :label="label"
      :readonly="true"
      :label-up="true"
      :is-focus="searchFocus"
      @click.native="onClick"></mz-input>
    <input v-if="search"
      class="mz-select__search-input mz-input"
      v-model="filterText"
      @focus="searchFocus = true"
      @blur="searchFocus = false" />
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
            :label="item[labelName] || item[valueName]"
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
import MzInput from '../Input'
import SizeMixin from '../../src/mixins/size'
import FormElement from '../../src/mixins/FormElement'
import { typeOf } from '../../src/utils/assist'
import { MzOption } from '.'

@Component({
  components: {
    MzInput
  },
  provide() {
    return { mzSelect: this }
  }
})
export default class MzSelect extends Mixins(SizeMixin, FormElement) {
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
    if (this.searchFocus) return ''
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
    this.isActive = !this.isActive
  }

  onValueChange(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }

  onItemClick(value: any, data: any) {
    this.isActive = false
  }

  @Watch('searchFocus')
  onSearchFocusChange(focus: boolean) {
    if (!focus) this.filterText = ''
    else {
      setTimeout(() => {
        this.isActive = true
      }, 100)
    }
  }
}
</script>

<style lang="scss">
.mz-select {
  position: relative;

  .mz-input__inner {
    cursor: pointer;
  }

  &__search-input {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    padding: 12px 16px 14px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 0;
    font-size: var(--mz-input__input-font-size);
    color: var(--mz-input__input-font-color);
    caret-color: var(--mz-input__input-caret-color);
  }
}
</style>
