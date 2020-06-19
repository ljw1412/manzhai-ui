<template>
  <mz-dropdown v-model="visible"
    v-bind="$attrs"
    v-on="$listeners"
    class="mz-dropdown-menu">
    <slot></slot>
    <mz-scrollbar slot="content"
      class="mz-dropdown-menu__content"
      bar-size="8px"
      :style="baseStyles">
      <slot name="header"></slot>
      <mz-list clickable
        size="medium"
        @item-click="handleMenuSelect">
        <mz-list-item v-for="(item, index) of data"
          :item="item"
          :key="item.value"
          v-bind="item">
          <slot name="item"
            :index="index + 1"
            :item="item">
            <mz-icon v-if="item.prefixIcon"
              slot="prefix"
              size="16"
              :name="item.prefixIcon"></mz-icon>
            <mz-icon v-if="item.suffixIcon"
              slot="suffix"
              size="16"
              :name="item.suffixIcon"></mz-icon>
          </slot>
        </mz-list-item>
      </mz-list>
      <slot name="footer"></slot>
    </mz-scrollbar>
  </mz-dropdown>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MzDropdown from 'manzhai-ui/packages/Dropdown/Dropdown'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute'

export interface MenuItem {
  value: string
  title?: string
  text?: string
  class?: any
  disabled?: boolean
  prefixIcon?: string
  suffixIcon?: string
}

@Component({ inheritAttrs: false, components: { MzDropdown, MzIcon } })
export default class MzDropdownMenu extends BaseAttribute {
  @Prop({ type: Array, default: () => [] })
  readonly data!: MenuItem[]

  visible = false

  handleMenuSelect(value: any, item: any, disabled: boolean) {
    if (!disabled) {
      this.$emit('action', value, item)
      this.visible = false
    }
    this.$emit('select', ...arguments)
  }
}
</script>
