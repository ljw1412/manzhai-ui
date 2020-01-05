<template>
  <div class="mz-catalogue">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface CatalogueItem extends FlatCatalogueItem {
  children?: CatalogueItem[]
}

interface FlatCatalogueItem {
  title: string
  level: number
}

@Component
export default class Catalogue extends Vue {
  data: FlatCatalogueItem[] = []

  get catalogue() {
    const list: CatalogueItem[] = []
    // let maxlevel = Math.max(...this.data.map(item => item.level))
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

  renderCatalogue() {
    console.log(document.querySelectorAll('.mz-header-anchor'))
    document.querySelectorAll('.mz-header-anchor').forEach(item => {
      const title = (item.nextSibling && (item.nextSibling as Text).data) || ''
      const parentEl = item.parentElement
      const level =
        (parentEl && parseInt(parentEl.tagName.replace(/H/g, ''))) || -1
      this.data.push({ title, level })
    })
    console.log(this.data)
  }

  mounted() {
    this.$nextTick(this.renderCatalogue)
  }
}
</script>

<style lang="scss" >
</style>
