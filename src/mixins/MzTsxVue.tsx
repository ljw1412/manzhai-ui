import { Component, Vue } from 'vue-property-decorator'
import { VNodeData, VNodeChildren } from 'vue'

@Component
export default class MzTsxVue extends Vue {
  createElementWrapper(node: any, wrapperData?: VNodeData) {
    return node ? <div {...wrapperData}>{node}</div> : null
  }

  createSlotInWrapper(slotName: string, wrapperData?: VNodeData) {
    const slot = this.$slots[slotName] as VNodeChildren
    return this.createElementWrapper(slot, wrapperData)
  }
}
