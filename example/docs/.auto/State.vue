<template>
  <div class="component-state">
    <div class="update-datetime">文档更新时间：2020-03-13 17:57</div>
    <h2 id="state-zhuang-tai-bian-hua" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#state-zhuang-tai-bian-hua" title="State 状态变化" data-level="2" data-href="#state-zhuang-tai-bian-hua">¶</a>State 状态变化</h2>
<p>根据状态显示不同内容</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<p>根据状态切换呈现的内容。</p>
<demo-block>
        <template #example><state-demo1 inline-template><div class="state-demo1">
  <mz-button outlined :disabled="loading" color="danger"
    @click="loadData(true)">加载空数据</mz-button>
  <mz-button outlined :disabled="loading" color="success"
    @click="loadData(false)">加载有数据</mz-button>
  <mz-state :value="state">
    <template #loading>加载中</template>
    <template #empty>空的</template>
    <template #success>{{list.join(',')}}</template>
  </mz-state>
</div></state-demo1></template>
        <template #description><p><code>value</code>表示当前状态，它的可选值与你所使用的插槽名称对应。(以下面的Demo为例，此时可选值为<code>loading</code>、<code>empty</code>、<code>success</code>)</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button outlined :disabled=&quot;loading&quot; color=&quot;danger&quot;
  @click=&quot;loadData(true)&quot;&gt;加载空数据&lt;/mz-button&gt;
&lt;mz-button outlined :disabled=&quot;loading&quot; color=&quot;success&quot;
  @click=&quot;loadData(false)&quot;&gt;加载有数据&lt;/mz-button&gt;
&lt;mz-state :value=&quot;state&quot;&gt;
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
</code></pre></template></demo-block><h3 id="duo-zhuang-tai" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#duo-zhuang-tai" title="多状态" data-level="3" data-href="#duo-zhuang-tai">¶</a>多状态</h3>
<p>同时呈现多状态的内容。</p>
<demo-block>
        <template #example><state-demo2 inline-template><div class="state-demo2">
  <mz-filter-section label="状态："
    multiple
    label-position="right"
    v-model="state">
    <mz-filter-section-item v-for="item of stateList"
      :key="item"
      :value="item">{{ item }}
    </mz-filter-section-item>
  </mz-filter-section>
  <mz-state :value="stateStr">
    <template #left><span>left</span></template>
    <template #center><span>center</span></template>
    <template #right><span>right</span></template>
  </mz-state>
</div></state-demo2></template>
        <template #description><p><code>value</code>以<code>,</code>分隔表示多状态。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-filter-section label=&quot;状态：&quot;
  multiple
  label-position=&quot;right&quot;
  v-model=&quot;state&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of stateList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;{{ item }}
  &lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;
&lt;mz-state :value=&quot;stateStr&quot;&gt;
  &lt;template #left&gt;&lt;span&gt;left&lt;/span&gt;&lt;/template&gt;
  &lt;template #center&gt;&lt;span&gt;center&lt;/span&gt;&lt;/template&gt;
  &lt;template #right&gt;&lt;span&gt;right&lt;/span&gt;&lt;/template&gt;
&lt;/mz-state&gt;

&lt;script&gt;
export default {
  data() {
    return {
      state: [],
      stateList: ['left', 'center', 'right']
    }
  },
  computed: {
    stateStr() {
      return this.state.join(',')
    }
  },
}
&lt;/script&gt;

&lt;style&gt;
.mz-state{
  span + span{
    margin-left: 10px;
  }
}
&lt;/style&gt;
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
<td>value</td>
<td>当前状态,多种状态用','隔开</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
<td>任意</td>
<td>插槽名称与value对应时显示</td>
<td></td>
</tr>
</tbody>
</table>

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
}, StateDemo2: {
  data() {
    return {
      state: [],
      stateList: ['left', 'center', 'right']
    }
  },
  computed: {
    stateStr() {
      return this.state.join(',')
    }
  },
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
.state-demo2{  
  .mz-state{
    span + span{
      margin-left: 10px;
    }
  }
  }
</style>