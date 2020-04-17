import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import BaseAttribute from '@/mixins/BaseAttribute'
import MzCard from '../Card/index'
import MzIcon from '../Icon/index'
import MzPopView from '@/mixins/PopView'

@Component({ components: { MzCard, MzIcon } })
export default class MzDrawer extends Mixins(BaseAttribute, MzPopView) {
  @Prop(String)
  readonly title!: string
  @Prop({ type: String, default: 'right' })
  readonly placement!: 'top' | 'right' | 'bottom' | 'left'
  @Prop({ type: Number, default: 15 })
  readonly elevation!: number
  @Prop(Number)
  readonly zIndex!: number
  @Prop({ type: String, default: '512px' })
  readonly width!: string
  @Prop({ type: String, default: '512px' })
  readonly height!: string
  @Prop(String)
  readonly radius!: string
  @Prop(Boolean)
  readonly divider!: boolean
  @Prop({ type: Boolean, default: true })
  readonly showClose!: boolean

  isDisplayWrapper = false

  get isVertical() {
    return ['top', 'bottom'].includes(this.placement)
  }

  render(h: CreateElement) {
    const transitionData = {
      props: { name: 'mz-fade' },
      on: {
        'after-enter': () => {
          this.$emit('opend')
        },
        'after-leave': () => {
          this.$emit('closed')
          this.isDisplayWrapper = false
        }
      }
    }

    const wrapperData = {
      class: ['mz-drawer-wrapper'],
      style: [
        {
          zIndex: this.mZIndex,
          pointerEvents: this.maskAppendToBody ? 'none' : undefined
        }
      ],
      directives: [{ name: 'show', value: this.isDisplayWrapper }]
    }

    const drawerData = {
      class: ['mz-drawer', `is-${this.placement}`, { 'is-open': this.visible }],
      style: {
        width: this.isVertical ? '100%' : this.width,
        height: !this.isVertical ? '100%' : this.height,
        zIndex: this.mZIndex
        // transformOrigin: this.placement
      },
      directives: [
        { name: 'elevation', value: this.elevation },
        { name: 'show', value: this.visible }
      ]
    }

    return (
      <div {...wrapperData}>
        {this.renderMask()}
        <transition {...transitionData}>
          <mz-card {...drawerData}>
            {this.renderClose()}
            {this.renderHeader()}
            {this.renderContent()}
          </mz-card>
        </transition>
      </div>
    )
  }

  renderClose() {
    if (!this.showClose) return

    const data = {
      class: ['mz-drawer__close', 'is-pointer'],
      props: { name: 'md-close', size: 24 },
      on: {
        click: this.close
      }
    }
    return <mz-icon {...data}></mz-icon>
  }

  renderHeader() {
    if (!this.title && !this.$slots.title) return
    return (
      <div class="mz-drawer__header">{this.$slots.title || this.title}</div>
    )
  }

  renderContent() {
    return <div class="mz-drawer__content">{this.$slots.default}</div>
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.isDisplayWrapper = true
    }
  }
}
