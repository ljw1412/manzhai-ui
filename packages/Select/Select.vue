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
      :left="left"
      :top="top"
      height="100px"
      :width="width"
      :getContainer="appendToBody? 'body' : $refs.input">
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
  readonly appendToBody!: boolean
  @Ref('input')
  readonly input!: MzInput

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

  getInputRect() {
    return this.input && this.input.$el
      ? this.input.$el.getBoundingClientRect()
      : null
  }

  positionCard() {
    if (this.isActive) {
      const rect = this.getInputRect()
      if (!this.appendToBody) {
        this.top = this.left = '0'
        if (rect) this.width = rect.width + 'px'
      } else if (rect) {
        this.top = rect.top + 'px'
        this.left = rect.left + 'px'
        this.width = rect.width + 'px'
      }
    }
  }

  mounted() {
    window.addEventListener('scroll', this.positionCard)
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.positionCard)
  }

  @Watch('isActive')
  onActiveChange(val: boolean) {
    if (val) {
      this.positionCard()
    }
  }
}
</script>

<style lang="scss">
.mz-select {
  position: relative;
}
</style>
