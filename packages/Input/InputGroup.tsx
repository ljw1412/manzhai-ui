import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzInputGroup extends Vue {
  render(h: CreateElement) {
    return <div class="mz-input-group">{this.$slots.default}</div>
  }
}
