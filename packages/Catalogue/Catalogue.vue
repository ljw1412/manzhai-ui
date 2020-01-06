<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

interface CatalogueItem extends FlatCatalogueItem {
  children?: CatalogueItem[]
}

interface FlatCatalogueItem {
  title: string
  level: number
  target: string
}

@Component
export default class MzCatalogue extends Vue {
  @Prop(Boolean)
  readonly scrollByJs!: boolean

  data: FlatCatalogueItem[] = []

  render(h: CreateElement) {
    return <div class="mz-catalogue">{this.renderItem(this.catalogue, 1)}</div>
  }

  renderItem(list: CatalogueItem[] | undefined, level: number) {
    if (!list) return null
    return list.map(item => (
      <div class="mz-catalogue__item" data-level={level}>
        <a href={'#' + item.target}>{item.title}</a>
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
        }
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
  &__item {
    a {
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
