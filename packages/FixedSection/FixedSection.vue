<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import BaseAttribute from '@/mixins/BaseAttribute'

@Component
export default class MzFixedSection extends BaseAttribute {
  @Prop(Boolean)
  readonly placeholder!: boolean
  @Prop(Boolean)
  readonly sticky!: boolean
  @Prop(String)
  readonly top!: string
  @Prop(String)
  readonly bottom!: string
  @Prop(String)
  readonly left!: string
  @Prop(String)
  readonly right!: string
  @Prop({ type: Number, default: 900 })
  readonly zIndex!: number

  render(h: CreateElement) {
    const section = this.renderSection(h)
    const placeholderWrapper = <div>{section}</div>
    return this.placeholder ? placeholderWrapper : section
  }

  renderSection(h: CreateElement) {
    const data = {
      class: ['mz-fixed-section', { 'is-sticky': this.sticky }],
      style: [this.baseStyles, { zIndex: this.zIndex }],
      ref: 'section'
    }
    const section = <div {...data}></div>
  }
}
</script>

<style lang="scss">
.mz-fixed-section:not(.is-sticky) {
  position: fixed;
}
</style>
