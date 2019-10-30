<script lang="tsx">
import { Component, Vue, Ref } from 'vue-property-decorator'
import MzBar from './Bar.vue'
import {
  addResizeListener,
  removeResizeListener
} from '../../src/utils/resize-event'
import { CreateElement } from 'vue'

@Component({
  components: {
    MzBar
  }
})
export default class MzScrollbar extends Vue {
  @Ref('wrapper')
  wrapperRef!: HTMLElement
  @Ref('content')
  contentRef!: HTMLElement
  @Ref('barX')
  barXRef!: MzBar
  @Ref('barY')
  barYRef!: MzBar

  barX = { viewSize: 0, scrollSize: 0, type: 'x', barSize: '15px' }
  barY = { viewSize: 0, scrollSize: 0, type: 'y', barSize: '15px' }
  translate = { x: 0, y: 0 }

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
        style={[this.contentStyles, contentStyles]}
      >
        {this.$slots.default}
      </div>
    )

    const bar = [this.barY, this.barX].map(item => {
      if (item.scrollSize > item.viewSize) {
        if (item.type === 'x') {
          contentStyles.paddingBottom = item.barSize
        }
        if (item.type === 'y') {
          contentStyles.paddingRight = item.barSize
        }
        const data = {
          props: { ...item, [item.type]: true },
          on: { translate: this.onTranslate },
          ref: 'bar' + item.type.toUpperCase()
        }
        return <mz-bar {...data}></mz-bar>
      }
    })

    return (
      <div ref="wrapper" class="mz-scrollbar" on-mousewheel={this.onMousewheel}>
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
    console.log(this.wrapperRef.scrollHeight, this.wrapperRef.clientHeight)
  }

  mounted() {
    addResizeListener(this.wrapperRef, this.updateSize)
    addResizeListener(this.contentRef, this.updateSize)
  }

  beforeDestroy() {
    removeResizeListener(this.wrapperRef, this.updateSize)
    removeResizeListener(this.contentRef, this.updateSize)
  }

  onTranslate(direction: 'x' | 'y' | '', translate: number) {
    if (direction) {
      this.translate[direction] = -translate
    }
  }

  onMousewheel(e: MouseWheelEvent) {
    if (this.barXRef) {
      this.barXRef.setTranslate(e.deltaX)
    }
    if (this.barYRef) {
      this.barYRef.setTranslate(e.deltaY)
    }
  }
}
</script>

<style lang="scss">
.mz-scrollbar {
  position: relative;
  overflow: hidden;
  &__content {
    box-sizing: border-box;
  }
}
</style>
