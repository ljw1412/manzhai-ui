import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzCard from '../Card/Card.vue'
import BaseAttribute from '@/mixins/BaseAttribute'
import MzPopView from '@/mixins/PopView'

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
  @Prop(Boolean)
  readonly outerScroll!: boolean
  @Prop(Boolean)
  readonly divider!: boolean
  @Prop(Boolean)
  readonly fullscreen!: boolean

  isDisplayWrapper = false

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
        'is-fullscreen': this.fullscreen
      }
    ]
  }

  render(h: CreateElement) {
    const warpperData = {
      class: ['mz-modal-wrapper'],
      style: [
        {
          zIndex: this.mZIndex,
          pointerEvents: this.maskAppendToBody ? 'none' : undefined
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
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
          </mz-card>
        </transition>
      </div>
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
    return (
      <div class="mz-modal__body">{this.$slots.default || this.content}</div>
    )
  }

  renderFooter() {
    if (!this.$slots.footer) return
    return <div class="mz-modal__footer">{this.$slots.footer}</div>
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.isDisplayWrapper = true
    }
  }
}
