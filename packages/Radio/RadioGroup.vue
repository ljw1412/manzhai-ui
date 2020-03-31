<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { MzRadio, MzRadioButton } from '.'

@Component({
  provide() {
    return { mzRadioGroup: this }
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
  @Prop(Boolean)
  readonly block!: boolean

  render(h: CreateElement) {
    const classes = [
      'mz-radio-group',
      {
        'mz-radio-group--block': this.block,
        'mz-radio-group--button': this.button
      }
    ]
    return (
      <div class={classes}>{this.$slots.default || this.renderRadioList()}</div>
    )
  }

  renderRadioList() {
    if (!this.data.length) return null
    return this.data.map(item => {
      const data = {
        props: {
          border: this.border,
          ...item,
          inputValue: this.value,
          name: this.name
        }
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