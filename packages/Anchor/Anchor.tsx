import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { scrollIntoView } from 'manzhai-ui/src/utils/dom'

@Component
export default class MzAnchor extends Vue {
  @Prop(Boolean)
  readonly scrollSmooth!: boolean
  @Prop({
    type: String,
    required: true,
    validator: href => /^#[a-zA-Z0-9-_]+$/.test(href)
  })
  readonly href!: string
  @Prop(String)
  readonly title!: string
  @Prop({ type: Number, default: 3 })
  readonly level!: number
  @Prop(Boolean)
  readonly invisible!: boolean
  @Prop({ type: String, default: '¶' })
  readonly symbol!: string
  @Prop(String)
  readonly color!: string

  render(h: CreateElement) {
    const data: Record<string, any> = {
      class: [
        'mz-anchor',
        'is-pointer',
        { 'mz-anchor--invisible': this.invisible }
      ],
      attrs: {
        title: this.title,
        href: this.scrollSmooth ? undefined : this.href,
        'data-href': this.href,
        'data-level': this.level
      },
      style: {
        color: this.color
      },
      on: {
        click: () => {
          scrollIntoView(this.href, this.scrollSmooth)
        }
      }
    }

    return <a {...data}>{this.symbol}</a>
  }
}
