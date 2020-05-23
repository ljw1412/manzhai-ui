<template>
  <div class="component-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。</p>
<p>基于开源项目<a href="https://github.com/atomiks/tippyjs" target="_blank"><code>Tippy.js</code></a>。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
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
</code></pre></template></demo-block><h3 id="chu-fa-fang-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#chu-fa-fang-shi" title="触发方式" data-level="3" data-href="#chu-fa-fang-shi">¶</a>触发方式</h3>
<demo-block>
        <template #example><tooltip-demo2 inline-template><div class="tooltip-demo2">
  <mz-tooltip content="鼠标悬停触发" trigger="hover">
    <mz-button color="primary">hover</mz-button>
  </mz-tooltip>
  <mz-tooltip content="鼠标点击触发" trigger="click">
    <mz-button color="primary">click</mz-button>
  </mz-tooltip>
  <mz-tooltip content="鼠标聚焦触发" trigger="focus">
    <mz-button color="primary">focus</mz-button>
  </mz-tooltip>
  
  <mz-tooltip content="手动触发" trigger="manual"
    :visible="visible" :hide-on-click="false">
    <span color="primary">manual</span>
  </mz-tooltip>
  <mz-switch v-model="visible"></mz-switch>
</div></tooltip-demo2></template>
        <template #description><p><code>trigger</code>属性控制触发方式，默认值<code>hover</code>，可选值<code>hover</code>、<code>click</code>、<code>focus</code>、<code>manual</code>。<code>hide-on-click</code>属性控制触发逻辑，<code>true</code>:点击外部会隐藏，<code>false</code>:点击外部不会隐藏，<code>'toggle'</code>:点击自己显示和隐藏。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip content=&quot;鼠标悬停触发&quot; trigger=&quot;hover&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;hover&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;mz-tooltip content=&quot;鼠标点击触发&quot; trigger=&quot;click&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;click&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
&lt;mz-tooltip content=&quot;鼠标聚焦触发&quot; trigger=&quot;focus&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;focus&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip content=&quot;手动触发&quot; trigger=&quot;manual&quot;
  :visible=&quot;visible&quot; :hide-on-click=&quot;false&quot;&gt;
  &lt;span color=&quot;primary&quot;&gt;manual&lt;/span&gt;
