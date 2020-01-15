<template>
  <div class="component-card">
    <div class="update-datetime">文档更新时间：2020-01-15 11:56</div>
    <h2 id="card-qia-pian" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#card-qia-pian" title="Card 卡片" data-level="2" data-href="#card-qia-pian">¶</a>Card 卡片</h2>
<p>以卡片显示展示内容。</p>
<h3 id="qia-pian-hai-ba" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#qia-pian-hai-ba" title="卡片海拔" data-level="3" data-href="#qia-pian-hai-ba">¶</a>卡片海拔</h3>
<p>提供了25个海拔层级显示卡片的效果。</p>
<demo-block>
        <template #example><card-demo1 inline-template><div class="card-demo1">
  <div>
    <mz-button outlined
      type="primary"
      :disabled="elevation <= 0"
      @click="elevationBy(-1)">-</mz-button>
    <mz-button outlined
      type="primary"
      :disabled="elevation >= 24" 
      @click="elevationBy(1)">+</mz-button>
    <mz-card
      width="80%"
      height="200px"
      :elevation="elevation">
      <span>当前海拔{{elevation}}</span>
    </mz-card>
  </div>
</div></card-demo1></template>
        <template #description><p><code>elevation</code>属性范围为 0-24 之间的整数。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button outlined
    type=&quot;primary&quot;
    :disabled=&quot;elevation &lt;= 0&quot;
    @click=&quot;elevationBy(-1)&quot;&gt;-&lt;/mz-button&gt;
  &lt;mz-button outlined
    type=&quot;primary&quot;
    :disabled=&quot;elevation &gt;= 24&quot; 
    @click=&quot;elevationBy(1)&quot;&gt;+&lt;/mz-button&gt;
  &lt;mz-card
    width=&quot;80%&quot;
    height=&quot;200px&quot;
    :elevation=&quot;elevation&quot;&gt;
    &lt;span&gt;当前海拔{{elevation}}&lt;/span&gt;
  &lt;/mz-card&gt;
&lt;/div&gt;

&lt;script&gt;
export default{
  data(){
    return {
      elevation: 0
    }
  },

  methods: {
    elevationBy(step){
      this.elevation += step
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xian-tiao-qia-pian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xian-tiao-qia-pian" title="线条卡片" data-level="3" data-href="#xian-tiao-qia-pian">¶</a>线条卡片</h3>
<p>有线条围绕的扁平卡片</p>
<demo-block>
        <template #example><card-demo2 inline-template><div class="card-demo2">
  <mz-card outlined
    width="80%"
    height="200px">
    <span>边框卡片</span>
  </mz-card>
</div></card-demo2></template>
        <template #description><p>注意: 当使用<code>outlined</code>属性展示线条卡片时，会自动将<code>elevation</code>降到0。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-card outlined
  width=&quot;80%&quot;
  height=&quot;200px&quot;&gt;
  &lt;span&gt;边框卡片&lt;/span&gt;
&lt;/mz-card&gt;
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
<td>elevation</td>
<td>海拔</td>
<td>String / Number</td>
<td>1-24</td>
<td>3</td>
</tr>
<tr>
<td>outlined</td>
<td>是否线条卡片</td>
<td>Boolean</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>background</td>
<td>卡片背景，同style的background</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>min-width</td>
<td>最小宽度</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>max-width</td>
<td>最大宽度</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>min-height</td>
<td>最小高度</td>
<td>String</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>max-height</td>
<td>最大高度</td>
<td>String</td>
<td>---</td>
<td>---</td>
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
<td>-</td>
<td>卡片的内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  components: { CardDemo1: {
  data(){
    return {
      elevation: 0
    }
  },

  methods: {
    elevationBy(step){
      this.elevation += step
    }
  }
}, CardDemo2: {} }
}
</script>