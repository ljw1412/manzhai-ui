<template>
  <div class="directive-hover">
    <div class="update-datetime">文档更新时间：2020-05-09 15:07</div>
    <h2 id="hover-xuan-fu" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#hover-xuan-fu" title="Hover 悬浮" data-level="2" data-href="#hover-xuan-fu">¶</a>Hover 悬浮</h2>
<p>基于 <code>mouseenter</code>,<code>mouseleave</code>事件提供悬浮状态。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>当悬浮于元素，会为绑定元素添加名为<code>hover</code>的Class。</p>
<demo-block>
        <template #example><hover-demo1 inline-template><div class="hover-demo1">
  <mz-card class="height-200" v-hover>请悬浮于此(请用开发者工具查看该元素状态)</mz-card>
</div></hover-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-card class=&quot;height-200&quot; v-hover&gt;请悬浮于此(请用开发者工具查看该元素状态)&lt;/mz-card&gt;
</code></pre></template></demo-block><h3 id="shi-jian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="3" data-href="#shi-jian">¶</a>事件</h3>
<p>该指令还提供了进/出悬浮状态的监听。</p>
<demo-block>
        <template #example><hover-demo2 inline-template><div class="hover-demo2">
  <mz-card class="height-200" 
    v-hover="{
      enter: handleEnter,
      leave: handleLeave }">
  请悬浮于此(状态:{{isHover?'悬浮':'未悬浮'}})
  </mz-card>
</div></hover-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-card class=&quot;height-200&quot; 
  v-hover=&quot;{
    enter: handleEnter,
    leave: handleLeave }&quot;&gt;
请悬浮于此(状态:{{isHover?'悬浮':'未悬浮'}})
&lt;/mz-card&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isHover: false
    }
  },

  methods:{
    handleEnter(){
      this.isHover = true
    },
    handleLeave(){
      this.isHover = false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentDirectiveHover',
  components: { HoverDemo1: {}, HoverDemo2: {
  data() {
    return {
      isHover: false
    }
  },

  methods:{
    handleEnter(){
      this.isHover = true
    },
    handleLeave(){
      this.isHover = false
    }
  }
} }
}
</script>
<style lang="scss">

</style>