<template>
  <div class="component-snackbar">
    <div class="update-datetime">文档更新时间：2020-07-14 16:33</div>
    <h2 id="snackbar-xiao-xi-tiao" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#snackbar-xiao-xi-tiao" title="Snackbar 消息条" data-level="2" data-href="#snackbar-xiao-xi-tiao">¶</a>Snackbar 消息条</h2>
<p>用于页面中展示消息。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><snackbar-demo1 inline-template><div class="snackbar-demo1">
  <div class="demo-font-size-14">一直显示：</div>
  <mz-snackbar content="这是一条测试消息。" />
  <div class="demo-font-size-14">自动消失：</div>
  <mz-snackbar v-model="isShow" content="这是一条测试消息。" />
  <mz-button @click="isShow = true">显示</mz-button>
</div></snackbar-demo1></template>
        <template #description><p><code>visible/v-model</code>控制组件的显隐，如果不绑定，将一直显示。消息条默认显示5秒。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;一直显示：&lt;/div&gt;
&lt;mz-snackbar content=&quot;这是一条测试消息。&quot; /&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;自动消失：&lt;/div&gt;
&lt;mz-snackbar v-model=&quot;isShow&quot; content=&quot;这是一条测试消息。&quot; /&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-zhui-tu-biao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#qian-zhui-tu-biao" title="前缀图标" data-level="3" data-href="#qian-zhui-tu-biao">¶</a>前缀图标</h3>
<demo-block>
        <template #example><snackbar-demo2 inline-template><div class="snackbar-demo2">
  <mz-snackbar content="这是一条测试消息。" icon="flame"/>
</div></snackbar-demo2></template>
        <template #description><p><code>icon</code>属性控制前缀图标。你也可以使用<code>prefix</code>插槽，自定义前缀内容。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar content=&quot;这是一条测试消息。&quot; icon=&quot;flame&quot;/&gt;
</code></pre></template></demo-block><h3 id="shou-dong-guan-bi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#shou-dong-guan-bi" title="手动关闭" data-level="3" data-href="#shou-dong-guan-bi">¶</a>手动关闭</h3>
<p>使用手动模式关闭消息框。</p>
<demo-block>
        <template #example><snackbar-demo3 inline-template><div class="snackbar-demo3">
  <mz-snackbar v-model="isShow"
    content="这是一条测试消息。"
    :timeout="0">
    <template #suffix>
      <mz-button text-color="#fff"
        @click="isShow = false">
          关闭
        </mz-button>
    </template>
  </mz-snackbar>
  <mz-button @click="isShow = true">显示默认插槽</mz-button>
</div></snackbar-demo3></template>
        <template #description><p><code>timeout</code>为0时不会自动关闭。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  content=&quot;这是一条测试消息。&quot;
  :timeout=&quot;0&quot;&gt;
  &lt;template #suffix&gt;
    &lt;mz-button text-color=&quot;#fff&quot;
      @click=&quot;isShow = false&quot;&gt;
        关闭
      &lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-snackbar&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示默认插槽&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-xing-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#duo-xing-bu-ju" title="多行布局" data-level="3" data-href="#duo-xing-bu-ju">¶</a>多行布局</h3>
<demo-block>
        <template #example><snackbar-demo4 inline-template><div class="snackbar-demo4">
  <mz-snackbar v-model="isShow"
    vertical
    content="这是一条测试消息。"
    :timeout="0">
    <template #suffix>
      <mz-button text-color="#fff"
        width="100%"
        @click="isShow = false">
          关闭
        </mz-button>
    </template>
  </mz-snackbar>
  <mz-button @click="isShow = true">显示</mz-button>
