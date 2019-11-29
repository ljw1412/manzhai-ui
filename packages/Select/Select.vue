<template>
  <div v-clickoutside="close"
    class="mz-select"
    :class="{'mz-select--active':isActive}">
    <mz-input outlined
      :append-icon="arrowIcon"
      :value="value"
      :readonly="!search"
      @focus="onFocus"></mz-input>
  </div>
</template>

<script lang="ts">
import MzInput from '../Input'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    MzInput
  }
})
export default class MzSelect extends Vue {
  @Prop(Boolean)
  readonly search!: boolean

  value = ''
  isActive = false

  get arrowIcon() {
    return this.isActive ? 'md-arrow-dropup' : 'md-arrow-dropdown'
  }

  onFocus() {
    this.isActive = true
  }

  close() {
    this.isActive = false
  }
}
</script>

<style lang="scss" >
</style>
