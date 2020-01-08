<template>
  <div class="component-anchor">
    <div class="update-datetime">文档更新时间：2020-01-08 13:41</div>
    <h2 id="anchor-mao-dian"><a class="mz-document-anchor" href="#anchor-mao-dian">¶</a>Anchor 锚点</h2>
<p>用于布置锚点指定位置。</p>
<h3 id="ji-ben-yong-fa"><a class="mz-document-anchor" href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<p>基础锚点的用法。</p>
<demo-block>
        <template #example><anchor-demo1 inline-template><div class="anchor-demo1">
  <mz-anchor name="a-anchor-1" title="锚点-1" :level="1"></mz-anchor>
  <mz-anchor name="a-anchor-2" title="锚点-2" :level="2"></mz-anchor>
  <mz-anchor name="a-anchor-3" title="锚点-3" :level="3"></mz-anchor>
  <mz-anchor name="a-anchor-4" title="锚点-4" :level="4"></mz-anchor>
  <mz-anchor name="a-anchor-5" title="锚点-5" :level="5"></mz-anchor>
  <mz-anchor name="a-anchor-6" title="锚点-6" :level="6"></mz-anchor>
  <mz-anchor name="a-anchor-7" title="锚点-7" :level="7"></mz-anchor>
  <mz-anchor name="a-anchor-8" title="锚点-8" :level="8"></mz-anchor>
  <mz-anchor name="a-anchor-9" title="锚点-9" :level="9"></mz-anchor>
</div></anchor-demo1></template>
        <template #description><p><code>level</code>属性来控制标题大小，默认为<code>3</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-anchor name=&quot;a-anchor-1&quot; title=&quot;锚点-1&quot; :level=&quot;1&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-2&quot; title=&quot;锚点-2&quot; :level=&quot;2&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-3&quot; title=&quot;锚点-3&quot; :level=&quot;3&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-4&quot; title=&quot;锚点-4&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-5&quot; title=&quot;锚点-5&quot; :level=&quot;5&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-6&quot; title=&quot;锚点-6&quot; :level=&quot;6&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-7&quot; title=&quot;锚点-7&quot; :level=&quot;7&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-8&quot; title=&quot;锚点-8&quot; :level=&quot;8&quot;&gt;&lt;/mz-anchor&gt;
&lt;mz-anchor name=&quot;a-anchor-9&quot; title=&quot;锚点-9&quot; :level=&quot;9&quot;&gt;&lt;/mz-anchor&gt;
</code></pre></template></demo-block><h3 id="yin-bi-shi-mao-dian"><a class="mz-document-anchor" href="#yin-bi-shi-mao-dian">¶</a>隐蔽式锚点</h3>
<p>不可见的锚点</p>
<demo-block>
        <template #example><anchor-demo2 inline-template><div class="anchor-demo2">
  <mz-anchor name="anchor-invisible" title="不可见锚点-1" :level="4" invisible></mz-anchor>
</div></anchor-demo2></template>
        <template #description><p><code>invisible</code>属性来控制锚点的可见性。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-anchor name=&quot;anchor-invisible&quot; title=&quot;不可见锚点-1&quot; :level=&quot;4&quot; invisible&gt;&lt;/mz-anchor&gt;
</code></pre></template></demo-block><h3 id="yu-mu-lu-lian-dong"><a class="mz-document-anchor" href="#yu-mu-lu-lian-dong">¶</a>与目录联动</h3>
<p>配合 <a href="catalogue">目录(Catalogue)组件</a> 使用效果更好。</p>
<demo-block>
        <template #example><anchor-demo3 inline-template><div class="anchor-demo3">
  <mz-row>
    <mz-col :span="12" 
      id="demo-anchor-scroll-container" 
      style="height:300px;overflow-y:auto;">
      <mz-anchor name="anchor-1" anchorClass="demo-anchor"
        title="不可见锚点-1" :level="4" invisible></mz-anchor>
      <div style="height:200px"></div>
      <mz-anchor name="anchor-2" anchorClass="demo-anchor"
        title="锚点-2" :level="4"></mz-anchor>
      <div style="height:200px"></div>
      <mz-anchor name="anchor-3" anchorClass="demo-anchor"
        title="锚点-3" :level="4"></mz-anchor>
      <div style="height:200px"></div>
      <mz-anchor name="anchor-4" anchorClass="demo-anchor"
        title="锚点-4" :level="4"></mz-anchor>
      <div style="height:200px"></div>
      <mz-anchor name="anchor-5" anchorClass="demo-anchor"
        title="锚点-5" :level="4"></mz-anchor>
      <div style="height:200px"></div>
    </mz-col>
    <mz-col :span="12">
      <mz-catalogue container="#demo-anchor-scroll-container"  
        anchorClassName=".demo-anchor"></mz-catalogue>
    </mz-col>
  </mz-row>
</div></anchor-demo3></template>
        <template #description><p>将 catalogue 设置 <code>anchorClassName</code>(自动匹配的锚点class名称)，与 anchor 设置 <code>anchorClass</code>(锚点class名称)保持一致。这样可以避免锚点出现互串的情况。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;12&quot; 
    id=&quot;demo-anchor-scroll-container&quot; 
    style=&quot;height:300px;overflow-y:auto;&quot;&gt;
    &lt;mz-anchor name=&quot;anchor-1&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;不可见锚点-1&quot; :level=&quot;4&quot; invisible&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height:200px&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;anchor-2&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-2&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height:200px&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;anchor-3&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-3&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height:200px&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;anchor-4&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-4&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height:200px&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;anchor-5&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-5&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height:200px&quot;&gt;&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;mz-catalogue container=&quot;#demo-anchor-scroll-container&quot;  
      anchorClassName=&quot;.demo-anchor&quot;&gt;&lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;


</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { AnchorDemo1: {}, AnchorDemo2: {}, AnchorDemo3: {} }
}
</script>