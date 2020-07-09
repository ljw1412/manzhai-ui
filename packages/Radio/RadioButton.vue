<template>
  <label class="mz-radio-button"
    v-ripple="!disabled && ripple"
    :class="radioClasses"
    @click="onRadioClick">
    <input type="radio"
      class="mz-radio-button__input hidden-node"
      :name="name"
      :checked="checked"
      :value="value" />
    <span class="mz-radio-button__label"
      role="radio">
      <slot>{{label||value}}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MzRadio from './Radio.vue'

@Component
export default class MzRadioButton extends MzRadio {}
</script>
