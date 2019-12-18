<script lang="tsx">
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
      { class: this.rowClasses, style: this.rowStyles },
      this.$slots.default as VNodeChildren
    )
  }
}
</script>

<style lang="scss">
.mz-row {
  position: relative;
  box-sizing: border-box;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }

  &--flex {
    display: flex;
    &.justify {
      &-start {
        justify-content: flex-start;
      }
      &-center {
        justify-content: center;
      }
      &-end {
        justify-content: flex-end;
      }
      &-space-between {
        justify-content: space-between;
      }
      &-space-around {
        justify-content: space-around;
      }
      &-space-evenly {
        justify-content: space-evenly;
      }
    }
    &.align {
      &-top {
        align-items: flex-start;
      }

      &-middle {
        align-items: center;
      }
      &-bottom {
        align-items: flex-end;
      }
    }
  }
}
</style>
