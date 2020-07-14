<script lang="tsx">
import { Component, Vue, Ref, Prop, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import {
  addResizeListener,
  removeResizeListener
} from 'manzhai-ui/src/utils/resize-event'
import { on, off } from 'manzhai-ui/src/utils/dom'
import MzBar from './Bar.vue'

@Component({ components: { MzBar } })
export default class MzScrollbar extends Vue {
  @Prop({ type: String, default: '15px' })
  readonly barSize!: string
  @Prop(String)
  readonly barColor!: string
  @Prop({ type: Boolean, default: true })
  readonly always!: boolean
  @Prop(Boolean)
  readonly placeholder!: boolean

  @Ref('wrapper')
  wrapperRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  @Ref('barX')
  barXRef!: MzBar
  @Ref('barY')
  barYRef!: MzBar

  barX = { viewSize: 0, scrollSize: 0, type: 'x', barSize: '' }
  barY = { viewSize: 0, scrollSize: 0, type: 'y', barSize: '' }
  translate = { x: 0, y: 0 }
  touchPoint = { x: 0, y: 0 }

  get contentStyles() {
    return {
      transform: `translate(${this.translate.x}px,${this.translate.y}px)`
    }
  }

  render(h: CreateElement) {
    const contentStyles: Record<string, any> = {}
    const content = (
      <div
        ref="content"
        class="mz-scrollbar__content"
        style={[this.contentStyles, contentStyles]}>
        {this.$slots.default}
      </div>
    )

    const bar = [this.barY, this.barX].map(item => {
      if (item.scrollSize > item.viewSize) {
        if (item.type === 'x' && this.placeholder) {
          contentStyles.paddingBottom = item.barSize
        }
        if (item.type === 'y' && this.placeholder) {
          contentStyles.paddingRight = item.barSize
        }
        const data = {
          props: { ...item, [item.type]: true, color: this.barColor },
          on: { translate: this.translateTo },
          ref: 'bar' + item.type.toUpperCase()
        }
        return <mz-bar {...data}></mz-bar>
      }
    })

    const wrapperData = {
      ref: 'wrapper',
      class: ['mz-scrollbar', { 'mz-scrollbar--always': this.always }],
      on: {
        mousewheel: this.handleMousewheel,
        touchstart: this.handleTouchstart
      }
    }

    return (
      <div {...wrapperData}>
        {content}
        {bar}
      </div>
    )
  }

  updateSize() {
    this.barY.scrollSize = this.wrapperRef.scrollHeight
    this.barY.viewSize = this.wrapperRef.clientHeight
    this.barX.scrollSize = this.wrapperRef.scrollWidth
    this.barX.viewSize = this.wrapperRef.clientWidth
  }

  mounted() {
    addResizeListener(this.wrapperRef, this.updateSize)
    addResizeListener(this.contentRef, this.updateSize)
  }

  beforeDestroy() {
    removeResizeListener(this.wrapperRef, this.updateSize)
    removeResizeListener(this.contentRef, this.updateSize)
  }

  translateTo(direction: 'x' | 'y' | '', translate: number) {
    setTimeout(() => {
      if (!direction) return
      if (translate < 0) translate = 0
      const bar = this[('bar' + direction.toUpperCase()) as 'barX' | 'barY']
      if (translate > bar.scrollSize - bar.viewSize) {
        translate = bar.scrollSize - bar.viewSize
      }
      this.translate[direction] = -translate
    }, 0)
  }

  setBarTranslate({ deltaX, deltaY }: { deltaX?: number; deltaY?: number }) {
    if (deltaX && this.barXRef) {
      this.barXRef.setTranslate(deltaX)
    }
    if (deltaY && this.barYRef) {
      this.barYRef.setTranslate(deltaY)
    }
  }

  // 鼠标滚轮事件
  handleMousewheel(e: MouseWheelEvent) {
    e.preventDefault()
    const deltaX = e.deltaX
    const deltaY = e.deltaY
    this.setBarTranslate({ deltaX, deltaY })
  }

  // 触摸事件开始
  handleTouchstart(e: TouchEvent) {
    if (!e.touches || e.touches.length > 1) return
    this.touchPoint.y = e.touches[0].clientY
    this.touchPoint.x = e.touches[0].clientX
    on(window, 'touchmove', this.handleTouchmove)
    on(window, 'touchend', this.handleTouchend)
  }

  // 触摸事件移动
  handleTouchmove(e: TouchEvent) {
    if (!e.touches || e.touches.length > 1) return
    const deltaY = this.touchPoint.y - e.touches[0].clientY
    this.touchPoint.y = e.touches[0].clientY
    const deltaX = this.touchPoint.x - e.touches[0].clientX
    this.touchPoint.x = e.touches[0].clientX
    this.setBarTranslate({ deltaX, deltaY })
  }

  // 触摸事件结束
  handleTouchend(e: TouchEvent) {
    off(window, 'touchmove', this.handleTouchmove)
    off(window, 'touchend', this.handleTouchend)
  }

  @Watch('barSize', { immediate: true })
  onBarSizeChange(val: string) {
    this.barX.barSize = val
    this.barY.barSize = val
  }
}
</script>
