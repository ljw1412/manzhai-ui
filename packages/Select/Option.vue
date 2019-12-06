<template>
  <mz-list-item class="mz-option"
    :value="value"
    :label="label"
    :disabled="isDisabled"
    @click="onClick">
  </mz-list-item>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Inject } from 'vue-property-decorator'
import { MzSelect } from '.'
import FormElement from '../../src/mixins/FormElement'

@Component
export default class MzOption extends Mixins(FormElement) {
  @Inject({ from: 'mzSelect', default: null })
  readonly mzSelect!: MzSelect

  get isDisabled() {
    return this.disabled || (!!this.mzSelect && this.mzSelect.disabled)
  }

  onClick(value: any, data: any) {
    if (this.isDisabled) return
    this.$emit('click', value, data)
    if (this.mzSelect) {
      this.mzSelect.onValueChange(value, data)
      this.mzSelect.onItemClick(value, data)
    }
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

<style lang="scss">
</style>
