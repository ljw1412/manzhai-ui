<template>
  <div class="component-button">
    <div class="update-datetime">文档更新时间：2020-05-08 19:28</div>
    <h2 id="button-an-niu" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#button-an-niu" title="Button 按钮" data-level="2" data-href="#button-an-niu">¶</a>Button 按钮</h2>
<p>实现常用的按钮功能。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>基础按钮的用法。</p>
<demo-block>
        <template #example><button-demo1 inline-template><div class="button-demo1">
  <span class="demo-font-size-14">状态控制: </span>
  <mz-checkbox-group v-model="checkedList">
    <mz-checkbox v-for="option of options" 
      :value="option" :key="option">{{option}}</mz-checkbox>
  </mz-checkbox-group>
  <div>
    <mz-button v-for="item of buttonList" 
      :key="item.label"
      :color="item.color"
      :disabled="state.disabled" 
      :outlined="state.outlined"
      :flat="state.flat"
      :round="state.round">{{item.label}}</mz-button>
  </div>
  <div>
    <mz-button v-for="item of buttonList"
      :key="item.label"
      :color="item.color"
      :disabled="state.disabled" 
      :outlined="state.outlined"
      :flat="state.flat"
      :round="state.round"
      circle 
      icon>
      <mz-icon name="md-alarm"size="20px"></mz-icon>
    </mz-button>
  </div>
</div></button-demo1></template>
        <template #description><p>使用<code>color</code>、<code>outlined</code>、<code>flat</code>、<code>round</code>、<code>circle</code>、<code>icon</code>属性来定义 Button 的样式。你可以通过<code>disabled</code>属性来修改按钮的禁用状态。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;span class=&quot;demo-font-size-14&quot;&gt;状态控制: &lt;/span&gt;
&lt;mz-checkbox-group v-model=&quot;checkedList&quot;&gt;
  &lt;mz-checkbox v-for=&quot;option of options&quot; 
    :value=&quot;option&quot; :key=&quot;option&quot;&gt;{{option}}&lt;/mz-checkbox&gt;
