<template>
  <mz-card ref="demoBlock"
    class="demo-card position-relative rounded-sm pb-0"
    :class="{'is-unfold':isDisplayCode}"
    outlined>
    <div class="example p-16 text-gray-700 border-bottom">
      <slot name="example"></slot>
    </div>
    <mz-button v-tooltip.bottom="isDisplayCode ? '折叠代码' : '查看代码'"
      class="action w-100 rounded-0"
      @click="onCodeIconClick">
      <mz-icon class="cursor-pointer"
        :size="22"
        :name="isDisplayCode?'code-working':'code'"></mz-icon>
    </mz-button>
    <div v-show="isDisplayCode"
      class="source-code p-16 border-top">
      <div v-if="$slots.description"
        class="description px-20 py-10 border rounded-md mb-10">
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
  background-color: #fafafa;

  .description {
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
      background-color: $gray-500;
    }
    .hljs,
    .hljs-subst {
      white-space: pre-wrap;
      color: $gray-800;
    }
    .html {
      background-color: transparent;
    }
  }
}
</style>
