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
  readonly lined!: boolean
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

  get tableData() {
    return this.data.map(list => {
      const newList = []
      if (Array.isArray(list)) {
        let count = 1
        for (let i = this.maxLength - 1; i >= 0; i--) {
          const item = list[i]
          let style = {}
          let clazz = {}
          if (item === null) {
            if (i === 0) {
              newList.unshift({
                span: count,
                data: undefined,
                style,
                clazz: 'empty-cell'
              })
              count = 1
            }
            count++
          } else if (this.autoComplete || item) {
            if (typeof item === 'object') {
              item._style && (style = item._style)
              item._class && (clazz = item._class)
            }
            newList.unshift({ span: count, data: item, style, clazz })
            count = 1
          }
        }
      }
      return newList
    })
  }

  get headerData() {
    return this.header ? this.tableData.slice(0, 1) : null
  }

  get bodyData() {
    return this.header ? this.tableData.slice(1) : this.tableData
  }

  render(h: CreateElement) {
    const { headerData, bodyData } = this

    return (
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        class={[
          'mz-table mz-table-simple',
          {
            'allow-hover': this.hover,
            'is-lined': this.lined,
            'is-border': this.border
          }
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
          const { data, span, style, clazz } = item
          return (
            <Tag
              class={[`mz-table-${Tag}`, clazz]}
              colspan={span}
              style={style}>
              <span>{this.getItem(data, Tag, trData)}</span>
            </Tag>
          )
        })}
      </tr>
    )
  }

  getItem(item: any, Tag: 'th' | 'td', row: any[]) {
    if (this.$scopedSlots[Tag] && item) {
      item = this.$scopedSlots[Tag]!({ item, row })
    }
    return item
  }
}
