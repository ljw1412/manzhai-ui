import { Component, Prop, Provide } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from '@/mixins/MzSize'
import ListItem from './ListItem'

@Component({
  provide() {
    return { mzList: this }
  }
})
export default class MzList extends MzSize {
  @Prop()
  readonly value!: any
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop({ type: String, default: '无数据' })
  readonly emptyText!: string

  itemList: ListItem[] = []

  get isEmpty() {
    return !this.itemList.length
  }

  render(h: CreateElement) {
    return (
      <div class="mz-list">
        {this.$slots.default}
        {this.renderEmpty()}
      </div>
    )
  }

  renderEmpty() {
    if (!this.isEmpty) return
    return (
      this.$slots.empty || <div class="mz-list__empty">{this.emptyText}</div>
    )
  }
}
