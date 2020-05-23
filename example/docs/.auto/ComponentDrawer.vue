<template>
  <div class="component-drawer">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="drawer-chou-ti" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#drawer-chou-ti" title="Drawer 抽屉" data-level="2" data-href="#drawer-chou-ti">¶</a>Drawer 抽屉</h2>
<p>屏幕边缘滑出的浮层面板。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><drawer-demo1 inline-template><div class="drawer-demo1">
  <mz-filter-section v-model="placement"
    label="抽屉弹出位置：" label-position="right">
    <mz-filter-section-item v-for="item of placementList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
  
  <mz-button color="success"
    @click="visible = true">显示抽屉</mz-button>
  
  <mz-drawer v-model="visible"
    title="抽屉！！！"
    :placement="placement"></mz-drawer>
</div></drawer-demo1></template>
        <template #description><p><code>placement</code>可以控制抽屉弹出的位置。可选值<code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。默认值<code>right</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-filter-section v-model=&quot;placement&quot;
  label=&quot;抽屉弹出位置：&quot; label-position=&quot;right&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of placementList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示抽屉&lt;/mz-button&gt;

&lt;mz-drawer v-model=&quot;visible&quot;
  title=&quot;抽屉！！！&quot;
  :placement=&quot;placement&quot;&gt;&lt;/mz-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-cha-cao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bu-tong-cha-cao" title="不同插槽" data-level="3" data-href="#bu-tong-cha-cao">¶</a>不同插槽</h3>
<p>使用不同的插槽组合抽屉有不同样式处理。</p>
<demo-block>
        <template #example><drawer-demo2 inline-template><div class="drawer-demo2">
  <span class="demo-font-size-14">显示的插槽：</span>
  <mz-checkbox-group v-model="displayList"
    class="d-inline-block"
    style="margin:0 10px;">
    <mz-checkbox value="header">头部</mz-checkbox>
    <mz-checkbox value="content">内容</mz-checkbox>
    <mz-checkbox value="footer">底部</mz-checkbox>
  </mz-checkbox-group>
  
  <mz-button color="success"
    @click="visible = true">显示抽屉</mz-button>
  
  <mz-drawer v-model="visible"
    :placement="placement">
    <span v-if="isDisplay('header')" slot="title">标题</span>
    <span v-if="isDisplay('content')">内容</span>
    <mz-button-group v-if="isDisplay('footer')" slot="footer" block>
      <mz-button color="danger">删除</mz-button>
      <mz-button color="success"
        @click="visible = false">关闭</mz-button>
    </mz-button-group>
  </mz-drawer>
</div></drawer-demo2></template>
        <template #description><p>布局插槽主要有三个，分别为<code>title</code>、<code>默认</code>、<code>footer</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;span class=&quot;demo-font-size-14&quot;&gt;显示的插槽：&lt;/span&gt;
&lt;mz-checkbox-group v-model=&quot;displayList&quot;
  class=&quot;d-inline-block&quot;
  style=&quot;margin:0 10px;&quot;&gt;
  &lt;mz-checkbox value=&quot;header&quot;&gt;头部&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;content&quot;&gt;内容&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;footer&quot;&gt;底部&lt;/mz-checkbox&gt;
&lt;/mz-checkbox-group&gt;

&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示抽屉&lt;/mz-button&gt;

&lt;mz-drawer v-model=&quot;visible&quot;
  :placement=&quot;placement&quot;&gt;
  &lt;span v-if=&quot;isDisplay('header')&quot; slot=&quot;title&quot;&gt;标题&lt;/span&gt;
  &lt;span v-if=&quot;isDisplay('content')&quot;&gt;内容&lt;/span&gt;
  &lt;mz-button-group v-if=&quot;isDisplay('footer')&quot; slot=&quot;footer&quot; block&gt;
    &lt;mz-button color=&quot;danger&quot;&gt;删除&lt;/mz-button&gt;
    &lt;mz-button color=&quot;success&quot;
      @click=&quot;visible = false&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/mz-button-group&gt;
&lt;/mz-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      displayList: ['header', 'content', 'footer']
    }
  },

  methods:{
    isDisplay(name){
      return this.displayList.includes(name)
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-fen-ge-xian" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dai-fen-ge-xian" title="带分割线" data-level="3" data-href="#dai-fen-ge-xian">¶</a>带分割线</h3>
<demo-block>
        <template #example><drawer-demo3 inline-template><div class="drawer-demo3">
  <mz-button color="success"
    @click="visible = true">显示抽屉</mz-button>
  
  <mz-drawer v-model="visible"
    divider
    :placement="placement">
    <span slot="title">标题</span>
    <span>内容</span>
    <mz-button-group slot="footer" block>
      <mz-button color="danger">删除</mz-button>
      <mz-button color="success"
        @click="visible = false">关闭</mz-button>
    </mz-button-group>
  </mz-drawer>
</div></drawer-demo3></template>
        <template #description><p><code>divider</code>可以控制抽屉是否带有分割线。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示抽屉&lt;/mz-button&gt;

&lt;mz-drawer v-model=&quot;visible&quot;
  divider
  :placement=&quot;placement&quot;&gt;
  &lt;span slot=&quot;title&quot;&gt;标题&lt;/span&gt;
  &lt;span&gt;内容&lt;/span&gt;
  &lt;mz-button-group slot=&quot;footer&quot; block&gt;
    &lt;mz-button color=&quot;danger&quot;&gt;删除&lt;/mz-button&gt;
    &lt;mz-button color=&quot;success&quot;
      @click=&quot;visible = false&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/mz-button-group&gt;
&lt;/mz-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false
    }
  }
}
&lt;/script&gt;
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
<td>visible/v-modal</td>
<td>是否显示</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>弹出的位置</td>
<td>String</td>
<td>'top' / 'right' / 'bottom' / 'left'</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>String</td>
<td></td>
<td>'512px'</td>
</tr>
<tr>
<td>height</td>
<td>高度，仅placement为'top','bottom'时有效。</td>
<td>String</td>
<td></td>
<td>'512px'</td>
</tr>
<tr>
<td>headerStyle</td>
<td>抽屉头部样式</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>contentStyle</td>
<td>抽屉内容样式</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>footerStyle</td>
<td>抽屉底部样式</td>
<td>any</td>
<td></td>
<td></td>
</tr>
<tr>
<td>elevation</td>
<td>阴影深度</td>
<td>Number</td>
<td></td>
<td>15</td>
</tr>
<tr>
<td>zIndex</td>
<td>层级</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>抽屉的圆角大小，与css写法一致</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>divider</td>
<td>是否有分割线</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>append-to-body</td>
<td>是否将对话框插入至 body 元素上</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showClose</td>
<td>是否关闭按钮</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>mask-append-to-body</td>
<td>是否将遮罩插入至 body元素上</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>close-on-click-mask</td>
<td>是否可以通过点击遮罩关闭抽屉</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>是否可通过按下 ESC 键关闭抽屉</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调</td>
<td>(done)=&gt;void / Promise</td>
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
<td>title</td>
<td>标题插槽</td>
<td></td>
</tr>
<tr>
<td>默认</td>
<td>内容插槽</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>底部插槽</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentDrawer',
  components: { DrawerDemo1: {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
}, DrawerDemo2: {
  data() {
    return {
      visible: false,
      displayList: ['header', 'content', 'footer']
    }
  },

  methods:{
    isDisplay(name){
      return this.displayList.includes(name)
    }
  }
}, DrawerDemo3: {
  data() {
    return {
      visible: false
    }
  }
} }
}
</script>
<style lang="scss">

</style>