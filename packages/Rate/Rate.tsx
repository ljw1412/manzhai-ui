import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'

import MzIcon from '../Icon/Icon.vue'

@Component({ components: { MzIcon } })
export default class MzRate extends Vue {
  @Model('input', { type: Number, default: 0 })
  readonly value!: number
  @Prop({ type: Number, default: 20 })
  readonly size!: number
  @Prop(Boolean)
  readonly allowHalf!: boolean
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly showText!: boolean
  @Prop({ type: Function, default: (val: number) => val })
  readonly format!: (val: number) => any

  hoverIndex = -1
  mValue = this.value

  render(h: CreateElement) {
    return (
      <div class="mz-rate">
        {this.renderStars()}
        {this.showText && (
          <span
            class="mz-rate-text"
            style={{ 'line-height': this.size + 'px' }}>
            {this.format(this.mValue)}
          </span>
        )}
      </div>
    )
  }

  renderStars() {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <div class="mz-rate-star">
          {(this.allowHalf ? ['first', 'second'] : ['second']).map((key, j) => {
            const index = this.allowHalf ? i * 2 + j + 1 : i + 1
            return (
              <div
                class={[
                  `mz-rate-star-${key}`,
                  {
                    'is-hover': index <= this.hoverIndex,
                    'is-active': index <= this.mValue
                  }
                ]}
                v-hover={{
                  enter: () => (this.hoverIndex = index),
                  leave: () => (this.hoverIndex = -1)
                }}
                on-click={() => {
                  this.mValue = index
                  this.$emit('change', this.mValue)
                  this.$emit('input', this.mValue)
                }}>
                <mz-icon name="star" size={this.size}></mz-icon>
              </div>
            )
          })}
        </div>
      )
    }
    return (
      <div class="mz-rate-content" v-hover>
        {stars}
      </div>
    )
  }

  @Watch('value')
  onValueChange(val: number) {
    this.mValue = val
  }
}
