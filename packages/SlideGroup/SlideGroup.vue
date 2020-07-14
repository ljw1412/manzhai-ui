<script lang="tsx">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import {
  addResizeListener,
  removeResizeListener
} from 'manzhai-ui/src/utils/resize-event'
import { throttle, debounce } from 'manzhai-ui/src/utils/assist'

const iconMap = {
  left: 'caret-back',
  right: 'caret-forward'
}

@Component
export default class MzSlideGroup extends Vue {
  @Ref('scroll')
  scrollWrapperRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  scrollWrapper = { width: 0, height: 0 }
  content = { width: 0, height: 0 }
  // centerPoint = { x: 0, y: 0 }
  translate = 0

  get isOverflow() {
    return this.content.width > this.scrollWrapper.width
  }

  get centerPoint() {
    return { x: this.scrollWrapper.width / 2, y: this.scrollWrapper.height / 2 }
  }

  render(h: CreateElement) {
    const content = this.renderContent(this.translate)

    const controls = this.renderControls()

    const classes = [
      'mz-slide-group',
      { 'mz-slide-group--scrollable': this.isOverflow }
    ]

    const scrollData = {
      ref: 'scroll',
      class: 'mz-slide-group__scroll',
      key: 'slideGroupWrapper'
    }

    return (
      <div class={classes}>
        {this.isOverflow && controls}
        <div {...scrollData}>{content}</div>
      </div>
    )
  }

  renderContent(translate: number) {
    const contentData = {
      ref: 'content',
      class: ['mz-slide-group__content'],
      style: {
        display: this.isOverflow ? 'inline-block' : '',
        transform: `translateX(${translate}px)`
      },
      key: 'slideGroupContent',
      on: { click: this.contentClick }
    }
    return <div {...contentData}>{this.$slots.default}</div>
  }

  renderControls() {
    return ['left', 'right'].map(item => {
      const data = {
        class: [
          'mz-slide-group__control',
          `mz-slide-group__${item}-button`,
          'd-flex align-items-center justify-content-center'
        ],
        style: { [item]: 0 },
        on: {
          click: () => {
            this.controlClick(item as 'left' | 'right')
          }
        },
        key: `${item}slideGroupControls`
      }
      return (
        <div {...data}>
          <mz-icon
            name={iconMap[item as 'left' | 'right']}
            size="20px"></mz-icon>
        </div>
      )
    })
  }

  throttleSizeChange = debounce(this.sizeChange, 100)
  sizeChange() {
    this.scrollWrapper.width = this.scrollWrapperRef.clientWidth
    this.scrollWrapper.height = this.scrollWrapperRef.clientHeight
    this.content.width = this.contentRef.scrollWidth
    this.content.height = this.contentRef.scrollHeight
    this.$emit('resize')
  }

  contentTranslate(delta: number) {
    this.translate = -Math.min(
      Math.max(-delta, 0),
      this.content.width - this.scrollWrapper.width
    )
  }

  controlClick(direction: 'left' | 'right') {
    const directionRatio = { left: 1, right: -1 }
    this.contentTranslate(
      this.translate +
        (this.scrollWrapper.width / 2) * directionRatio[direction]
    )
  }

  contentClick(e: MouseEvent) {
    if (!this.isOverflow) return
    const target = e.target as HTMLElement
    if (target) {
      let translate =
        this.centerPoint.x - target.offsetLeft - target.clientWidth / 2
      this.contentTranslate(translate)
    }
  }

  mounted() {
    addResizeListener(this.scrollWrapperRef, this.throttleSizeChange)
    addResizeListener(this.contentRef, this.throttleSizeChange)
  }

  beforeDestroy() {
    removeResizeListener(this.scrollWrapperRef, this.throttleSizeChange)
    removeResizeListener(this.contentRef, this.throttleSizeChange)
  }

  @Watch('isOverflow')
  onIsOverflowChange(val: boolean) {
    if (!val) this.translate = 0
  }
}
</script>
