import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzInput extends Vue {
  @Prop([String, Number])
  readonly value!: string | number
  @Prop(String)
  readonly type!: string
  @Prop(Boolean)
  readonly readonly!: boolean
  @Prop(String)
  readonly placeholder!: string
  @Prop({ type: String, default: 'off' })
  readonly autocomplete!: 'on' | 'off'

  render(h: CreateElement) {
    return <div class="mz-input"></div>
  }
}
