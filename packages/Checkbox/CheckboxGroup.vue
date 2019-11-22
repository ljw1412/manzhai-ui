<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzCheckboxGroup extends Vue {
  render(h: CreateElement) {
    return <div class="mz-checkbox-group"></div>
  }
}
</script>

<style lang="scss">
</style>
