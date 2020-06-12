import { Component, Vue, Prop } from 'vue-property-decorator'
import { hyphenate } from 'manzhai-ui/src/utils/string'
import { CreateElement, VNode, VueConstructor } from 'vue'

interface LayoutConstructor extends VueConstructor {
  Header: VueConstructor
  Footer: VueConstructor
  Main: VueConstructor
  Aside: VueConstructor
}

interface GeneratorOptions {
  name: string
  tag: string
}

function generator(options: GeneratorOptions) {
  return Vue.extend({
    name: options.name,
    functional: true,
    render(h, ctx) {
      const defaultSlots = ctx.slots().default
      const Tag = options.tag
      let hasSider = false
      if (defaultSlots && options.name === 'MzLayout') {
        defaultSlots.forEach((vnode: VNode) => {
          if (
            vnode.componentOptions &&
            vnode.componentOptions.tag === 'mz-aside'
          ) {
            hasSider = true
          }
        })
      }

      const data = Object.assign({}, ctx.data, {
        class: [
          hyphenate(options.name),
          { 'has-aside': hasSider },
          ctx.data.class
        ]
      })

      return <Tag {...data}>{defaultSlots}</Tag>
    }
  })
}

const Layout = generator({
  name: 'MzLayout',
  tag: 'section'
}) as LayoutConstructor
Layout.Header = generator({ name: 'MzHeader', tag: 'header' })
Layout.Footer = generator({ name: 'MzFooter', tag: 'footer' })
Layout.Main = generator({ name: 'MzMain', tag: 'main' })

@Component
class MzAside extends Vue {
  @Prop({ type: String, default: '200px' })
  readonly width!: string

  render(h: CreateElement) {
    const data = {
      class: 'mz-aside',
      style: {
        'flex-basis': this.width,
        'max-width': this.width,
        'min-width': this.width,
        width: this.width
      }
    }
    return <aside {...data}>{this.$slots.default}</aside>
  }
}

Layout.Aside = MzAside

export default Layout
