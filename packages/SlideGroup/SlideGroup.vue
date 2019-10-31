<script lang="tsx">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
import { throttle, debounce } from '@/utils/assist'

@Component
export default class MzSlideGroup extends Vue {
  @Ref('scroll')
  scrollRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  wrapper = { width: 0, height: 0 }
  content = { width: 0, height: 0 }
  centerPoint = {}
  translate = 0

  get isOverflow() {
    return this.content.width > this.wrapper.width
  }

  render(h: CreateElement) {
    const content = this.renderContent()

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

  renderContent() {
    const contentData = {
      ref: 'content',
      class: ['mz-slide-group__content'],
      style: [
        `transform:translateX(${this.translate}px)`,
        { display: this.isOverflow ? 'inline-block' : '' }
      ],
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
          'flex-double-center'
        ],
        style: { [item]: 0 }
      }
      return (
        <div {...data}>
          <mz-icon name={`md-arrow-drop${item}`} size="30"></mz-icon>
        </div>
      )
    })
  }

  throttleSizeChange = debounce(this.sizeChange, 500)
  sizeChange() {
    this.wrapper.width = this.scrollRef.clientWidth
    this.wrapper.height = this.scrollRef.clientHeight
    this.content.width = this.contentRef.scrollWidth
    this.content.height = this.contentRef.scrollHeight
    console.log('!!!!', this.scrollRef)
  }

  contentClick(e: MouseEvent) {
    console.dir(e.target)
  }

  mounted() {
    addResizeListener(this.scrollRef, this.throttleSizeChange)
    addResizeListener(this.contentRef, this.throttleSizeChange)
  }

  beforeDestroy() {
    removeResizeListener(this.scrollRef, this.throttleSizeChange)
    removeResizeListener(this.contentRef, this.throttleSizeChange)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';

.mz-slide-group {
  position: relative;

  &--scrollable {
    padding: 0 30px;
  }

  &__scroll {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  // &__content {
  //   display: inline-block;
  // }

  &__control {
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    @include mzColorVar(--color-text-primary);
  }
}
</style>
