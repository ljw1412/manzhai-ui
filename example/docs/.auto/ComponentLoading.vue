<template>
  <div class="component-loading">
    <div class="update-datetime">文档更新时间：2020-05-19 11:00</div>
    <h2 id="loading-jia-zai" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#loading-jia-zai" title="Loading 加载" data-level="2" data-href="#loading-jia-zai">¶</a>Loading 加载</h2>
<p>用于页面和区块的加载中状态。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>以单纯的加载图标模式显示。</p>
<demo-block>
        <template #example><loading-demo1 inline-template><div class="loading-demo1">
  <mz-loading v-for="i of 7" :mode="i" :key="i"></mz-loading>
</div></loading-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-loading v-for=&quot;i of 7&quot; :mode=&quot;i&quot; :key=&quot;i&quot;&gt;&lt;/mz-loading&gt;
</code></pre></template></demo-block><h3 id="zuo-wei-kuai-de-jia-zai" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zuo-wei-kuai-de-jia-zai" title="作为块的加载" data-level="3" data-href="#zuo-wei-kuai-de-jia-zai">¶</a>作为块的加载</h3>
<p>有内容嵌套再内部。</p>
<demo-block>
        <template #example><loading-demo2 inline-template><div class="loading-demo2">
  <mz-switch v-model="loading"></mz-switch>
  <mz-loading :loading="loading">
    <div class="height-200">我是内容</div>
  </mz-loading>
</div></loading-demo2></template>
        <template #description><p><code>loading</code>属性控制当前是否为加载状态。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-switch v-model=&quot;loading&quot;&gt;&lt;/mz-switch&gt;
&lt;mz-loading :loading=&quot;loading&quot;&gt;
  &lt;div class=&quot;height-200&quot;&gt;我是内容&lt;/div&gt;
&lt;/mz-loading&gt;

&lt;script&gt;
export default {
  data() {
    return {
      loading: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-wen-an" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-wen-an" title="自定义文案" data-level="3" data-href="#zi-ding-yi-wen-an">¶</a>自定义文案</h3>
<p>自定义加载时的文案。</p>
<demo-block>
        <template #example><loading-demo3 inline-template><div class="loading-demo3">
  <mz-switch v-model="loading"></mz-switch>
  <mz-loading :loading="loading" text="正在加载中">
    <div class="height-200">我是内容</div>
  </mz-loading>
</div></loading-demo3></template>
        <template #description><p><code>text</code>属性设置加载时的文字。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-switch v-model=&quot;loading&quot;&gt;&lt;/mz-switch&gt;
&lt;mz-loading :loading=&quot;loading&quot; text=&quot;正在加载中&quot;&gt;
  &lt;div class=&quot;height-200&quot;&gt;我是内容&lt;/div&gt;
&lt;/mz-loading&gt;

&lt;script&gt;
export default {
  data() {
    return {
      loading: false
    }
  }
}
&lt;/script&gt;
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
<td>type</td>
<td>加载图标的类型</td>
<td>String</td>
<td><code>four-color</code></td>
<td>'four-color'</td>
</tr>
<tr>
<td>mode</td>
<td>加载图标的类型下的多种效果</td>
<td>Number</td>
<td><code>four-color</code>:<code>1-7</code></td>
<td>1</td>
</tr>
<tr>
<td>loading</td>
<td>是否为加载状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>inline</td>
<td>是否为行内元素</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>text</td>
<td>加载时的文案</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>text-color</td>
<td>文案的颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>background</td>
<td>遮罩的颜色</td>
<td>String</td>
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
<td>内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentLoading',
  components: { LoadingDemo1: {}, LoadingDemo2: {
  data() {
    return {
      loading: false
    }
  }
}, LoadingDemo3: {
  data() {
    return {
      loading: false
    }
  }
} }
}
</script>
<style lang="scss">

</style>