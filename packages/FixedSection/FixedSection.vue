<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import BaseAttribute from '@/mixins/BaseAttribute'

@Component
export default class MzFixedSection extends BaseAttribute {
  @Prop(Boolean)
  readonly placeholder!: boolean
  @Prop(Object)
  readonly sectionStyle!: Record<string, string>
  @Prop(Boolean)
  readonly sticky!: boolean
  @Prop(Boolean)
  readonly fixed!: boolean
  @Prop(String)
  readonly container!: string
  @Prop({ type: Number, default: 0 })
  readonly offsetTop!: number
  @Prop(String)
  readonly top!: string
  @Prop(String)
  readonly bottom!: string
  @Prop(String)
  readonly left!: string
  @Prop(String)
  readonly right!: string
  @Prop({ type: Number, default: 900 })
  readonly zIndex!: number

  isFixed = false
  containerEl: Window | HTMLElement | null = null
  offsetHeight = 0
  scrollTop = 0
  translateY = 0

  get isWindow() {
    return this.containerEl === window
  }

  render(h: CreateElement) {
    const section = this.renderSection(h)
    const placeholderWrapper = (
      <div
        class="mz-fixed-section-wrapper"
        style={{ height: this.isFixed ? this.offsetHeight + 'px' : undefined }}>
        {section}
      </div>
    )
    return this.placeholder ? placeholderWrapper : section
  }

  renderSection(h: CreateElement) {
    const data = {
      class: [
        'mz-fixed-section',
        {
          'is-sticky': this.isFixed,
          'is-fixed': this.fixed || (this.isFixed && this.isWindow)
        }
      ],
      style: [
        this.baseStyles,
        this.sectionStyle,
        {
          zIndex: this.zIndex,
          top:
            this.top ||
            (this.isWindow && `${this.offsetTop}px`) ||
            (this.isFixed && '0') ||
            undefined,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          transform:
            this.isFixed && !this.isWindow
              ? `translateY(${this.translateY}px)`
              : undefined
        }
      ],
      ref: 'section'
    }
    return <div {...data}>{this.$slots.default}</div>
  }

  getScrollTop(element: HTMLElement | Window) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
  }

  getElementTop(element: HTMLElement | Window) {
    return element === window
      ? 0
      : (element as HTMLElement).getBoundingClientRect().top
  }

  handleScroll(e: Event) {
    const scrollTop = this.getScrollTop(this.containerEl!)
    if (!this.isFixed) {
      this.offsetHeight = (this.$el as HTMLElement).offsetHeight
      this.scrollTop = scrollTop
      const parentTop = this.getElementTop(this.containerEl!)
      const elTop = this.getElementTop(this.$el as HTMLElement)
      const sectionTopToViewTop = elTop - parentTop - this.offsetTop
      this.isFixed = sectionTopToViewTop <= 0
    } else if (this.scrollTop > scrollTop) {
      this.isFixed = false
    }
    this.translateY = scrollTop + this.offsetTop
  }

  addScrollListener() {
    if (!this.sticky) return
    if (this.containerEl) this.removeScrollListener(this.containerEl)
    if (this.container) {
      this.containerEl = document.querySelector(this.container) as HTMLElement
      if (!this.containerEl) {
        console.error('[MzFixedSection]', `容器${this.container}未找到!`)
        return
      }
      const containerElStyle = window.getComputedStyle(this.containerEl)
      if (containerElStyle.position === 'static') {
        this.containerEl.style.position = 'relative'
      }
    } else {
      this.containerEl = window
    }
    this.containerEl.addEventListener('scroll', this.handleScroll, false)
  }

  removeScrollListener(el?: Window | HTMLElement | null) {
    if (!el && !this.containerEl) return
    if (!el) el = this.containerEl as HTMLElement
    el.removeEventListener('scroll', this.handleScroll, false)
  }

  @Watch('isFixed')
  onFixedChange(isFixed: boolean) {
    this.$emit('change', isFixed)
  }

  mounted() {
    this.addScrollListener()
  }

  beforeDestroy() {
    this.removeScrollListener()
  }
}
</script>
