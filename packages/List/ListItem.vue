<template>
  <div v-ripple="!itemDisabled && ripple"
    class="mz-list-item"
    :class="wrapperClasses"
    @click="onClick">
    <div class="mz-list-item__prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="mz-list-item__content">
      <slot name="content">
        <div class="mz-list-item__title">
          <slot name="title">{{ label || value }}</slot>
        </div>
        <div class="mz-list-item__text">
          <slot name="text">{{ text }}</slot>
        </div>
      </slot>
    </div>
    <div class="mz-list-item__suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

@Component
export default class MzListItem extends Vue {
  @Prop()
  readonly data!: any
  @Prop(String)
  readonly label!: string
  @Prop({ required: true })
  readonly value!: string
  @Prop(String)
  readonly text!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly link!: boolean
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any

  active = false

  get itemDisabled() {
    if (this.mzList && this.mzList.disabled) return true
    return this.disabled
  }

  get wrapperClasses() {
    return {
      'mz-list-item--disabled': this.itemDisabled,
      'mz-list-item--active': this.active,
      'mz-list-item--link': this.link || this.ripple
    }
  }

  onClick() {
    if (this.itemDisabled) return
    this.$emit('click', this.value, this.data)
    if (this.mzList) {
      this.mzList.setValue(this.value, this.data, this)
    }
  }

  created() {
    if (this.mzList) this.mzList.addItem(this)
  }

  beforeDestroy() {
    if (this.mzList) this.mzList.removeItem(this)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';

.mz-list-item {
  position: relative;
  padding: 0 16px;
  color: getColor(text-primary);
  &__content {
    position: relative;
    padding: 12px 0;
    z-index: 50;
  }

  &__title {
    font-size: 16px;
  }

  &__text {
    font-size: 14px;
    color: getColor(text-regular);
    margin-top: 3px;
  }

  &--link {
    cursor: pointer;
    @include before-background;
  }

  &--disabled {
    cursor: not-allowed;
    .mz-list-item {
      &__title,
      &__text {
        font-weight: bold;
        color: getColor(text-secondary);
      }
      &:not(.mz-list-item--active) {
        @include before-background-disabled;
      }
    }
  }

  &--active.mz-list-item--link {
    @include before-background-active;
    color: getColor(primary);
  }
}
</style>
