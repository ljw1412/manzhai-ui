<template>
  <div class="mz-cell color-transition"
    v-ripple="hasSwitch"
    :class="{'is-pointer': hasSwitch}"
    @click="onCellClick">
    <div class="mz-cell__core flex-center-space-between">
      <div class="mz-cell__left">
        <slot>
          <div v-if="$slots.default || title"
            class="mz-cell__title color-transition">
            <slot name="title">{{title}}</slot>
          </div>
          <div v-if="$slots.desc || desc"
            class="mz-cell__desc color-transition">
            <slot name="desc">{{desc}}</slot>
          </div>
        </slot>
      </div>
      <div class="mz-cell__right"
        :class="{
          'mz-cell__right--switch': hasSwitch
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
import MzSwitch from '../Switch/index'

@Component({
  components: {
    MzSwitch
  }
})
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

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-cell {
  position: relative;
  & + & {
    border-top: 1px solid var(--color-border-base);
  }
  &__core {
    padding: 10px 20px;
    min-height: 37px;
  }

  &__title {
    font-size: 13px;
    color: var(--color-text-primary);
  }

  &__desc {
    font-size: 12px;
    color: var(--color-text-secondary);
  }

  &__title + &__desc {
    margin-top: 2px;
  }

  &__right {
    flex-shrink: 0;

    &--switch {
      padding-left: 20px;
    }
  }

  &__child > & {
    padding-left: 30px;
  }
}
</style>
