<template>
  <div class="component-modal">
    <div class="update-datetime">文档更新时间：2020-03-25 17:29</div>
    <h2 id="modal-dui-hua-kuang" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#modal-dui-hua-kuang" title="Modal 对话框" data-level="2" data-href="#modal-dui-hua-kuang">¶</a>Modal 对话框</h2>
<p>模态对话框，悬浮于页面，引导用户进行相关操作。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><modal-demo1 inline-template><div class="modal-demo1">
  <mz-button color="success"
    @click="visible = true">显示对话框</mz-button>
  <mz-modal v-model="visible" title="对话框">
    <div>Welcome to chaos world!</div>
    <template #footer>
      <mz-button flat color="primary"
        @click="visible = false">关闭</mz-button>
    </template>
  </mz-modal>
  
  <mz-button color="warning"
    @click="visible2 = true">有分隔线的对话框</mz-button>
  <mz-modal v-model="visible2" divider
    title="分隔线效果对话框">
    <div>全てはシュタインズゲートの选択だ</div>
    <template #footer>
      <mz-button flat color="primary"
        @click="visible2 = false">关闭</mz-button>
    </template>
  </mz-modal>
  
  <mz-button color="danger"
    @click="visible3 = true">显示无头对话框</mz-button>
  <mz-modal v-model="visible3" headless>这是无头对话框的内容</mz-modal>
</div></modal-demo1></template>
        <template #description><p><code>visible/v-model</code>属性控制对话框的显示隐藏。<code>divider</code>属性控制是否使用分割线分隔。<code>headless</code>属性控制是否不渲染对话框头部。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示对话框&lt;/mz-button&gt;
&lt;mz-modal v-model=&quot;visible&quot; title=&quot;对话框&quot;&gt;
  &lt;div&gt;Welcome to chaos world!&lt;/div&gt;
  &lt;template #footer&gt;
    &lt;mz-button flat color=&quot;primary&quot;
      @click=&quot;visible = false&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-modal&gt;

&lt;mz-button color=&quot;warning&quot;
  @click=&quot;visible2 = true&quot;&gt;有分隔线的对话框&lt;/mz-button&gt;
&lt;mz-modal v-model=&quot;visible2&quot; divider
  title=&quot;分隔线效果对话框&quot;&gt;
  &lt;div&gt;全てはシュタインズゲートの选択だ&lt;/div&gt;
  &lt;template #footer&gt;
    &lt;mz-button flat color=&quot;primary&quot;
      @click=&quot;visible2 = false&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-modal&gt;

&lt;mz-button color=&quot;danger&quot;
  @click=&quot;visible3 = true&quot;&gt;显示无头对话框&lt;/mz-button&gt;
&lt;mz-modal v-model=&quot;visible3&quot; headless&gt;这是无头对话框的内容&lt;/mz-modal&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="nei-wai-gun-dong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#nei-wai-gun-dong" title="内外滚动" data-level="3" data-href="#nei-wai-gun-dong">¶</a>内外滚动</h3>
<p>提供了两种滚动条效果。</p>
<demo-block>
        <template #example><modal-demo2 inline-template><div class="modal-demo2">
  <mz-button color="success"
    @click="show(false)">内滚动对话框</mz-button>
  <mz-button color="warning"
    @click="show(true)">外滚动对话框</mz-button>
  <mz-modal v-model="visible" 
    :title="title"
    :outer-scroll="outerScroll">
    <div v-for="i of 100">Welcome to chaos world!</div>
    <template #footer>
      <mz-button flat color="primary"
        @click="visible = false">关闭</mz-button>
    </template>
  </mz-modal>
</div></modal-demo2></template>
        <template #description><p><code>outer-scroll</code>属性控制是否使用外部滚动条。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;show(false)&quot;&gt;内滚动对话框&lt;/mz-button&gt;
&lt;mz-button color=&quot;warning&quot;
  @click=&quot;show(true)&quot;&gt;外滚动对话框&lt;/mz-button&gt;
