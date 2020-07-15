import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzMenu extends Vue {
  render(h: CreateElement) {
    return <div class="mz-menu"></div>
  }
}
