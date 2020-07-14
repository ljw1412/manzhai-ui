<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNodeChildren } from 'vue'
import MzAnchor from '../Anchor/Anchor'

@Component
export default class MzHeading extends Vue {
  @Prop({ type: String, default: 'div' })
  readonly tag!: string
  @Prop({ type: Number, default: 3 })
  readonly level!: number
  @Prop([Boolean, String])
  readonly anchor!: boolean | string
  @Prop(Boolean)
  readonly invisibleAnchor!: boolean
  @Prop(String)
  readonly title!: string

  render(h: CreateElement) {
    return h(
      this.tag,
      {
        class: [
          'mz-heading',
          `mz-heading-${this.level}`,
          'position-relative text-gray-900'
        ],
        attrs: { 'data-level': this.level }
      },
      [this.renderAnchor(), this.$slots.default || this.title] as VNodeChildren
    )
  }

  renderAnchor() {
    if (!this.anchor) return null
    const anchorClass = typeof this.anchor === 'string' ? this.anchor : ''
    const data = {
      class: [anchorClass],
      props: {
        level: this.level,
        invisible: this.invisibleAnchor,
        title:
          this.title ||
          (this.$slots.default && this.$slots.default[0].text) ||
          '',
        href: `#${this.$attrs.id}`
      }
    }
    return <mz-anchor {...data}></mz-anchor>
  }
}
</script>
