<template>
  <div class="component-radio">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="radio-xuan-ze-kuang" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#radio-xuan-ze-kuang" title="Radio 选择框" data-level="2" data-href="#radio-xuan-ze-kuang">¶</a>Radio 选择框</h2>
<p>在一组选项中进行单选。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><radio-demo1 inline-template><div class="radio-demo1">
  <div class="demo-font-size-14">当前值：{{value}}</div>
  <mz-radio v-model="value"
    value="1">选项1</mz-radio>
  <mz-radio v-model="value"
    value="2">选项2</mz-radio>
  <mz-radio v-model="value"
    value="3" disabled>选项2</mz-radio>
</div></radio-demo1></template>
        <template #description><p><code>inputValue</code>/<code>v-model</code>为当前选中值。<code>disabled</code>来控制能否选中。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
&lt;mz-radio v-model=&quot;value&quot;
  value=&quot;1&quot;&gt;选项1&lt;/mz-radio&gt;
&lt;mz-radio v-model=&quot;value&quot;
  value=&quot;2&quot;&gt;选项2&lt;/mz-radio&gt;
&lt;mz-radio v-model=&quot;value&quot;
  value=&quot;3&quot; disabled&gt;选项2&lt;/mz-radio&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '3'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-xiang-fen-zu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xuan-xiang-fen-zu" title="选项分组" data-level="3" data-href="#xuan-xiang-fen-zu">¶</a>选项分组</h3>
<demo-block>
        <template #example><radio-demo2 inline-template><div class="radio-demo2">
  <mz-radio-group name="radio-group-1"
    v-model="value"
    :data="list"></mz-radio-group>
  <br>
  <mz-radio-group name="radio-group-2"
    v-model="value2">
    <mz-radio value="1">选项1</mz-radio>
    <mz-radio value="2">选项2</mz-radio>
    <mz-radio value="3">选项3</mz-radio>
  </mz-radio-group>
</div></radio-demo2></template>
        <template #description><p>radioGroup 的 <code>value</code>/<code>v-model</code> 来控制当前选中的选项值。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-radio-group name=&quot;radio-group-1&quot;
  v-model=&quot;value&quot;
  :data=&quot;list&quot;&gt;&lt;/mz-radio-group&gt;
&lt;br&gt;
&lt;mz-radio-group name=&quot;radio-group-2&quot;
  v-model=&quot;value2&quot;&gt;
  &lt;mz-radio value=&quot;1&quot;&gt;选项1&lt;/mz-radio&gt;
  &lt;mz-radio value=&quot;2&quot;&gt;选项2&lt;/mz-radio&gt;
  &lt;mz-radio value=&quot;3&quot;&gt;选项3&lt;/mz-radio&gt;
&lt;/mz-radio-group&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bian-kuang-xuan-xiang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bian-kuang-xuan-xiang" title="边框选项" data-level="3" data-href="#bian-kuang-xuan-xiang">¶</a>边框选项</h3>
<demo-block>
        <template #example><radio-demo3 inline-template><div class="radio-demo3">
  <mz-radio-group name="radio-group-3"
    v-model="value"
    border
    :data="list"></mz-radio-group>
  <br>
  <mz-radio-group name="radio-group-4"
    v-model="value2"
    :data="list"></mz-radio-group>
  <br>
  <mz-radio-group name="radio-group-5"
    v-model="value3">
    <mz-radio border value="1">选项1</mz-radio>
    <mz-radio border value="2">选项2</mz-radio>
    <mz-radio value="3">选项3</mz-radio>
  </mz-radio-group>
</div></radio-demo3></template>
        <template #description><p>radioGroup的<code>border</code>或radio的<code>border</code>属性来控制以边框模式显示,也可以通过radioGroup的<code>data</code>属性数组中的对象进行单个控制，但radioGroup的<code>border</code>优先级更高。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-radio-group name=&quot;radio-group-3&quot;
  v-model=&quot;value&quot;
  border
  :data=&quot;list&quot;&gt;&lt;/mz-radio-group&gt;
&lt;br&gt;
&lt;mz-radio-group name=&quot;radio-group-4&quot;
  v-model=&quot;value2&quot;
  :data=&quot;list&quot;&gt;&lt;/mz-radio-group&gt;
