<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { scrollIntoView } from '../../src/utils/dom'

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
      on: {
        click: () => {
          scrollIntoView(this.href, this.scrollSmooth)
        }
      }
    }

    return <a {...data}>{this.symbol}</a>
  }
}
</script>

<style lang="scss">
.mz-anchor {
  --mz-anchor__symbol-color: var(--color-primary);

  position: relative;
  display: inline-block;
  color: var(--mz-anchor__symbol-color);
  &--invisible {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }
}
</style>
