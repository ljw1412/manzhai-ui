<template>
  <div class="component-button">
    <h2 id="button-an-niu"><a class="header-anchor" href="#button-an-niu">¶</a>Button 按钮</h2>
<p>实现常用的按钮功能。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<p>基础按钮的用法。</p>
<demo-block>
        <template #example><button-demo1 inline-template><div class="button-demo1">
  <div>
    <mz-button>默认按钮</mz-button>
    <mz-button type="primary">主要按钮</mz-button>
    <mz-button type="success">成功按钮</mz-button>
    <mz-button type="warning">警告按钮</mz-button>
    <mz-button type="danger">危险按钮</mz-button>
    <mz-button disabled>禁用按钮</mz-button>
  </div>
  
  <div>
    <mz-button outlined>线条按钮</mz-button>
    <mz-button type="primary" outlined>主要按钮</mz-button>
    <mz-button type="success" outlined>成功按钮</mz-button>
    <mz-button type="warning" outlined>警告按钮</mz-button>
    <mz-button type="danger" outlined>危险按钮</mz-button>
    <mz-button disabled outlined>禁用按钮</mz-button>
  </div>
  
  <div>
    <mz-button flat>扁平按钮</mz-button>
    <mz-button type="primary" flat>主要按钮</mz-button>
    <mz-button type="success" flat>成功按钮</mz-button>
    <mz-button type="warning" flat>警告按钮</mz-button>
    <mz-button type="danger" flat>危险按钮</mz-button>
    <mz-button disabled flat>禁用按钮</mz-button>
  </div>
  
  <div>
    <mz-button round>圆角按钮</mz-button>
    <mz-button type="primary" round>主要按钮</mz-button>
    <mz-button type="success" round>成功按钮</mz-button>
    <mz-button type="warning" round>警告按钮</mz-button>
    <mz-button type="danger" round>危险按钮</mz-button>
    <mz-button disabled round>禁用按钮</mz-button>
  </div>
  
  <div>
    <mz-button circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
    <mz-button type="primary" circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
    <mz-button type="success" circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
    <mz-button type="warning" circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
    <mz-button type="danger" circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
    <mz-button disabled circle icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
  </div>
</div></button-demo1></template>
        <template #description><p>使用<code>type</code>、<code>outlined</code>、<code>flat</code>、<code>round</code>、<code>circle</code>、<code>icon</code>属性来定义 Button 的样式。<br>你可以通过<code>disabled</code>属性来修改按钮的禁用状态。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot;&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot;&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot;&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot;&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button outlined&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; outlined&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; outlined&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; outlined&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; outlined&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled outlined&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button flat&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; flat&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; flat&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; flat&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; flat&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled flat&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button round&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; round&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; round&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; round&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; round&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled round&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button disabled circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      colorTypeList: ['', 'primary', 'success', 'warning', 'danger']
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-chi-cun"><a class="header-anchor" href="#an-niu-chi-cun">¶</a>按钮尺寸</h3>
<p>我们为按钮提供了3种大小尺寸，根据场景选择合适的按钮尺寸。</p>
<demo-block>
        <template #example><button-demo2 inline-template><div class="button-demo2">
  <div>
    <mz-button type="primary" size="large">默认按钮</mz-button>
    <mz-button type="primary">默认按钮</mz-button>
    <mz-button type="primary" size="small">默认按钮</mz-button>
  </div>
  
  <div>
    <mz-button type="primary" outlined size="large">线条按钮</mz-button>
    <mz-button type="primary" outlined>线条按钮</mz-button>
    <mz-button type="primary" outlined size="small">线条按钮</mz-button>
  </div>
  
  <div>
    <mz-button type="primary" flat size="large">扁平按钮</mz-button>
    <mz-button type="primary" flat>扁平按钮</mz-button>
    <mz-button type="primary" flat size="small">扁平按钮</mz-button>
  </div>
  
  <div>
    <mz-button type="primary" round size="large">圆角按钮</mz-button>
    <mz-button type="primary" round>圆角按钮</mz-button>
    <mz-button type="primary" round size="small">圆角按钮</mz-button>
  </div>
</div></button-demo2></template>
        <template #description><p>尺寸有<code>small</code>、<code>(默认)</code>、<code>large</code>，通过设置size属性来配置它们。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button type=&quot;primary&quot; size=&quot;large&quot;&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot;&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; size=&quot;small&quot;&gt;默认按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button type=&quot;primary&quot; outlined size=&quot;large&quot;&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; outlined&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; outlined size=&quot;small&quot;&gt;线条按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button type=&quot;primary&quot; flat size=&quot;large&quot;&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; flat&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; flat size=&quot;small&quot;&gt;扁平按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button type=&quot;primary&quot; round size=&quot;large&quot;&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; round&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; round size=&quot;small&quot;&gt;圆角按钮&lt;/mz-button&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="shu-xing"><a class="header-anchor" href="#shu-xing">¶</a>属性</h3>
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
<td>类型</td>
<td>String</td>
<td>primary / success / warning / danger</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>String</td>
<td>large / small</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>是否图标状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ripple</td>
<td>点击涟漪效果</td>
<td>Boolean / Object</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>circle</td>
<td>是否圆形按钮</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>outlined</td>
<td>是否线条按钮</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>flat</td>
<td>是否扁平按钮</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>是否圆角按钮</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>native-type</td>
<td>原生 type 属性</td>
<td>String</td>
<td>button / submit / reset</td>
<td>'button'</td>
</tr>
<tr>
<td>font-color</td>
<td>文字颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>背景颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>border-color</td>
<td>边框颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cha-cao"><a class="header-anchor" href="#cha-cao">¶</a>插槽</h3>
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
<td>按钮的内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
  export default {
    components: { ButtonDemo1: {
  data() {
    return {
      colorTypeList: ['', 'primary', 'success', 'warning', 'danger']
    }
  }
}, ButtonDemo2: {} }
  }
  </script>