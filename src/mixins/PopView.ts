import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import MzMask from '@packages/Mask'
import MzMaskPlugin from '@packages/Mask/plugin'
import PopupManager from '@/utils/popup-manager'
import { modalStack } from '@/utils/popup-manager'

@Component({ components: { MzMask } })
export default class MzPopView extends Vue {
  @Model('input', { type: Boolean })
  readonly visible!: boolean
  @Prop(Number)
  readonly zIndex!: number
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly mask!: boolean
  @Prop({ type: Boolean, default: true })
  readonly maskAppendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly closeOnClickMask!: boolean
  @Prop({ type: Boolean, default: true })
  readonly closeOnPressEscape!: boolean
  @Prop({ type: Function })
  readonly beforeClose!: (done: any) => void | Promise<any>

  mZIndex = 1000
  maskZIndex = 1000

  renderMask() {
    if (!this.mask || this.maskAppendToBody) return

    const data = {
      props: { visible: this.visible, zIndex: this.maskZIndex },
      on: { click: this.closeByMask }
    }
    return this.$createElement('mz-mask', data)
  }

  close() {
    if (this.beforeClose && this.beforeClose instanceof Promise) {
      this.beforeClose.then(this.hide).catch(() => {})
    } else if (typeof this.beforeClose === 'function') {
      this.beforeClose(this.hide)
    } else {
      this.hide()
    }
  }

  // 当遮罩点击禁用时，需重写
  handleMaskDisabledClick() {}

  closeByMask() {
    if (this.closeOnClickMask) {
      this.close()
    } else if (this.handleMaskDisabledClick) {
      this.handleMaskDisabledClick()
    }
  }

  hide(cancel?: any) {
    if (cancel !== false) {
      this.$emit('input', false)
      this.$emit('close')
    }
  }

  displayBodyMask(visible: boolean) {
    if (visible) {
      MzMaskPlugin.show({
        zIndex: this.maskZIndex,
        onClick: this.closeByMask
      })
    } else {
      MzMaskPlugin.hide()
    }
  }

  @Watch('visible')
  onPopVisibleChange(visible: boolean) {
    if (visible) {
      this.$emit('open')
      this.maskZIndex = this.zIndex ? this.zIndex - 1 : PopupManager.zIndex
      this.mZIndex = this.zIndex || PopupManager.zIndex
      this.appendToBody && document.body.appendChild(this.$el)
      modalStack.push(this)
    } else {
      modalStack.stack.remove(this)
    }
    if (this.mask && this.maskAppendToBody) this.displayBodyMask(visible)
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
