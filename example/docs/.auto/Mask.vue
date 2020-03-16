<template>
  <div class="component-mask">
    <div class="update-datetime">文档更新时间：2020-03-16 19:20</div>
    <h2 id="mask-zhe-zhao-ceng" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#mask-zhe-zhao-ceng" title="Mask 遮罩层" data-level="2" data-href="#mask-zhe-zhao-ceng">¶</a>Mask 遮罩层</h2>
<p>创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><mask-demo1 inline-template><div class="mask-demo1">
  <mz-mask :value="visible"
    @click="visible = false"></mz-mask>
  <mz-button color="success"
    @click="visible = true">显示遮罩</mz-button>
</div></mask-demo1></template>
        <template #description><p><code>value</code>属性控制遮罩的显示和隐藏。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-mask :value=&quot;visible&quot;
  @click=&quot;visible = false&quot;&gt;&lt;/mz-mask&gt;
&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示遮罩&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shi-yong-zhi-ling" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zhi-ling" title="使用指令" data-level="3" data-href="#shi-yong-zhi-ling">¶</a>使用指令</h3>
<p>引入 Mask 组件后，会自动在 Vue 的 prototype 上挂载 $mask 方法，在所有组件内部都可以直接调用此方法。</p>
<p>它包含<code>show</code>和<code>hide</code>两个方法。</p>
<demo-block>
        <template #example><mask-demo2 inline-template><div class="mask-demo2">
  <mz-button color="success"
    @click="show">显示遮罩</mz-button>
</div></mask-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;success&quot;
  @click=&quot;show&quot;&gt;显示遮罩&lt;/mz-button&gt;

&lt;script&gt;
export default {
  methods: {
    show(){
      this.$mask.show({ click: () =&gt; this.$mask.hide() })
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentMask',
  components: { MaskDemo1: {
  data() {
    return {
      visible: false
    }
  }
}, MaskDemo2: {
  methods: {
    show(){
      this.$mask.show({ click: () => this.$mask.hide() })
    }
  }
} }
}
</script>
<style lang="scss">

</style>