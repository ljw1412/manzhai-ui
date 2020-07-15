import { Component, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'
import MzListItem from './ListItem'

@Component({
  provide() {
    return { mzList: this }
  }
})
export default class MzList extends Mixins(MzSize, BaseAttribute) {
  @Prop()
  readonly value!: any
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly divider!: boolean
  @Prop(String)
  readonly gutter!: string
  @Prop(Boolean)
  readonly clickable!: boolean
  @Prop({ type: String, default: '无数据' })
  readonly emptyText!: string
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object

  itemList: MzListItem[] = []

  get isEmpty() {
    return !this.itemList.length
  }

  get isClickable() {
    return this.clickable || this.value !== undefined
  }

  render(h: CreateElement) {
    const data = {
      class: [
        'mz-list',
        this.mzSize,
        {
          'is-divider': this.divider,
          'is-gutter': this.gutter,
          'is-disabled': this.disabled
        }
      ],
      style: this.baseStyles
    }

    return (
      <ul {...data}>
        {this.$slots.default}
        {this.renderEmpty()}
      </ul>
    )
  }

  renderEmpty() {
    if (!this.isEmpty) return
    return (
      this.$slots.empty || <div class="mz-list__empty">{this.emptyText}</div>
    )
  }

  setValue(value: any, item: any) {
    if (this.value !== undefined && this.value !== value) {
      this.$emit('input', value)
      this.$emit('change', value, item)
    }
  }

  handleItemClick(value: any, item: any, disabled: boolean) {
    this.$emit('item-click', value, item, disabled)
  }
}
