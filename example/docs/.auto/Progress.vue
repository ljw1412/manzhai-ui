<template>
  <div class="component-progress">
    <div class="update-datetime">文档更新时间：2020-02-13 17:40</div>
    <h2 id="progress-jin-du-tiao" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#progress-jin-du-tiao" title="Progress 进度条" data-level="2" data-href="#progress-jin-du-tiao">¶</a>Progress 进度条</h2>
<p>用于展示操作进度。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><progress-demo1 inline-template><div class="progress-demo1">
  <mz-progress v-model="value"></mz-progress>
  <mz-progress v-model="value" color="var(--color-success)"></mz-progress>
  <mz-progress v-model="value" color="var(--color-warning)"></mz-progress>
  <mz-progress v-model="value" color="var(--color-danger)"></mz-progress>
  <mz-progress v-model="value" color="#6200ea"></mz-progress>
  <div style="margin-top: 10px;">
    <mz-button @click="valueStepBy(-10)">-</mz-button>
    <span style="padding:0 10px;">{{value}}%</span>
    <mz-button @click="valueStepBy(10)">+</mz-button>
  </div>
</div></progress-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress v-model=&quot;value&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; color=&quot;var(--color-success)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; color=&quot;var(--color-warning)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; color=&quot;var(--color-danger)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; color=&quot;#6200ea&quot;&gt;&lt;/mz-progress&gt;
&lt;div style=&quot;margin-top: 10px;&quot;&gt;
  &lt;mz-button @click=&quot;valueStepBy(-10)&quot;&gt;-&lt;/mz-button&gt;
  &lt;span style=&quot;padding:0 10px;&quot;&gt;{{value}}%&lt;/span&gt;
  &lt;mz-button @click=&quot;valueStepBy(10)&quot;&gt;+&lt;/mz-button&gt;
&lt;/div&gt;


&lt;script&gt;
export default {
  data() {
    return {
      value: 10
    }
  },

  methods: {
    valueStepBy(step){
      if(this.value + step &gt; 100 || this.value + step &lt; 0) return
      this.value += step
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="huan-chong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#huan-chong" title="缓冲" data-level="3" data-href="#huan-chong">¶</a>缓冲</h3>
<p>显示缓存进度的进度条。</p>
<demo-block>
        <template #example><progress-demo2 inline-template><div class="progress-demo2">
  <mz-progress v-model="value" :buffer="buffer"></mz-progress>
  <mz-progress v-model="value" :buffer="buffer" color="var(--color-success)"></mz-progress>
  <mz-progress v-model="value" :buffer="buffer" color="var(--color-warning)"></mz-progress>
  <mz-progress v-model="value" :buffer="buffer" color="var(--color-danger)"></mz-progress>
  <mz-progress v-model="value" :buffer="buffer" color="#6200ea"></mz-progress>
</div></progress-demo2></template>
        <template #description><p><code>buffer</code>属性来控制当前缓存进度。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot; color=&quot;var(--color-success)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot; color=&quot;var(--color-warning)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot; color=&quot;var(--color-danger)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot; color=&quot;#6200ea&quot;&gt;&lt;/mz-progress&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-que-ding-jin-du" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#bu-que-ding-jin-du" title="不确定进度" data-level="3" data-href="#bu-que-ding-jin-du">¶</a>不确定进度</h3>
<p>使用动画效果表示不确定当前进度。</p>
<demo-block>
        <template #example><progress-demo3 inline-template><div class="progress-demo3">
  <mz-progress indeterminate></mz-progress>
  <mz-progress indeterminate color="var(--color-success)"></mz-progress>
  <mz-progress indeterminate color="var(--color-warning)"></mz-progress>
  <mz-progress indeterminate color="var(--color-danger)"></mz-progress>
  <mz-progress indeterminate color="#6200ea"></mz-progress>
</div></progress-demo3></template>
        <template #description><p><code>indeterminate</code>属性来控制进度条的不确定状态，默认为 false。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress indeterminate&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate color=&quot;var(--color-success)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate color=&quot;var(--color-warning)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate color=&quot;var(--color-danger)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate color=&quot;#6200ea&quot;&gt;&lt;/mz-progress&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { ProgressDemo1: {
  data() {
    return {
      value: 10
    }
  },

  methods: {
    valueStepBy(step){
      if(this.value + step > 100 || this.value + step < 0) return
      this.value += step
    }
  }
}, ProgressDemo2: {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
}, ProgressDemo3: {} }
}
</script>
<style lang="scss">

</style>