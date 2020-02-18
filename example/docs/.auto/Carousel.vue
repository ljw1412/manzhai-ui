<template>
  <div class="component-carousel">
    <div class="update-datetime">文档更新时间：2020-02-18 16:31</div>
    <h2 id="carousel-lun-bo" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#carousel-lun-bo" title="Carousel 轮播" data-level="2" data-href="#carousel-lun-bo">¶</a>Carousel 轮播</h2>
<p>在一个容器内循环播放内容。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<p>进行定时轮播。</p>
<demo-block>
        <template #example><carousel-demo1 inline-template><div class="carousel-demo1">
  <mz-row :gutter="16">
    <mz-col :span="12">
      <div style="text-align: center">水平方向</div>
      <mz-carousel height="400px">
        <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
      </mz-carousel>
    </mz-col>
    <mz-col :span="12">
      <div style="text-align: center">垂直方向</div>
      <mz-carousel vertical height="400px">
        <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
        <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
      </mz-carousel>
    </mz-col>
  </mz-row>
</div></carousel-demo1></template>
        <template #description><p><code>height</code>属性控制轮播组件的高度，默认值 100%。<code>vertical</code>属性控制轮播方式是否垂直。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;div style=&quot;text-align: center&quot;&gt;水平方向&lt;/div&gt;
    &lt;mz-carousel height=&quot;400px&quot;&gt;
      &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
    &lt;/mz-carousel&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;div style=&quot;text-align: center&quot;&gt;垂直方向&lt;/div&gt;
    &lt;mz-carousel vertical height=&quot;400px&quot;&gt;
      &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
      &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
    &lt;/mz-carousel&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block><h3 id="zhi-shi-qi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zhi-shi-qi" title="指示器" data-level="3" data-href="#zhi-shi-qi">¶</a>指示器</h3>
<p>轮播内置了多种样式的指示器。</p>
<demo-block>
        <template #example><carousel-demo2 inline-template><div class="carousel-demo2">
  <mz-filter-section v-model="type"
    label="指示器类型：" label-position="right">
    <mz-filter-section-item v-for="item of typeList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
  <mz-filter-section v-model="placement"
    label="指示器位置：" label-position="right">
    <mz-filter-section-item v-for="item of placementList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
  
  <mz-carousel height="400px" :indicator="type" :indicator-placement="placement">
    <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
  </mz-carousel>
</div></carousel-demo2></template>
        <template #description><p><code>indicator</code>属性控制指示器的显示和效果。可选值<code>none</code>,<code>line</code>,<code>full-line</code>, <code>circle</code>。默认值<code>none</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-filter-section v-model=&quot;type&quot;
  label=&quot;指示器类型：&quot; label-position=&quot;right&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of typeList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;
&lt;mz-filter-section v-model=&quot;placement&quot;
  label=&quot;指示器位置：&quot; label-position=&quot;right&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of placementList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;mz-carousel height=&quot;400px&quot; :indicator=&quot;type&quot; :indicator-placement=&quot;placement&quot;&gt;
  &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
&lt;/mz-carousel&gt;


&lt;script&gt;
export default {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhi-shi-qi-yan-se-zi-ding-yi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zhi-shi-qi-yan-se-zi-ding-yi" title="指示器颜色自定义" data-level="3" data-href="#zhi-shi-qi-yan-se-zi-ding-yi">¶</a>指示器颜色自定义</h3>
<p>用户可以自定义指示器的颜色。</p>
<demo-block>
        <template #example><carousel-demo3 inline-template><div class="carousel-demo3">
  <mz-carousel height="400px">
    <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
    <template #indicator>
      <mz-carousel-indicator active-color="green" inactive-color="yellow" />
    </template>
  </mz-carousel>
</div></carousel-demo3></template>
        <template #description><p><code>active-color</code>属性为被选中的颜色，<code>inactive-color</code>属性为未被选中的颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-carousel height=&quot;400px&quot;&gt;
  &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;template #indicator&gt;
    &lt;mz-carousel-indicator active-color=&quot;green&quot; inactive-color=&quot;yellow&quot; /&gt;
  &lt;/template&gt;
&lt;/mz-carousel&gt;


&lt;script&gt;
export default {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-zhi-shi-qi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-zhi-shi-qi" title="自定义指示器" data-level="3" data-href="#zi-ding-yi-zhi-shi-qi">¶</a>自定义指示器</h3>
<p>可以自由扩展的指示器。</p>
<demo-block>
        <template #example><carousel-demo4 inline-template><div class="carousel-demo4">
  <mz-carousel vertical height="400px">
    <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
    <template #indicator="{item, index, pageIndex, length}">
      <div style="position: absolute; right: 10px; bottom: 5px; color: #fff;">
        {{pageIndex}}/{{length}}
      </div>
    </template>
  </mz-carousel>
</div></carousel-demo4></template>
        <template #description><p><code>indicator</code>作用域插槽用于自定义指示器，它返回一个对象包含:item(当前轮播到的CarouselItem实例),index(下标)，pageIndex(页数，即index+1),length(总共页数)。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-carousel vertical height=&quot;400px&quot;&gt;
  &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;template #indicator=&quot;{item, index, pageIndex, length}&quot;&gt;
    &lt;div style=&quot;position: absolute; right: 10px; bottom: 5px; color: #fff;&quot;&gt;
      {{pageIndex}}/{{length}}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/mz-carousel&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentCarousel',
  components: { CarouselDemo1: {}, CarouselDemo2: {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}, CarouselDemo3: {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}, CarouselDemo4: {} }
}
</script>
<style lang="scss">

</style>