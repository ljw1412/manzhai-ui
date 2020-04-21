import { Component, Inject, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzList from './List'
import MzSize from '@/mixins/MzSize'
import FormElement from '@/mixins/FormElement'

@Component
export default class MzListItem extends Mixins(MzSize, FormElement) {
  @Inject('mzList')
  readonly mzList!: MzList
  @Prop()
  readonly item!: any
  @Prop(String)
  readonly text!: string
  @Prop(Boolean)
  readonly clickable!: boolean
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object

  render(h: CreateElement) {
    return <div class="mz-list-item"></div>
  }

  created() {
    this.mzList && this.mzList.itemList.push(this)
  }

  beforeDestroy() {
    this.mzList && this.mzList.itemList.remove(this)
  }
}