&lt;/mz-checkbox-group&gt;
&lt;div&gt;
  &lt;mz-button v-for=&quot;item of buttonList&quot; 
    :key=&quot;item.label&quot;
    :color=&quot;item.color&quot;
    :disabled=&quot;state.disabled&quot; 
    :outlined=&quot;state.outlined&quot;
    :flat=&quot;state.flat&quot;
    :round=&quot;state.round&quot;&gt;{{item.label}}&lt;/mz-button&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;mz-button v-for=&quot;item of buttonList&quot;
    :key=&quot;item.label&quot;
    :color=&quot;item.color&quot;
    :disabled=&quot;state.disabled&quot; 
    :outlined=&quot;state.outlined&quot;
    :flat=&quot;state.flat&quot;
    :round=&quot;state.round&quot;
    circle 
    icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checkedList: [],
      options: ['disabled', 'outlined', 'flat', 'round'],
      buttonList: [
        { color:'', label:'默认按钮' },
        { color:'primary', label:'主要按钮' },
        { color:'success', label:'成功按钮' },
        { color:'warning', label:'警告按钮' },
        { color:'danger', label:'危险按钮' }
      ]
    }
  },

  computed: {
    state(){
      const state = {}
      this.options.forEach(key =&gt;{
        state[key] = this.checkedList.includes(key)
      })
      return state
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-chi-cun" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#an-niu-chi-cun" title="按钮尺寸" data-level="3" data-href="#an-niu-chi-cun">¶</a>按钮尺寸</h3>
<p>我们为按钮提供了4种大小尺寸，根据场景选择合适的按钮尺寸。</p>
<demo-block>
        <template #example><button-demo2 inline-template><div class="button-demo2">
  <div>
    <mz-button color="primary" size="large">默认按钮</mz-button>
    <mz-button color="primary">默认按钮</mz-button>
    <mz-button color="primary" size="medium">默认按钮</mz-button>
    <mz-button color="primary" size="small">默认按钮</mz-button>
  </div>
  
  <div>
    <mz-button color="primary" outlined size="large">线条按钮</mz-button>
    <mz-button color="primary" outlined>线条按钮</mz-button>
    <mz-button color="primary" outlined size="medium">线条按钮</mz-button>
    <mz-button color="primary" outlined size="small">线条按钮</mz-button>
  </div>
  
  <div>
    <mz-button color="primary" flat size="large">扁平按钮</mz-button>
    <mz-button color="primary" flat>扁平按钮</mz-button>
    <mz-button color="primary" flat size="medium">扁平按钮</mz-button>
    <mz-button color="primary" flat size="small">扁平按钮</mz-button>
  </div>
  
  <div>
    <mz-button color="primary" round size="large">圆角按钮</mz-button>
    <mz-button color="primary" round>圆角按钮</mz-button>
    <mz-button color="primary" round size="medium">圆角按钮</mz-button>
    <mz-button color="primary" round size="small">圆角按钮</mz-button>
  </div>
</div></button-demo2></template>
        <template #description><p>尺寸有<code>small</code>、<code>medium</code>、<code>(默认)</code>、<code>large</code>，通过设置size属性来配置它们。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;large&quot;&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;medium&quot;&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; size=&quot;small&quot;&gt;默认按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button color=&quot;primary&quot; outlined size=&quot;large&quot;&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; outlined&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; outlined size=&quot;medium&quot;&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; outlined size=&quot;small&quot;&gt;线条按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button color=&quot;primary&quot; flat size=&quot;large&quot;&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; flat&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; flat size=&quot;medium&quot;&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; flat size=&quot;small&quot;&gt;扁平按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button color=&quot;primary&quot; round size=&quot;large&quot;&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; round&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; round size=&quot;medium&quot;&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot; round size=&quot;small&quot;&gt;圆角按钮&lt;/mz-button&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="jin-cou-an-niu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jin-cou-an-niu" title="紧凑按钮" data-level="3" data-href="#jin-cou-an-niu">¶</a>紧凑按钮</h3>
<demo-block>
        <template #example><button-demo3 inline-template><div class="button-demo3">
  <mz-button color="primary" size="large">松</mz-button>
  <mz-button color="primary" size="large" dense>紧</mz-button>
  <mz-button color="primary">松</mz-button>
  <mz-button color="primary" dense>紧</mz-button>
  <mz-button color="primary" size="medium">松</mz-button>
  <mz-button color="primary" size="medium" dense>紧</mz-button>
  <mz-button color="primary" size="small">松</mz-button>
  <mz-button color="primary" size="small" dense>紧</mz-button>
</div></button-demo3></template>
        <template #description><p><code>dense</code>属性控制按钮内部文字到边距更近些。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;primary&quot; size=&quot;large&quot;&gt;松&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;large&quot; dense&gt;紧&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot;&gt;松&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; dense&gt;紧&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;medium&quot;&gt;松&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;medium&quot; dense&gt;紧&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;small&quot;&gt;松&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;small&quot; dense&gt;紧&lt;/mz-button&gt;
</code></pre></template></demo-block><h3 id="an-niu-yin-ying" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#an-niu-yin-ying" title="按钮阴影" data-level="3" data-href="#an-niu-yin-ying">¶</a>按钮阴影</h3>
<demo-block>
        <template #example><button-demo4 inline-template><div class="button-demo4">
  <mz-button color="primary" size="large" shadow>按钮阴影</mz-button>
  <mz-button color="primary" shadow>按钮阴影</mz-button>
  <mz-button color="primary" size="medium" shadow>按钮阴影</mz-button>
  <mz-button color="primary" size="small" shadow>按钮阴影</mz-button>
</div></button-demo4></template>
        <template #description><p><code>shadow</code>属性控制是否使用按钮阴影效果。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;primary&quot; size=&quot;large&quot; shadow&gt;按钮阴影&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; shadow&gt;按钮阴影&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;medium&quot; shadow&gt;按钮阴影&lt;/mz-button&gt;
&lt;mz-button color=&quot;primary&quot; size=&quot;small&quot; shadow&gt;按钮阴影&lt;/mz-button&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-yan-se" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-yan-se" title="自定义颜色" data-level="3" data-href="#zi-ding-yi-yan-se">¶</a>自定义颜色</h3>
<p>我们为按钮预设了4种主要颜色，用户也可以根据需求修改按钮颜色。</p>
<demo-block>
        <template #example><button-demo5 inline-template><div class="button-demo5">
  <div>
    <mz-button color="orange">按钮</mz-button>
    <mz-button text-color="blue">按钮</mz-button>
    <mz-button color="#00a1d6" text-color="#c6e48b">按钮</mz-button>
    <mz-button color="success" text-color="#fcba2a">按钮</mz-button>
    <mz-button outlined text-color="#fcba2a">按钮</mz-button>
    <mz-button outlined text-color="#fcba2a" border-color="blue">按钮</mz-button>
  </div>
</div></button-demo5></template>
        <template #description><p><code>color</code>属性控制背景颜色，预设了<code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code>。<code>text-color</code>属性控制文字颜色。<code>border-color</code>属性控制边框颜色(仅在outlined下有效)，默认会取文字颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button color=&quot;orange&quot;&gt;按钮&lt;/mz-button&gt;
  &lt;mz-button text-color=&quot;blue&quot;&gt;按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;#00a1d6&quot; text-color=&quot;#c6e48b&quot;&gt;按钮&lt;/mz-button&gt;
  &lt;mz-button color=&quot;success&quot; text-color=&quot;#fcba2a&quot;&gt;按钮&lt;/mz-button&gt;
  &lt;mz-button outlined text-color=&quot;#fcba2a&quot;&gt;按钮&lt;/mz-button&gt;
  &lt;mz-button outlined text-color=&quot;#fcba2a&quot; border-color=&quot;blue&quot;&gt;按钮&lt;/mz-button&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="an-niu-zu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#an-niu-zu" title="按钮组" data-level="3" data-href="#an-niu-zu">¶</a>按钮组</h3>
<p>以按钮组的方式出现，常用于多项类似操作。</p>
<demo-block>
        <template #example><button-demo6 inline-template><div class="button-demo6">
  <mz-button-group>
    <mz-button color="primary">按钮1</mz-button>
    <mz-button color="primary">按钮2</mz-button>
    <mz-button color="primary">按钮3</mz-button>
  </mz-button-group>
  <mz-button-group>
    <mz-button round color="primary">按钮1</mz-button>
    <mz-button round color="primary">按钮2</mz-button>
    <mz-button round color="primary">按钮3</mz-button>
  </mz-button-group>
  <mz-button-group>
    <mz-button outlined color="primary">按钮1</mz-button>
    <mz-button outlined color="primary">按钮2</mz-button>
    <mz-button outlined color="primary">按钮3</mz-button>
  </mz-button-group>
  <mz-button-group>
    <mz-button outlined round color="primary">按钮1</mz-button>
    <mz-button outlined round color="primary">按钮2</mz-button>
    <mz-button outlined round color="primary">按钮3</mz-button>
  </mz-button-group>
  <mz-button-group block>
    <mz-button color="primary">按钮1</mz-button>
    <mz-button color="primary">按钮2</mz-button>
    <mz-button color="primary">按钮3</mz-button>
  </mz-button-group>
</div></button-demo6></template>
        <template #description><p>使用<code>mz-button-group</code>组件将按钮归为一个组。注意：插槽内只允许传入<code>mz-button</code>组件。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button-group&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮1&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮2&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮3&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
&lt;mz-button-group&gt;
  &lt;mz-button round color=&quot;primary&quot;&gt;按钮1&lt;/mz-button&gt;
  &lt;mz-button round color=&quot;primary&quot;&gt;按钮2&lt;/mz-button&gt;
  &lt;mz-button round color=&quot;primary&quot;&gt;按钮3&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
&lt;mz-button-group&gt;
  &lt;mz-button outlined color=&quot;primary&quot;&gt;按钮1&lt;/mz-button&gt;
  &lt;mz-button outlined color=&quot;primary&quot;&gt;按钮2&lt;/mz-button&gt;
  &lt;mz-button outlined color=&quot;primary&quot;&gt;按钮3&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
&lt;mz-button-group&gt;
  &lt;mz-button outlined round color=&quot;primary&quot;&gt;按钮1&lt;/mz-button&gt;
  &lt;mz-button outlined round color=&quot;primary&quot;&gt;按钮2&lt;/mz-button&gt;
  &lt;mz-button outlined round color=&quot;primary&quot;&gt;按钮3&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
&lt;mz-button-group block&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮1&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮2&lt;/mz-button&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮3&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
</code></pre></template></demo-block><h3 id="button-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#button-api" title="Button API" data-level="3" data-href="#button-api">¶</a>Button API</h3>
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
<td>value</td>
<td>按钮文字内容，可以使用默认插槽代替</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>String</td>
<td>small / medium / large</td>
<td></td>
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
<td>dense</td>
<td>是否按钮文字紧凑</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>shadow</td>
<td>是否使用按钮阴影效果</td>
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
<td>color</td>
<td>背景颜色</td>
<td>String</td>
<td>primary / success / warning / danger / Color in Css</td>
<td></td>
</tr>
<tr>
<td>text-color</td>
<td>文字颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>border-color</td>
<td>边框颜色，不传默认使用文字颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>圆角大小</td>
<td>String</td>
<td></td>
<td>'4px'</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
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
<td>默认</td>
<td>按钮的内容</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="buttongroup-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#buttongroup-api" title="ButtonGroup API" data-level="3" data-href="#buttongroup-api">¶</a>ButtonGroup API</h3>
<h4 id="shu-xing-2" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2" title="属性" data-level="4" data-href="#shu-xing-2">¶</a>属性</h4>
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
<td>block</td>
<td>是否铺满</td>
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
  name: 'ComponentComponentButton',
  components: { ButtonDemo1: {
  data() {
    return {
      checkedList: [],
      options: ['disabled', 'outlined', 'flat', 'round'],
      buttonList: [
        { color:'', label:'默认按钮' },
        { color:'primary', label:'主要按钮' },
        { color:'success', label:'成功按钮' },
        { color:'warning', label:'警告按钮' },
        { color:'danger', label:'危险按钮' }
      ]
    }
  },

  computed: {
    state(){
      const state = {}
      this.options.forEach(key =>{
        state[key] = this.checkedList.includes(key)
      })
      return state
    }
  }
}, ButtonDemo2: {}, ButtonDemo3: {}, ButtonDemo4: {}, ButtonDemo5: {}, ButtonDemo6: {} }
}
</script>
<style lang="scss">

</style>