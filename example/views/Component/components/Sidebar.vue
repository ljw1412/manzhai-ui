<template>
  <div id="sidebar">
    <mz-navigation :data="data"
      round='mini'></mz-navigation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navigate from '../../../options/navigate.json'

@Component
export default class Sidebar extends Vue {
  data = navigate
}
</script>

<style lang="scss">
#sidebar {
  flex-shrink: 0;
  box-sizing: border-box;
  width: 216px;
  padding: 10px 8px;
  overflow-y: scroll;
}
</style>
