<template>
  <div class="component-filter-section">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="filtersection-shai-xuan-xiang" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#filtersection-shai-xuan-xiang" title="FilterSection 筛选项" data-level="2" data-href="#filtersection-shai-xuan-xiang">¶</a>FilterSection 筛选项</h2>
<p>用于筛选条件的选择。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><filter-section-demo1 inline-template><div class="filter-section-demo1">
  <div class="demo-font-size-14">当前值：{{ value }}</div>
  <mz-filter-section v-model="value" label="产地：">
    <mz-filter-section-item v-for="country of countries"
      :key="country.value"
      :value="country.value">{{ country.label }}</mz-filter-section-item>
  </mz-filter-section>
</div></filter-section-demo1></template>
        <template #description><p><code>label</code>用来描述选择项的类型标签。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{ value }}&lt;/div&gt;
&lt;mz-filter-section v-model=&quot;value&quot; label=&quot;产地：&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;country of countries&quot;
    :key=&quot;country.value&quot;
    :value=&quot;country.value&quot;&gt;{{ country.label }}&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 'All',
      countries: [
        { label: '全部', value: 'All' },
        { label: '中国', value: 'China' },
        { label: '日本', value: 'Janpan' },
        { label: '新加坡', value: 'Singapore' },
        { label: '美国', value: 'America' },
        { label: '英国', value: 'England' },
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xian-tiao-xiao-guo" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xian-tiao-xiao-guo" title="线条效果" data-level="3" data-href="#xian-tiao-xiao-guo">¶</a>线条效果</h3>
<demo-block>
        <template #example><filter-section-demo2 inline-template><div class="filter-section-demo2">
  <div class="demo-font-size-14">当前值：{{value}}</div>
  <mz-filter-section v-model="value" label="漫画类型" outlined>
    <mz-filter-section-item v-for="type of typeList"
      :key="type"
      :value="type"
      :label="type"></mz-filter-section-item>
  </mz-filter-section>
</div></filter-section-demo2></template>
        <template #description><p><code>outlined</code>用来控制是否以边框模式显示选中的效果。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
&lt;mz-filter-section v-model=&quot;value&quot; label=&quot;漫画类型&quot; outlined&gt;
  &lt;mz-filter-section-item v-for=&quot;type of typeList&quot;
    :key=&quot;type&quot;
    :value=&quot;type&quot;
    :label=&quot;type&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '全部',
      typeList: [&quot;全部&quot;, &quot;爆笑&quot;, &quot;热血&quot;, &quot;冒险&quot;, &quot;科幻&quot;, &quot;魔幻&quot;, &quot;玄幻&quot;, &quot;校园&quot;, &quot;推理&quot;, &quot;萌系&quot;, &quot;穿越&quot;, &quot;后宫&quot;, &quot;都市&quot;, &quot;恋爱&quot;, &quot;武侠&quot;, &quot;格斗&quot;, &quot;战争&quot;, &quot;历史&quot;, &quot;同人&quot;, &quot;竞技&quot;, &quot;励志&quot;, &quot;治愈&quot;, &quot;机甲&quot;, &quot;纯爱&quot;, &quot;美食&quot;, &quot;血腥&quot;, &quot;僵尸&quot;, &quot;恶搞&quot;, &quot;虐心&quot;, &quot;生活&quot;, &quot;动作&quot;, &quot;惊险&quot;, &quot;唯美&quot;, &quot;震撼&quot;, &quot;复仇&quot;, &quot;侦探&quot;, &quot;其它&quot;, &quot;脑洞&quot;, &quot;奇幻&quot;, &quot;宫斗&quot;, &quot;运动&quot;, &quot;青春&quot;, &quot;灵异&quot;, &quot;古风&quot;, &quot;权谋&quot;, &quot;节操&quot;, &quot;明星&quot;, &quot;暗黑&quot;, &quot;社会&quot;, &quot;浪漫&quot;, &quot;栏目&quot;]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dui-qi-fang-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dui-qi-fang-shi" title="对齐方式" data-level="3" data-href="#dui-qi-fang-shi">¶</a>对齐方式</h3>
<p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
<demo-block>
        <template #example><filter-section-demo3 inline-template><div class="filter-section-demo3">
  <div style="margin-bottom:10px">
    <span>标签位置：</span>
    <mz-radio-group v-model="position" name="position">
      <mz-radio-button value="top" border>top</mz-radio-button>
      <mz-radio-button value="left" border>left</mz-radio-button>
      <mz-radio-button value="right" border>right</mz-radio-button>
    </mz-radio-group>
  </div>
  <mz-filter-section v-model="value" 
    label="上线月份" :label-position="position" label-width="100px">
    <mz-filter-section-item 
      v-for="i of 12" :key="i" :value="i">{{i}}月</mz-filter-section-item>
  </mz-filter-section>
</div></filter-section-demo3></template>
        <template #description><p><code>label-position</code>用来控制选择项的标签的位置，可选值为<code>top</code>、<code>left</code>、<code>right</code>。属性值<code>label-width</code>控制标签的宽度。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div style=&quot;margin-bottom:10px&quot;&gt;
  &lt;span&gt;标签位置：&lt;/span&gt;
  &lt;mz-radio-group v-model=&quot;position&quot; name=&quot;position&quot;&gt;
    &lt;mz-radio-button value=&quot;top&quot; border&gt;top&lt;/mz-radio-button&gt;
    &lt;mz-radio-button value=&quot;left&quot; border&gt;left&lt;/mz-radio-button&gt;
    &lt;mz-radio-button value=&quot;right&quot; border&gt;right&lt;/mz-radio-button&gt;
  &lt;/mz-radio-group&gt;
&lt;/div&gt;
&lt;mz-filter-section v-model=&quot;value&quot; 
  label=&quot;上线月份&quot; :label-position=&quot;position&quot; label-width=&quot;100px&quot;&gt;
  &lt;mz-filter-section-item 
    v-for=&quot;i of 12&quot; :key=&quot;i&quot; :value=&quot;i&quot;&gt;{{i}}月&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      position: 'top' 
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-xuan-mo-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#duo-xuan-mo-shi" title="多选模式" data-level="3" data-href="#duo-xuan-mo-shi">¶</a>多选模式</h3>
<p>可以选择多个选择项。</p>
<demo-block>
        <template #example><filter-section-demo4 inline-template><div class="filter-section-demo4">
  <div class="demo-font-size-14">当前值：{{value}}</div>
  <mz-filter-section v-model="value" label="类型1：" multiple>
    <mz-filter-section-item v-for="i of 10"
      :key="i"
      :value="i">选项{{i}}</mz-filter-section-item>
  </mz-filter-section>
</div></filter-section-demo4></template>
        <template #description><p><code>multiple</code>用来控制是不是多选。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
&lt;mz-filter-section v-model=&quot;value&quot; label=&quot;类型1：&quot; multiple&gt;
  &lt;mz-filter-section-item v-for=&quot;i of 10&quot;
    :key=&quot;i&quot;
    :value=&quot;i&quot;&gt;选项{{i}}&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return { value: [] }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shai-xuan-xiang-zu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#shai-xuan-xiang-zu" title="筛选项组" data-level="3" data-href="#shai-xuan-xiang-zu">¶</a>筛选项组</h3>
<p>有多个筛选项组成的选项组，由父级进行结果管理。</p>
<demo-block>
        <template #example><filter-section-demo5 inline-template><div class="filter-section-demo5">
  <div class="demo-font-size-14">当前值：{{groupValue}}</div>
  <mz-filter-section-group v-model="groupValue">
    <mz-filter-section name="type1"
      label="类型1(name=type1)：">
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>
    <mz-filter-section label="类型2(name=type2)："
      name="type2"
      multiple>
      <mz-filter-section-item v-for="i of 10"
        :key="i"
        :value="i">选项{{i}}</mz-filter-section-item>
    </mz-filter-section>
  </mz-filter-section-group>
</div></filter-section-demo5></template>
        <template #description><p>filterSection的<code>name</code>属性是该选项组的中筛选项的唯一标识。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{groupValue}}&lt;/div&gt;
&lt;mz-filter-section-group v-model=&quot;groupValue&quot;&gt;
  &lt;mz-filter-section name=&quot;type1&quot;
    label=&quot;类型1(name=type1)：&quot;&gt;
    &lt;mz-filter-section-item v-for=&quot;i of 10&quot;
      :key=&quot;i&quot;
      :value=&quot;i&quot;&gt;选项{{i}}&lt;/mz-filter-section-item&gt;
  &lt;/mz-filter-section&gt;
  &lt;mz-filter-section label=&quot;类型2(name=type2)：&quot;
    name=&quot;type2&quot;
    multiple&gt;
    &lt;mz-filter-section-item v-for=&quot;i of 10&quot;
      :key=&quot;i&quot;
      :value=&quot;i&quot;&gt;选项{{i}}&lt;/mz-filter-section-item&gt;
  &lt;/mz-filter-section&gt;
&lt;/mz-filter-section-group&gt;

&lt;script&gt;
export default {
  data() {
    return { groupValue: null }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-xuan-zhong-xiao-guo" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-xuan-zhong-xiao-guo" title="自定义选中效果" data-level="3" data-href="#zi-ding-yi-xuan-zhong-xiao-guo">¶</a>自定义选中效果</h3>
<demo-block>
        <template #example><filter-section-demo6 inline-template><div class="filter-section-demo6">
  <div class="demo-font-size-14">当前值：{{value}}</div>
  <mz-filter-section v-model="value" label="类型1：" custom>
    <mz-filter-section-item custom
      v-for="i of 10" :key="i" :value="i">
      <div slot-scope="{ checked }"
        :class="{'is-item-checked':checked}">选项{{i}}</div>
    </mz-filter-section-item>
  </mz-filter-section>
</div></filter-section-demo6></template>
        <template #description><p>filterSectionItem 的<code>custom</code>属性如果是true，可以关闭默认的选中效果。通过<code>slot-scope</code>可以获得当前选择项的选中状态情况。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
&lt;mz-filter-section v-model=&quot;value&quot; label=&quot;类型1：&quot; custom&gt;
  &lt;mz-filter-section-item custom
    v-for=&quot;i of 10&quot; :key=&quot;i&quot; :value=&quot;i&quot;&gt;
    &lt;div slot-scope=&quot;{ checked }&quot;
      :class=&quot;{'is-item-checked':checked}&quot;&gt;选项{{i}}&lt;/div&gt;
  &lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return { value: 1 }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.is-item-checked{
  position: relative;
  &amp;::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: green;
  }
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="filtersection-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#filtersection-api" title="FilterSection API" data-level="3" data-href="#filtersection-api">¶</a>FilterSection API</h3>
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
<td>value/v-model</td>
<td>绑定值</td>
<td>String</td>
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
<td>label-position</td>
<td>标签位置</td>
<td>String</td>
<td>top/left/right</td>
<td>'top'</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>outlined</td>
<td>是否边框模式</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>是否多选</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>(在group下必填)选择项的名称(唯一)</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
<td>change</td>
<td>选择项选中状态变化</td>
<td>(value: any)</td>
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
<td>-</td>
<td>选择项的列表容器</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>选择项的标签插槽</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="filtersectionitem-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#filtersectionitem-api" title="FilterSectionItem API" data-level="3" data-href="#filtersectionitem-api">¶</a>FilterSectionItem API</h3>
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
<td>value</td>
<td>(必填)选项的值</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>选项显示的标签</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>label-style</td>
<td>标签的样式</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>outlined</td>
<td>是否边框模式</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>custom</td>
<td>是否自定义选中</td>
<td>Boolean</td>
<td></td>
<td></td>
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
<h4 id="shi-jian-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian-2" title="事件" data-level="4" data-href="#shi-jian-2">¶</a>事件</h4>
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
<td>change</td>
<td>选择项选中状态变化</td>
<td>(checked: boolean)</td>
</tr>
</tbody>
</table>
<h4 id="zuo-yong-yu-cha-cao" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#zuo-yong-yu-cha-cao" title="作用域插槽" data-level="4" data-href="#zuo-yong-yu-cha-cao">¶</a>作用域插槽</h4>
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
<td>选择项的标签</td>
<td>{ checked }</td>
</tr>
</tbody>
</table>
<h3 id="filtersectiongroup-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#filtersectiongroup-api" title="FilterSectionGroup API" data-level="3" data-href="#filtersectiongroup-api">¶</a>FilterSectionGroup API</h3>
<h4 id="shu-xing-3" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing-3" title="属性" data-level="4" data-href="#shu-xing-3">¶</a>属性</h4>
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
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>auto-fix-value</td>
<td>是否自动修复值</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian-3" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian-3" title="事件" data-level="4" data-href="#shi-jian-3">¶</a>事件</h4>
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
<td>change</td>
<td>选择项组选中状态变化</td>
<td>(checked: { [name]: value })</td>
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
<td>-</td>
<td>选项组的列表容器</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentFilterSection',
  components: { FilterSectionDemo1: {
  data() {
    return {
      value: 'All',
      countries: [
        { label: '全部', value: 'All' },
        { label: '中国', value: 'China' },
        { label: '日本', value: 'Janpan' },
        { label: '新加坡', value: 'Singapore' },
        { label: '美国', value: 'America' },
        { label: '英国', value: 'England' },
      ]
    }
  }
}, FilterSectionDemo2: {
  data() {
    return {
      value: '全部',
      typeList: ["全部", "爆笑", "热血", "冒险", "科幻", "魔幻", "玄幻", "校园", "推理", "萌系", "穿越", "后宫", "都市", "恋爱", "武侠", "格斗", "战争", "历史", "同人", "竞技", "励志", "治愈", "机甲", "纯爱", "美食", "血腥", "僵尸", "恶搞", "虐心", "生活", "动作", "惊险", "唯美", "震撼", "复仇", "侦探", "其它", "脑洞", "奇幻", "宫斗", "运动", "青春", "灵异", "古风", "权谋", "节操", "明星", "暗黑", "社会", "浪漫", "栏目"]
    }
  }
}, FilterSectionDemo3: {
  data() {
    return {
      value: '',
      position: 'top' 
    }
  }
}, FilterSectionDemo4: {
  data() {
    return { value: [] }
  }
}, FilterSectionDemo5: {
  data() {
    return { groupValue: null }
  }
}, FilterSectionDemo6: {
  data() {
    return { value: 1 }
  }
} }
}
</script>
<style lang="scss">
.filter-section-demo6{  
  .is-item-checked{
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: green;
    }
  }
  }
</style>