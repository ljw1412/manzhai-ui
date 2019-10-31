<script lang="tsx">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
import { throttle } from '@/utils/assist'

@Component
export default class MzSlideGroup extends Vue {
  @Ref('wrapper')
  wrapperRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  @Ref('wrap')
  wrapRef!: HTMLElement
  wrapper = { width: 0, height: 0 }
  content = { width: 0, height: 0 }

  get isOverflow() {
    return this.content.width > this.wrapper.width
  }

  render(h: CreateElement) {
    const contentData = {
      ref: 'content',
      class: ['mz-slide-group__content'],
      style: { display: this.isOverflow ? 'inline-block' : '' },
      key: 'slideGroupContent'
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
        ref="wrap"
        class={[
          'mz-slide-group-wrapper',
          { 'mz-slide-group-wrapper--scrollable': this.isOverflow }
        ]}
      >
        {this.isOverflow && controls}
        <div ref="wrapper" class="mz-slide-group" key="slideGroupWrapper">
          {content}
        </div>
      </div>
    )
  }

  throttleSizeChange = throttle(this.sizeChange, 300)
  sizeChange() {
    this.wrapper.width = this.wrapperRef.clientWidth
    this.wrapper.height = this.wrapperRef.clientHeight
    this.content.width = this.contentRef.scrollWidth
    this.content.height = this.contentRef.scrollHeight
    console.log('!!!!')
  }

  mounted() {
    addResizeListener(this.wrapperRef, this.throttleSizeChange)
    addResizeListener(this.contentRef, this.throttleSizeChange)
  }

  beforeDestroy() {
    removeResizeListener(this.wrapperRef, this.throttleSizeChange)
    removeResizeListener(this.contentRef, this.throttleSizeChange)
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
