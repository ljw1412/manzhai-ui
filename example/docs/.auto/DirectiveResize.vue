<template>
  <div class="directive-resize">
    <div class="update-datetime">文档更新时间：2020-05-09 15:07</div>
    <h2 id="resize-da-xiao-bian-hua" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#resize-da-xiao-bian-hua" title="Resize 大小变化" data-level="2" data-href="#resize-da-xiao-bian-hua">¶</a>Resize 大小变化</h2>
<p>当界面大小发生变化时，调用指定的函数。</p>
<h3 id="jian-tingwindow-da-xiao-bian-hua" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jian-tingwindow-da-xiao-bian-hua" title="监听Window大小变化" data-level="3" data-href="#jian-tingwindow-da-xiao-bian-hua">¶</a>监听Window大小变化</h3>
<p>使用<code>v-resize</code>指令监听window的大小变化</p>
<demo-block>
        <template #example><resize-demo1 inline-template><div class="resize-demo1">
  <div v-resize="resize">width:{{width}},height:{{height}}</div>
</div></resize-demo1></template>
        <template #description><p>使用<code>quiet</code>修饰符，则加载后不立刻调用提供的回调。</p>
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
</code></pre></template></demo-block><h3 id="jian-ting-yuan-su-da-xiao-bian-hua" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jian-ting-yuan-su-da-xiao-bian-hua" title="监听元素大小变化" data-level="3" data-href="#jian-ting-yuan-su-da-xiao-bian-hua">¶</a>监听元素大小变化</h3>
<p>使用<code>v-el-resize</code>指令监听元素的大小变化</p>
<demo-block>
        <template #example><resize-demo2 inline-template><div class="resize-demo2">
  <span class="demo-font-size-14" style="margin-right: 10px;">width:</span>
  <mz-button-group>
    <mz-button outlined
      @click="percent.width -= 10">-</mz-button>
    <mz-button outlined
      @click="percent.width = 100">{{percent.width}}%</mz-button>
    <mz-button outlined
      @click="percent.width += 10">+</mz-button>
  </mz-button-group>
  <span class="demo-font-size-14" style="margin:0 10px;">height:</span>
  <mz-button-group>
    <mz-button outlined
      @click="percent.height -= 10">-</mz-button>
    <mz-button outlined
      @click="percent.height = 100">{{percent.height}}%</mz-button>
    <mz-button outlined
      @click="percent.height += 10">+</mz-button>
  </mz-button-group>
  
  <div style="height: 300px; margin-top: 20px;">
    <div v-el-resize="resize"
      class="resize-div"
      :style="{
        width:`${percent.width}%`,
        height:`${percent.height}%`
      }">
      width:{{width}},height:{{height}}
    </div>
  </div>
</div></resize-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;span class=&quot;demo-font-size-14&quot; style=&quot;margin-right: 10px;&quot;&gt;width:&lt;/span&gt;
&lt;mz-button-group&gt;
  &lt;mz-button outlined
    @click=&quot;percent.width -= 10&quot;&gt;-&lt;/mz-button&gt;
  &lt;mz-button outlined
    @click=&quot;percent.width = 100&quot;&gt;{{percent.width}}%&lt;/mz-button&gt;
  &lt;mz-button outlined
    @click=&quot;percent.width += 10&quot;&gt;+&lt;/mz-button&gt;
&lt;/mz-button-group&gt;
&lt;span class=&quot;demo-font-size-14&quot; style=&quot;margin:0 10px;&quot;&gt;height:&lt;/span&gt;
&lt;mz-button-group&gt;
  &lt;mz-button outlined
    @click=&quot;percent.height -= 10&quot;&gt;-&lt;/mz-button&gt;
  &lt;mz-button outlined
    @click=&quot;percent.height = 100&quot;&gt;{{percent.height}}%&lt;/mz-button&gt;
  &lt;mz-button outlined
    @click=&quot;percent.height += 10&quot;&gt;+&lt;/mz-button&gt;
&lt;/mz-button-group&gt;

&lt;div style=&quot;height: 300px; margin-top: 20px;&quot;&gt;
  &lt;div v-el-resize=&quot;resize&quot;
    class=&quot;resize-div&quot;
    :style=&quot;{
      width:`${percent.width}%`,
      height:`${percent.height}%`
    }&quot;&gt;
    width:{{width}},height:{{height}}
  &lt;/div&gt;
&lt;/div&gt;


&lt;script&gt;
export default {
  data(){
    return {
      percent:{
        width: 100,
        height: 100
      },
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(e){
      this.width = e.contentRect.width
      this.height = e.contentRect.height
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.resize-div{
  border: 1px solid #999;
}
&lt;/style&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentDirectiveResize',
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
}, ResizeDemo2: {
  data(){
    return {
      percent:{
        width: 100,
        height: 100
      },
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(e){
      this.width = e.contentRect.width
      this.height = e.contentRect.height
    }
  }
} }
}
</script>
<style lang="scss">
.resize-demo2{  
  .resize-div{
    border: 1px solid #999;
  }
  }
</style>