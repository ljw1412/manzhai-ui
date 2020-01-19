<template>
  <mz-row ref="demoBlock"
    class="demo-block">
    <mz-col class="example">
      <slot name="example"></slot>
    </mz-col>
    <mz-col v-show="isDisplayCode"
      class="source-code">
      <div v-if="$slots.description"
        class="description">
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
  padding-top: 36px;
  background-color: var(--demo-block__background-color);

  .example {
    color: var(--color-text-secondary);
  }

  .source-code {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--color-border-base);
  }

  .description {
    padding: 10px 20px;
    border: 1px solid var(--color-border-base);
    border-radius: 5px;
    background-color: var(--demo-block__description-background-color);
    margin-bottom: 10px;
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
    ::selection {
      background-color: var(--demo-block__selection-color);
    }
    .hljs,
    .hljs-subst {
      color: var(--demo-block__highlight-color);
    }
    .html {
      background-color: transparent;
      padding: 10px 20px;
    }
  }

  .action {
    position: absolute;
    right: 12px;
    top: 8px;
    color: var(--demo-block__highlight-color);
    z-index: 1001;
    .mz-icon {
      &:hover {
        color: var(--color-primary);
      }
      &:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
