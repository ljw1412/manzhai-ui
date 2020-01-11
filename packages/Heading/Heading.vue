<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNodeChildren } from 'vue'

@Component
export default class MzHeading extends Vue {
  @Prop({ type: String, default: 'div' })
  readonly tag!: string
  @Prop({ type: Number, default: 3 })
  readonly level!: number
  @Prop(String)
  readonly label!: string

  render(h: CreateElement) {
    return h(
      this.tag,
      {
        class: ['mz-heading', `mz-level-${this.level}`],
        attrs: { 'data-level': this.level }
      },
      (this.$slots.default as VNodeChildren) || this.label
    )
  }
}
</script>

<style lang="scss">
</style>
