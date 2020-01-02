<template>
  <mz-row class="demo-block">
    <mz-col class="example">
      <slot name="example"></slot>
    </mz-col>
    <mz-col class="source-code">
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </mz-col>
  </mz-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentName extends Vue {}
</script>

<style lang="scss">
.demo-block {
  padding: 16px;
  background-color: var(--demo-block__background-color);

  .example {
    margin-bottom: 20px;
  }

  .description {
    padding: 10px 20px;
    border: 1px solid var(--color-border-base);
    border-radius: 5px;
    background-color: var(--demo-block__description-background-color);
    p {
      margin: 0 !important;
    }
    code {
      margin: 0 4px;
      padding: 2px 3px;
      border-radius: 3px;
      background-color: var(--demo-block__description-code-background-color);
      color: var(--demo-block__description-code-color);
      font-style: italic;
    }
  }

  .highlight {
    margin-top: 10px;
    ::selection {
      background-color: var(--demo-block__selection-color);
    }
    .hljs,
    .hljs-subst {
      color: var(--demo-block__highlight-color);
    }
  }
}
</style>
