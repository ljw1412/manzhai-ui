<template>
  <div class="directive-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-09 15:07</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>简单的提示文字处理，如果要进行自定义请使用组件<a href="component-tooltip">Tooltip</a></p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><tooltip-demo1 inline-template><div class="tooltip-demo1">
  <mz-button v-tooltip="'文字'">按钮</mz-button>
</div></tooltip-demo1></template>
        <template #description><p><code>v-tooltip</code>直接传入字符串。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button v-tooltip=&quot;'文字'&quot;&gt;按钮&lt;/mz-button&gt;
</code></pre></template></demo-block><h3 id="shi-yong-zhu-ti" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zhu-ti" title="使用主题" data-level="3" data-href="#shi-yong-zhu-ti">¶</a>使用主题</h3>
<demo-block>
        <template #example><tooltip-demo2 inline-template><div class="tooltip-demo2">
  <mz-tag v-tooltip="'文字'">默认</mz-tag>
  <mz-tag v-tooltip.light="'文字'">light</mz-tag>
  <mz-tag v-tooltip.light-border="'文字'">light-border</mz-tag>
  <mz-tag v-tooltip.material="'文字'">material</mz-tag>
  <mz-tag v-tooltip.translucent="'文字'">translucent</mz-tag>
</div></tooltip-demo2></template>
        <template #description><p><code>v-tooltip</code>可以使用修饰符来快速切换主题，如果有多个默认以单词字母排序的第一位。可选值<code>light</code>、<code>light-border</code>、<code>material</code>、<code>translucent</code></p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tag v-tooltip=&quot;'文字'&quot;&gt;默认&lt;/mz-tag&gt;
&lt;mz-tag v-tooltip.light=&quot;'文字'&quot;&gt;light&lt;/mz-tag&gt;
&lt;mz-tag v-tooltip.light-border=&quot;'文字'&quot;&gt;light-border&lt;/mz-tag&gt;
&lt;mz-tag v-tooltip.material=&quot;'文字'&quot;&gt;material&lt;/mz-tag&gt;
&lt;mz-tag v-tooltip.translucent=&quot;'文字'&quot;&gt;translucent&lt;/mz-tag&gt;
</code></pre></template></demo-block><h3 id="jin-jie-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jin-jie-yong-fa" title="进阶用法" data-level="3" data-href="#jin-jie-yong-fa">¶</a>进阶用法</h3>
<p>您也可以向<code>v-tooltip</code>传入一个对象，对象的<a href="https://atomiks.github.io/tippyjs/v6/all-props/" target="_blank">属性</a>。</p>
<demo-block>
        <template #example><tooltip-demo3 inline-template><div class="tooltip-demo3">
  <mz-row flex>
    <mz-col style="width: 60px">
      <mz-icon name="md-cog" size="26"
        v-tooltip="options"></mz-icon>
    </mz-col>
    <mz-col style="width: calc(100% - 60px);height:200px;overflow-y:auto;">
      <mz-input v-model="options.content"></mz-input>
    </mz-col>
  </mz-row>
</div></tooltip-demo3></template>
        <template #description><p>tooltip基于开源项目<a href="https://github.com/atomiks/tippyjs" target="_blank"><code>Tippy.js</code></a>进行简单封装。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row flex&gt;
  &lt;mz-col style=&quot;width: 60px&quot;&gt;
    &lt;mz-icon name=&quot;md-cog&quot; size=&quot;26&quot;
      v-tooltip=&quot;options&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-col&gt;
  &lt;mz-col style=&quot;width: calc(100% - 60px);height:200px;overflow-y:auto;&quot;&gt;
    &lt;mz-input v-model=&quot;options.content&quot;&gt;&lt;/mz-input&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;script&gt;
export default {
  data() {
    return {
      options:{
        content: '内容'
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentDirectiveTooltip',
  components: { TooltipDemo1: {}, TooltipDemo2: {}, TooltipDemo3: {
  data() {
    return {
      options:{
        content: '内容'
      }
    }
  }
} }
}
</script>
<style lang="scss">

</style>