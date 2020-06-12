import { Component, Inject, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue'
import MzList from './List'

@Component
export default class MzListItem extends Mixins(MzSize, MzTsxVue) {
  @Inject({ from: 'mzList', default: () => ({}) })
  readonly mzList!: MzList
  @Prop()
  readonly value!: any
  @Prop()
  readonly item!: any
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly text!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly clickable!: boolean
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object

  get state() {
    return {
      active:
        this.value != undefined &&
        this.mzList.value != undefined &&
        this.value === this.mzList.value,
      disabled: this.disabled || this.mzList.disabled,
      clickable: this.clickable || this.mzList.isClickable || false,
      ripple: this.ripple || this.mzList.ripple
    }
  }

  get roundClass() {
    if (['left', 'right', 'mini'].includes(this.round + '')) {
      return `is-${this.round}-round`
    }
    return { 'is-round': this.round }
  }

  render(h: CreateElement) {
    const { $slots } = this
    const data = {
      class: [
        'mz-list-item',
        this.size ? this.mzSize : this.mzList.mzSize,
        this.roundClass,
        {
          'is-clickable': this.state.clickable,
          'is-active': this.state.active,
          'is-disabled': this.state.disabled
        }
      ],
      style: { marginBottom: this.mzList.gutter || undefined },
      directives: [
        {
          name: 'ripple',
          value: !this.state.disabled && (this.ripple || this.state.clickable)
        }
      ],
      on: {
        click: (e: MouseEvent) => {
          if (this.mzList.handleItemClick) {
            this.mzList.handleItemClick(
              this.value,
              this.item,
              this.state.disabled
            )
          }
          if (this.state.disabled) return
          this.$emit('click', e)
          if (this.mzList.setValue) {
            this.mzList.setValue(this.value, this.item)
          }
        }
      }
    }

    if ($slots.default) {
      data.class.push('is-custom')
      return <div {...data}>{$slots.default}</div>
    }

    return (
      <div {...data}>
        {this.createSlotInWrapper('prefix', { class: 'mz-list-item__prefix' })}
        {this.renderContent()}
        {this.createSlotInWrapper('suffix', { class: 'mz-list-item__suffix' })}
      </div>
    )
  }

  renderContent() {
    if (this.$slots.content) {
      return <div class="mz-list-item__content">{this.$slots.content}</div>
    }
    const title = this.$slots.title || this.title
    const text = this.$slots.text || this.text
    return (
      <div class="mz-list-item__content">
        {this.createElementWrapper(title, { class: 'mz-list-item__title' })}
        {this.createElementWrapper(text, { class: 'mz-list-item__text' })}
      </div>
    )
  }

  created() {
    this.mzList.itemList && this.mzList.itemList.push(this)
  }

  beforeDestroy() {
    this.mzList.itemList && this.mzList.itemList.remove(this)
  }
}
