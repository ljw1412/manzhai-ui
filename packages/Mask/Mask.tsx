import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import PopupManager from 'manzhai-ui/src/utils/popup-manager'
import { addMask, removeMask } from './plugin'

@Component
export default class MzMask extends Vue {
  @Model('input', { type: Boolean })
  readonly visible!: boolean
  @Prop({ type: String, default: 'mz-fade' })
  readonly transition!: string
  @Prop(String)
  readonly color!: string
  @Prop(Number)
  readonly zIndex!: number
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop(Boolean)
  readonly absolute!: boolean
  @Prop(Boolean)
  readonly bgMode!: boolean
  @Prop(String)
  readonly blur!: string
  @Prop({ type: Function, default: (e: MouseEvent) => {} })
  readonly onClick!: (e: MouseEvent) => void

  mZIndex = 1000

  render(h: CreateElement) {
    const data = {
      class: [
        'mz-mask',
        {
          'mz-mask--absolute': this.absolute,
          'mz-mask--bg-mode': this.bgMode
        }
      ],
      style: {
        zIndex: this.mZIndex,
        backgroundColor: this.color,
        backdropFilter: this.blur ? `blur(${this.blur})` : undefined
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
      this.mZIndex = this.zIndex || PopupManager.zIndex
      if (!this.absolute && !this.bgMode) addMask(this)
    } else {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      if (!this.absolute && !this.bgMode) removeMask(this)
    }
  }

  @Watch('zIndex', { immediate: true })
  onZIndexChange(zIndex?: number) {
    this.mZIndex = typeof zIndex === 'number' ? zIndex : PopupManager.zIndex
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
