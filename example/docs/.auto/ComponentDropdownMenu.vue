<template>
  <div class="component-dropdown-menu">
    <div class="update-datetime">文档更新时间：2020-07-07 11:29</div>
    <h2 id="dropdownmenu-xia-la-cai-dan" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#dropdownmenu-xia-la-cai-dan" title="DropdownMenu 下拉菜单" data-level="2" data-href="#dropdownmenu-xia-la-cai-dan">¶</a>DropdownMenu 下拉菜单</h2>
<p>可做一些操作的下拉框。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><dropdown-menu-demo1 inline-template><div class="dropdown-menu-demo1">
  <mz-dropdown-menu :data="list">
    <mz-button>下拉菜单</mz-button>
  </mz-dropdown-menu>
</div></dropdown-menu-demo1></template>
        <template #description><p><code>data</code>属性控制显示的选项数组。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-dropdown-menu :data=&quot;list&quot;&gt;
  &lt;mz-button&gt;下拉菜单&lt;/mz-button&gt;
&lt;/mz-dropdown-menu&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-tu-biao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dai-tu-biao" title="带图标" data-level="3" data-href="#dai-tu-biao">¶</a>带图标</h3>
<demo-block>
        <template #example><dropdown-menu-demo2 inline-template><div class="dropdown-menu-demo2">
  <mz-dropdown-menu :data="list">
    <mz-button>下拉菜单</mz-button>
  </mz-dropdown-menu>
</div></dropdown-menu-demo2></template>
        <template #description><p><code>data</code>属性控制显示的选项数组。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-dropdown-menu :data=&quot;list&quot;&gt;
  &lt;mz-button&gt;下拉菜单&lt;/mz-button&gt;
&lt;/mz-dropdown-menu&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-cai-dan-yuan-su" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-cai-dan-yuan-su" title="自定义菜单元素" data-level="3" data-href="#zi-ding-yi-cai-dan-yuan-su">¶</a>自定义菜单元素</h3>
<demo-block>
        <template #example><dropdown-menu-demo3 inline-template><div class="dropdown-menu-demo3">
  <mz-dropdown-menu :data="list">
    <mz-button>下拉菜单</mz-button>
    <template #item="{item, index}">
      <div style="padding:10px">
        {{index}}. {{item.title}}
      </div>
    </template>
  </mz-dropdown-menu>
</div></dropdown-menu-demo3></template>
        <template #description><p>使用作用域插槽<code>item</code>，进行自定义布局。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-dropdown-menu :data=&quot;list&quot;&gt;
  &lt;mz-button&gt;下拉菜单&lt;/mz-button&gt;
  &lt;template #item=&quot;{item, index}&quot;&gt;
    &lt;div style=&quot;padding:10px&quot;&gt;
      {{index}}. {{item.title}}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/mz-dropdown-menu&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xing-wei-shi-jian" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xing-wei-shi-jian" title="行为事件" data-level="3" data-href="#xing-wei-shi-jian">¶</a>行为事件</h3>
<demo-block>
        <template #example><dropdown-menu-demo4 inline-template><div class="dropdown-menu-demo4">
  <mz-dropdown-menu :data="list" 
    @action="action" @select="select">
    <mz-button color="primary">下拉菜单</mz-button>
  </mz-dropdown-menu>
  <div class="demo-font-size-14">有效行为(action)：{{actionItem}}</div>
  <div class="demo-font-size-14">点击选择(select)：{{selectItem}}</div>
</div></dropdown-menu-demo4></template>
        <template #description><p><code>action</code>事件仅在点击菜单元素没有被禁用的时候传出。<code>select</code>事件在点击菜单的时候传出。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-dropdown-menu :data=&quot;list&quot; 
  @action=&quot;action&quot; @select=&quot;select&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;下拉菜单&lt;/mz-button&gt;
&lt;/mz-dropdown-menu&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;有效行为(action)：{{actionItem}}&lt;/div&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;点击选择(select)：{{selectItem}}&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' },
      ],
      selectItem:'',
      actionItem:'',
    }
  },

  methods: {
    action(value, item) {
      this.actionItem = item
    },
    select(value, item) {
      this.selectItem = item
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
<p>该组件属性与<a href="component-dropdown#shu-xing">Dropdown</a>一致，此外还有以下属性:</p>
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
<td>list</td>
<td>菜单列表</td>
<td>MenuItem</td>
<td></td>
<td>[]</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>String</td>
<td>small / medium / large</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>MenuItem</strong></p>
<ul class="mz-document-ul">
<li>value &lt;String&gt; 行为值</li>
<li>title &lt;String&gt; 标题</li>
<li>text &lt;String&gt; 文本</li>
<li>class &lt;Any&gt; 自定义class</li>
<li>disabled &lt;Boolean&gt; 是否禁用</li>
<li>prefixIcon &lt;String&gt; 前缀图标</li>
<li>suffixIcon &lt;String&gt; 后缀图标</li>
</ul>
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
<td>action</td>
<td>行为事件</td>
<td>(value:any, item:MenuItem)</td>
</tr>
<tr>
<td>select</td>
<td>选择事件</td>
<td>(value:any, item:MenuItem, disabled:boolean)</td>
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
<td>下拉菜单引用对象</td>
<td></td>
</tr>
<tr>
<td>header</td>
<td>下拉框内容的顶部</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>下拉框内容的尾部</td>
<td></td>
</tr>
<tr>
<td>item</td>
<td>下拉菜单的元素</td>
<td>{item:MenuItem, index:number}</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentDropdownMenu',
  components: { DropdownMenuDemo1: {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' }
      ]
    }
  }
}, DropdownMenuDemo2: {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}, DropdownMenuDemo3: {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}, DropdownMenuDemo4: {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' },
      ],
      selectItem:'',
      actionItem:'',
    }
  },

  methods: {
    action(value, item) {
      this.actionItem = item
    },
    select(value, item) {
      this.selectItem = item
    }
  }
} }
}
</script>
<style lang="scss">

</style>