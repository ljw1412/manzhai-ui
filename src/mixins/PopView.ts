import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import MzMask from '@packages/Mask'
import MzMaskPlugin from '@packages/Mask/plugin'
import PopupManager from '@/utils/popup-manager'

@Component({ components: { MzMask } })
export default class MzPopView extends Vue {
  @Model('visible:change', { type: Boolean })
  readonly visible!: boolean
  @Prop(Number)
  readonly zIndex!: number
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly mask!: boolean
  @Prop(String)
  readonly maskColor!: string
  @Prop({ type: Boolean, default: true })
  readonly maskAppendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly closeOnClickMask!: boolean
  @Prop({ type: Boolean, default: true })
  readonly closeOnPressEscape!: boolean
  @Prop({ type: Function })
  readonly beforeClose!: (done: any) => void | Promise<any>

  _popupId = PopupManager.popupId
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

  // 当遮罩点击禁用时(需使用的地方重写方法)
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
      this.$emit('visible:change', false)
      this.$emit('close')
    }
  }

  displayBodyMask(visible: boolean) {
    if (visible) {
      MzMaskPlugin.show({
        color: this.maskColor,
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
      PopupManager.modalStack.push(this)
    } else {
      PopupManager.modalStack.stack.remove(this)
    }
    if (this.mask && this.maskAppendToBody) this.displayBodyMask(visible)
  }

  beforeMount() {
    PopupManager.bind(this._popupId, this)
  }

  beforeDestroy() {
    PopupManager.unbind(this._popupId)
    if (this.mask && this.maskAppendToBody) this.displayBodyMask(false)
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
