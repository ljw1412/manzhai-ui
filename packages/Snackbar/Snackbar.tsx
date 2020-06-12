import { Component, Prop, Model, Watch } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import PopupManager from 'manzhai-ui/src/utils/popup-manager'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'

@Component({ components: { MzIcon } })
export default class MzSnackbar extends MzSize {
  @Model('visible:change', { type: Boolean, default: true })
  readonly visible!: boolean
  /* prettier-ignore */
  @Prop({ type: String, default: 'bottom' })
    readonly placement!: 'top' | 'top-start' | 'top-end' | 'center' | 'bottom' | 'bottom-start' | 'bottom-end'
  @Prop(String)
  readonly type!: string
  @Prop({ type: Number, default: 5000 })
  readonly timeout!: number
  @Prop(String)
  readonly icon!: string
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly content!: string
  @Prop(String)
  readonly textColor!: string
  @Prop(Boolean)
  readonly fixed!: boolean
  @Prop(Boolean)
  readonly absolute!: boolean
  @Prop(Boolean)
  readonly vertical!: boolean
  @Prop(Boolean)
  readonly appendToBody!: boolean
  @Prop({ type: Array, default: () => [0, 0] })
  readonly offset!: [number, number]
  @Prop({ type: Number })
  readonly zIndex!: number
  @Prop(String)
  readonly radius!: string

  timer: number | null = null
  mZIndex: number | null = null

  get placementList() {
    if (!/^(top|bottom|center)(-start|-end)?$/g.test(this.placement)) {
      console.warn(`[ManZhaiUI] placement 属性值无法解析 "${this.placement}"`)
      return ['bottom']
    }
    return this.placement.split('-')
  }

  get transitionName() {
    return this.placementList[0] === 'center' ? 'mz-zoom' : 'mz-y-zoom'
  }

  get offsetStyles() {
    const styles: Record<string, any> = {}
    const [x, y] = this.offset
    styles[`padding-${x > 0 ? 'left' : 'right'}`] = x + 'px'
    styles[`padding-${y > 0 ? 'top' : 'bottom'}`] = y + 'px'
    return styles
  }

  renderMain() {
    const data: VNodeData = {
      class: ['mz-snackbar', this.mzSize, { 'is-vertical': this.vertical }],
      style: {
        borderRadius: this.radius,
        backgroundColor: this.color,
        color: this.textColor
      },
      attrs: {
        'data-background': this.color,
        'data-type': this.type,
        'data-placement': this.placement
      }
    }
    return (
      <div {...data}>
        {(this.$slots.prefix || this.icon) && (
          <div class="mz-snackbar__prefix">
            {this.$slots.prefix || (
              <mz-icon size="24" name={this.icon}></mz-icon>
            )}
          </div>
        )}
        <div class="mz-snackbar__container">
          <div class="mz-snackbar__content">
            {this.$slots.default || this.content}
          </div>
          {this.$slots.suffix && (
            <div class="mz-snackbar__suffix">{this.$slots.suffix}</div>
          )}
        </div>
      </div>
    )
  }

  render(h: CreateElement) {
    const data: VNodeData = {
      class: [
        'mz-snackbar-wrapper',
        {
          'is-fixed': this.fixed,
          'is-absolute': this.absolute && !this.fixed
        }
      ],
      style: [
        {
          zIndex: this.mZIndex,
          transformOrigin: this.placementList[0]
        },
        this.offsetStyles
      ]
    }
    return (
      <transition name={this.transitionName}>
        {this.visible && <div {...data}>{this.renderMain()}</div>}
      </transition>
    )
  }

  initZIndex() {
    if (this.fixed || this.absolute) {
      this.mZIndex = this.zIndex || PopupManager.zIndex
    } else {
      this.mZIndex = null
    }
  }

  initTimer(visible: boolean) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (visible && this.timeout) {
      this.timer = setTimeout(() => {
        this.$emit('visible:change', false)
      }, this.timeout)
    }
  }

  @Watch('visible')
  handleVisibleChange(visible: boolean) {
    if (visible) {
      this.initZIndex()
      this.appendToBody && document.body.appendChild(this.$el)
      this.$emit('show')
    } else {
      this.$emit('closed')
    }
    this.initTimer(visible)
  }

  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
