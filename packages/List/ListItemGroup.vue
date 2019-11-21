<script lang="tsx">
import { Component, Vue, Prop, Inject, Ref } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzListItem from './ListItem.vue'
import MzIcon from '../Icon/index'

@Component({
  components: {
    MzListItem
  }
})
export default class MzListItemGroup extends Vue {
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly label!: string
  @Prop(String)
  readonly text!: string
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop({ type: [Boolean, Object], default: true })
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
        link: true,
        active: this.hasActiveStyle && this.isOpen,
        ...this.$props
      },
      on: {
        click: () => {
          this.isOpen = !this.isOpen
          if (this.childrenRef) {
            console.log(this.childrenRef.getBoundingClientRect())
          }
        }
      }
    }

    return (
      <div class="mz-list-item-group">
        <mz-list-item {...listItemProps}>
          <mz-icon
            slot="suffix"
            name="md-arrow-dropdown"
            class="mz-list-item-group__arrow"
            style={{ transform: `rotateZ(${this.arrowRotate})` }}
          ></mz-icon>
        </mz-list-item>
        {this.$slots.default && (
          <div
            v-show={this.isOpen}
            ref="children"
            class="mz-list-item-group__children"
          >
            {this.$slots.default}
          </div>
        )}
      </div>
    )
  }
}
</script>

<style lang="scss">
.mz-list-item-group {
  & > &__children {
    margin-left: 10px;
  }

  &__arrow {
    transform-origin: center;
    transition: transform 0.3s;
  }
}
</style>
