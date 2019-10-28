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

  getTabNode() {
    return (
      <div
        v-ripple={{ value: this.disabled && this.ripple }}
        class={['mz-tab', 'color-transition', this.tabClasses]}
        on-click={this.onTabClick}
      >
        {this.label || this.value}
      </div>
    )
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
@import '@/styles/common/index.scss';
.mz-tab {
  --mz-tab__font-color: var(--color-text-secondary);
  --mz-tab__font-color--active: var(--color-primary);
  --mz-tab__font-color--disabled: var(--color-text-placeholder);

  user-select: none;
  cursor: pointer;
  height: 100%;
  padding: 0 12px;
  text-align: center;
  @include mzColorVar(--mz-tab__font-color);

  &--grow {
    flex: 1 0 auto;
    max-width: none;
  }

  &--active {
    @include mzColorVar(--mz-tab__font-color--active);
  }

  &--disabled {
    @include mzColorVar(--mz-tab__font-color--disabled);
  }
}
.mz-tab-panel {
  @include mzColorVar(--color-text-primary);
}
</style>
