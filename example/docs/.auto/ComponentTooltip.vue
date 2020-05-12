<template>
  <div class="component-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-12 19:31</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。</p>
<p>基于开源项目<a href="https://github.com/atomiks/tippyjs" target="_blank"><code>Tippy.js</code></a>。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><tooltip-demo1 inline-template><div class="tooltip-demo1">
  <div class="box">
    <div class="top">
      <mz-tooltip placement="top-start" content="top-start 提示文字">
        <mz-button color="primary">top-start</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="top" content="top 提示文字">
        <mz-button color="primary">top</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="top-end" content="top-end 提示文字">
        <mz-button color="primary">top-end</mz-button>
      </mz-tooltip>
    </div>
  
    <div class="left">
      <mz-tooltip placement="left-start" content="left-start 提示文字">
        <mz-button color="primary">left-start</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="left" content="left 提示文字">
        <mz-button color="primary">left</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="left-end" content="left-end 提示文字">
        <mz-button color="primary">left-end</mz-button>
      </mz-tooltip>
    </div>
  
    <div class="right">
      <mz-tooltip placement="right-start" content="right-start 提示文字">
        <mz-button color="primary">right-start</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="right" content="right 提示文字">
        <mz-button color="primary">right</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="right-end" content="right-end 提示文字">
        <mz-button color="primary">right-end</mz-button>
      </mz-tooltip>
    </div>
  
    <div class="bottom">
      <mz-tooltip placement="bottom-start" content="bottom-start 提示文字">
        <mz-button color="primary">bottom-start</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="bottom" content="bottom 提示文字">
        <mz-button color="primary">bottom</mz-button>
      </mz-tooltip>
      <mz-tooltip placement="bottom-end" content="bottom-end 提示文字">
        <mz-button color="primary">bottom-end</mz-button>
      </mz-tooltip>
    </div>
  </div>
