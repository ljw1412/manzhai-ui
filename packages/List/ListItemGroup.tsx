import { Component, Prop, Inject, Ref } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import MzListItem from './ListItem'
import MzIcon from '../Icon/index'
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue'

@Component({
  components: { MzListItem, MzIcon }
})
export default class MzListItemGroup extends MzTsxVue {
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly text!: string
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
  @Prop(Boolean)
  readonly hasActiveStyle!: boolean
  @Ref('children')
  readonly childrenRef!: HTMLDivElement

  isOpen = false

  get arrowRotate() {
    return this.isOpen ? '180deg' : '0'
  }

  render(h: CreateElement) {
    const itemData: VNodeData = {
      props: {
        tag: 'div',
        clickable: true,
        preventDefault: true,
        active: this.hasActiveStyle && this.isOpen,
        ...this.$props
      },
      nativeOn: {
        click: () => {
          this.isOpen = !this.isOpen
        }
      }
    }

    return (
      <li class="mz-list-item-group">
        <mz-list-item {...itemData}>
          {this.$slots.prefix && (
            <template slot="prefix">{this.$slots.prefix}</template>
          )}
          <mz-icon
            slot="suffix"
            name="chevron-down"
            class="mz-list-item-group__arrow"
            style={{ transform: `rotateZ(${this.arrowRotate})` }}></mz-icon>
        </mz-list-item>
        {this.$slots.default && (
          <ul v-show={this.isOpen} ref="children">
            {this.$slots.default}
          </ul>
        )}
      </li>
    )
  }
}
