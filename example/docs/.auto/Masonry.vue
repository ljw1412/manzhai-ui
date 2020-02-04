<template>
  <div class="component-masonry">
    <div class="update-datetime">文档更新时间：2020-02-04 14:34</div>
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
        <template #description><p>masonry的<code>mode</code>属性控制实现方式，默认采用flex布局实现。可选值:<code>flex</code>,<code>grid</code>,<code>column-count</code>。</p>
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
</code></pre></template></demo-block>
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
} }
}
</script>
<style lang="scss">

</style>