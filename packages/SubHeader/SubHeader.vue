<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { typeOf } from 'manzhai-ui/src/utils/assist'

@Component
export default class MzSubHeader extends Vue {
  @Prop({ type: [String, Number], default: 5 })
  readonly level!: string | number
  @Prop({ type: [String, Number], default: 16 })
  readonly left!: string | number

  get classes() {
    const classes = ['mz-sub-header']
    if (this.level && this.level > 0 && this.level < 7)
      classes.push(`mz-sub-header--level-${this.level}`)
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

