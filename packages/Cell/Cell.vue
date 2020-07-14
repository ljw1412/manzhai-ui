<template>
  <div class="mz-cell position-relative"
    v-ripple="hasSwitch"
    :class="{'cursor-pointer': hasSwitch}"
    @click="onCellClick">
    <div class="mz-cell__core d-flex align-items-center justify-content-between py-10 px-20">
      <div class="mz-cell__left">
        <slot>
          <div v-if="$slots.default || title"
            class="mz-cell__title fs-13 text-gray-900">
            <slot name="title">{{title}}</slot>
          </div>
          <div v-if="$slots.desc || desc"
            class="mz-cell__desc fs-12 text-gray-700">
            <slot name="desc">{{desc}}</slot>
          </div>
        </slot>
      </div>
      <div class="mz-cell__right flex-shrink-0"
        :class="{
          'has-switch': hasSwitch
        }">
        <slot name="right">
          <mz-switch v-if="hasSwitch"
            v-model="theValue"
            :size="size"
            @change="onValueChange"></mz-switch>
        </slot>
      </div>
    </div>
    <div v-if="$slots.child"
      class="mz-cell__child">
      <slot name="child"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import MzSwitch from '../Switch/Switch.vue'

@Component({ components: { MzSwitch } })
export default class MzCell extends Vue {
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly desc!: string
  @Prop(String)
  readonly type!: string
  @Prop(String)
  readonly size!: string
  @Prop(Boolean)
  readonly value!: boolean

  theValue: boolean = false

  get hasSwitch() {
    return this.type === 'switch' && !this.$slots.right
  }

  @Emit('click')
  onCellClick() {
    if (this.hasSwitch) {
      this.theValue = !this.theValue
    }
  }

  @Watch('value')
  onValueChange(val: boolean) {
    this.theValue = val
  }

  @Watch('theValue')
  onTheValueChange(val: boolean) {
    this.$emit('change', val, 'theChange')
    this.$emit('input', val, 'theInput')
  }
}
</script>

