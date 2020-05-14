import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/themes/translucent.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/animations/shift-toward.css'
import 'tippy.js/animations/shift-toward-subtle.css'
import 'tippy.js/animations/shift-toward-extreme.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/animations/scale-extreme.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/perspective-subtle.css'
import 'tippy.js/animations/perspective-extreme.css'
import tippy, {
  followCursor,
  Placement,
  Instance,
  MultipleTargets
} from 'tippy.js'
import { VNode } from 'Vue'
import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator'
import PopupManager from '@/utils/popup-manager'

function getTrigger(trigger: string) {
  return trigger === 'hover' ? 'mouseenter' : trigger
}

// 如果属性值包含boolan和其他类型，对''字符串认为是true。
function getMayBeBoolean(prop: any) {
  return prop === '' ? true : prop
}

@Component
export default class Popover extends Vue {
  @Model('visible-change', { type: Boolean })
  readonly visible!: boolean
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
  @Prop({ type: String, default: 'reverse' })
  readonly theme!: string
  @Prop({ type: String, default: 'hover' })
  readonly trigger!: 'hover' | 'click' | 'focus' | 'manual'
  @Prop({ type: [Boolean, String], default: true })
  readonly hideOnClick!: boolean | 'toggle'
  @Prop()
  readonly zIndex!: number

  popovers: Instance[] = []
  forceProps: Record<string, any> = {}

  virtualVM = new Vue({
    data: { node: {} },
    render(h) {
      return this.node as VNode
    }
  }).$mount()

  initContent() {
    const { content } = this.$slots
    if (content && content.length) {
      this.virtualVM.node = content[0]
    }
  }

  $$emit(event: string) {
    return (...args: any[]) => {
      this.$emit(event, ...args)
    }
  }

  // 更新Props
  updateProps(instance: Instance) {
    if (!this.zIndex) instance.setProps({ zIndex: PopupManager.zIndex })
    const isDark = this.$mzEventBus.theme === 'dark'
    if (this.theme === 'reverse') {
      instance.setProps({
        theme: isDark ? 'light' : ''
      })
    } else if (this.theme === 'same') {
      instance.setProps({
        theme: isDark ? '' : 'light'
      })
    }
  }

  updateForceProps() {
    this.popovers.forEach(popover => {
      popover.setProps(this.forceProps)
    })
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
      hideOnClick: this.hideOnClick,
      arrow: getMayBeBoolean(this.arrow),
      content: content || this.content,
      followCursor: this.followCursor,
      interactive: getMayBeBoolean(this.interactive),
      maxWidth: this.maxWidth,
      offset: this.offset,
      zIndex: this.zIndex,
      appendTo: this.appendTo,
      onMount: this.$$emit('mount'),
      onCreate: this.$$emit('create'),
      onDestroy: this.$$emit('destroy'),
      onShow: instance => {
        this.updateProps(instance)
        this.$$emit('show')(instance)
      },
      onShown: instance => {
        this.$emit('visible-change', true)
        this.$$emit('shown')(instance)
      },
      onHide: this.$$emit('hide'),
      onHidden: instance => {
        this.$emit('visible-change', false)
        this.$$emit('hidden')(instance)
      },
      onTrigger: this.$$emit('trigger'),
      onUntrigger: this.$$emit('untrigger')
    })
    this.updateForceProps()
    this.visible && this.handleVisibleChange(this.visible)
  }

  destroyPopovers() {
    this.popovers.forEach(popover => popover.destroy())
  }

  @Watch('visible')
  handleVisibleChange(visible: boolean) {
    if (visible) {
      this.popovers.forEach(popover => popover.show())
    } else {
      this.popovers.forEach(popover => popover.hide())
    }
  }

  created() {
    this.initContent()
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

  beforeDestroy() {
    this.virtualVM && this.virtualVM.$destroy()
  }
}
