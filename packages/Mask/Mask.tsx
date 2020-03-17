import './Mask.scss'
import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import getZIndex from '@/utils/zindex'

@Component
export default class MzMask extends Vue {
  @Model('input', { type: Boolean })
  readonly visible!: boolean
  @Prop({ type: String, default: 'mz-fade' })
  readonly transition!: string
  @Prop(Number)
  readonly zIndex!: number
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop(Function)
  readonly onClick!: (e: MouseEvent) => void

  mZIndex = 1000

  render(h: CreateElement) {
    const data = {
      class: ['mz-mask'],
      style: {
        zIndex: this.mZIndex
      },
      on: Object.assign({ click: this.onClick }, this.$listeners)
    }
    return (
      <transition name={this.transition}>
        <div v-show={this.visible} {...data}>
          {this.$slots.default}
        </div>
      </transition>
    )
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.appendToBody && this.$el && document.body.appendChild(this.$el)
      this.mZIndex = this.zIndex || getZIndex()
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
