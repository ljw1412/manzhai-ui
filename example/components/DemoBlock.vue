<template>
  <mz-row ref="demoBlock"
    class="demo-block">
    <mz-col class="example">
      <slot name="example"></slot>
    </mz-col>
    <mz-col v-show="isDisplayCode"
      class="source-code">
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </mz-col>
    <div class="action">
      <mz-icon class="is-pointer"
        :size="22"
        :name="isDisplayCode?'md-code-working':'md-code'"
        @click="onCodeIconClick"></mz-icon>
    </div>
  </mz-row>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import MzRow from '../../packages/Row'

@Component
export default class DemoBlock extends Vue {
  @Ref('demoBlock')
  readonly demoBlockRef!: MzRow

  isDisplayCode = false

  onCodeIconClick() {
    this.isDisplayCode = !this.isDisplayCode
    if (this.isDisplayCode) {
      this.$nextTick(() => {
        this.demoBlockRef.$el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}
</script>

<style lang="scss">
.demo-block {
  position: relative;
  padding: 16px;
  background-color: var(--demo-block__background-color);

  .source-code {
    margin-top: 20px;
  }

  .description {
    padding: 10px 20px;
    border: 1px solid var(--color-border-base);
    border-radius: 5px;
    background-color: var(--demo-block__description-background-color);
    p {
      margin: 0 !important;
      line-height: 2em !important;
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

  .action {
    position: absolute;
    right: 16px;
    top: 16px;
    color: var(--demo-block__highlight-color);
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
