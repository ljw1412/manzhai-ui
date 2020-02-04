<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import { MzMasonryItem } from '.'

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
    return (this.$slots.default || []).filter(
      item =>
        item.componentOptions && item.componentOptions.tag === 'mz-masonry-item'
    )
  }

  get lineList() {
    const list: Array<VNode[]> = []
    for (let i = 0; i < this.lineCount; i++) {
      list.push([])
    }
    for (let i = 0; i < this.vnodeList.length; i++) {
      const vnode = this.vnodeList[i]
      if (this.gutter && vnode.data && i >= this.lineCount) {
        vnode.data.style = Object.assign(
          { 'margin-top': this.gutter + 'px' },
          vnode.data.style
        )
      }
      list[i % this.lineCount].push(vnode)
    }
    return list
  }

  render(h: CreateElement) {
    let content = null
    if (this.mode === 'flex') {
      content = this.renderFlex()
    }
    const data = {
      class: [
        'mz-masonry',
        {
          'mz-masonry--flex': this.mode === 'flex'
        }
      ]
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

<style lang="scss">
.mz-masonry--flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  .mz-masonry-queue {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
}
</style>
