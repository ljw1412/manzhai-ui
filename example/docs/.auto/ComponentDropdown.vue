<template>
  <div class="component-dropdown">
    <div class="update-datetime">文档更新时间：2020-05-30 18:21</div>
    <h2 id="dropdown-xia-la-kuang" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#dropdown-xia-la-kuang" title="Dropdown 下拉框" data-level="2" data-href="#dropdown-xia-la-kuang">¶</a>Dropdown 下拉框</h2>
<p>点击元素，弹出下拉框。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>默认插槽为下拉框触发者，content插槽作为下拉框的内容。</p>
<p>此组件只会将下拉框与触发者进行绑定，最外层会包裹一层span标签。</p>
<demo-block>
        <template #example><dropdown-demo1 inline-template><div class="dropdown-demo1">
  <mz-dropdown>
    <span class="username">用户</span>
    <mz-list slot="content" style="width:120px;" size="small" clickable>
      <mz-list-item title="个人中心"></mz-list-item>
      <mz-list-item title="消息"></mz-list-item>
      <mz-list-item title="登出"></mz-list-item>
    </mz-list>
  </mz-dropdown>
</div></dropdown-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-dropdown&gt;
  &lt;span class=&quot;username&quot;&gt;用户&lt;/span&gt;
  &lt;mz-list slot=&quot;content&quot; style=&quot;width:120px;&quot; size=&quot;small&quot; clickable&gt;
    &lt;mz-list-item title=&quot;个人中心&quot;&gt;&lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;消息&quot;&gt;&lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;登出&quot;&gt;&lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-dropdown&gt;

&lt;style&gt;
.username {
  cursor: pointer;
  padding:2px 6px;
}

.username:hover {
  background-color: rgba(130, 130, 130, 0.3);
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
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
<td>visible/v-model</td>
<td>当前显示状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>位置</td>
<td>String</td>
<td>top / top-start / top-end / right / right-start / right-end / bottom / bottom-start / bottom-end / left / left-start / left-end / auto / auto-start / auto-end</td>
<td>'bottom'</td>
</tr>
<tr>
<td>animation</td>
<td>过渡动画的名称</td>
<td>String</td>
<td>shift-away / shift-away-subtle / shift-away-extreme / shift-toward / shift-toward-subtle / shift-toward-extreme / scale / scale-subtle / scale-extreme / perspective / perspective-subtle / perspective-extreme</td>
<td>'shift-away'</td>
</tr>
<tr>
<td>arrow</td>
<td>是否显示箭头或箭头的样式</td>
<td>Boolean / String / SVGElement</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>maxWidth</td>
<td>最大宽度</td>
<td>Number / String</td>
<td>'none'</td>
<td>'none'</td>
</tr>
<tr>
<td>offset</td>
<td>偏移</td>
<td>Array</td>
<td>[skidding, distance]</td>
<td>[0, 10]</td>
</tr>
<tr>
<td>appendTo</td>
<td>添加至父级</td>
<td>String / Element</td>
<td>'parent' / <code>(CSS selector)</code></td>
<td>document.body</td>
</tr>
<tr>
<td>theme</td>
<td>主题</td>
<td>String</td>
<td>reverse / same / light / light-border / material / translucent</td>
<td>'same'</td>
</tr>
<tr>
<td>zIndex</td>
<td>同原生层级</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>此组件插槽与事件与组件<a href="component-tooltip#cha-cao">Tooltip</a>一致</strong></p>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentDropdown',
  components: { DropdownDemo1: {} }
}
</script>
<style lang="scss">
.dropdown-demo1{  
  .username {
    cursor: pointer;
    padding:2px 6px;
  }
  
  .username:hover {
    background-color: rgba(130, 130, 130, 0.3);
  }
  }
</style>