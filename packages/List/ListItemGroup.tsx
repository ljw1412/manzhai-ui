import { Component, Vue, Prop, Inject, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzListItem from './ListItem'
import MzIcon from '../Icon/index'

@Component({
  components: {
    MzListItem,
    MzIcon
  }
})
export default class MzListItemGroup extends Vue {
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
  @Prop({ type: Boolean, default: true })
  readonly notAllowSelected!: boolean
  @Prop(Boolean)
  readonly hasActiveStyle!: boolean
  @Ref('children')
  readonly childrenRef!: HTMLDivElement

  isOpen = false

  get arrowRotate() {
    return this.isOpen ? '180deg' : '0'
  }

  render(h: CreateElement) {
    const listItemProps = {
      props: {
        clickable: true,
        active: this.hasActiveStyle && this.isOpen,
        ...this.$props
      },
      on: {
        click: () => {
          this.isOpen = !this.isOpen
        }
      }
    }
    console.log(this.$slots.prefix)

    return (
      <div class="mz-list-item-group">
        <mz-list-item {...listItemProps}>
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
          <div
            v-show={this.isOpen}
            ref="children"
            class="mz-list-item-group__children">
            {this.$slots.default}
          </div>
        )}
      </div>
    )
  }
}
