<template>
  <div class="component-progress">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="progress-jin-du-tiao" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#progress-jin-du-tiao" title="Progress 进度条" data-level="2" data-href="#progress-jin-du-tiao">¶</a>Progress 进度条</h2>
<p>用于展示操作进度。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
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
</code></pre></template></demo-block><h3 id="huan-chong" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#huan-chong" title="缓冲" data-level="3" data-href="#huan-chong">¶</a>缓冲</h3>
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
</code></pre></template></demo-block><h3 id="bu-que-ding-jin-du" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bu-que-ding-jin-du" title="不确定进度" data-level="3" data-href="#bu-que-ding-jin-du">¶</a>不确定进度</h3>
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
</code></pre></template></demo-block><h3 id="bu-que-ding-jin-du-jiao-ti" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bu-que-ding-jin-du-jiao-ti" title="不确定进度(交替)" data-level="3" data-href="#bu-que-ding-jin-du-jiao-ti">¶</a>不确定进度(交替)</h3>
<p>可以用来表示来回的等待状态。</p>
<demo-block>
        <template #example><progress-demo4 inline-template><div class="progress-demo4">
  <mz-progress indeterminate alternate></mz-progress>
  <mz-progress indeterminate alternate color="var(--color-success)"></mz-progress>
  <mz-progress indeterminate alternate color="var(--color-warning)"></mz-progress>
  <mz-progress indeterminate alternate color="var(--color-danger)"></mz-progress>
  <mz-progress indeterminate alternate color="#6200ea"></mz-progress>
</div></progress-demo4></template>
        <template #description><p><code>alternate</code>属性来控制进度条的不确定状态的动画为交替，默认为 false，且只在<code>indeterminate</code>为true时有效。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress indeterminate alternate&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate alternate color=&quot;var(--color-success)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate alternate color=&quot;var(--color-warning)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate alternate color=&quot;var(--color-danger)&quot;&gt;&lt;/mz-progress&gt;
&lt;mz-progress indeterminate alternate color=&quot;#6200ea&quot;&gt;&lt;/mz-progress&gt;
</code></pre></template></demo-block><h3 id="yuan-jiao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#yuan-jiao" title="圆角" data-level="3" data-href="#yuan-jiao">¶</a>圆角</h3>
<p>带圆角样式的进度条。</p>
<demo-block>
        <template #example><progress-demo5 inline-template><div class="progress-demo5">
  <mz-progress v-model="value" :buffer="buffer" round></mz-progress>
  <mz-progress v-model="value" indeterminate round color="var(--color-success)"></mz-progress>
</div></progress-demo5></template>
        <template #description><p><code>round</code>属性来控制进度条的圆角状态，默认为 false。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress v-model=&quot;value&quot; :buffer=&quot;buffer&quot; round&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; indeterminate round color=&quot;var(--color-success)&quot;&gt;&lt;/mz-progress&gt;

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
</code></pre></template></demo-block><h3 id="zi-ding-yi-yan-se" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-yan-se" title="自定义颜色" data-level="3" data-href="#zi-ding-yi-yan-se">¶</a>自定义颜色</h3>
<p>用户可以根据自己的需求自定义进度条的颜色。</p>
<demo-block>
        <template #example><progress-demo6 inline-template><div class="progress-demo6">
  <mz-progress v-model="value"
    :buffer="buffer"
    color="#6200ea"
    buffer-color="var(--color-warning)"
    background-color="var(--color-danger)"></mz-progress>
</div></progress-demo6></template>
        <template #description><p><code>color</code>控制主进度的颜色，默认值主题色。<code>buffer-color</code>控制缓存进度的颜色，<code>background-color</code>控制背景的颜色。当<code>buffer-color</code>、<code>background-color</code>值不存在时，会采用主进度的颜色带上0.3透明度。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress v-model=&quot;value&quot;
  :buffer=&quot;buffer&quot;
  color=&quot;#6200ea&quot;
  buffer-color=&quot;var(--color-warning)&quot;
  background-color=&quot;var(--color-danger)&quot;&gt;&lt;/mz-progress&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 15,
      buffer: 30
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ban-ma-wen" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ban-ma-wen" title="斑马纹" data-level="3" data-href="#ban-ma-wen">¶</a>斑马纹</h3>
<demo-block>
        <template #example><progress-demo7 inline-template><div class="progress-demo7">
  <mz-progress v-model="value" 
    :buffer="buffer" :stroke-width="12" striped></mz-progress>
  <mz-progress v-model="value" 
    :buffer="buffer" :stroke-width="12" striped-animation></mz-progress>
  <mz-progress v-model="value" 
    color="var(--color-success)" :stroke-width="12" striped></mz-progress>
  <mz-progress v-model="value" 
    color="var(--color-success)" :stroke-width="12" striped-animation></mz-progress>
</div></progress-demo7></template>
        <template #description><p><code>striped</code>属性来控制进度条是否用斑马纹效果，<code>striped-animation</code>属性来控制进度条是否有动画效果的斑马纹。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-progress v-model=&quot;value&quot; 
  :buffer=&quot;buffer&quot; :stroke-width=&quot;12&quot; striped&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; 
  :buffer=&quot;buffer&quot; :stroke-width=&quot;12&quot; striped-animation&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; 
  color=&quot;var(--color-success)&quot; :stroke-width=&quot;12&quot; striped&gt;&lt;/mz-progress&gt;
&lt;mz-progress v-model=&quot;value&quot; 
  color=&quot;var(--color-success)&quot; :stroke-width=&quot;12&quot; striped-animation&gt;&lt;/mz-progress&gt;

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
</code></pre></template></demo-block><h3 id="api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
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
<td>v-model/value</td>
<td>当前进度</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>Number</td>
<td></td>
<td>100</td>
</tr>
<tr>
<td>buffer</td>
<td>缓冲进度</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>stroke-width</td>
<td>进度条的宽度</td>
<td>Number</td>
<td></td>
<td>6</td>
</tr>
<tr>
<td>color</td>
<td>进度条的颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>buffer-color</td>
<td>缓存条的颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>background-color</td>
<td>背景颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>indeterminate</td>
<td>是否为不确定状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alternate</td>
<td>是否动画交替，仅indeterminate为true时有效</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>rounded</td>
<td>是否为圆角</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>striped</td>
<td>是否有斑马纹</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>striped-animation</td>
<td>是否有动画效果的斑马纹</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentProgress',
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
}, ProgressDemo3: {}, ProgressDemo4: {}, ProgressDemo5: {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
}, ProgressDemo6: {
  data() {
    return {
      value: 15,
      buffer: 30
    }
  }
}, ProgressDemo7: {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
} }
}
</script>
<style lang="scss">

</style>