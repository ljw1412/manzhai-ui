<script lang="tsx">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { CreateElement, VNodeChildren } from 'vue'

@Component
export default class MzCol extends Vue {
  @Inject('gutter')
  readonly gutter!: number
  @Prop(Number)
  readonly span!: number
  @Prop(Number)
  readonly offset!: number
  @Prop(Number)
  readonly pull!: number
  @Prop(Number)
  readonly push!: number
  @Prop(Number)
  readonly xs!: number
  @Prop(Number)
  readonly sm!: number
  @Prop(Number)
  readonly md!: number
  @Prop(Number)
  readonly lg!: number
  @Prop(Number)
  readonly xl!: number
  @Prop({ type: String, default: 'div' })
  readonly tag!: string

  get colClasses() {
    const classes = ['mz-col']
    ;['offset', 'pull', 'push', 'xs', 'sm', 'md', 'lg', 'xl'].forEach(key => {
      if (this[key as keyof MzCol] !== undefined) {
        classes.push(`mz-col-${key}-${this[key as keyof MzCol]}`)
      }
    })
    let span = this.span
    if (!span && (this.xs || this.sm || this.md || this.lg || this.xl)) {
      span = 24
    }
    if (span >= 0) classes.push(`mz-col-${span}`)
    return classes
  }

  get colStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) {
      styles.paddingLeft = `${this.gutter / 2}px`
      styles.paddingRight = `${this.gutter / 2}px`
    }
    return styles
  }

  render(h: CreateElement) {
    return h(
      this.tag,
      { class: this.colClasses, style: this.colStyles },
      this.$slots.default as VNodeChildren
    )
  }
}
</script>
