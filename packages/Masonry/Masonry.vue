<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import MzMasonryItem from './MasonryItem.vue'

@Component({
  provide() {
    return { mzMasonry: this }
  }
})
export default class MzMasonry extends Vue {
  @Prop({ type: String, default: 'flex' })
  readonly mode!: string
  @Prop({ type: Number, default: 4, validator: val => val > 0 })
  readonly lineCount!: number
  @Prop(Number)
  readonly gutter!: number

  itemList: MzMasonryItem[] = []

  get vnodeList(): VNode[] {
    const list = (this.$slots.default || []).filter(
      item =>
        item.componentOptions && item.componentOptions.tag === 'mz-masonry-item'
    )
    list.forEach(vnode => {
      if (this.gutter && vnode.data) {
        vnode.data.style = Object.assign(
          { 'margin-bottom': this.gutter + 'px' },
          vnode.data.style
        )
      }
    })
    return list
  }

  get lineList() {
    const list: Array<VNode[]> = []
    for (let i = 0; i < this.lineCount; i++) {
      list.push([])
    }
    for (let i = 0; i < this.vnodeList.length; i++) {
      const vnode = this.vnodeList[i]
      list[i % this.lineCount].push(vnode)
    }
    return list
  }

  render(h: CreateElement) {
    let content = null
    if (this.mode === 'flex') {
      content = this.renderFlex()
    } else {
      content = this.vnodeList
    }
    const data: Record<string, any> = {
      class: [
        'mz-masonry',
        {
          'mz-masonry--flex': this.mode === 'flex',
          'mz-masonry--column-count': this.mode === 'column-count'
        }
      ],
      style: []
    }
    if (this.mode === 'column-count') {
      data.style.push({
        'column-count': this.lineCount,
        'column-gap': this.gutter + 'px'
      })
    }
    return <div {...data}>{content}</div>
  }

  renderFlex() {
    return this.lineList.map((item, index) => {
      const data = {
        class: ['mz-masonry-queue'],
        attrs: { 'data-line-index': index },
        style: {
          'margin-right':
            index < this.lineList.length ? this.gutter + 'px' : undefined
        }
      }
      return <div {...data}>{item}</div>
    })
  }
}
</script>
