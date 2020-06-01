import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzTableSimple extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly data!: [any[]]
  @Prop(Boolean)
  readonly header!: boolean
  @Prop(Boolean)
  readonly hover!: boolean
  @Prop(Boolean)
  readonly border!: boolean
  @Prop({ type: String, default: 'center' })
  readonly align!: string
  @Prop({ type: Boolean, default: true })
  readonly autoComplete!: boolean

  get maxLength() {
    const lengthList = this.data.map(item => item.length)
    return Math.max.apply(null, lengthList)
  }

  render(h: CreateElement) {
    const data = this.getTableData()
    const headerData = this.header ? data.slice(0, 1) : null
    const bodyData = this.header ? data.slice(1) : data

    return (
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        class={[
          'mz-table mz-table-simple',
          { 'allow-hover': this.hover, 'is-border': this.border }
        ]}
        style={{ 'text-align': this.align }}>
        {headerData && (
          <thead class="mz-table-thead">
            {headerData.map(tr => this.renderTr(tr, 'th'))}
          </thead>
        )}
        {
          <tbody class="mz-table-tbody">
            {bodyData.map(tr => this.renderTr(tr))}
          </tbody>
        }
      </table>
    )
  }

  // 渲染表格行
  renderTr(trData: any[], Tag: 'th' | 'td' = 'td') {
    return (
      <tr class="mz-table-tr">
        {trData.map(item => {
          return (
            <Tag class={`mz-table-${Tag}`} colspan={item.span}>
              <span>{this.getItem(item.data, Tag)}</span>
            </Tag>
          )
        })}
      </tr>
    )
  }

  getItem(item: any, Tag: 'th' | 'td') {
    if (this.$scopedSlots[Tag] && item) {
      item = this.$scopedSlots[Tag]!({ item })
    }
    return item
  }

  getTableData() {
    return this.data.map(list => {
      const newList = []
      if (Array.isArray(list)) {
        let count = 1
        for (let i = this.maxLength - 1; i >= 0; i--) {
          const item = list[i]
          if (item === null) {
            if (i === 0) {
              newList.unshift({ span: count, data: undefined })
              count = 1
            }
            count++
          } else if (this.autoComplete || item) {
            newList.unshift({ span: count, data: item })
            count = 1
          }
        }
      }
      return newList
    })
  }
}
