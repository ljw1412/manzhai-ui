import './Mask.scss'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import getZIndex from '@/utils/zindex'

@Component
export default class MzMask extends Vue {
  @Prop(Boolean)
  readonly value!: boolean
  @Prop({ type: String, default: 'mz-fade' })
  readonly transition!: string
  @Prop(Number)
  readonly zIndex!: number

  render(h: CreateElement) {
    if (!this.value) return null
    const data = {
      class: ['mz-mask'],
      style: {
        zIndex: this.zIndex || getZIndex()
      },
      on: this.$listeners
    }
    return (
      <transition name={this.transition}>
        <div {...data}>{this.$slots.default}</div>
      </transition>
    )
  }
}
