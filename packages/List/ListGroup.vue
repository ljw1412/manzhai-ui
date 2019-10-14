<template>
  <div class="mz-list-group">
    <mz-sub-header>{{label}}</mz-sub-header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class MzListGroup extends Vue {
  @Prop()
  readonly label?: string
}
</script>

<style lang="scss">
.mz-list-group {
  padding: 0 16px;
}
</style>
