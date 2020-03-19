import './Modal.scss'
import { Component, Prop, Model, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzMask from '../Mask'
import MzMaskPlugin from '../Mask/plugin'
import BaseAttribute from '@/mixins/BaseAttribute'
import getZIndex from '@/utils/zindex'

@Component({ components: { MzMask } })
export default class MzModal extends BaseAttribute {
  @Model('input', { type: Boolean })
  readonly visible!: boolean
  @Prop(String)
  readonly title!: string
  @Prop({ type: Number, default: 15 })
  readonly elevation!: number
  @Prop(Number)
  readonly zIndex!: number
  @Prop({ type: String, default: '500px' })
  readonly width!: string
  @Prop(String)
  readonly top!: string
  @Prop(String)
  readonly radius!: string
  @Prop({ type: String, default: 'mz-zoom' })
  readonly transition!: string
  @Prop(Boolean)
  readonly outerScroll!: boolean
  @Prop(Boolean)
  readonly divider!: boolean
  @Prop(Boolean)
  readonly headless!: boolean
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly mask!: boolean
  @Prop({ type: Boolean, default: true })
  readonly maskAppendToBody!: boolean
  @Prop({ type: Boolean, default: true })
  readonly closeOnClickMask!: boolean
  @Prop({ type: Function })
  readonly beforeClose!: (done: any) => void | Promise<any>

  mZIndex = 1000
  maskZIndex = 1000

  get classes() {
    return [
      'mz-modal',
      {
        'mz-modal--divider': this.divider,
        'mz-modal--headless': this.headless,
        'mz-modal--inner-scroll': !this.outerScroll
      }
    ]
  }

  render(h: CreateElement) {
    const warpperData = {
      class: ['mz-modal-wrapper'],
      style: [{ zIndex: this.mZIndex }],
      on: {
        click: (event: MouseEvent) => {
          if (event.target !== event.currentTarget) return
          this.closeByMask()
        }
      }
    }
    const modalData = {
      class: this.classes,
      style: [
        this.baseStyles,
        {
          marginTop: this.top,
          borderRaduis: this.radius
        }
      ],
      directives: [{ name: 'elevation', value: this.elevation }]
    }
    return (
      <transition name={this.transition}>
        <div v-show={this.visible} {...warpperData}>
          {this.renderMask()}
          <div {...modalData}>
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
          </div>
        </div>
      </transition>
    )
  }

  renderHeader() {
    if (this.headless) return
    return (
      <div class="mz-modal__header">
        {this.$slots.header || <div class="mz-modal__title">{this.title}</div>}
      </div>
    )
  }

  renderBody() {
    return <div class="mz-modal__body">{this.$slots.default}</div>
  }

  renderFooter() {
    if (!this.$slots.footer) return
    return <div class="mz-modal__footer">{this.$slots.footer}</div>
  }

  renderMask() {
    if (!this.mask || this.maskAppendToBody) return

    const data = {
      props: { visible: this.visible, zIndex: this.maskZIndex },
      on: { click: this.closeByMask }
    }
    return <mz-mask {...data}></mz-mask>
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

  closeByMask() {
    this.closeOnClickMask && this.close()
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
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.maskZIndex = this.zIndex ? this.zIndex - 1 : getZIndex()
      this.mZIndex = this.zIndex || getZIndex()
      this.appendToBody && document.body.appendChild(this.$el)
    } else {
    }
    if (this.mask && this.maskAppendToBody) this.displayBodyMask(visible)
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}