import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzSubHeader from '../SubHeader/SubHeader.vue'

@Component({ components: { MzSubHeader } })
export default class MzListGroup extends Vue {
  @Prop(String)
  readonly label?: string

  render(h: CreateElement) {
    return (
      <li class="mz-list-group">
        {this.label && <mz-sub-header>{this.label}</mz-sub-header>}
        <ul>{this.$slots.default}</ul>
      </li>
    )
  }
}
