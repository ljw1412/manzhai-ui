<template>
  <div class="component-catalogue">
    <div class="update-datetime">文档更新时间：2020-01-08 18:53</div>
    <h2 id="catalogue-mu-lu"><a class="mz-document-anchor" href="#catalogue-mu-lu">¶</a>Catalogue 目录</h2>
<p>用于列出页面目录。</p>
<h3 id="ji-chu-yong-fa"><a class="mz-document-anchor" href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><catalogue-demo1 inline-template><div class="catalogue-demo1">
  <mz-catalogue manual>
    <mz-catalogue-item title="标题1" :level="1">
      <mz-catalogue-item title="标题1-1" :level="2">
        <mz-catalogue-item title="标题1-1-1" :level="3"></mz-catalogue-item>
        <mz-catalogue-item title="标题1-1-2" :level="3"></mz-catalogue-item>
      </mz-catalogue-item>
      <mz-catalogue-item title="标题1-2" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
    <mz-catalogue-item title="标题2" :level="1"></mz-catalogue-item>
    <mz-catalogue-item title="标题3" :level="1">
      <mz-catalogue-item title="标题3-1" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
  </mz-catalogue>
</div></catalogue-demo1></template>
        <template #description><p>当 catalogue 组件的<code>manual</code>属性为 true，默认插槽才可以使用。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-catalogue manual&gt;
  &lt;mz-catalogue-item title=&quot;标题1&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题1-1&quot; :level=&quot;2&quot;&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-1&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-2&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
    &lt;/mz-catalogue-item&gt;
    &lt;mz-catalogue-item title=&quot;标题1-2&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题2&quot; :level=&quot;1&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题3&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题3-1&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
&lt;/mz-catalogue&gt;
</code></pre></template></demo-block><h3 id="mao-dian-mu-lu"><a class="mz-document-anchor" href="#mao-dian-mu-lu">¶</a>锚点目录</h3>
<p>有位置跳转功能的目录</p>
<demo-block>
        <template #example><catalogue-demo2 inline-template><div class="catalogue-demo2">
  <mz-row>
    <mz-col :span="16" 
      id="demo-scroll-container" 
      style="height: 300px; overflow-y: auto;">
      <div id="anchor-1">位置1</div>
      <div style="height: 200px;"></div>
      <div id="anchor-2">位置2</div>
      <div style="height: 200px;"></div>
      <div id="anchor-3">位置3</div>
      <div style="height: 200px;"></div>
      <div id="anchor-4">位置4</div>
    </mz-col>
  
   <mz-col :span="8">
      <mz-catalogue manual>
        <mz-catalogue-item title="位置1" :level="1" target="anchor-1"/>
        <mz-catalogue-item title="位置2" :level="1" target="anchor-2"/>
        <mz-catalogue-item title="位置3" :level="1" target="anchor-3"/>
        <mz-catalogue-item title="位置4" :level="1" target="anchor-4"/>
      </mz-catalogue>
    </mz-col>
  </mz-row>
</div></catalogue-demo2></template>
        <template #description><p>catalogue-item 的<code>target</code>属性指向页面锚点元素的 id</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;16&quot; 
    id=&quot;demo-scroll-container&quot; 
    style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
    &lt;div id=&quot;anchor-1&quot;&gt;位置1&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-2&quot;&gt;位置2&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-3&quot;&gt;位置3&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-4&quot;&gt;位置4&lt;/div&gt;
  &lt;/mz-col&gt;

 &lt;mz-col :span=&quot;8&quot;&gt;
    &lt;mz-catalogue manual&gt;
      &lt;mz-catalogue-item title=&quot;位置1&quot; :level=&quot;1&quot; target=&quot;anchor-1&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置2&quot; :level=&quot;1&quot; target=&quot;anchor-2&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置3&quot; :level=&quot;1&quot; target=&quot;anchor-3&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置4&quot; :level=&quot;1&quot; target=&quot;anchor-4&quot;/&gt;
    &lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { CatalogueDemo1: {}, CatalogueDemo2: {} }
}
</script>