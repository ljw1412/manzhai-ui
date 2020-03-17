<template>
  <div class="component-modal">
    <div class="update-datetime">文档更新时间：2020-03-17 17:57</div>
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
        <template #description><p><code>visible/v-model</code>属性控制对话框的显示隐藏。</p>
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
} }
}
</script>
<style lang="scss">

</style>