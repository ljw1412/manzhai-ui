<script lang="tsx">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from '../../src/utils/assist'
import BaseAttribute from '../../src/mixins/BaseAttribute'
import MzCatalogueItem from './CatalogueItem.vue'
import MzScrollbar from '../Scrollbar'

interface CatalogueItem extends FlatCatalogueItem {
  children?: CatalogueItem[]
}

interface FlatCatalogueItem {
  index: number
  active: boolean
  title: string
  level: number
  target: string
}

@Component({
  provide() {
    return { mzCatalogue: this }
  },
  components: { MzScrollbar, MzCatalogueItem }
})
export default class MzCatalogue extends BaseAttribute {
  @Prop(Boolean)
  readonly fixed!: boolean
  @Prop(Boolean)
  readonly absolute!: boolean
  @Prop({ type: Object, default: () => ({}) })
  readonly offset!: { left: string; right: string; top: string; bottom: string }
  @Prop(Boolean)
  readonly scrollSmooth!: boolean
  @Prop({ type: [Number, String], default: 1000 })
  readonly zIndex!: number | string
  @Prop({ type: String, default: '' })
  readonly container!: string
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly manual!: boolean
  @Prop({ type: String, default: '.mz-anchor-symbol' })
  readonly target!: string
  @Prop(Boolean)
  readonly sidebar!: boolean
  @Prop(String)
  readonly sidebarColor!: string
  @Prop(String)
  readonly sidebarPointColor!: string
  @Prop(String)
  readonly sidebarArrowColor!: string
  @Ref('content')
  readonly contentRef!: HTMLDivElement
  @Ref('scroll')
  readonly scrollRef!: MzScrollbar

  view: HTMLElement | Window = window
  anchorList: HTMLLinkElement[] = []
  activeIndex = -1
  targetIndex = -1
  arrowTop = 0

  get flatCatalogue() {
    if (!this.anchorList.length) return []
    return this.anchorList.map((item, index) => {
      return {
        index,
        title: item.title,
        level: (item.dataset.level && parseInt(item.dataset.level)) || -1,
        target: item.dataset.href || '',
        active: index === this.activeIndex
      }
    })
  }

  get catalogue() {
    const list: CatalogueItem[] = []
    this.flatCatalogue
      .filter(item => item.level !== -1)
      .forEach(item => {
        this.addLevelItem(list, item)
      })
    return list
  }

  get catalogueOffset() {
    const offset: Record<string, any> = {}
    if (this.offset.left) {
      offset.left = this.offset.left
    } else {
      offset.right = this.offset.right || '10px'
    }
    if (this.offset.bottom) {
      offset.bottom = this.offset.bottom
    } else {
      offset.top = this.offset.top || '10px'
    }
    return offset
  }

  get scrollStyles() {
    const styles: Record<string, any> = {}
    for (const name of ['height', 'maxHeight', 'minHeight']) {
      const v = this.baseStyles[name as 'height' | 'maxHeight' | 'minHeight']
      if (v) styles[name] = this.sidebar ? `calc(${v} - 20px)` : v
    }
    return styles
  }

  render(h: CreateElement) {
    if (!this.manual && !this.flatCatalogue.length) return null
    const data = {
      class: [
        'mz-catalogue',
        {
          'mz-catalogue--fixed': this.fixed,
          'mz-catalogue--sidebar': this.sidebar
        }
      ],
      style: {
        zIndex: this.zIndex,
        width: this.baseStyles.width,
        minWidth: this.baseStyles.minWidth,
        maxWidth: this.baseStyles.maxWidth,

        '--mz-catalogue__sidebar-color': this.sidebarColor,
        '--mz-catalogue__sidebar-point-color': this.sidebarPointColor,
        '--mz-catalogue__sidebar-arrow-color': this.sidebarArrowColor
      }
    }
    if (this.fixed) {
      Object.assign(data.style, this.catalogueOffset)
    }
    const itemList = this.flat ? this.flatCatalogue : this.catalogue
    return (
      <div {...data}>
        <mz-scrollbar
          ref="scroll"
          bar-size="0"
          class="mz-catalogue__scroll"
          style={this.scrollStyles}
        >
          <div ref="content" class="mz-catalogue__content">
            {this.sidebar && this.renderSidebar()}
            {this.manual ? this.$slots.default : this.renderItem(itemList)}
          </div>
        </mz-scrollbar>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div class="mz-catalogue__sidebar">
        {this.activeIndex !== -1 && (
          <div class="arrow" style={{ top: this.arrowTop + 'px' }}>
            <div class="square"></div>
            <div class="triangle"></div>
          </div>
        )}
      </div>
    )
  }

