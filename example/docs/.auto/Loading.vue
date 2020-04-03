<template>
  <div class="component-loading">
    <div class="update-datetime">文档更新时间：2020-04-03 19:10</div>
    <h2 id="loading-jia-zai" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#loading-jia-zai" title="Loading 加载" data-level="2" data-href="#loading-jia-zai">¶</a>Loading 加载</h2>
<p>用于页面和区块的加载中状态。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>以单纯的加载图标模式显示。</p>
<demo-block>
        <template #example><loading-demo1 inline-template><div class="loading-demo1">
  <mz-loading v-for="i of 7" :mode="i"></mz-loading>
</div></loading-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-loading v-for=&quot;i of 7&quot; :mode=&quot;i&quot;&gt;&lt;/mz-loading&gt;
</code></pre></template></demo-block><h3 id="zuo-wei-kuai-de-jia-zai" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zuo-wei-kuai-de-jia-zai" title="作为块的加载" data-level="3" data-href="#zuo-wei-kuai-de-jia-zai">¶</a>作为块的加载</h3>
<p>以单纯的加载图标模式显示。</p>
<demo-block>
        <template #example><loading-demo2 inline-template><div class="loading-demo2">
  <mz-loading :loading="true">
    <div class="height-400">我是内容</div>
  </mz-loading>
</div></loading-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-loading :loading=&quot;true&quot;&gt;
  &lt;div class=&quot;height-400&quot;&gt;我是内容&lt;/div&gt;
&lt;/mz-loading&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentLoading',
  components: { LoadingDemo1: {}, LoadingDemo2: {} }
}
</script>
<style lang="scss">

</style>