<script lang="tsx">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzListItem from './ListItem.vue'
@Component({
  components: {
    MzListItem
  }
})
export default class MzListItemGroup extends Vue {
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any
  @Prop()
  readonly value!: any
  @Prop()
  readonly label!: string

  isOpen = false

  render(h: CreateElement) {
    const listItemProps = { props: this.$props }
    return (
      <div class="mz-list-item-group">
        <mz-list-item
          link
          {...listItemProps}
          on-click={() => {
            this.isOpen = !this.isOpen
          }}
        ></mz-list-item>
        {this.$slots.default && (
          <div v-show={this.isOpen} class="mz-list-item-group__children">
            {this.$slots.default}
          </div>
        )}
      </div>
    )
  }
}
</script>

<style lang="scss">
</style>
