import { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import Popover from '@/mixins/Popover'

@Component
export default class MzTooltip extends Popover {
  render(h: CreateElement) {
    if (this.$slots.default && this.$slots.default.length > 1) {
      return <span>{this.$slots.default}</span>
    }
    return this.$slots.default
  }
}
