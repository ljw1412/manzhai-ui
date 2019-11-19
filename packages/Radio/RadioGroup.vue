<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { MzRadio, MzRadioButton } from '.'

@Component({
  provide() {
    return { radioGroup: this }
  },
  components: {
    MzRadio,
    MzRadioButton
  }
})
export default class MzRadioGroup extends Vue {
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly name!: string
  @Prop({ type: Array, default: () => [] })
  readonly data!: Record<string, any>[]
  @Prop(Boolean)
  readonly button!: boolean
  @Prop(Boolean)
  readonly border!: boolean

  render(h: CreateElement) {
    return (
      <div class="mz-radio-group">
        {this.$slots.default || this.renderRadioList()}
      </div>
    )
  }

  renderRadioList() {
    if (!this.data.length) return null
    return this.data.map(item => {
      const data = {
        props: { ...item, inputValue: this.value }
      }
      return this.button ? (
        <mz-radio-button {...data}></mz-radio-button>
      ) : (
        <mz-radio {...data}></mz-radio>
      )
    })
  }

  setValue(value: any) {
    this.$emit('input', value)
    this.$emit('change', value)
  }
}
</script>

<style lang="scss">
</style>
