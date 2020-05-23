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
  @Prop([String, Object, Array])
  readonly headerStyle!: any
  @Prop([String, Object, Array])
  readonly contentStyle!: any
  @Prop([String, Object, Array])
  readonly footerStyle!: any

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
      class: [
        'mz-drawer',
        `is-${this.placement}`,
        { 'is-open': this.visible, 'is-divider': this.divider }
      ],
      style: {
        width: this.isVertical ? '100%' : this.width,
        height: !this.isVertical ? '100%' : this.height,
        borderRadius: this.radius,
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
            {this.renderFooter()}
          </mz-card>
        </transition>
      </div>
    )
  }

  renderClose() {
    if (!this.showClose) return

    const data = {
      class: ['mz-drawer__close', 'is-pointer', 'mz-click-effect'],
      props: { name: 'close', size: 24 },
      on: {
        click: this.close
      }
    }
    return <mz-icon {...data}></mz-icon>
  }

  renderHeader() {
    if (!this.title && !this.$slots.title) return
    return (
      <header class="mz-drawer__header" style={this.headerStyle}>
        {this.$slots.title || this.title}
      </header>
    )
  }

  renderContent() {
    return (
      <section class="mz-drawer__content" style={this.contentStyle}>
        {this.$slots.default}
      </section>
    )
  }

  renderFooter() {
    if (!this.$slots.footer) return
    return (
      <footer class="mz-drawer__footer" style={this.footerStyle}>
        {this.$slots.footer}
      </footer>
    )
  }

  mounted() {
    if (this.visible) {
      this.onPopVisibleChange(this.visible)
      this.onVisibleChange(this.visible)
    }
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.isDisplayWrapper = true
    }
  }
}
