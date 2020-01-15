<template>
  <div class="component-anchor">
    <div class="update-datetime">文档更新时间：2020-01-15 11:56</div>
    <h2 id="anchor-mao-dian" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#anchor-mao-dian" title="Anchor 锚点" data-level="2" data-href="#anchor-mao-dian">¶</a>Anchor 锚点</h2>
<p>用于布置锚点指定位置。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<p>基础锚点的用法。</p>
<demo-block>
        <template #example><anchor-demo1 inline-template><div class="anchor-demo1">
  <p>
    <mz-anchor href="#a-anchor-1" />
    <span id="a-anchor-1">锚点-1</span>
  </p>
</div></anchor-demo1></template>
        <template #description><p><code>level</code>属性来控制标题大小，默认为<code>3</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;p&gt;
  &lt;mz-anchor href=&quot;#a-anchor-1&quot; /&gt;
  &lt;span id=&quot;a-anchor-1&quot;&gt;锚点-1&lt;/span&gt;
&lt;/p&gt;
</code></pre></template></demo-block><h3 id="yin-bi-shi-mao-dian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yin-bi-shi-mao-dian" title="隐蔽式锚点" data-level="3" data-href="#yin-bi-shi-mao-dian">¶</a>隐蔽式锚点</h3>
<p>不可见的锚点。</p>
<demo-block>
        <template #example><anchor-demo2 inline-template><div class="anchor-demo2">
  <mz-anchor href="#anchor-invisible" title="不可见锚点-1" invisible></mz-anchor>
</div></anchor-demo2></template>
        <template #description><p><code>invisible</code>属性来控制锚点的可见性。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-anchor href=&quot;#anchor-invisible&quot; title=&quot;不可见锚点-1&quot; invisible&gt;&lt;/mz-anchor&gt;
</code></pre></template></demo-block><h3 id="yu-mu-lu-lian-dong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yu-mu-lu-lian-dong" title="与目录联动" data-level="3" data-href="#yu-mu-lu-lian-dong">¶</a>与目录联动</h3>
<p>配合 <a href="catalogue">目录(Catalogue)组件</a> 使用效果更好。</p>
<demo-block>
        <template #example><anchor-demo3 inline-template><div class="anchor-demo3">
  <mz-row>
    <mz-col :span="12" 
      id="demo-anchor-scroll-container" 
      style="height: 300px; overflow-y: auto;">
      <div class="height-400">
        <mz-anchor href="#anchor-1" class="demo-anchor" title="不可见锚点-1" invisible></mz-anchor>
        <span id="anchor-1">我是不可见锚点</span>
      </div>
      <div class="height-400">    
        <mz-anchor href="#anchor-2" class="demo-anchor" title="锚点-2"></mz-anchor> 
        <span id="anchor-2">锚点-2</span>
      </div>
      <div class="height-400">    
        <mz-anchor href="#anchor-3" class="demo-anchor" title="锚点-3"></mz-anchor> 
        <span id="anchor-3">锚点-3</span>
      </div>
      <div class="height-400">    
        <mz-anchor href="#anchor-4" class="demo-anchor" title="锚点-4"></mz-anchor> 
        <span id="anchor-4">锚点-4</span>
      </div>
      <div class="height-400">    
        <mz-anchor href="#anchor-5" class="demo-anchor" title="锚点-5"></mz-anchor> 
        <span id="anchor-5">锚点-5</span>
      </div>
    </mz-col>
  
    <mz-col :span="12">
      <mz-catalogue container="#demo-anchor-scroll-container"  
        anchorClassName=".demo-anchor"></mz-catalogue>
    </mz-col>
  </mz-row>
</div></anchor-demo3></template>
        <template #description><p>将 catalogue 设置 <code>anchorClassName</code>(自动匹配的锚点class名称)，与 anchor 设置 <code>class</code>保持一致。这样可以避免锚点出现互串的情况。anchor 的<code>title</code>属性值，会作为目录元素的标题。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;12&quot; 
    id=&quot;demo-anchor-scroll-container&quot; 
    style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
    &lt;div class=&quot;height-400&quot;&gt;
      &lt;mz-anchor href=&quot;#anchor-1&quot; class=&quot;demo-anchor&quot; title=&quot;不可见锚点-1&quot; invisible&gt;&lt;/mz-anchor&gt;
      &lt;span id=&quot;anchor-1&quot;&gt;我是不可见锚点&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;height-400&quot;&gt;    
      &lt;mz-anchor href=&quot;#anchor-2&quot; class=&quot;demo-anchor&quot; title=&quot;锚点-2&quot;&gt;&lt;/mz-anchor&gt; 
      &lt;span id=&quot;anchor-2&quot;&gt;锚点-2&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;height-400&quot;&gt;    
      &lt;mz-anchor href=&quot;#anchor-3&quot; class=&quot;demo-anchor&quot; title=&quot;锚点-3&quot;&gt;&lt;/mz-anchor&gt; 
      &lt;span id=&quot;anchor-3&quot;&gt;锚点-3&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;height-400&quot;&gt;    
      &lt;mz-anchor href=&quot;#anchor-4&quot; class=&quot;demo-anchor&quot; title=&quot;锚点-4&quot;&gt;&lt;/mz-anchor&gt; 
      &lt;span id=&quot;anchor-4&quot;&gt;锚点-4&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;height-400&quot;&gt;    
      &lt;mz-anchor href=&quot;#anchor-5&quot; class=&quot;demo-anchor&quot; title=&quot;锚点-5&quot;&gt;&lt;/mz-anchor&gt; 
      &lt;span id=&quot;anchor-5&quot;&gt;锚点-5&lt;/span&gt;
    &lt;/div&gt;
  &lt;/mz-col&gt;

  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;mz-catalogue container=&quot;#demo-anchor-scroll-container&quot;  
      anchorClassName=&quot;.demo-anchor&quot;&gt;&lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>href</td>
<td>(必填)锚点id名称，匹配规则：/^#[a-zA-Z0-9-_]+$/</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>层级</td>
<td>Number</td>
<td>1-9</td>
<td>3</td>
</tr>
<tr>
<td>invisible</td>
<td>是否可见</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>symbol</td>
<td>标题前的锚点符号</td>
<td>String</td>
<td></td>
<td>¶</td>
</tr>
<tr>
<td>scroll-smooth</td>
<td>是否使用js滚动</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  components: { AnchorDemo1: {}, AnchorDemo2: {}, AnchorDemo3: {} }
}
</script>