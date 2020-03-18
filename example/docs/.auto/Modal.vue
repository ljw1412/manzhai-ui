<template>
  <div class="component-modal">
    <div class="update-datetime">文档更新时间：2020-03-18 16:04</div>
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
</code></pre></template></demo-block>
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
} }
}
</script>
<style lang="scss">

</style>