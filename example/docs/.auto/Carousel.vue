<template>
  <div class="component-carousel">
    <div class="update-datetime">文档更新时间：2020-02-15 16:11</div>
    <h2 id="carousel-lun-bo" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#carousel-lun-bo" title="Carousel 轮播" data-level="2" data-href="#carousel-lun-bo">¶</a>Carousel 轮播</h2>
<p>在一个容器内循环播放内容。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><carousel-demo1 inline-template><div class="carousel-demo1">
  <mz-carousel height="400px">
    <mz-carousel-item style="background-color:var(--color-primary)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
  </mz-carousel>
</div></carousel-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-carousel height=&quot;400px&quot;&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-primary)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
&lt;/mz-carousel&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentCarousel',
  components: { CarouselDemo1: {} }
}
</script>
<style lang="scss">

</style>