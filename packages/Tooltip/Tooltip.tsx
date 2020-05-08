import { Component, Vue } from 'vue-property-decorator'
import Popover from '@/mixins/Popover'
import { CreateElement, VNode } from 'vue'

@Component
export default class MzTooltip extends Popover {
  virtualVM = new Vue({
    data: { node: {} },
    render(h) {
      return this.node as VNode
    }
  }).$mount()

  render(h: CreateElement) {
    if (this.$slots.default && this.$slots.default.length > 1) {
      return <span>{this.$slots.default}</span>
    }
    return this.$slots.default
  }

  created() {
    const { content } = this.$slots
    if (content && content.length) {
      this.virtualVM.node = content[0]
    }
  }

  mounted() {
    this.virtualVM.$nextTick(() => {
      const { default: defaultSlots, content } = this.$slots
      let reference, contentEl
      if (defaultSlots) {
        reference = defaultSlots.map(vnode => vnode.elm) as Element[]
      }
      if (content && content.length) {
        contentEl = content[0].elm as Element
      }
      this.initPopover(reference, contentEl)
    })
  }
}
