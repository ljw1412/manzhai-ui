import './Mask.scss'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
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
  @Prop(Boolean)
  readonly appendToBody!: boolean

  mZindex = 1000

  render(h: CreateElement) {
    if (!this.value) return null
    const data = {
      class: ['mz-mask'],
      style: {
        zIndex: this.mZindex
      },
      on: this.$listeners
    }
    return (
      <transition name={this.transition}>
        <div {...data}>{this.$slots.default}</div>
      </transition>
    )
  }

  @Watch('value')
  onValueChange(val: boolean) {
    if (val) {
      this.appendToBody && this.$el && document.body.appendChild(this.$el)
      this.mZindex = this.zIndex || getZIndex()
    } else if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
