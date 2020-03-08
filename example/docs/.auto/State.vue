<template>
  <div class="component-state">
    <div class="update-datetime">文档更新时间：2020-03-08 16:54</div>
    <h2 id="state-zhuang-tai-bian-hua" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#state-zhuang-tai-bian-hua" title="State 状态变化" data-level="2" data-href="#state-zhuang-tai-bian-hua">¶</a>State 状态变化</h2>
<p>根据状态显示不同内容</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><state-demo1 inline-template><div class="state-demo1">
  <mz-button outlined :disabled="loading" type="danger"
    @click="loadData(true)">加载空数据</mz-button>
  <mz-button outlined :disabled="loading" type="success"
    @click="loadData(false)">加载有数据</mz-button>
  <mz-state v-model="state">
    <template #loading>加载中</template>
    <template #empty>空的</template>
    <template #success>{{list.join(',')}}</template>
  </mz-state>
</div></state-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button outlined :disabled=&quot;loading&quot; type=&quot;danger&quot;
  @click=&quot;loadData(true)&quot;&gt;加载空数据&lt;/mz-button&gt;
&lt;mz-button outlined :disabled=&quot;loading&quot; type=&quot;success&quot;
  @click=&quot;loadData(false)&quot;&gt;加载有数据&lt;/mz-button&gt;
&lt;mz-state v-model=&quot;state&quot;&gt;
  &lt;template #loading&gt;加载中&lt;/template&gt;
  &lt;template #empty&gt;空的&lt;/template&gt;
  &lt;template #success&gt;{{list.join(',')}}&lt;/template&gt;
&lt;/mz-state&gt;

&lt;script&gt;
export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },

  computed: {
    state() {
      if(this.loading){
        return 'loading'
      }
      return this.list.length ? 'success' :'empty'
    }
  },

  methods:{
    loadData(empty) {
      this.loading = true
      setTimeout(() =&gt; {
        this.list = empty ? [] : ['小明', '小红']
        this.loading = false 
      }, 1500)
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.mz-button + .mz-button{
  margin-left: 10px;
}
.mz-state{
  margin-top: 10px;
}
&lt;/style&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentState',
  components: { StateDemo1: {
  data() {
    return {
      loading: false,
      list: []
    }
  },

  computed: {
    state() {
      if(this.loading){
        return 'loading'
      }
      return this.list.length ? 'success' :'empty'
    }
  },

  methods:{
    loadData(empty) {
      this.loading = true
      setTimeout(() => {
        this.list = empty ? [] : ['小明', '小红']
        this.loading = false 
      }, 1500)
    }
  }
} }
}
</script>
<style lang="scss">
.state-demo1{  
  .mz-button + .mz-button{
    margin-left: 10px;
  }
  .mz-state{
    margin-top: 10px;
  }
  }
</style>