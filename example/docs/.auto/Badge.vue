<template>
  <div class="component-badge">
    <div class="update-datetime">文档更新时间：2020-04-05 14:18</div>
    <h2 id="badge-hui-biao-shu" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#badge-hui-biao-shu" title="Badge 徽标数" data-level="2" data-href="#badge-hui-biao-shu">¶</a>Badge 徽标数</h2>
<p>主要用于提醒用户点击的角标。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><badge-demo1 inline-template><div class="badge-demo1">
  <mz-badge :count="10">
    <mz-icon name="md-notifications" :size="24"></mz-icon>
  </mz-badge>
  <mz-badge :count="10" color="blue">
    <mz-icon name="md-notifications" :size="24"></mz-icon>
  </mz-badge>
  <mz-badge :count="8">
    <mz-button color="primary" size="large">消息</mz-button>
  </mz-badge>
  <mz-badge :count="8" textColor="orange">
    <mz-button color="primary" size="large">消息</mz-button>
  </mz-badge>
</div></badge-demo1></template>
        <template #description><p><code>count</code>表示数量，当其为 0 时隐藏。<code>color</code>、<code>textColor</code>来分别控制背景颜色、文字颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-badge :count=&quot;10&quot;&gt;
  &lt;mz-icon name=&quot;md-notifications&quot; :size=&quot;24&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;10&quot; color=&quot;blue&quot;&gt;
  &lt;mz-icon name=&quot;md-notifications&quot; :size=&quot;24&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;8&quot;&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;large&quot;&gt;消息&lt;/mz-button&gt;
&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;8&quot; textColor=&quot;orange&quot;&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;large&quot;&gt;消息&lt;/mz-button&gt;
&lt;/mz-badge&gt;
</code></pre></template></demo-block><h3 id="feng-ding-shu-zi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#feng-ding-shu-zi" title="封顶数字" data-level="3" data-href="#feng-ding-shu-zi">¶</a>封顶数字</h3>
<demo-block>
        <template #example><badge-demo2 inline-template><div class="badge-demo2">
  <mz-badge :count="100">
    <mz-icon name="md-notifications" :size="24"></mz-icon>
  </mz-badge>
  <mz-badge :count="100" :overflow-count="9">
    <mz-icon name="md-notifications" :size="24"></mz-icon>
  </mz-badge>
</div></badge-demo2></template>
        <template #description><p>通过设置<code>overflow-count</code>属性设置一个封顶值，当超过时，会显示<code>${overflowCount}+</code>，默认值<code>99</code></p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-badge :count=&quot;100&quot;&gt;
  &lt;mz-icon name=&quot;md-notifications&quot; :size=&quot;24&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;100&quot; :overflow-count=&quot;9&quot;&gt;
  &lt;mz-icon name=&quot;md-notifications&quot; :size=&quot;24&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-badge&gt;
</code></pre></template></demo-block><h3 id="xiao-hong-dian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xiao-hong-dian" title="小红点" data-level="3" data-href="#xiao-hong-dian">¶</a>小红点</h3>
<p>没有具体的数字。</p>
<demo-block>
        <template #example><badge-demo3 inline-template><div class="badge-demo3">
  <mz-badge :count="100" dot :offset="[5, 5]">
    <mz-icon name="md-notifications" :size="24"></mz-icon>
  </mz-badge>
  <mz-badge :count="8" dot>
    <mz-button color="primary" size="large">消息</mz-button>
  </mz-badge>
</div></badge-demo3></template>
        <template #description><p><code>dot</code>属性控制是否以小红点显示。当<code>count</code>为 0 时，徽标将隐藏。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-badge :count=&quot;100&quot; dot :offset=&quot;[5, 5]&quot;&gt;
  &lt;mz-icon name=&quot;md-notifications&quot; :size=&quot;24&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;8&quot; dot&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;large&quot;&gt;消息&lt;/mz-button&gt;
&lt;/mz-badge&gt;
</code></pre></template></demo-block><h3 id="dan-du-shi-yong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#dan-du-shi-yong" title="单独使用" data-level="3" data-href="#dan-du-shi-yong">¶</a>单独使用</h3>
<p>不包裹任何元素即是独立使用。</p>
<demo-block>
        <template #example><badge-demo4 inline-template><div class="badge-demo4">
  <mz-badge :count="10"></mz-badge>
  <mz-badge :count="10" dot></mz-badge>
</div></badge-demo4></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-badge :count=&quot;10&quot;&gt;&lt;/mz-badge&gt;
&lt;mz-badge :count=&quot;10&quot; dot&gt;&lt;/mz-badge&gt;
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
<td>count</td>
<td>显示的数字</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>overflowCount</td>
<td>封顶的数字值</td>
<td>Number</td>
<td></td>
<td>99</td>
</tr>
<tr>
<td>dot</td>
<td>小红点，如需隐藏 dot ，需要设置count为 0</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>设置状态点的位置偏移，格式为 [x, y]</td>
<td>Array</td>
<td></td>
<td>[0,0]</td>
</tr>
<tr>
<td>color</td>
<td>背景颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>textColor</td>
<td>文字颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cha-cao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="3" data-href="#cha-cao">¶</a>插槽</h3>
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
<td>包裹的内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentBadge',
  components: { BadgeDemo1: {}, BadgeDemo2: {}, BadgeDemo3: {}, BadgeDemo4: {} }
}
</script>
<style lang="scss">

</style>