import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzList from '../List/List'
import MzSlideGroup from '../SlideGroup/SlideGroup'

@Component({ components: { MzList, MzSlideGroup } })
export default class MzMenu extends Vue {
  @Provide('placement')
  @Prop({ type: String, default: 'left' })
  readonly placement!: 'top' | 'right' | 'bottom' | 'left'
  @Provide('ripple')
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object

  get isHorizontal() {
    return ['top', 'bottom'].includes(this.placement)
  }

  render(h: CreateElement) {
    const data = {
      class: ['mz-menu', { 'd-flex': this.isHorizontal }],
      ref: 'menu'
    }
    const listVNode = <mz-list {...data}>{this.$slots.default}</mz-list>
    if (this.isHorizontal) {
      return <mz-slide-group>{listVNode}</mz-slide-group>
    }
    return listVNode
  }
}
