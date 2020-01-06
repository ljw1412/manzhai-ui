<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from '../../src/utils/assist'
import BaseAttribute from '../../src/mixins/BaseAttribute'

interface CatalogueItem extends FlatCatalogueItem {
  children?: CatalogueItem[]
}

interface FlatCatalogueItem {
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

  data: FlatCatalogueItem[] = []

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
    return <div {...data}>{this.renderItem(this.catalogue, 1)}</div>
  }

  renderItem(list: CatalogueItem[] | undefined, level: number) {
    if (!list) return null
    return list.map(item => (
      <div class="mz-catalogue__item" data-level={level}>
        <a on-click={() => this.scrollToTarget(item.target)}>{item.title}</a>
        {this.renderItem(item.children, level + 1)}
      </div>
    ))
  }

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

  get catalogue() {
    const list: CatalogueItem[] = []
    this.data
      .filter(item => item.level !== -1)
      .forEach(item => {
        this.addLevelItem(list, item)
      })
    return list
  }

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
    this.data = []
    console.log(document.querySelectorAll('.mz-header-anchor'))
    document.querySelectorAll('.mz-header-anchor').forEach(item => {
      const title = (item.nextSibling && (item.nextSibling as Text).data) || ''
      const parentEl = item.parentElement
      const level =
        (parentEl && parseInt(parentEl.tagName.replace(/H/g, ''))) || -1
      this.data.push({ title, level, target: (parentEl && parentEl.id) || '' })
    })
    console.log(this.data)
  }

  mounted() {
    this.$nextTick(this.initCatalogue)
  }
}
</script>

<style lang="scss">
.mz-catalogue {
  &--fixed {
    position: fixed;
  }

  &__item {
    a {
      cursor: pointer;
      text-decoration: none;
      color: var(--color-text-primary);
      &:hover {
        color: var(--color-primary);
        opacity: 0.8;
      }
    }

    @for $i from 1 through 6 {
      &[data-level='#{$i}'] {
        margin: 5px 0;
        padding-left: 10px * ($i - 1);
      }
    }
  }
}
</style>