  renderItem(list: CatalogueItem[] | undefined, level: number = 1) {
    if (!list) return null
    return list.map(item => {
      const data = {
        props: { ...item, level, scrollSmooth: this.scrollSmooth },
        on: {
          actived: (top: number) => {
            const contentRect = this.contentRef.getBoundingClientRect()

            this.arrowTop = top - contentRect.top - 10
            console.log(this.arrowTop, contentRect)

            // this.scrollRef && this.scrollRef.setBarTranslate({ deltaY: 90 })
          }
        }
      }
      return (
        <mz-catalogue-item {...data}>
          {this.renderItem(item.children, level + 1)}
        </mz-catalogue-item>
      )
    })
  }

  // 递归整理目录树状结构
  addLevelItem(list: CatalogueItem[], item: CatalogueItem) {
    const lastIndex = list.length - 1
    if (list.length && list[lastIndex].level < item.level) {
      if (!list[lastIndex].children) list[lastIndex].children = []
      this.addLevelItem(list[lastIndex].children!, item)
    } else {
      list.push(item)
    }
  }

  // 非手动模式下，初始化目录
  initCatalogue() {
    if (!this.manual) {
      this.anchorList = Array.from(
        document.querySelectorAll(this.target)
      ) as HTMLLinkElement[]
      this.updateActive()
    }
  }

  // 获取滚动父容器的顶部
  getViewInfo() {
    if (this.view === window) {
      return { top: 0, height: document.body.offsetHeight }
    }
    const rect = (this.view as Element).getBoundingClientRect()
    return { top: rect.top, height: rect.height }
  }

  // 监听滚动，确认当前界面显示的位置
  updateActive() {
    if (!this.anchorList.length) return
    const viewInfo = this.getViewInfo()
    const list = this.anchorList.map(el => {
      const rect = el.getBoundingClientRect()
      const rectBottom = rect.bottom - viewInfo.top
      return rectBottom
    })
    let index = list.findIndex(b => b >= 0 && b <= viewInfo.height)
    if (!~index) {
      if (list.every(b => b < 0)) {
        index = list.length - 1
      } else if (list.every(b => b >= 0)) {
        index = 0
      } else {
        index = this.activeIndex
      }
    }
    this.activeIndex = index
  }

  mounted() {
    this.$nextTick(this.initCatalogue)
    this.$nextTick(() => {
      if (this.container) {
        this.view = document.querySelector(this.container) as HTMLElement
        if (!this.view) {
          console.warn('[MzCatalogue]', `滚动容器${this.container}为找到`)
          this.view = window
        }
        this.getViewInfo()
      }
      this.view.addEventListener('scroll', this.updateActive)
    })
  }

  beforeDestroy() {
    this.view.removeEventListener('scroll', this.updateActive)
  }
}
</script>

<style lang="scss">
.mz-catalogue {
  --mz-catalogue__sidebar-color: var(--color-text-regular);

  position: relative;
  box-sizing: border-box;
  &--fixed {
    position: fixed;
  }
  &--absolute {
    position: absolute;
  }
  &--sidebar {
    padding: 10px 0;
    &::before,
    &::after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      left: 6px;
      border: 2px solid var(--mz-catalogue__sidebar-color);
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    .mz-catalogue__content {
      overflow: hidden;
      padding-left: 20px;
    }
  }

  &__content {
    position: relative;
  }

  &__sidebar {
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    width: 0;
    padding: 9px 0;
    box-sizing: border-box;
    border: 1px solid var(--mz-catalogue__sidebar-color);
    background-color: var(--mz-catalogue__sidebar-color);
    background-clip: content-box;
    .arrow {
      position: absolute;
      left: -5px;
      top: 15px;
      width: 30px;
      z-index: 9;
      transition: top 0.2s;
      .square {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: var(
          --mz-catalogue__sidebar-arrow-color,
          var(--mz-catalogue__sidebar-color)
        );
      }
      .triangle {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 0 solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid
          var(
            --mz-catalogue__sidebar-arrow-color,
            var(--mz-catalogue__sidebar-color)
          );
      }
    }
  }
}
</style>
