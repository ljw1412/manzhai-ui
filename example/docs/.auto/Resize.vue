<template>
  <div class="component-resize">
    <div class="update-datetime">文档更新时间：2020-03-31 14:43</div>
    <h2 id="resize-da-xiao-bian-hua" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#resize-da-xiao-bian-hua" title="Resize 大小变化" data-level="2" data-href="#resize-da-xiao-bian-hua">¶</a>Resize 大小变化</h2>
<p>当界面大小发生变化时，调用指定的函数。</p>
<h3 id="jian-tingwindow-da-xiao-bian-hua" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jian-tingwindow-da-xiao-bian-hua" title="监听Window大小变化" data-level="3" data-href="#jian-tingwindow-da-xiao-bian-hua">¶</a>监听Window大小变化</h3>
<demo-block>
        <template #example><resize-demo1 inline-template><div class="resize-demo1">
  <div v-resize="resize">width:{{width}},height:{{height}}</div>
</div></resize-demo1></template>
        <template #description><p>使用<code>v-resize</code>指令监听window的大小变化</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div v-resize=&quot;resize&quot;&gt;width:{{width}},height:{{height}}&lt;/div&gt;

&lt;script&gt;
export default {
  data(){
    return {
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(){
      this.width = document.body.clientWidth
      this.height = document.body.clientHeight
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentResize',
  components: { ResizeDemo1: {
  data(){
    return {
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(){
      this.width = document.body.clientWidth
      this.height = document.body.clientHeight
    }
  }
} }
}
</script>
<style lang="scss">

</style>