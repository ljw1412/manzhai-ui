<template>
  <div class="component-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-08 19:29</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>简单的提示文字处理，如果要进行自定义请使用组件<a href="component-tooltip">Tooltip</a></p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><tooltip-demo1 inline-template><div class="tooltip-demo1">
  <mz-button v-tooltip="'文字'">按钮</mz-button>
</div></tooltip-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button v-tooltip=&quot;'文字'&quot;&gt;按钮&lt;/mz-button&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentDirectiveTooltip',
  components: { TooltipDemo1: {} }
}
</script>
<style lang="scss">

</style>