</div></snackbar-demo4></template>
        <template #description><p><code>vertical</code>属性值控制布局的显示效果。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  vertical
  content=&quot;这是一条测试消息。&quot;
  :timeout=&quot;0&quot;&gt;
  &lt;template #suffix&gt;
    &lt;mz-button text-color=&quot;#fff&quot;
      width=&quot;100%&quot;
      @click=&quot;isShow = false&quot;&gt;
        关闭
      &lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-snackbar&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-he-wei-zhi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#gu-ding-he-wei-zhi" title="固定和位置" data-level="3" data-href="#gu-ding-he-wei-zhi">¶</a>固定和位置</h3>
<p>让消息框在全局固定位置显示。</p>
<demo-block>
        <template #example><snackbar-demo5 inline-template><div class="snackbar-demo5">
  <mz-snackbar v-model="isShow"
    fixed
    :content="`位置：${placement}`"
    :timeout="0"
    :placement="placement">
    <template #suffix>
      <mz-button text-color="#fff"
        @click="isShow = false">
          关闭
        </mz-button>
    </template>
  </mz-snackbar>
  <mz-button color="primary" @click="isShow = true">显示</mz-button>
  <br><br>
  <mz-filter-section v-model="placement" label="placement">
    <mz-filter-section-item v-for="item of placementList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
</div></snackbar-demo5></template>
        <template #description><p><code>fixed</code>控制是否固定，<code>placement</code>控制消息框在界面的位置。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  fixed
  :content=&quot;`位置：${placement}`&quot;
  :timeout=&quot;0&quot;
  :placement=&quot;placement&quot;&gt;
  &lt;template #suffix&gt;
    &lt;mz-button text-color=&quot;#fff&quot;
      @click=&quot;isShow = false&quot;&gt;
        关闭
      &lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-snackbar&gt;
&lt;mz-button color=&quot;primary&quot; @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;
&lt;br&gt;&lt;br&gt;
&lt;mz-filter-section v-model=&quot;placement&quot; label=&quot;placement&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of placementList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="quan-ju-fang-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#quan-ju-fang-fa" title="全局方法" data-level="3" data-href="#quan-ju-fang-fa">¶</a>全局方法</h3>
<p>ManZhai 为 Vue.prototype 添加了全局方法 $snackbar。因此在 vue instance 中可以采用本页面中的方式调用 Snackbar。</p>
<demo-block>
        <template #example><snackbar-demo6 inline-template><div class="snackbar-demo6">
  <mz-button @click="onClick">显示</mz-button>
</div></snackbar-demo6></template>
        <template #description><p>方法<code>show</code>里传的config，与组件Snackbar的属性值完全一致。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;onClick&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  methods:{
    onClick() {
      this.$snackbar.show({
        content: '测试',
        placement: 'bottom',
        timeout: 0
      })
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
<td>visible/v-model</td>
<td>绑定值，是否显示</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>内容文本</td>
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
<td>absolute</td>
<td>是否绝对定位</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fixed</td>
<td>是否固定定位</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>timeout</td>
<td>延迟关闭时间，为0时不关闭</td>
<td>Number</td>
<td></td>
<td>5000</td>
</tr>
<tr>
<td>color</td>
<td>背景颜色</td>
<td>String</td>
<td>primary / success / warning / danger 或 Color in CSS</td>
<td></td>
</tr>
<tr>
<td>textColor</td>
<td>文字颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直模式</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>appendToBody</td>
<td>是否添加到body下</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>offset</td>
<td>偏移量</td>
<td>[number,number]</td>
<td></td>
<td>[0,0]</td>
</tr>
<tr>
<td>radius</td>
<td>圆角大小，同css</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>所在位置，在绝对或固定时有效</td>
<td>String</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>'bottom'</td>
</tr>
<tr>
<td>zIndex</td>
<td>层级</td>
<td>Number</td>
<td></td>
<td>1000</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentSnackbar',
  components: { SnackbarDemo1: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo2: {}, SnackbarDemo3: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo4: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo5: {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}, SnackbarDemo6: {
  methods:{
    onClick() {
      this.$snackbar.show({
        content: '测试',
        placement: 'bottom',
        timeout: 0
      })
    }    
  }
} }
}
</script>
<style lang="scss">

</style>