</div></tooltip-demo1></template>
        <template #description><p><code>content</code>属性控制显示提示的提示信息。<code>placement</code>属性控制显示提示的位置。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;top&quot;&gt;
    &lt;mz-tooltip placement=&quot;top-start&quot; content=&quot;top-start 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;top-start&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;top&quot; content=&quot;top 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;top&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;top-end&quot; content=&quot;top-end 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;top-end&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;left&quot;&gt;
    &lt;mz-tooltip placement=&quot;left-start&quot; content=&quot;left-start 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;left-start&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;left&quot; content=&quot;left 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;left&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;left-end&quot; content=&quot;left-end 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;left-end&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;right&quot;&gt;
    &lt;mz-tooltip placement=&quot;right-start&quot; content=&quot;right-start 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;right-start&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;right&quot; content=&quot;right 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;right&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;right-end&quot; content=&quot;right-end 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;right-end&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;bottom&quot;&gt;
    &lt;mz-tooltip placement=&quot;bottom-start&quot; content=&quot;bottom-start 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;bottom-start&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;bottom&quot; content=&quot;bottom 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;bottom&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
    &lt;mz-tooltip placement=&quot;bottom-end&quot; content=&quot;bottom-end 提示文字&quot;&gt;
      &lt;mz-button color=&quot;primary&quot;&gt;bottom-end&lt;/mz-button&gt;
    &lt;/mz-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.box{
  width: 540px;
}
.top {
  padding-left: 110px;
}
.left {
  float: left;
  width: 100px;
}
.right {
  float: right;
  width: 100px;
}
.bottom {
  clear: both;
  margin: auto;
  padding-left: 110px;
}
.mz-button{
  margin: 5px;
  width: 100px;
  height: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="xian-shi-jian-tou" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xian-shi-jian-tou" title="显示箭头" data-level="3" data-href="#xian-shi-jian-tou">¶</a>显示箭头</h3>
<demo-block>
        <template #example><tooltip-demo2 inline-template><div class="tooltip-demo2">
  <mz-tooltip arrow content="带箭头的提示文字">
    <mz-button color="primary">按钮</mz-button>
  </mz-tooltip>
</div></tooltip-demo2></template>
        <template #description><p>设置<code>arrow</code>属性控制是否显示箭头，类型<code>Boolean</code>、<code>String</code>(base64Image)、<code>SVGElement</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip arrow content=&quot;带箭头的提示文字&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
</code></pre></template></demo-block><h3 id="dong-hua-xiao-guo" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#dong-hua-xiao-guo" title="动画效果" data-level="3" data-href="#dong-hua-xiao-guo">¶</a>动画效果</h3>
<p>另外提供了4类动画效果。您也可以<a href="https://atomiks.github.io/tippyjs/v6/animations/#custom-animations" target="_blank">自定义动画</a>。</p>
<demo-block>
        <template #example><tooltip-demo3 inline-template><div class="tooltip-demo3">
  <div>
    <mz-tooltip content="fade 动画效果">
      <mz-button color="primary">fade(默认)</mz-button>
    </mz-tooltip>
  </div>
  
  <div>
    <mz-tooltip animation="shift-away" content="shift-away动画效果">
      <mz-button color="primary">shift-away</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="shift-away-subtle" content="shift-away-subtle动画效果">
      <mz-button color="primary">shift-away-subtle</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="shift-away-extreme" content="shift-away-extreme动画效果">
      <mz-button color="primary">shift-away-extreme</mz-button>
    </mz-tooltip>
  </div>
  
  <div>
    <mz-tooltip animation="shift-toward" content="shift-toward动画效果">
      <mz-button color="primary">shift-toward</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="shift-toward-subtle" content="shift-toward-subtle动画效果">
      <mz-button color="primary">shift-toward-subtle</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="shift-toward-extreme" content="shift-toward-extreme动画效果">
      <mz-button color="primary">shift-toward-extreme</mz-button>
    </mz-tooltip>
  </div>
  
  <div>
    <mz-tooltip animation="scale" content="scale动画效果">
      <mz-button color="primary">scale</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="scale-subtle" content="scale-subtle动画效果">
      <mz-button color="primary">scale-subtle</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="scale-extreme" content="scale-extreme动画效果">
      <mz-button color="primary">scale-extreme</mz-button>
    </mz-tooltip>
  </div>
  
  <div>
    <mz-tooltip animation="perspective" content="perspective动画效果">
      <mz-button color="primary">perspective</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="perspective-subtle" content="perspective-subtle动画效果">
      <mz-button color="primary">perspective-subtle</mz-button>
    </mz-tooltip>
    <mz-tooltip animation="perspective-extreme" content="perspective-extreme动画效果">
      <mz-button color="primary">perspective-extreme</mz-button>
    </mz-tooltip>
  </div>
</div></tooltip-demo3></template>
        <template #description><p><code>animation</code>属性控制动画效果，类型<code>Boolean / String</code>，默认值<code>fade</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-tooltip content=&quot;fade 动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;fade(默认)&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-tooltip animation=&quot;shift-away&quot; content=&quot;shift-away动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-away&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;shift-away-subtle&quot; content=&quot;shift-away-subtle动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-away-subtle&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;shift-away-extreme&quot; content=&quot;shift-away-extreme动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-away-extreme&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-tooltip animation=&quot;shift-toward&quot; content=&quot;shift-toward动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-toward&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;shift-toward-subtle&quot; content=&quot;shift-toward-subtle动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-toward-subtle&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;shift-toward-extreme&quot; content=&quot;shift-toward-extreme动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;shift-toward-extreme&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-tooltip animation=&quot;scale&quot; content=&quot;scale动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;scale&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;scale-subtle&quot; content=&quot;scale-subtle动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;scale-subtle&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;scale-extreme&quot; content=&quot;scale-extreme动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;scale-extreme&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-tooltip animation=&quot;perspective&quot; content=&quot;perspective动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;perspective&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;perspective-subtle&quot; content=&quot;perspective-subtle动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;perspective-subtle&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
  &lt;mz-tooltip animation=&quot;perspective-extreme&quot; content=&quot;perspective-extreme动画效果&quot;&gt;
    &lt;mz-button color=&quot;primary&quot;&gt;perspective-extreme&lt;/mz-button&gt;
  &lt;/mz-tooltip&gt;
&lt;/div&gt;

&lt;style&gt;
.mz-button{
  margin: 5px;
  width: 160px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zhui-sui-shu-biao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zhui-sui-shu-biao" title="追随鼠标" data-level="3" data-href="#zhui-sui-shu-biao">¶</a>追随鼠标</h3>
<demo-block>
        <template #example><tooltip-demo4 inline-template><div class="tooltip-demo4">
  <mz-tooltip follow-cursor content="true">
    <mz-button color="primary">followCursor: true</mz-button>
  </mz-tooltip>
  <mz-tooltip :follow-cursor="false" content="false">
    <mz-button color="primary">followCursor: false</mz-button>
  </mz-tooltip>
  <br>
  <mz-tooltip follow-cursor="horizontal" content="horizontal">
    <mz-button color="primary">followCursor: horizontal</mz-button>
  </mz-tooltip>
  <mz-tooltip follow-cursor="vertical" content="vertical">
    <mz-button color="primary">followCursor: vertical</mz-button>
  </mz-tooltip>
  <mz-tooltip follow-cursor="initial" content="initial">
    <mz-button color="primary">followCursor: initial</mz-button>
  </mz-tooltip>
</div></tooltip-demo4></template>
        <template #description><p><code>follow-cursor</code>属性控制鼠标追随情况。默认值<code>false</code>，可选值<code>true</code>: 启用、<code>false</code>: 禁用、<code>horizontal</code>: 水平、<code>vertical</code>: 垂直、<code>initial</code>: 第一次鼠标触及的位置。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip follow-cursor content=&quot;true&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;followCursor: true&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;mz-tooltip :follow-cursor=&quot;false&quot; content=&quot;false&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;followCursor: false&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;br&gt;
&lt;mz-tooltip follow-cursor=&quot;horizontal&quot; content=&quot;horizontal&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;followCursor: horizontal&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;mz-tooltip follow-cursor=&quot;vertical&quot; content=&quot;vertical&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;followCursor: vertical&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;mz-tooltip follow-cursor=&quot;initial&quot; content=&quot;initial&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;followCursor: initial&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;style&gt;
.mz-button{
  margin: 5px;
  width: 160px;
}
&lt;/style&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentTooltip',
  components: { TooltipDemo1: {}, TooltipDemo2: {}, TooltipDemo3: {}, TooltipDemo4: {} }
}
</script>
<style lang="scss">
.tooltip-demo1{  
  .box{
    width: 540px;
  }
  .top {
    padding-left: 110px;
  }
  .left {
    float: left;
    width: 100px;
  }
  .right {
    float: right;
    width: 100px;
  }
  .bottom {
    clear: both;
    margin: auto;
    padding-left: 110px;
  }
  .mz-button{
    margin: 5px;
    width: 100px;
    height: 40px;
  }
  }
.tooltip-demo3{  
  .mz-button{
    margin: 5px;
    width: 160px;
  }
  }
.tooltip-demo4{  
  .mz-button{
    margin: 5px;
    width: 160px;
  }
  }
</style>