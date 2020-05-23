<template>
  <mz-card ref="demoBlock"
    class="demo-card"
    :class="{'demo-card--unfold':isDisplayCode}"
    outlined>
    <div class="example">
      <slot name="example"></slot>
    </div>
    <mz-button v-tooltip.bottom="isDisplayCode ? '折叠代码' : '查看代码'"
      class="action"
      radius="0"
      @click="onCodeIconClick">
      <mz-icon class="is-pointer"
        :size="22"
        :name="isDisplayCode?'code-working':'code'"></mz-icon>
    </mz-button>
    <div v-show="isDisplayCode"
      class="source-code">
      <div v-if="$slots.description"
        class="description">
        <slot name="description"></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
  </mz-card>
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
.demo-card {
  position: relative;
  padding-bottom: 0;
  background-color: #fafafa;
  border-radius: $border-radius-md;

  .example {
    padding: 16px;
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-border-base);
  }

  .action {
    width: 100%;
  }

  .source-code {
    padding: 16px;
    border-top: 1px solid var(--color-border-base);
  }

  .description {
    padding: 10px 20px;
    border: 1px solid var(--color-border-base);
    border-radius: 5px;
    background-color: #ffffff;
    margin-bottom: 10px;
    p {
      margin: 0 !important;
      line-height: 2em !important;
    }
    code {
      margin: 0 4px;
      padding: 2px 3px;
      border-radius: 3px;
      background-color: #e6effb;
      color: #5e6d82;
      font-style: italic;
    }
  }

  .highlight {
    ::selection {
      background-color: $color-text-placeholder;
    }
    .hljs,
    .hljs-subst {
      white-space: pre-wrap;
      color: #333333;
    }
    .html {
      background-color: transparent;
    }
  }
}
</style>
