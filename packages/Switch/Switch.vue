<template>
  <div class="mz-switch"
    :aria-checked="value"
    :class="wrapperClasses"
    @click.stop="onSwitchClick"
    @mousedown.stop>
    <input ref="input"
      type="checkbox"
      class="mz-switch__input"
      :name="name" />
    <div class="mz-switch__core color-transition">
      <div class="mz-switch__thumb">
        <mz-icon v-if="icon"
          :name="icon"
          :color="iconColor"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Mixins } from 'vue-property-decorator'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import FormElement from 'manzhai-ui/src/mixins/FormElement'
import MzIcon from '../Icon/Icon.vue'

@Component({ components: { MzIcon } })
export default class MzSwitch extends Mixins(MzSize, FormElement) {
  @Prop(Boolean)
  readonly value!: boolean
  @Prop(String)
  readonly activeIcon!: string
  @Prop(String)
  readonly inactiveIcon!: string
  @Prop(String)
  readonly iconColor!: string
  @Prop(Boolean)
  readonly circle!: boolean
  @Ref('input')
  readonly input!: HTMLInputElement

  get icon() {
    return this.value ? this.activeIcon : this.inactiveIcon
  }

  get wrapperClasses() {
    const classes = [
      this.disabled ? 'is-not-allowed' : 'is-pointer',
      this.mzSize,
      {
        'mz-switch--checked': this.value,
        'mz-switch--circle': this.circle,
        'mz-switch--disabled': this.disabled
      }
    ]
    return classes
  }

  onSwitchClick() {
    if (this.disabled) return
    this.input.checked = !this.value
    this.$emit('change', !this.value)
    this.$emit('input', !this.value)
  }

  mounted() {
    this.input.checked = this.value
  }
}
</script>

