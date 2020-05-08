<template>
  <div class="component-scrollbar">
    <div class="update-datetime">文档更新时间：2020-05-08 19:28</div>
    <h2 id="scrollbar-gun-dong-tiao" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#scrollbar-gun-dong-tiao" title="Scrollbar 滚动条" data-level="2" data-href="#scrollbar-gun-dong-tiao">¶</a>Scrollbar 滚动条</h2>
<p>用HTML实现原生滚动条效果。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><scrollbar-demo1 inline-template><div class="scrollbar-demo1">
  <mz-scrollbar style="height:200px;">
    <div style="white-space: nowrap;">
      <span v-for="i of 10" :key="i">测试滚动条测试滚动条测试滚动条测试滚动条</span>
    </div>
    <p v-for="i of 10" :key="i">段落{{i}}</p>
  </mz-scrollbar>
</div></scrollbar-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-scrollbar style=&quot;height:200px;&quot;&gt;
  &lt;div style=&quot;white-space: nowrap;&quot;&gt;
    &lt;span v-for=&quot;i of 10&quot; :key=&quot;i&quot;&gt;测试滚动条测试滚动条测试滚动条测试滚动条&lt;/span&gt;
  &lt;/div&gt;
  &lt;p v-for=&quot;i of 10&quot; :key=&quot;i&quot;&gt;段落{{i}}&lt;/p&gt;
&lt;/mz-scrollbar&gt;
</code></pre></template></demo-block><h3 id="zi-dong-yin-cang" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zi-dong-yin-cang" title="自动隐藏" data-level="3" data-href="#zi-dong-yin-cang">¶</a>自动隐藏</h3>
<p>不悬停时隐藏。</p>
<demo-block>
        <template #example><scrollbar-demo2 inline-template><div class="scrollbar-demo2">
  <mz-scrollbar style="height:200px;" :always="false">
    <div style="white-space: nowrap;">
      <span v-for="i of 10" :key="i">测试滚动条测试滚动条测试滚动条测试滚动条</span>
    </div>
    <p v-for="i of 10" :key="i">段落{{i}}</p>
  </mz-scrollbar>
</div></scrollbar-demo2></template>
        <template #description><p><code>always</code>控制是否一直显示，默认值<code>true</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-scrollbar style=&quot;height:200px;&quot; :always=&quot;false&quot;&gt;
  &lt;div style=&quot;white-space: nowrap;&quot;&gt;
    &lt;span v-for=&quot;i of 10&quot; :key=&quot;i&quot;&gt;测试滚动条测试滚动条测试滚动条测试滚动条&lt;/span&gt;
  &lt;/div&gt;
  &lt;p v-for=&quot;i of 10&quot; :key=&quot;i&quot;&gt;段落{{i}}&lt;/p&gt;
&lt;/mz-scrollbar&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#api" title="Api" data-level="3" data-href="#api">¶</a>Api</h3>
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
<td>bar-size</td>
<td>条的大小</td>
<td>String</td>
<td></td>
<td>'15px'</td>
</tr>
<tr>
<td>always</td>
<td>是否一直显示</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentScrollbar',
  components: { ScrollbarDemo1: {}, ScrollbarDemo2: {} }
}
</script>
<style lang="scss">

</style>