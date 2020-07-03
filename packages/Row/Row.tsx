import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import { CreateElement, VNodeChildren } from 'vue'

@Component
export default class MzRow extends Vue {
  @Provide('gutter')
  @Prop(Number)
  readonly gutter!: number
  @Prop(Boolean)
  readonly flex!: boolean
  @Prop({
    type: String,
    validator: val => ['top', 'middle', 'bottom'].includes(val)
  })
  readonly align!: string
  @Prop({
    type: String,
    validator: val =>
      [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly'
      ].includes(val)
  })
  readonly justify!: string
  @Prop({ type: String, default: 'div' })
  readonly tag!: string

  get rowClasses() {
    const classes: (Record<string, any> | string)[] = [
      'mz-row',
      { 'mz-row--flex': this.flex }
    ]
    if (this.justify) classes.push(`justify-${this.justify}`)
    if (this.align) classes.push(`align-${this.align}`)
    return classes
  }

  get rowStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) {
      styles.marginLeft = `-${this.gutter / 2}px`
      styles.marginRight = `-${this.gutter / 2}px`
    }
    return styles
  }

  render(h: CreateElement) {
    return h(
      this.tag,
      {
        props: this.tag === 'transition-group' ? this.$attrs : {},
        class: this.rowClasses,
        style: this.rowStyles
      },
      this.$slots.default as VNodeChildren
    )
  }
}
