<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup } from '../List/index'
import { CreateElement } from 'vue'

@Component({
  components: { MzList, MzListItem, MzListGroup }
})
export default class MzNavigation extends Vue {
  render(h: CreateElement) {
    const listWrap = <mz-list></mz-list>
    return <div class="mz-navigation">{listWrap}</div>
  }
}
</script>

<style lang="scss">
</style>
