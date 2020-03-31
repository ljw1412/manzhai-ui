<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzIcon extends Vue {
  @Prop({ required: true })
  readonly name!: string

  @Prop([String, Number])
  readonly size!: string | number

  @Prop(String)
  readonly color!: string

  get iconName() {
    return `#icon-${this.name}`
  }

  get svgStyles() {
    return {
      fontSize: typeof this.size === 'number' ? this.size + 'px' : this.size
    }
  }

  render(h: CreateElement) {
    let content = null
    if (this.iconName) {
      content = <use {...{ attrs: { 'xlink:href': this.iconName } }} />
    }

    const iconProps = {
      class: 'mz-icon',
      style: this.svgStyles,
      attrs: { 'aria-hidden': true, fill: this.color || 'currentColor' },
      on: this.$listeners
    }

    return <svg {...iconProps}>{content}</svg>
  }
}
</script>
