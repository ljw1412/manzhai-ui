<template>
  <mz-list-item ref="option"
    class="mz-option"
    :class="{'is-hover': isHover}"
    :value="value"
    :title="label || value"
    :disabled="isDisabled"
    @click="onClick">
  </mz-list-item>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Mixins,
  Inject,
  Watch,
  Ref
} from 'vue-property-decorator'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import MzSelect from './Select.vue'
import MzListItem from '../List/ListItem'

@Component
export default class MzOption extends Mixins(FormElement) {
  @Inject({ from: 'mzSelect', default: null })
  readonly mzSelect!: MzSelect
  @Ref('option')
  readonly optionRef!: MzListItem

  isHover = false

  get active() {
    return !!this.mzSelect && this.mzSelect.mValue === this.value
  }

  get optionData() {
    return { value: this.value, label: this.label || this.value }
  }

  get isDisabled() {
    return this.disabled || (!!this.mzSelect && this.mzSelect.disabled)
  }

  onClick() {
    if (this.isDisabled) return
    this.$emit('click', this.optionData)
  }

  @Watch('active', { immediate: true })
  handleActiveChange(val: boolean) {
    this.$nextTick(() => {
      if (val && this.mzSelect) {
        this.mzSelect.handleOptionChange(this.optionData)
      }
    })
  }

  created() {
    if (this.mzSelect) {
      this.mzSelect.optionList.push(this)
    }
  }

  beforeDestroy() {
    if (this.mzSelect) {
      this.mzSelect.optionList.remove(this)
    }
  }
}
</script>
