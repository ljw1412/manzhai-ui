import { Component, Vue, Inject } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzList from './List'

@Component
export default class MzListItem extends Vue {
  @Inject('mzList')
  readonly mzList!: MzList

  render(h: CreateElement) {
    return <div class="mz-list-item"></div>
  }
}
