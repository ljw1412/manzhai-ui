<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzIcon extends Vue {
  @Prop({ required: true })
  readonly name!: string

  @Prop({ default: 16 })
  readonly size!: number

  @Prop(String)
  readonly color!: string

  get iconName() {
    return `#icon-${this.name}`
  }

  get svgStyles() {
    return {
      width: this.size + 'px',
      height: this.size + 'px',
      fill: this.color
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
      'aria-hidden': true,
      on: this.$listeners
    }

    return <svg {...iconProps}>{content}</svg>
  }
}
</script>

<style lang="scss">
</style>
