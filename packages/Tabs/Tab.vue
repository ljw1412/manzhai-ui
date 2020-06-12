<script lang="tsx">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import MzTabs from './Tabs.vue'

@Component
export default class MzTab extends Vue {
  @Inject({ from: 'mzTabs', default: null })
  readonly mzTabs!: MzTabs
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly label!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object

  active = false
  reverse = false
  vnode!: VNode

  get transitionName() {
    if (this.mzTabs && this.mzTabs.animation === false) return undefined
    return this.reverse ? 'mz-view-x-reverse-translate' : 'mz-view-x-translate'
  }

  get grow() {
    return !!this.mzTabs && this.mzTabs.grow
  }

  get tabClasses() {
    return {
      'mz-tab--grow': this.grow,
      'mz-tab--active': this.active,
      'mz-tab--disabled': this.disabled
    }
  }

  render(h: CreateElement) {
    const mzTabPanels = (
      <div v-show={this.active} class="mz-tab-panel">
        {this.$slots.default}
      </div>
    )
    if (this.transitionName) {
      return <transition name={this.transitionName}>{mzTabPanels}</transition>
    }
    return mzTabPanels
  }

  getTabNode() {
    this.vnode = (
      <div
        v-ripple={{ value: this.disabled && this.ripple }}
        class={['mz-tab', 'color-transition', this.tabClasses]}
        on-click={this.onTabClick}>
        {this.label || this.value}
      </div>
    )
    return this.vnode
  }

  onTabClick(e: MouseEvent) {
    if (this.disabled) return

    this.$emit('click', this.value)
    this.mzTabs.setValue(this)
  }

  created() {
    if (this.mzTabs) {
      this.mzTabs.itemList.push(this)
      if (this.mzTabs.value === this.value) {
        this.active = true
      }
    }
  }

  beforeDestroy() {
    if (this.mzTabs) this.mzTabs.itemList.remove(this)
  }
}
</script>
