<template>
  <div class="component-tag">
    <div class="update-datetime">文档更新时间：2020-03-12 18:30</div>
    <h2 id="tag-biao-qian" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tag-biao-qian" title="Tag 标签" data-level="2" data-href="#tag-biao-qian">¶</a>Tag 标签</h2>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><tag-demo1 inline-template><div class="tag-demo1">
  <mz-tag>标签</mz-tag>
  <mz-tag color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag color="var(--color-warning)" text-color="green">标签</mz-tag>
  <mz-tag color="">标签</mz-tag>
</div></tag-demo1></template>
        <template #description><p><code>color</code>控制标签背景颜色,<code>text-color</code>控制标签文本颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tag&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag color=&quot;var(--color-warning)&quot; text-color=&quot;green&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag color=&quot;&quot;&gt;标签&lt;/mz-tag&gt;
</code></pre></template></demo-block><h3 id="chi-cun" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#chi-cun" title="尺寸" data-level="3" data-href="#chi-cun">¶</a>尺寸</h3>
<demo-block>
        <template #example><tag-demo2 inline-template><div class="tag-demo2">
  <mz-tag size="small">标签</mz-tag>
  <mz-tag size="medium">标签</mz-tag>
  <mz-tag>标签</mz-tag>
  <mz-tag size="large">标签</mz-tag>
</div></tag-demo2></template>
        <template #description><p><code>size</code>可以控制尺寸，可选值<code>small</code>、<code>medium</code>、<code>large</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tag size=&quot;small&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag size=&quot;medium&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag size=&quot;large&quot;&gt;标签&lt;/mz-tag&gt;
</code></pre></template></demo-block><h3 id="xing-tai" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xing-tai" title="形态" data-level="3" data-href="#xing-tai">¶</a>形态</h3>
<demo-block>
        <template #example><tag-demo3 inline-template><div class="tag-demo3">
  <mz-tag outlined color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag round color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag round="left" color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag round="right" color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag text color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
  <mz-tag outlined round color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
</div></tag-demo3></template>
        <template #description><p><code>outlined</code>、<code>round</code>、<code>text</code>分别表示以边框模式，圆角模式，文字模式显示。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tag outlined color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag round color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag round=&quot;left&quot; color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag round=&quot;right&quot; color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag text color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
&lt;mz-tag outlined round color=&quot;var(--color-primary)&quot; text-color=&quot;#ffffff&quot;&gt;标签&lt;/mz-tag&gt;
</code></pre></template></demo-block><h3 id="ke-zeng-shan-de-biao-qian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ke-zeng-shan-de-biao-qian" title="可增删的标签" data-level="3" data-href="#ke-zeng-shan-de-biao-qian">¶</a>可增删的标签</h3>
<demo-block>
        <template #example><tag-demo4 inline-template><div class="tag-demo4">
  <mz-tag v-for="(item, index) of list" 
    :key="index"
    closable
    @close="handleColse(item)">
    {{item.label}}
  </mz-tag>
  <mz-tag class="is-pointer" @click="list.push({label: '新增'})">+新增</mz-tag>
</div></tag-demo4></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tag v-for=&quot;(item, index) of list&quot; 
  :key=&quot;index&quot;
  closable
  @close=&quot;handleColse(item)&quot;&gt;
  {{item.label}}
&lt;/mz-tag&gt;
&lt;mz-tag class=&quot;is-pointer&quot; @click=&quot;list.push({label: '新增'})&quot;&gt;+新增&lt;/mz-tag&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list:[
        { label:'标签1' },
        { label:'标签2' },
        { label:'标签3' },
      ]
    }
  },

  methods:{
    handleColse(item){
      const index = this.list.indexOf(item)
      if(~index){
        this.list.splice(index, 1)
      }
    }
  }
}
&lt;/script&gt;
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
<td>color</td>
<td>背景颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>textColor</td>
<td>文本颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>是否可以关闭</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>outlined</td>
<td>是否为空心</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>是否为圆角</td>
<td>Boolean/String</td>
<td>true / 'left' / 'right'</td>
<td></td>
</tr>
<tr>
<td>text</td>
<td>是否为文字</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>默认</td>
<td>标签内容</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>标签点击事件</td>
<td>(event:Event)</td>
</tr>
<tr>
<td>close</td>
<td>关闭事件，在允许关闭的时候有效</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentTag',
  components: { TagDemo1: {}, TagDemo2: {}, TagDemo3: {}, TagDemo4: {
  data() {
    return {
      list:[
        { label:'标签1' },
        { label:'标签2' },
        { label:'标签3' },
      ]
    }
  },

  methods:{
    handleColse(item){
      const index = this.list.indexOf(item)
      if(~index){
        this.list.splice(index, 1)
      }
    }
  }
} }
}
</script>
<style lang="scss">

</style>