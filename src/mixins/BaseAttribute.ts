import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BaseAttribute extends Vue {
  @Prop(String)
  readonly width!: string
  @Prop(String)
  readonly minWidth!: string
  @Prop(String)
  readonly maxWidth!: string
  @Prop(String)
  readonly height!: string
  @Prop(String)
  readonly minHeight!: string
  @Prop(String)
  readonly maxHeight!: string

  get baseStyles() {
    return {
      width: this.width,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      height: this.height,
      minHeight: this.minHeight,
      maxHeight: this.maxHeight
    }
  }
}
