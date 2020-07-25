<template>
  <div id="page-guide"
    class="page-guide h-100">
    <div id="page-guide-content">
      <guide></guide>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Guide from '@example/docs/.auto/Guide/Guide.vue'

@Component({ components: { Guide } })
export default class PageGuide extends Vue {}
</script>

<style lang="scss">
</style>
