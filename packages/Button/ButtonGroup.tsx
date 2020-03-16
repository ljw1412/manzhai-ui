import './ButtonGroup.scss'
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzButtonGroup extends Vue {
  get mzButtonVnodes() {
    return (this.$slots.default || []).filter(
      vnode =>
        vnode.componentOptions && vnode.componentOptions.tag === 'mz-button'
    )
  }

  render(h: CreateElement) {
    const data = {
      class: ['mz-button-group']
    }
    return <div {...data}>{this.mzButtonVnodes}</div>
  }
}
