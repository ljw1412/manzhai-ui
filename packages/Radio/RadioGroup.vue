<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzRadio from './Radio.vue'

@Component({
  provide() {
    return { radioGroup: this }
  },
  components: {
    MzRadio
  }
})
export default class MzRadioGroup extends Vue {
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly name!: string
  @Prop({ type: Array, default: () => [] })
  readonly data!: Record<string, any>[]

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
      return <mz-radio {...data}></mz-radio>
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
