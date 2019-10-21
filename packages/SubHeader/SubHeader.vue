<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from '../../src/utils/assist'

@Component
export default class MzSubHeader extends Vue {
  @Prop({ type: [String, Number], default: 5 })
  readonly level!: string | number
  @Prop({ type: [String, Number], default: 16 })
  readonly left!: string | number

  get classes() {
    const classes = ['sub-header']
    if (this.level && this.level > 0 && this.level < 7)
      classes.push(`sub-header--level-${this.level}`)
    return classes
  }

  get styles() {
    let left = this.left
    if (typeOf(left) === 'number') left += 'px'
    return { paddingLeft: left }
  }

  render(h: CreateElement) {
    return (
      <div class={this.classes} style={this.styles}>
        {this.$slots.default}
      </div>
    )
  }
}
</script>

<style lang="scss">
.sub-header {
  color: var(--color-text-secondary);
  fill: var(--color-text-secondary);
  @for $i from 1 through 6 {
    &--level-#{$i} {
      font-size: (24 - $i * 2) + px;
    }
  }
}
</style>
