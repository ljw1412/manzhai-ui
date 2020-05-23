<template>
  <div class="component-switch">
    <div class="update-datetime">文档更新时间：2020-05-23 12:10</div>
    <h2 id="switch-kai-guan" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#switch-kai-guan" title="Switch 开关" data-level="2" data-href="#switch-kai-guan">¶</a>Switch 开关</h2>
<p>表示两种相互对立的状态间的开关选择器。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><switch-demo1 inline-template><div class="switch-demo1">
  <mz-switch v-model="value"></mz-switch>
  <mz-switch v-model="value" disabled></mz-switch>
  <mz-switch v-model="value" circle></mz-switch>
  <mz-switch v-model="value" circle disabled></mz-switch>
</div></switch-demo1></template>
        <template #description><p><code>circle</code>属性可以控制滑块是否为圆形。<code>disabled</code>属性可以控制开关是否禁用。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-switch v-model=&quot;value&quot;&gt;&lt;/mz-switch&gt;
&lt;mz-switch v-model=&quot;value&quot; disabled&gt;&lt;/mz-switch&gt;
&lt;mz-switch v-model=&quot;value&quot; circle&gt;&lt;/mz-switch&gt;
&lt;mz-switch v-model=&quot;value&quot; circle disabled&gt;&lt;/mz-switch&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: true
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-da-xiao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#bu-tong-da-xiao" title="不同大小" data-level="3" data-href="#bu-tong-da-xiao">¶</a>不同大小</h3>
<p>提供了3种不同的开关大小。</p>
<demo-block>
        <template #example><switch-demo2 inline-template><div class="switch-demo2">
  <mz-switch v-model="value" size="small"></mz-switch>
  <mz-switch v-model="value"></mz-switch>
  <mz-switch v-model="value" size="large"></mz-switch>
</div></switch-demo2></template>
        <template #description><p><code>size</code>属性控制开关大小，可选值: small / (默认) / large。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-switch v-model=&quot;value&quot; size=&quot;small&quot;&gt;&lt;/mz-switch&gt;
&lt;mz-switch v-model=&quot;value&quot;&gt;&lt;/mz-switch&gt;
&lt;mz-switch v-model=&quot;value&quot; size=&quot;large&quot;&gt;&lt;/mz-switch&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: true
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhuang-tai-tu-biao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zhuang-tai-tu-biao" title="状态图标" data-level="3" data-href="#zhuang-tai-tu-biao">¶</a>状态图标</h3>
<demo-block>
        <template #example><switch-demo3 inline-template><div class="switch-demo3">
  <mz-switch v-model="value" 
    size="large"
    active-icon="moon" 
    inactive-icon="sunny"></mz-switch>
</div></switch-demo3></template>
        <template #description><p><code>active-icon</code>为开关开启的图标，<code>inactive-icon</code>为开关关闭的图标。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-switch v-model=&quot;value&quot; 
  size=&quot;large&quot;
  active-icon=&quot;moon&quot; 
  inactive-icon=&quot;sunny&quot;&gt;&lt;/mz-switch&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: true
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
<td>value/v-model</td>
<td>当前选中值</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>circle</td>
<td>滑块是否为圆形</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>active-icon</td>
<td>开关开启的滑块上的图标</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>inactive-icon</td>
<td>开关关闭的滑块上的图标</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>iconColor</td>
<td>开关的滑块上的图标颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>同原生input的name属性</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentSwitch',
  components: { SwitchDemo1: {
  data (){
    return {
      value: true
    }
  }
}, SwitchDemo2: {
  data (){
    return {
      value: true
    }
  }
}, SwitchDemo3: {
  data (){
    return {
      value: true
    }
  }
} }
}
</script>
<style lang="scss">

</style>