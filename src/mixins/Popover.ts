import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/themes/translucent.css'
import tippy, {
  followCursor,
  Placement,
  Instance,
  MultipleTargets
} from 'tippy.js'
import { Component, Vue, Prop } from 'vue-property-decorator'
import PopupManager from '@/utils/popup-manager'

function getTrigger(trigger: string) {
  return trigger === 'hover' ? 'mouseenter' : trigger
}

@Component
export default class Popover extends Vue {
  @Prop({ type: String, default: 'top' })
  readonly placement!: Placement
  @Prop({ type: [String, Boolean], default: 'fade' })
  readonly animation!: string | boolean
  @Prop({ default: false })
  readonly arrow!: boolean | string | SVGElement | DocumentFragment
  @Prop({ type: String, default: '' })
  readonly content!: string
  @Prop({ type: [Boolean, String], default: false })
  readonly followCursor!: boolean | 'horizontal' | 'vertical' | 'initial'
  @Prop({ type: Boolean, default: false })
  readonly interactive!: boolean
  @Prop({ type: [Number, String], default: 350 })
  readonly maxWidth!: number | 'none'
  @Prop({ type: Array, default: () => [0, 10] })
  readonly offset!: [number, number]
  @Prop({ default: () => document.body })
  readonly appendTo!: 'parent' | Element | ((ref: Element) => Element)
  @Prop({ default: '' })
  readonly theme!: string
  @Prop({ type: String, default: 'hover' })
  readonly trigger!: 'hover' | 'click' | 'focus' | 'manual'
  @Prop({ type: [Boolean, String], default: true })
  readonly hideOnClick!: boolean | 'toogle'
  @Prop()
  readonly zIndex!: number

  popovers: Instance[] = []

  $$emit(event: string) {
    return (...args: any[]) => {
      this.$emit(event, ...args)
    }
  }

  destroyPopovers() {
    this.popovers.forEach(popover => popover.destroy())
  }

  initPopover(el?: MultipleTargets, content?: Element) {
    if (!el || !el.length) return
    this.destroyPopovers()
    this.popovers = tippy(el, {
      trigger: getTrigger(this.trigger),
      plugins: [followCursor],
      theme: this.theme,
      placement: this.placement,
      animation: this.animation,
      arrow: this.arrow,
      content: content || this.content,
      followCursor: this.followCursor,
      interactive: this.interactive,
      maxWidth: this.maxWidth,
      offset: this.offset,
      zIndex: this.zIndex,
      appendTo: this.appendTo,
      onMount: this.$$emit('mount'),
      onCreate: this.$$emit('create'),
      onDestroy: this.$$emit('destroy'),
      onShow: instance => {
        if (!this.zIndex) instance.setProps({ zIndex: PopupManager.zIndex })
        this.$$emit('show')(instance)
      },
      onShown: this.$$emit('shown'),
      onHide: this.$$emit('hide'),
      onHidden: this.$$emit('hidden'),
      onTrigger: this.$$emit('trigger'),
      onUntrigger: this.$$emit('untrigger')
    })
  }
}
