<script lang="tsx">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from '../../src/utils/assist'
import BaseAttribute from '../../src/mixins/BaseAttribute'
import { MzCatalogueItem } from './index'

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

@Component
export default class MzCatalogue extends BaseAttribute {
  @Prop(Boolean)
  readonly fixed!: boolean
  @Prop({ type: Object, default: () => ({}) })
  readonly offset!: { left: string; right: string; top: string; bottom: string }
  @Prop(Boolean)
  readonly scrollByJs!: boolean
  @Prop({ type: [Number, String], default: 1000 })
  readonly zIndex!: number | string
  @Prop({ type: String, default: '' })
  readonly container!: string
  @Prop(Boolean)
  readonly flat!: boolean
  @Prop(Boolean)
  readonly manual!: boolean
  @Prop(Boolean)
  readonly sidebar!: boolean
  @Prop({ type: String, default: '.mz-anchor-symbol' })
  readonly anchorClassName!: string
  @Ref('catalogue')
  readonly catalogueRef!: HTMLDivElement

  view: HTMLElement | Window = window
  viewOffsetTop = 0
  anchorList: Element[] = []
  activeIndex = 0
  arrowTop = 0

  get flatCatalogue() {
    if (!this.anchorList) return []
    return this.anchorList.map((item, index) => {
      const title = (item.nextSibling && (item.nextSibling as Text).data) || ''
      const parentEl = item.parentElement
      let level = -1
      if (parentEl) {
        if (parentEl.tagName.toLowerCase() === 'div') {
          level = parseInt(parentEl.dataset.level || '-1')
        } else {
          level = parseInt(parentEl.tagName.replace(/H/g, '')) || -1
        }
      }
      return {
        index,
        title,
        level,
        target: (parentEl && parentEl.id) || '',
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
      style: { zIndex: this.zIndex, ...this.baseStyles },
      ref: 'catalogue'
    }
    if (this.fixed) {
      Object.assign(data.style, this.catalogueOffset)
    }
    return (
      <div {...data}>
        {this.sidebar && (
          <div class="mz-catalogue__sidebar">
            <em class="circle top"></em>
            <em class="circle bottom"></em>
            <div class="arrow" style={{ top: this.arrowTop + 'px' }}>
              <div class="square"></div>
              <div class="triangle"></div>
            </div>
          </div>
        )}
        {this.manual
          ? this.$slots.default
          : this.renderItem(this.flat ? this.flatCatalogue : this.catalogue, 1)}
      </div>
    )
  }

  renderItem(list: CatalogueItem[] | undefined, level: number) {
    if (!list) return null
    return list.map(item => {
      const data = {
        props: { ...item, level, scrollByJs: this.scrollByJs },
        on: {
          actived: (top: number) => {
            const catalogueTop = this.catalogueRef.getBoundingClientRect().top
            this.arrowTop = top - catalogueTop - 10
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
        document.querySelectorAll(this.anchorClassName)
      )
    }
  }

  // 获取滚动父容器的顶部
  getViewTop() {
    if (this.view === window) {
      this.viewOffsetTop = 0
      return
    }
    const rect = (this.view as Element).getBoundingClientRect()
    this.viewOffsetTop = rect.top
  }

  // 监听滚动，确认当前界面显示的位置
  onScroll(e: Event) {
    this.getViewTop()
    const screenHeight =
      this.view === window
        ? document.body.offsetHeight
        : (this.view as HTMLElement).offsetHeight
    for (let i = 0; i < this.anchorList.length; i++) {
      const el = this.anchorList[i]
      const rect = el.getBoundingClientRect()
      const rectBottom = rect.bottom - this.viewOffsetTop
      if (rectBottom >= 0 && rectBottom <= screenHeight) {
        this.activeIndex = i
        break
      }
    }
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
        this.getViewTop()
      }
      this.view.addEventListener('scroll', this.onScroll)
    })
  }

  beforeDestroy() {
    this.view.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss">
.mz-catalogue {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  &--fixed {
    position: fixed;
  }
  &--sidebar {
    padding: 10px 0 10px 30px;
  }

  &__sidebar {
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    width: 1px;
    padding: 9px 0;
    box-sizing: border-box;
    background-color: var(--color-text-regular);
    background-clip: content-box;
    .circle {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      left: -4px;
      border: 2px solid var(--color-text-regular);
      &.top {
        top: 0px;
      }
      &.bottom {
        bottom: 0px;
      }
    }
    .arrow {
      position: absolute;
      left: -5px;
      top: 15px;
      width: 30px;
      z-index: 9;
      transition: top 0.3s;
      .square {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: var(--color-text-regular);
      }
      .triangle {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 0 solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid var(--color-text-regular);
        // background-color: var(--color-text-primary);
      }
    }
  }
}
</style>
