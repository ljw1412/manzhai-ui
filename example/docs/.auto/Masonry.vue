<template>
  <div class="component-masonry">
    <div class="update-datetime">文档更新时间：2020-02-06 14:49</div>
    <h2 id="masonry-pu-bu-liu-bu-ju" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#masonry-pu-bu-liu-bu-ju" title="Masonry 瀑布流布局" data-level="2" data-href="#masonry-pu-bu-liu-bu-ju">¶</a>Masonry 瀑布流布局</h2>
<p>简单快速实现瀑布流布局效果。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><masonry-demo1 inline-template><div class="masonry-demo1">
  <mz-masonry :gutter="5">
    <mz-masonry-item v-for="index of 22"
      :key="index"
      :style="{
        height: randomNumber(100, 50) + 'px',
        'background-color': randomColor()
      }">内容块{{index}}</mz-masonry-item>
  </mz-masonry>
</div></masonry-demo1></template>
        <template #description><p>masonry的<code>gutter</code>属性控制块与块之间的间隔。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-masonry :gutter=&quot;5&quot;&gt;
  &lt;mz-masonry-item v-for=&quot;index of 22&quot;
    :key=&quot;index&quot;
    :style=&quot;{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }&quot;&gt;内容块{{index}}&lt;/mz-masonry-item&gt;
&lt;/mz-masonry&gt;

&lt;script&gt;
export default {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=&gt;this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yongcolumn-count-shi-xian" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yongcolumn-count-shi-xian" title="用column-count实现" data-level="3" data-href="#yongcolumn-count-shi-xian">¶</a>用column-count实现</h3>
<demo-block>
        <template #example><masonry-demo2 inline-template><div class="masonry-demo2">
  <mz-masonry :gutter="5" mode="column-count">
    <mz-masonry-item v-for="index of 22"
      :key="index"
      :style="{
        height: randomNumber(100, 50) + 'px',
        'background-color': randomColor()
      }">内容块{{index}}</mz-masonry-item>
  </mz-masonry>
</div></masonry-demo2></template>
        <template #description><p>masonry的<code>mode</code>属性控制实现方式，默认采用flex布局实现。可选值:<code>flex</code>,<code>column-count</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-masonry :gutter=&quot;5&quot; mode=&quot;column-count&quot;&gt;
  &lt;mz-masonry-item v-for=&quot;index of 22&quot;
    :key=&quot;index&quot;
    :style=&quot;{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }&quot;&gt;内容块{{index}}&lt;/mz-masonry-item&gt;
&lt;/mz-masonry&gt;

&lt;script&gt;
export default {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=&gt;this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pu-bu-liu-tiao-shu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#pu-bu-liu-tiao-shu" title="瀑布流条数" data-level="3" data-href="#pu-bu-liu-tiao-shu">¶</a>瀑布流条数</h3>
<demo-block>
        <template #example><masonry-demo3 inline-template><div class="masonry-demo3">
  <div style="margin-bottom:10px;">
    <mz-button outlined
      type="primary"
      :disabled="lineCount <= 1"
      @click="lineCountBy(-1)">-</mz-button>
    {{lineCount}}
    <mz-button outlined
      type="primary"
      :disabled="lineCount >= 8" 
      @click="lineCountBy(1)">+</mz-button>
  </div>
  <mz-masonry :gutter="5" :lineCount="lineCount">
    <mz-masonry-item v-for="index of 22"
      :key="index"
      :style="{
        height: randomNumber(100, 50) + 'px',
        'background-color': randomColor()
      }">内容块{{index}}</mz-masonry-item>
  </mz-masonry>
</div></masonry-demo3></template>
        <template #description><p><code>lineCount</code>实现控制瀑布流条数，默认为 4</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div style=&quot;margin-bottom:10px;&quot;&gt;
  &lt;mz-button outlined
    type=&quot;primary&quot;
    :disabled=&quot;lineCount &lt;= 1&quot;
    @click=&quot;lineCountBy(-1)&quot;&gt;-&lt;/mz-button&gt;
  {{lineCount}}
  &lt;mz-button outlined
    type=&quot;primary&quot;
    :disabled=&quot;lineCount &gt;= 8&quot; 
    @click=&quot;lineCountBy(1)&quot;&gt;+&lt;/mz-button&gt;
&lt;/div&gt;
&lt;mz-masonry :gutter=&quot;5&quot; :lineCount=&quot;lineCount&quot;&gt;
  &lt;mz-masonry-item v-for=&quot;index of 22&quot;
    :key=&quot;index&quot;
    :style=&quot;{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }&quot;&gt;内容块{{index}}&lt;/mz-masonry-item&gt;
&lt;/mz-masonry&gt;

&lt;script&gt;
export default {
  data() {
    return {
      lineCount: 4
    }
  },

  methods: {
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=&gt;this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    },

    lineCountBy(step){
      this.lineCount += step
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
<td>mode</td>
<td>模式</td>
<td>String</td>
<td>flex / column-count</td>
<td>'flex'</td>
</tr>
<tr>
<td>lineCount</td>
<td>条数</td>
<td>Number</td>
<td></td>
<td>4</td>
</tr>
<tr>
<td>gutter</td>
<td>间距</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  components: { MasonryDemo1: {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}, MasonryDemo2: {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}, MasonryDemo3: {
  data() {
    return {
      lineCount: 4
    }
  },

  methods: {
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    },

    lineCountBy(step){
      this.lineCount += step
    }
  }
} }
}
</script>
<style lang="scss">

</style>