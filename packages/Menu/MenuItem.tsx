import { Component, Prop, Inject } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzListItem from '../List/ListItem'
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue'

@Component({ components: { MzListItem } })
export default class MzMenuItem extends MzTsxVue {
  @Inject('placement')
  readonly placement!: string
  @Inject('ripple')
  readonly ripple!: any
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly text!: string
  @Prop(String)
  readonly prefix!: string
  @Prop(String)
  readonly suffix!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'

  get isHorizontal() {
    return ['top', 'bottom'].includes(this.placement)
  }

  render(h: CreateElement) {
    const data = {
      class: [
        'mz-menu-item',
        'cursor-pointer',
        { 'flex-shrink-0': this.isHorizontal }
      ],
      props: {
        title: this.title,
        value: this.value,
        text: this.isHorizontal ? null : this.text,
        disabled: this.disabled,
        round: this.round,
        ripple: this.ripple
      }
    }

    return (
      <mz-list-item {...data}>
        {this.slotExtends('title')}
        {this.slotExtends('text')}
        {this.renderIcon()}
      </mz-list-item>
    )
  }

  renderIcon() {
    return ['prefix', 'suffix'].map(slot => {
      const name = this[slot as 'prefix' | 'suffix']
      return name && <mz-icon slot={slot} name={name} size="18"></mz-icon>
    })
  }
}
