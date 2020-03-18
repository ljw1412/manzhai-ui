import './ButtonGroup.scss'
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzButtonGroup extends Vue {
  render(h: CreateElement) {
    const data = {
      class: ['mz-button-group']
    }
    return <div {...data}>{this.$slots.default}</div>
  }
}
