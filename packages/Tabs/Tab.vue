<script lang="tsx">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzTab extends Vue {
  @Inject({ from: 'mzTabs', default: null })
  readonly mzTabs!: any
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

  get transitionName() {
    if (this.mzTabs && this.mzTabs.animation === false) return undefined
    return this.reverse ? 'mz-x-reverse-transition' : 'mz-x-transition'
  }

  get tabClasses() {
    return {
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

  onTabClick() {
    if (this.disabled) return

    this.$emit('click', this.value)
    this.mzTabs.setValue(this)
  }

  created() {
    if (this.mzTabs) this.mzTabs.addItem(this)
  }

  beforeDestroy() {
    if (this.mzTabs) this.mzTabs.removeItem(this)
  }
}
</script>

<style lang="scss">
.mz-tab {
  user-select: none;
  cursor: pointer;
  height: 100%;
  padding: 0 12px;
  fill: var(--color-text-secondary);
  color: var(--color-text-secondary);

  &--active {
    fill: var(--color-text-primary);
    color: var(--color-text-primary);
  }

  &--disabled {
    fill: var(--color-text-placeholder);
    color: var(--color-text-placeholder);
  }
}
.mz-tab-panel {
  fill: var(--color-text-primary);
  color: var(--color-text-primary);
}
</style>
