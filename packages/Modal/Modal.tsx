import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'
import MzPopView from 'manzhai-ui/src/mixins/PopView'
import MzCard from '../Card/Card.vue'

@Component({ components: { MzCard } })
export default class MzModal extends Mixins(BaseAttribute, MzPopView) {
  @Prop(String)
  readonly title!: string
  @Prop()
  readonly content!: any
  @Prop({ type: Number, default: 15 })
  readonly elevation!: number
  @Prop({ type: String, default: '500px' })
  readonly width!: string
  @Prop(String)
  readonly top!: string
  @Prop(String)
  readonly radius!: string
  @Prop({ type: String, default: 'mz-zoom' })
  readonly transition!: string
  @Prop()
  readonly headerStyle!: any
  @Prop()
  readonly bodyStyle!: any
  @Prop()
  readonly footerStyle!: any
  @Prop(Boolean)
  readonly outerScroll!: boolean
  @Prop(Boolean)
  readonly divider!: boolean
  @Prop(Boolean)
  readonly fullscreen!: boolean
  @Prop({ type: Boolean, default: true })
  readonly showClose!: boolean

  isDisplayWrapper = false
  isAnimated = false
  animateTimer = 0

  get headless() {
    return !this.$slots.header && !this.title
  }

  get classes() {
    return [
      'mz-modal',
      {
        'is-divider': this.divider,
        'is-headless': this.headless,
        'is-inner-scroll': !this.outerScroll,
        'is-fullscreen': this.fullscreen,
        'is-animated': this.isAnimated
      }
    ]
  }

  render(h: CreateElement) {
    const warpperData = {
      class: ['mz-modal-wrapper'],
      style: [
        {
          zIndex: this.mZIndex,
          pointerEvents: this.maskAppendToBody ? 'none' : undefined,
          overflow: this.isAnimated || !this.visible ? 'hidden' : undefined
        }
      ],
      directives: [{ name: 'show', value: this.isDisplayWrapper }]
    }
    const modalData = {
      class: this.classes,
      style: [
        this.baseStyles,
        {
          width: this.fullscreen ? undefined : this.width,
          marginTop: this.top,
          borderRaduis: this.radius,
          zIndex: this.mZIndex
        }
      ],
      directives: [
        { name: 'elevation', value: this.elevation },
        { name: 'show', value: this.visible }
      ]
    }
    return (
      <div {...warpperData}>
        {this.renderMask()}
        <transition
          name={this.transition}
          on-after-enter={() => {
            this.$emit('opend')
          }}
          on-after-leave={() => {
            this.$emit('closed')
            this.isDisplayWrapper = false
          }}>
          <mz-card {...modalData}>
            {this.renderClose()}
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
          </mz-card>
        </transition>
      </div>
    )
  }

  renderClose() {
    if (!this.showClose || this.headless) return

    const data = {
      class: ['mz-modal__close'],
      props: { name: 'close', size: 24 },
      on: {
        click: this.close
      }
    }
    return <mz-icon {...data}></mz-icon>
  }

  renderHeader() {
    if (this.headless) return
    return (
      <div class="mz-modal__header" style={this.headerStyle}>
        {this.$slots.header || <div class="mz-modal__title">{this.title}</div>}
      </div>
    )
  }

  renderBody() {
    return (
      <div class="mz-modal__body" style={this.bodyStyle}>
        {this.$slots.default || this.content}
      </div>
    )
  }

  renderFooter() {
    if (!this.$slots.footer) return
    return (
      <div class="mz-modal__footer" style={this.footerStyle}>
        {this.$slots.footer}
      </div>
    )
  }

  handleMaskDisabledClick() {
    this.isAnimated = true
    clearTimeout(this.animateTimer)
    this.animateTimer = setTimeout(() => {
      this.isAnimated = false
    }, 150)
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.isDisplayWrapper = true
    }
  }
}
