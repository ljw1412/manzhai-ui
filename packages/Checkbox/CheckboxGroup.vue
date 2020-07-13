<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzCheckbox from './Checkbox.vue'

@Component({
  provide() {
    return { mzCheckboxGroup: this }
  }
})
export default class MzCheckboxGroup extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly value!: any[]

  itemList: MzCheckbox[] = []
  checkedList: any = []

  get isAllChecked() {
    return this.itemList.length <= this.checkedList.length
  }

  render(h: CreateElement) {
    return (
      <div class="mz-checkbox-group d-inline-block">{this.$slots.default}</div>
    )
  }

  @Watch('value', { immediate: true })
  onValueChange(list: any[]) {
    this.checkedList = list
  }

  @Watch('checkedList')
  onCheckedListChange(list: any[]) {
    this.$emit('input', list)
    this.$emit('change', list)
  }
}
</script>