&lt;br&gt;
&lt;mz-radio-group name=&quot;radio-group-5&quot;
  v-model=&quot;value3&quot;&gt;
  &lt;mz-radio border value=&quot;1&quot;&gt;选项1&lt;/mz-radio&gt;
  &lt;mz-radio border value=&quot;2&quot;&gt;选项2&lt;/mz-radio&gt;
  &lt;mz-radio value=&quot;3&quot;&gt;选项3&lt;/mz-radio&gt;
&lt;/mz-radio-group&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1', border:true },
        { value: '2', label: '选项2', border: true },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1',
      value3: '1'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-xuan-xiang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#an-niu-xuan-xiang" title="按钮选项" data-level="3" data-href="#an-niu-xuan-xiang">¶</a>按钮选项</h3>
<demo-block>
        <template #example><radio-demo4 inline-template><div class="radio-demo4">
  <div>
    <mz-radio-group name="radio-group-7"
      v-model="value2"
      :data="list"
      button></mz-radio-group>
  </div>
  <br/>
  <div>
    <mz-radio-group name="radio-group-6"
      v-model="value">
      <mz-radio-button value="1"
        border>选项1</mz-radio-button>
      <mz-radio-button value="2"
        border>选项2</mz-radio-button>
      <mz-radio-button value="3"
        border
        disabled>选项3</mz-radio-button>
    </mz-radio-group>
  </div>
</div></radio-demo4></template>
        <template #description><p><code>button</code>属性控制选项以按钮形式显示。<code>border</code>属性控制按钮是否显示边框。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-radio-group name=&quot;radio-group-7&quot;
    v-model=&quot;value2&quot;
    :data=&quot;list&quot;
    button&gt;&lt;/mz-radio-group&gt;
&lt;/div&gt;
&lt;br/&gt;
&lt;div&gt;
  &lt;mz-radio-group name=&quot;radio-group-6&quot;
    v-model=&quot;value&quot;&gt;
    &lt;mz-radio-button value=&quot;1&quot;
      border&gt;选项1&lt;/mz-radio-button&gt;
    &lt;mz-radio-button value=&quot;2&quot;
      border&gt;选项2&lt;/mz-radio-button&gt;
    &lt;mz-radio-button value=&quot;3&quot;
      border
      disabled&gt;选项3&lt;/mz-radio-button&gt;
  &lt;/mz-radio-group&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true}
      ],
      value: '1',
      value2: '1'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="radio-radiobutton-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#radio-radiobutton-api" title="Radio&amp;RadioButton API" data-level="3" data-href="#radio-radiobutton-api">¶</a>Radio&amp;RadioButton API</h3>
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
<td>inputValue/v-model</td>
<td>绑定值</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>选项值</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>选择项标签</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>同原生input的name属性</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>border</td>
<td>是否有边框</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ripple</td>
<td>点击涟漪效果</td>
<td>Boolean / Object</td>
<td></td>
<td>{ value: true, center: true }</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
<td>选择项标签，类似label属性</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="radiogroup-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#radiogroup-api" title="RadioGroup API" data-level="3" data-href="#radiogroup-api">¶</a>RadioGroup API</h3>
<h4 id="shu-xing-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2" title="属性" data-level="4" data-href="#shu-xing-2">¶</a>属性</h4>
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
<td>value/v-model</td>
<td>绑定值</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>同原生input的name属性</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>选项数组，但插槽优先级更高</td>
<td><code>Array&lt;MzRadio&gt;</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>button</td>
<td>是否为按钮</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>border</td>
<td>是否有边框</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>block</td>
<td>是否为块级元素</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#cha-cao-2" title="插槽" data-level="4" data-href="#cha-cao-2">¶</a>插槽</h4>
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
<td>选项组的内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentRadio',
  components: { RadioDemo1: {
  data() {
    return {
      value: '3'
    }
  }
}, RadioDemo2: {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1'
    }
  }
}, RadioDemo3: {
  data() {
    return {
      list: [
        { value: '1', label: '选项1', border:true },
        { value: '2', label: '选项2', border: true },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1',
      value3: '1'
    }
  }
}, RadioDemo4: {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true}
      ],
      value: '1',
      value2: '1'
    }
  }
} }
}
</script>
<style lang="scss">

</style>