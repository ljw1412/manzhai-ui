import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzMenuItem from './MenuItem'

@Component
export default class MzSubMenu extends Vue {
  render(h: CreateElement) {
    return (
      <div class="mz-sub-menu">
        <mz-menu-item></mz-menu-item>
        {this.$slots.default}
      </div>
    )
  }
}
