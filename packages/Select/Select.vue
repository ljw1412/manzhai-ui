<template>
  <div class="mz-select"
    :class="{'mz-select--active':isActive}">
    <mz-input ref="input"
      outlined
      :append-icon="arrowIcon"
      :value="value"
      :readonly="!search"
      @click.native.stop="onClick"></mz-input>
    <mz-dropdown-card :visiable.sync="isActive"
      min-height="100px"
      :dropdownMatchReferenceWidth="dropdownMatchSelectWidth"
      :width="width"
      :reference="inputRef"
      :container="appendToBody? 'body' : null">
    </mz-dropdown-card>
  </div>
</template>

<script lang="ts">
import MzInput from '../Input'
import { Component, Vue, Prop, Ref, Watch } from 'vue-property-decorator'

@Component({
  components: {
    MzInput
  }
})
export default class MzSelect extends Vue {
  @Prop(Boolean)
  readonly search!: boolean
  @Prop(Boolean)
  readonly dropdownMatchSelectWidth!: boolean
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Ref('input')
  readonly inputRef!: MzInput

  value = ''
  isActive = false
  left = ''
  top = ''
  width = '100px'

  get arrowIcon() {
    return this.isActive ? 'md-arrow-dropup' : 'md-arrow-dropdown'
  }

  onClick() {
    this.isActive = !this.isActive
  }
}
</script>

<style lang="scss">
.mz-select {
  position: relative;
}
</style>
