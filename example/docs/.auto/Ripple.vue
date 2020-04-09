<template>
  <div class="component-ripple">
    <div class="update-datetime">文档更新时间：2020-04-09 12:03</div>
    <h2 id="ripple-lian-yi-xiao-guo" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#ripple-lian-yi-xiao-guo" title="Ripple 涟漪效果" data-level="2" data-href="#ripple-lian-yi-xiao-guo">¶</a>Ripple 涟漪效果</h2>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>使用<code>v-ripple</code>指令，传递一个Boolean类型来控制是否使用。</p>
<demo-block>
        <template #example><ripple-demo1 inline-template><div class="ripple-demo1">
  <div class="height-200" v-ripple="true">点击</div>
</div></ripple-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;height-200&quot; v-ripple=&quot;true&quot;&gt;点击&lt;/div&gt;
</code></pre></template></demo-block><h3 id="geng-duo-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#geng-duo-yong-fa" title="更多用法" data-level="3" data-href="#geng-duo-yong-fa">¶</a>更多用法</h3>
<p>使用<code>v-ripple</code>指令，传递一个Object。</p>
<ul class="mz-document-ul">
<li>
<p>value?: boolean  // 是否启用</p>
</li>
<li>
<p>center?: boolean // 是否以中心扩散</p>
</li>
<li>
<p>class?: string // 涟漪元素的自定义class</p>
</li>
<li>
<p>circle?: boolean // 是否为圆形的</p>
</li>
</ul>
<demo-block>
        <template #example><ripple-demo2 inline-template><div class="ripple-demo2">
  <div class="height-200"
     v-ripple="{value:true,center:true}">点击以中心扩散</div>
</div></ripple-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;height-200&quot;
   v-ripple=&quot;{value:true,center:true}&quot;&gt;点击以中心扩散&lt;/div&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentRipple',
  components: { RippleDemo1: {}, RippleDemo2: {} }
}
</script>
<style lang="scss">

</style>