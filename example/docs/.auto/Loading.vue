<template>
  <div class="component-loading">
    <div class="update-datetime">文档更新时间：2020-04-02 14:01</div>
    <h2 id="loading-jia-zai" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#loading-jia-zai" title="Loading 加载" data-level="2" data-href="#loading-jia-zai">¶</a>Loading 加载</h2>
<p>用于页面和区块的加载中状态。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><loading-demo1 inline-template><div class="loading-demo1">
  <mz-loading></mz-loading>
</div></loading-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-loading&gt;&lt;/mz-loading&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentLoading',
  components: { LoadingDemo1: {} }
}
</script>
<style lang="scss">

</style>