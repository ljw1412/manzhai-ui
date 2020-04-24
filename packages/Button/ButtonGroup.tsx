import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzButtonGroup extends Vue {
  @Prop(Boolean)
  readonly block!: boolean

  render(h: CreateElement) {
    const data = {
      class: ['mz-button-group', { 'd-flex': this.block }]
    }
    return <div {...data}>{this.$slots.default}</div>
  }
}
