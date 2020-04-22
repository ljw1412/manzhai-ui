<template>
  <div class="component-list">
    <div class="update-datetime">文档更新时间：2020-04-22 19:21</div>
    <h2 id="list-lie-biao" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#list-lie-biao" title="List 列表" data-level="2" data-href="#list-lie-biao">¶</a>List 列表</h2>
<p>以列的布局展示数据。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><list-demo1 inline-template><div class="list-demo1">
  <mz-list>
    <mz-list-item></mz-list-item>
  </mz-list>
</div></list-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-list&gt;
  &lt;mz-list-item&gt;&lt;/mz-list-item&gt;
&lt;/mz-list&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentList',
  components: { ListDemo1: {} }
}
</script>
<style lang="scss">

</style>