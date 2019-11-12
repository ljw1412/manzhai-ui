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
      fontSize: this.size
    }
  }

  render(h: CreateElement) {
    let content = null
    if (this.iconName) {
      content = <use {...{ attrs: { 'xlink:href': this.iconName } }} />
    }

    const iconProps = {
      class: 'mz-icon color-transition',
      style: this.svgStyles,
      attrs: { 'aria-hidden': true, fill: this.color || 'currentColor' },
      on: this.$listeners
    }

    return <svg {...iconProps}>{content}</svg>
  }
}
</script>

<style lang="scss">
.mz-icon {
  width: 1em;
  height: 1em;
}
</style>
