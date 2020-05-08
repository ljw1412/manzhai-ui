<template>
  <div class="component-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-08 18:36</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><tooltip-demo1 inline-template><div class="tooltip-demo1">
  <mz-tooltip content="测试">
    <mz-button>测试</mz-button>
    <mz-button>测试</mz-button>
  </mz-tooltip>
  <!-- <mz-tooltip>
    <mz-button>测试</mz-button>
    <div slot="content">
      <h2>标题</h2>
      <div>内容</div>
    </div>
  </mz-tooltip> -->
</div></tooltip-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip content=&quot;测试&quot;&gt;
  &lt;mz-button&gt;测试&lt;/mz-button&gt;
  &lt;mz-button&gt;测试&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;!-- &lt;mz-tooltip&gt;
  &lt;mz-button&gt;测试&lt;/mz-button&gt;
  &lt;div slot=&quot;content&quot;&gt;
    &lt;h2&gt;标题&lt;/h2&gt;
    &lt;div&gt;内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/mz-tooltip&gt; --&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentTooltip',
  components: { TooltipDemo1: {} }
}
</script>
<style lang="scss">

</style>