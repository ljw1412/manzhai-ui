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

  render(h: CreateElement) {
    return (
      <div ref="wrapper" class="mz-slide-group">
        <div ref="content" class="mz-slide-group__content">
          {this.$slots.default}
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
.mz-slide-group {
  position: relative;
  width: 100%;
  overflow: hidden;

  &__content {
    display: inline-block;
  }
}
</style>
