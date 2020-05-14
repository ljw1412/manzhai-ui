import { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Placement } from 'tippy.js'
import Popover from '@/mixins/Popover'

@Component
export default class MzDropdown extends Popover {
  @Prop({ type: String, default: 'bottom' })
  readonly placement!: Placement
  @Prop({ type: [String, Boolean], default: 'shift-away' })
  readonly animation!: string | boolean
  @Prop({ type: String, default: 'same' })
  readonly theme!: string
  @Prop({ type: String, default: 'none' })
  readonly maxWidth!: number | 'none'
  @Prop(Boolean)
  readonly matchReferenceWidth!: boolean

  forceProps = {
    role: 'dropdown',
    trigger: 'click',
    followCursor: false,
    hideOnClick: true,
    interactive: true
  }

  render(h: CreateElement) {
    if (this.$slots.default && this.$slots.default.length > 1) {
      return <span>{this.$slots.default}</span>
    }
    return this.$slots.default
  }
}
