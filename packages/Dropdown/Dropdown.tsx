import { Component, Prop } from 'vue-property-decorator'
import { Placement } from 'tippy.js'
import Popover from 'manzhai-ui/src/mixins/Popover'

@Component
export default class MzDropdown extends Popover {
  @Prop({ type: String, default: 'bottom' })
  readonly placement!: Placement
  @Prop({ type: [String, Boolean], default: 'shift-away' })
  readonly animation!: string | boolean
  @Prop({ type: String, default: 'click' })
  readonly trigger!: 'hover' | 'click' | 'focus' | 'manual'
  @Prop({ type: String, default: 'same' })
  readonly theme!: string
  @Prop({ type: String, default: 'none' })
  readonly maxWidth!: number | 'none'
  @Prop(Boolean)
  readonly matchReferenceWidth!: boolean

  forceProps = {
    role: 'dropdown',
    followCursor: false,
    interactive: true
  }
}
