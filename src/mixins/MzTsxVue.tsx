import { Component, Vue } from 'vue-property-decorator'
import { VNodeData, VNodeChildren } from 'vue'

@Component
export default class MzTsxVue extends Vue {
  // 插槽继承
  slotExtends(name: string) {
    if (this.$slots[name]) {
      return <template slot={name}>{this.$slots[name]}</template>
    }
  }

  // 带外层的元素
  createElementWrapper(node: any, wrapperData?: VNodeData) {
    return node ? <div {...wrapperData}>{node}</div> : null
  }

  // 带外层的内容为插槽
  createSlotInWrapper(slotName: string, wrapperData?: VNodeData) {
    const slot = this.$slots[slotName] as VNodeChildren
    return this.createElementWrapper(slot, wrapperData)
  }
}
