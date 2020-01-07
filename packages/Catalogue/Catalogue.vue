<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from '../../src/utils/assist'
import BaseAttribute from '../../src/mixins/BaseAttribute'

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
  @Prop({ type: String, default: () => '' })
  readonly container!: string
  @Prop(Boolean)
  readonly flat!: boolean

  view: HTMLElement | Window = window
  viewOffsetTop = 0
  anchorList: Element[] = []
  activeIndex = 0

  get flatCatalogue() {
    if (!this.anchorList) return []
    return this.anchorList.map((item, index) => {
      const title = (item.nextSibling && (item.nextSibling as Text).data) || ''
      const parentEl = item.parentElement
      const level =
        (parentEl && parseInt(parentEl.tagName.replace(/H/g, ''))) || -1
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
    const data = {
      class: ['mz-catalogue'],
      style: { zIndex: this.zIndex, ...this.baseStyles }
    }
    if (this.fixed) {
      data.class.push('mz-catalogue--fixed')
      Object.assign(data.style, this.catalogueOffset)
    }
    return (
      <div {...data}>
        {this.renderItem(this.flat ? this.flatCatalogue : this.catalogue, 1)}
      </div>
    )
  }

  renderItem(list: CatalogueItem[] | undefined, level: number) {
    if (!list) return null
    return list.map(item => (
      <div
        class={[
          'mz-catalogue__item',
          { 'mz-catalogue__item--active': item.active }
        ]}
        data-level={level}
      >
        <a on-click={() => this.scrollToTarget(item.target)}>{item.title}</a>
        {this.renderItem(item.children, level + 1)}
      </div>
    ))
  }

  // 滚动到目标位置
  scrollToTarget(target: string) {
    if (target) {
      if (this.scrollByJs) {
        const targetEl = document.querySelector(`#${target}`)
        if (!targetEl) {
          console.warn('[MzCatalogue]', `目标锚点${target}不存在`)
          return
        }
        // firefox 36+ | chrome 61+ | Opera 48+
        targetEl.scrollIntoView({ behavior: 'smooth' })
      } else {
        location.hash = `#${target}`
      }
    }
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

  initCatalogue() {
    this.anchorList = Array.from(document.querySelectorAll('.mz-header-anchor'))
  }

  // 监听滚动，确认当前界面显示的位置
  onScroll(e: Event) {
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
        } else {
          this.viewOffsetTop = this.view.offsetTop
        }
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
  --mz-catalogue__item-font-color: var(--color-text-regular);
  --mz-catalogue__item-font-color--hover: var(--color-primary);
  --mz-catalogue__item-font-color--active: var(--color-primary);

  &--fixed {
    position: fixed;
  }

  &__item {
    > a {
      cursor: pointer;
      text-decoration: none;
      color: var(--mz-catalogue__item-font-color);
      transition: all 0.3s;
      font-size: 15px;
      line-height: 20px;
      &:hover {
        color: var(--mz-catalogue__item-font-color--hover);
        opacity: 0.8;
      }
    }

    @for $i from 1 through 6 {
      &[data-level='#{$i}'] {
        margin: 5px 0;
        padding-left: 10px * ($i - 1);
      }
    }

    &--active {
      > a {
        color: var(--mz-catalogue__item-font-color--active);
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}
</style>