&lt;mz-modal v-model=&quot;visible&quot; 
  :title=&quot;title&quot;
  :outer-scroll=&quot;outerScroll&quot;&gt;
  &lt;div v-for=&quot;i of 100&quot;&gt;Welcome to chaos world!&lt;/div&gt;
  &lt;template #footer&gt;
    &lt;mz-button flat color=&quot;primary&quot;
      @click=&quot;visible = false&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-modal&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      outerScroll: false
    }
  },

  computed: {
    title() {
      return this.outerScroll ? '外滚动对话框' : '内滚动对话框'
    }
  },

  methods: {
    show(outerScroll = false){
      this.outerScroll = outerScroll
      this.visible = true
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-tao-de-dui-hua-kuang" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#qian-tao-de-dui-hua-kuang" title="嵌套的对话框" data-level="3" data-href="#qian-tao-de-dui-hua-kuang">¶</a>嵌套的对话框</h3>
<p>对话框内触发内部对话框显示。</p>
<demo-block>
        <template #example><modal-demo3 inline-template><div class="modal-demo3">
  <mz-button color="success"
    @click="visible = true">显示对话框</mz-button>
  
  <mz-modal v-model="visible" title="对话框">
    <div>Welcome to chaos world!</div>
    <mz-modal v-model="visible2" append-to-body
      title="嵌套的对话框">
      <div>全てはシュタインズゲートの选択だ</div>
      <template #footer>
        <mz-button flat color="primary"
          @click="visible2 = false">关闭</mz-button>
      </template>
    </mz-modal>
    <template #footer>
      <mz-button flat color="primary"
        @click.stop="visible = false">关闭</mz-button>
      <mz-button flat color="success"
        @click="visible2 = true">显示对话框</mz-button>
    </template>
  </mz-modal>
</div></modal-demo3></template>
        <template #description><p><span style="color:var(--color-danger)">原则上禁止嵌套弹窗，因为这样做可能会导致弹窗和遮罩的层级的关系错误。</span>如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。如果万不得已一定要用，Model 组件提供了<code>append-to-body</code>属性，将内层 Model  的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Model 和遮罩层级关系的正确。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示对话框&lt;/mz-button&gt;

&lt;mz-modal v-model=&quot;visible&quot; title=&quot;对话框&quot;&gt;
  &lt;div&gt;Welcome to chaos world!&lt;/div&gt;
  &lt;mz-modal v-model=&quot;visible2&quot; append-to-body
    title=&quot;嵌套的对话框&quot;&gt;
    &lt;div&gt;全てはシュタインズゲートの选択だ&lt;/div&gt;
    &lt;template #footer&gt;
      &lt;mz-button flat color=&quot;primary&quot;
        @click=&quot;visible2 = false&quot;&gt;关闭&lt;/mz-button&gt;
    &lt;/template&gt;
  &lt;/mz-modal&gt;
  &lt;template #footer&gt;
    &lt;mz-button flat color=&quot;primary&quot;
      @click.stop=&quot;visible = false&quot;&gt;关闭&lt;/mz-button&gt;
    &lt;mz-button flat color=&quot;success&quot;
      @click=&quot;visible2 = true&quot;&gt;显示对话框&lt;/mz-button&gt;
  &lt;/template&gt;
&lt;/mz-modal&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      visible2: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="guan-bi-lan-jie" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#guan-bi-lan-jie" title="关闭拦截" data-level="3" data-href="#guan-bi-lan-jie">¶</a>关闭拦截</h3>
<demo-block>
        <template #example><modal-demo4 inline-template><div class="modal-demo4">
  <mz-button color="success"
    @click="show">显示对话框</mz-button>
  
  <mz-modal v-model="visible" 
    title="对话框" :before-close="beforeClose">
    <div>Welcome to chaos world!</div>
  </mz-modal>
</div></modal-demo4></template>
        <template #description><p><code>before-close</code>属性可以拦截关闭事件，传入 function(done) 方法，<code>done</code>为关闭的方法。你也可以传入 Promise。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;show&quot;&gt;显示对话框&lt;/mz-button&gt;

&lt;mz-modal v-model=&quot;visible&quot; 
  title=&quot;对话框&quot; :before-close=&quot;beforeClose&quot;&gt;
  &lt;div&gt;Welcome to chaos world!&lt;/div&gt;
&lt;/mz-modal&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      count: 0
    }
  },

  methods: {
    show(){
      this.count = 0
      this.visible = true
    },

    beforeClose(done) {
      this.count++
      if(this.count &lt; 5){
        this.$snackbar.show({
          text: `还要尝试${5 - this.count}次才会关闭 (*￣︶￣)*`
        })
        return
      }
      this.$snackbar.hide()
      done()
    }
  }
}
&lt;/script&gt;
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
<td>elevation</td>
<td>深度</td>
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
<td>width</td>
<td>宽度</td>
<td>String</td>
<td></td>
<td>'500px'</td>
</tr>
<tr>
<td>top</td>
<td>对话框距离顶部的高度</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>对话框的圆角大小</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>transition</td>
<td>对话框的显隐动画名称</td>
<td>String</td>
<td></td>
<td>'mz-zoom'</td>
</tr>
<tr>
<td>outer-scroll</td>
<td>是否外滚动</td>
<td>Boolean</td>
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
<td>headless</td>
<td>是否无头</td>
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
<td>是否可以通过点击遮罩关闭对话框</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>是否可通过按下 ESC 键关闭对话框</td>
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
<h4 id="shi-jian" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
<td>open</td>
<td>打开的回调</td>
<td></td>
</tr>
<tr>
<td>opend</td>
<td>打开动画结束时的回调</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>关闭的回调</td>
<td></td>
</tr>
<tr>
<td>closed</td>
<td>关闭动画结束时的回调</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="modal" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#modal" title="$modal" data-level="4" data-href="#modal">¶</a>$modal</h4>
<p>包含：</p>
<ul class="mz-document-ul">
<li>$modal(ModalConfig)</li>
</ul>
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
<td>title</td>
<td>标题</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
<td>String/VNode</td>
<td></td>
<td></td>
</tr>
<tr>
<td>elevation</td>
<td>深度</td>
<td>Number</td>
<td></td>
<td>15</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>String</td>
<td></td>
<td>'500px'</td>
</tr>
<tr>
<td>top</td>
<td>对话框距离顶部的高度</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>radius</td>
<td>对话框的圆角大小</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>transition</td>
<td>对话框的显隐动画名称</td>
<td>String</td>
<td></td>
<td>'mz-zoom'</td>
</tr>
<tr>
<td>outer-scroll</td>
<td>是否外滚动</td>
<td>Boolean</td>
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
<td>headless</td>
<td>是否无头</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>close-on-click-mask</td>
<td>是否可以通过点击遮罩关闭对话框</td>
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

  </div>
</template>
<script>
export default {
  name: 'ComponentModal',
  components: { ModalDemo1: {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false
    }
  }
}, ModalDemo2: {
  data() {
    return {
      visible: false,
      outerScroll: false
    }
  },

  computed: {
    title() {
      return this.outerScroll ? '外滚动对话框' : '内滚动对话框'
    }
  },

  methods: {
    show(outerScroll = false){
      this.outerScroll = outerScroll
      this.visible = true
    }
  }
}, ModalDemo3: {
  data() {
    return {
      visible: false,
      visible2: false
    }
  }
}, ModalDemo4: {
  data() {
    return {
      visible: false,
      count: 0
    }
  },

  methods: {
    show(){
      this.count = 0
      this.visible = true
    },

    beforeClose(done) {
      this.count++
      if(this.count < 5){
        this.$snackbar.show({
          text: `还要尝试${5 - this.count}次才会关闭 (*￣︶￣)*`
        })
        return
      }
      this.$snackbar.hide()
      done()
    }
  }
} }
}
</script>
<style lang="scss">

</style>