&lt;/mz-tooltip&gt;
&lt;mz-switch v-model=&quot;visible&quot;&gt;&lt;/mz-switch&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.mz-button{
  margin: 5px;
  width: 60px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="xian-shi-jian-tou" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xian-shi-jian-tou" title="显示箭头" data-level="3" data-href="#xian-shi-jian-tou">¶</a>显示箭头</h3>
<demo-block>
        <template #example><tooltip-demo3 inline-template><div class="tooltip-demo3">
  <mz-tooltip arrow content="带箭头的提示文字">
    <mz-button color="primary">按钮</mz-button>
  </mz-tooltip>
</div></tooltip-demo3></template>
        <template #description><p>设置<code>arrow</code>属性控制是否显示箭头，类型<code>Boolean</code>、<code>String</code>(base64Image)、<code>SVGElement</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip arrow content=&quot;带箭头的提示文字&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;按钮&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
</code></pre></template></demo-block><h3 id="dong-hua-xiao-guo" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dong-hua-xiao-guo" title="动画效果" data-level="3" data-href="#dong-hua-xiao-guo">¶</a>动画效果</h3>
<p>另外提供了4类动画效果。您也可以<a href="https://atomiks.github.io/tippyjs/v6/animations/#custom-animations" target="_blank">自定义动画</a>。</p>
<demo-block>
        <template #example><tooltip-demo4 inline-template><div class="tooltip-demo4">
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
</div></tooltip-demo4></template>
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
</code></pre></template></demo-block><h3 id="zhui-sui-shu-biao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zhui-sui-shu-biao" title="追随鼠标" data-level="3" data-href="#zhui-sui-shu-biao">¶</a>追随鼠标</h3>
<demo-block>
        <template #example><tooltip-demo5 inline-template><div class="tooltip-demo5">
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
</div></tooltip-demo5></template>
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
</code></pre></template></demo-block><h3 id="yu-nei-rong-jiao-hu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#yu-nei-rong-jiao-hu" title="与内容交互" data-level="3" data-href="#yu-nei-rong-jiao-hu">¶</a>与内容交互</h3>
<demo-block>
        <template #example><tooltip-demo6 inline-template><div class="tooltip-demo6">
  <mz-tooltip interactive content="你可以对提示文字内容进行交互">
    <mz-button color="primary">interactive</mz-button>
  </mz-tooltip>
</div></tooltip-demo6></template>
        <template #description><p><code>interactive</code>属性控制是否允许你进行内容交互。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip interactive content=&quot;你可以对提示文字内容进行交互&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;interactive&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;
</code></pre></template></demo-block><h3 id="wei-zhi-pian-chi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#wei-zhi-pian-chi" title="位置偏离" data-level="3" data-href="#wei-zhi-pian-chi">¶</a>位置偏离</h3>
<demo-block>
        <template #example><tooltip-demo7 inline-template><div class="tooltip-demo7">
  <mz-tooltip content="提示文字">
    <mz-button color="primary">[0, 10]</mz-button>
  </mz-tooltip>
  
  <mz-tooltip :offset="[20, 5]" content="提示文字">
    <mz-button color="primary">[20, 5]</mz-button>
  </mz-tooltip>
  
  <mz-tooltip :offset="[10, 20]" content="提示文字">
    <mz-button color="primary">[10, 20]</mz-button>
  </mz-tooltip>
</div></tooltip-demo7></template>
        <template #description><p><code>offset</code>属性控制位置偏移量，格式是<code>[skidding, distance]</code>，这两个值的类型都是<code>number</code>，默认值<code>[0, 10]</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip content=&quot;提示文字&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;[0, 10]&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip :offset=&quot;[20, 5]&quot; content=&quot;提示文字&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;[20, 5]&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip :offset=&quot;[10, 20]&quot; content=&quot;提示文字&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;[10, 20]&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;style&gt;
.mz-button{
  margin: 5px;
  width: 100px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zhu-ti" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zhu-ti" title="主题" data-level="3" data-href="#zhu-ti">¶</a>主题</h3>
<p>默认提供了5种主题样式，您也可以<a href="https://atomiks.github.io/tippyjs/v6/themes/#creating-a-theme" target="_blank">自定义主题样式</a>。</p>
<demo-block>
        <template #example><tooltip-demo8 inline-template><div class="tooltip-demo8">
  <mz-tooltip content="默认主题">
    <mz-button color="primary">默认主题</mz-button>
  </mz-tooltip>
  
  <mz-tooltip content="light" theme="light">
    <mz-button color="primary">light</mz-button>
  </mz-tooltip>
  
  <mz-tooltip content="light-border" theme="light-border">
    <mz-button color="primary">light-border</mz-button>
  </mz-tooltip>
  
  <mz-tooltip content="material" theme="material">
    <mz-button color="primary">material</mz-button>
  </mz-tooltip>
  
  <mz-tooltip content="translucent" theme="translucent">
    <mz-button color="primary">translucent</mz-button>
  </mz-tooltip>
</div></tooltip-demo8></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip content=&quot;默认主题&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;默认主题&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip content=&quot;light&quot; theme=&quot;light&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;light&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip content=&quot;light-border&quot; theme=&quot;light-border&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;light-border&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip content=&quot;material&quot; theme=&quot;material&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;material&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;mz-tooltip content=&quot;translucent&quot; theme=&quot;translucent&quot;&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;translucent&lt;/mz-button&gt;
&lt;/mz-tooltip&gt;

&lt;style&gt;
.mz-button{
  margin: 5px;
  width: 90px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-nei-rong" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-nei-rong" title="自定义内容" data-level="3" data-href="#zi-ding-yi-nei-rong">¶</a>自定义内容</h3>
<demo-block>
        <template #example><tooltip-demo9 inline-template><div class="tooltip-demo9">
  <mz-tooltip>
    <mz-button color="primary">自定义内容</mz-button>
    <div slot="content" style="width:160px;text-align:center">
      <h2>Tooltip</h2>
      <p>欢迎使用tooltip!</p>
      <p>L('ω')┘三└('ω')｣</p>
    </div>
  </mz-tooltip>
</div></tooltip-demo9></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-tooltip&gt;
  &lt;mz-button color=&quot;primary&quot;&gt;自定义内容&lt;/mz-button&gt;
  &lt;div slot=&quot;content&quot; style=&quot;width:160px;text-align:center&quot;&gt;
    &lt;h2&gt;Tooltip&lt;/h2&gt;
    &lt;p&gt;欢迎使用tooltip!&lt;/p&gt;
    &lt;p&gt;L('ω')┘三└('ω')｣&lt;/p&gt;
  &lt;/div&gt;
&lt;/mz-tooltip&gt;
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
<td>visible/v-model</td>
<td>当前显示状态</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>位置</td>
<td>String</td>
<td>top / top-start / top-end / right / right-start / right-end / bottom / bottom-start / bottom-end / left / left-start / left-end / auto / auto-start / auto-end</td>
<td>'top'</td>
</tr>
<tr>
<td>animation</td>
<td>过渡动画的名称</td>
<td>String</td>
<td>shift-away / shift-away-subtle / shift-away-extreme / shift-toward / shift-toward-subtle / shift-toward-extreme / scale / scale-subtle / scale-extreme / perspective / perspective-subtle / perspective-extreme</td>
<td>'fade'</td>
</tr>
<tr>
<td>arrow</td>
<td>是否显示箭头或箭头的样式</td>
<td>Boolean / String / SVGElement</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>content</td>
<td>提示文字</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>follow-cursor</td>
<td>跟随鼠标</td>
<td>Boolean / String</td>
<td>horizontal / vertical / initial</td>
<td>false</td>
</tr>
<tr>
<td>interactive</td>
<td>提示信息是否允许互动</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>maxWidth</td>
<td>最大宽度</td>
<td>Number / String</td>
<td>'none'</td>
<td>350</td>
</tr>
<tr>
<td>offset</td>
<td>偏移</td>
<td>Array</td>
<td>[skidding, distance]</td>
<td>[0, 10]</td>
</tr>
<tr>
<td>appendTo</td>
<td>添加至父级</td>
<td>String / Element</td>
<td>'parent' / <code>(CSS selector)</code></td>
<td>document.body</td>
</tr>
<tr>
<td>theme</td>
<td>主题</td>
<td>String</td>
<td>reverse / same / light / light-border / material / translucent</td>
<td>'reverse'</td>
</tr>
<tr>
<td>trigger</td>
<td>触发方式</td>
<td>String</td>
<td>'hover'</td>
<td>'click'</td>
</tr>
<tr>
<td>hideOnClick</td>
<td>点击触发是否隐藏</td>
<td>Boolean / String</td>
<td>'toggle'</td>
<td>true</td>
</tr>
<tr>
<td>zIndex</td>
<td>同原生层级</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
<td>默认</td>
<td>提示文字的引用元素</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>提示文字的内容</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
<p><em>instance</em> 指 tippy 的实例。</p>
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
<td>visible-change</td>
<td>显示状态变化</td>
<td>(visible:boolean)</td>
</tr>
<tr>
<td>create</td>
<td>提示气泡创建事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>mount</td>
<td>提示气泡装载事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>destroy</td>
<td>提示气泡销毁事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>show</td>
<td>显示事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>shown</td>
<td>显示后事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>hidden</td>
<td>隐藏后事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>trigger</td>
<td>触发事件</td>
<td>(instance)</td>
</tr>
<tr>
<td>untrigger</td>
<td>反触发事件</td>
<td>(instance)</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentTooltip',
  components: { TooltipDemo1: {}, TooltipDemo2: {
  data() {
    return {
      visible: false
    }
  }
}, TooltipDemo3: {}, TooltipDemo4: {}, TooltipDemo5: {}, TooltipDemo6: {}, TooltipDemo7: {}, TooltipDemo8: {}, TooltipDemo9: {} }
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
.tooltip-demo2{  
  .mz-button{
    margin: 5px;
    width: 60px;
  }
  }
.tooltip-demo4{  
  .mz-button{
    margin: 5px;
    width: 160px;
  }
  }
.tooltip-demo5{  
  .mz-button{
    margin: 5px;
    width: 160px;
  }
  }
.tooltip-demo7{  
  .mz-button{
    margin: 5px;
    width: 100px;
  }
  }
.tooltip-demo8{  
  .mz-button{
    margin: 5px;
    width: 90px;
  }
  }
</style>