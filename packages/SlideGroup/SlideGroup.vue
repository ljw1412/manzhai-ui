<script lang="tsx">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import {
  addResizeListener,
  removeResizeListener
} from '../../src/utils/resize-event'

@Component
export default class MzSlideGroup extends Vue {
  @Ref('wrapper')
  wrapperRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  wrapper = { width: 0, height: 0 }
  content = { width: 0, height: 0 }

  get isOverflow() {
    return this.content.width > this.wrapper.width
  }

  render(h: CreateElement) {
    const contentData = {
      ref: 'content',
      class: ['mz-slide-group__content']
    }
    let content: JSX.Element[] | JSX.Element = (
      <div {...contentData}>{this.$slots.default}</div>
    )

    const controls = ['left', 'right'].map(item => {
      const classes = [
        'mz-slide-group__control',
        `mz-slide-group__${item}-button`,
        'flex-double-center'
      ]
      return (
        <div class={classes} style={{ [item]: 0 }}>
          <mz-icon name={`md-arrow-drop${item}`} size="30"></mz-icon>
        </div>
      )
    })

    return (
      <div
        class={[
          'mz-slide-group-wrapper',
          { 'mz-slide-group-wrapper--scrollable': this.isOverflow }
        ]}
      >
        {this.isOverflow && controls}
        <div ref="wrapper" class="mz-slide-group">
          {content}
        </div>
      </div>
    )
  }

  wrapperSizeChange() {
    this.wrapper.width = this.wrapperRef.clientWidth
    this.wrapper.height = this.wrapperRef.clientHeight
    console.dir(this.wrapperRef)
  }

  contentSizeChange() {
    this.content.width = this.contentRef.scrollWidth
    this.content.height = this.contentRef.scrollHeight
    console.dir(this.contentRef)
  }

  mounted() {
    addResizeListener(this.wrapperRef, this.wrapperSizeChange)
    addResizeListener(this.contentRef, this.contentSizeChange)
  }

  beforeDestroy() {
    removeResizeListener(this.wrapperRef, this.wrapperSizeChange)
    removeResizeListener(this.contentRef, this.contentSizeChange)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';

.mz-slide-group-wrapper {
  position: relative;
  &--scrollable {
    padding: 0 30px;
  }
}

.mz-slide-group {
  position: relative;
  width: 100%;
  overflow: hidden;

  &__content {
    display: inline-block;
  }

  &__control {
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    @include mzColorVar(--color-text-primary);
  }
}
</style>
