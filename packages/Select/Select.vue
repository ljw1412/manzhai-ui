<template>
  <div class="mz-select"
    :class="{'mz-select--active':isActive}">
    <mz-input ref="input"
      outlined
      :append-icon="arrowIcon"
      :value="current"
      :readonly="!search"
      @click.native="onClick"></mz-input>
    <mz-dropdown-card :visiable.sync="isActive"
      min-height="100px"
      :dropdownMatchReferenceWidth="dropdownMatchSelectWidth"
      :width="width"
      :reference="inputRef"
      :container="appendToBody? 'body' : null">
      <mz-list :value="value"
        :size="size"
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
  @Ref('input')
  readonly inputRef!: MzInput

  OptionList: MzOption[] = []

  isActive = false
  left = ''
  top = ''
  width = '100px'

  get current() {
    const item = this.list.find(item => item[this.valueName] === this.value)
    return item ? item[this.labelName] || item[this.valueName] : ''
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
}
</script>

<style lang="scss">
.mz-select {
  position: relative;
}
</style>
