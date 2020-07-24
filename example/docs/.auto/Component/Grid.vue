<template>
  <div class="component-grid">
    <div class="update-datetime">文档更新时间：2020-07-24 12:03</div>
<h2 id="grid-zha-ge-bu-ju" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#grid-zha-ge-bu-ju" title="Grid 栅格布局" data-level="2" data-href="#grid-zha-ge-bu-ju">¶</a>Grid 栅格布局</h2>
<p>按照 24 等分的原则进行划分。</p>
<h3 id="ji-chu-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-bu-ju" title="基础布局" data-level="3" data-href="#ji-chu-bu-ju">¶</a>基础布局</h3>
<p>固定等分的基础栅格布局。</p>
<demo-block>
  <template #example>
    <grid-demo1 inline-template>
      <div class="grid-demo1">
        <mz-row>
          <mz-col :span="24"><div class="grid-col bg-dark"></div></mz-col>
        </mz-row>
        
        <mz-row>
          <mz-col :span="12"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="12"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
        
        <mz-row>
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
        
        <mz-row>
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
        
        <mz-row>
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
      </div>
    </grid-demo1>
  </template>
  <template #description>
    <p>通过设置 col 的 <code>span</code>属性我们可以进行列的不同组合搭配。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;24&quot;&gt;&lt;div class=&quot;grid-col bg-dark&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
.bg-dark{
  background-color: $success;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="lie-de-jian-ge" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#lie-de-jian-ge" title="列的间隔" data-level="3" data-href="#lie-de-jian-ge">¶</a>列的间隔</h3>
<demo-block>
  <template #example>
    <grid-demo2 inline-template>
      <div class="grid-demo2">
        <mz-row :gutter="16">
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
        <mz-row :gutter="16">
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
      </div>
    </grid-demo2>
  </template>
  <template #description>
    <p>通过 row 的<code>gutter</code>属性来指定每一栏之间的间隔，默认间隔为 0。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;
&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zi-you-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-you-bu-ju" title="自由布局" data-level="3" data-href="#zi-you-bu-ju">¶</a>自由布局</h3>
<p>栅格的一行分为24等分，那么我们就可以自由分配进行复杂的布局。</p>
<demo-block>
  <template #example>
    <grid-demo3 inline-template>
      <div class="grid-demo3">
        <mz-row :gutter="16">
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="16"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
        
        <mz-row :gutter="16">
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="12"><div class="grid-col bg-light"></div></mz-col>
        </mz-row>
        
        <mz-row :gutter="16">
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
      </div>
    </grid-demo3>
  </template>
  <template #description>
      </template><template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="lie-de-pian-yi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#lie-de-pian-yi" title="列的偏移" data-level="3" data-href="#lie-de-pian-yi">¶</a>列的偏移</h3>
<p>支持偏移指定的列数。</p>
<demo-block>
  <template #example>
    <grid-demo4 inline-template>
      <div class="grid-demo4">
        <mz-row :gutter="16">
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
        
        <mz-row :gutter="16">
          <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
        
        <mz-row :gutter="16">
          <mz-col :span="12" :offset="6"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
      </div>
    </grid-demo4>
  </template>
  <template #description>
    <p>通过设置col的<code>offset</code>属性可以使当前列偏移指定列数。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :span=&quot;12&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="dui-qi-fang-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dui-qi-fang-shi" title="对齐方式" data-level="3" data-href="#dui-qi-fang-shi">¶</a>对齐方式</h3>
<p>通过<code>flex</code>布局来对行内列元素进行对齐。</p>
<demo-block>
  <template #example>
    <grid-demo5 inline-template>
      <div class="grid-demo5">
        <mz-row flex :justify="justify" :align="align">
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-light" style="height:64px"></div></mz-col>
          <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
        <br>
        <mz-filter-section v-model="align" label="align">
          <mz-filter-section-item v-for="item of alignList"
            :key="item"
            :value="item"></mz-filter-section-item>
        </mz-filter-section>
        <mz-filter-section v-model="justify" label="justify">
          <mz-filter-section-item v-for="item of justifyList"
            :key="item"
            :value="item"></mz-filter-section-item>
        </mz-filter-section>
      </div>
    </grid-demo5>
  </template>
  <template #description>
    <p>通过设置 row 的<code>flex</code>属性，来启用 flex 布局。启动之后，可以通过<code>justify</code>属性指定 'start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'中的值来定义列元素的水平布局。通过<code>align</code>属性指定'top', 'middle', 'bottom'中的值来定义列的垂直布局。</p>
  </template><pre><code class="language-html">&lt;mz-row flex :justify=&quot;justify&quot; :align=&quot;align&quot;&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot; style=&quot;height:64px&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;
&lt;br&gt;
&lt;mz-filter-section v-model=&quot;align&quot; label=&quot;align&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of alignList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;
&lt;mz-filter-section v-model=&quot;justify&quot; label=&quot;justify&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of justifyList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      align: 'top',
      justify: 'start',
      alignList: ['top', 'middle', 'bottom'],
      justifyList: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly']
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
&lt;/style&gt;
</code></pre>
</demo-block><h3 id="xiang-ying-shi-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xiang-ying-shi-bu-ju" title="响应式布局" data-level="3" data-href="#xiang-ying-shi-bu-ju">¶</a>响应式布局</h3>
<p>参考 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>和<code>xl</code>。</p>
<demo-block>
  <template #example>
    <grid-demo6 inline-template>
      <div class="grid-demo6">
        <mz-row :gutter="16">
          <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-col bg-base"></div></mz-col>
          <mz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-col bg-light"></div></mz-col>
          <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-col bg-base"></div></mz-col>
        </mz-row>
      </div>
    </grid-demo6>
  </template>
  <template #description>
      </template><template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-col bg-light&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-col bg-base&quot;&gt;&lt;/div&gt;&lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="lie-de-yin-cang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#lie-de-yin-cang" title="列的隐藏" data-level="3" data-href="#lie-de-yin-cang">¶</a>列的隐藏</h3>
<p>在某些情况下，隐藏部分列。</p>
<demo-block>
  <template #example>
    <grid-demo7 inline-template>
      <div class="grid-demo7">
        <mz-row :gutter="16">
          <mz-col :xs="0" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-col bg-base text-white text-center">1</div>
          </mz-col>
          <mz-col :xs="4" :sm="0" :md="8" :lg="3" :xl="10">
            <div class="grid-col bg-base text-white text-center">2</div>
          </mz-col>
          <mz-col :xs="4" :sm="6" :md="0" :lg="3" :xl="10">
            <div class="grid-col bg-base text-white text-center">3</div>
          </mz-col>
          <mz-col :xs="8" :sm="6" :md="4" :lg="0" :xl="1">
            <div class="grid-col bg-base text-white text-center">4</div>
          </mz-col>
          <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="0">
            <div class="grid-col bg-base text-white text-center">5</div>
          </mz-col>
        </mz-row>
      </div>
    </grid-demo7>
  </template>
  <template #description>
    <p>将col的属性值 <code>span</code>、<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>设为0即可。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-row :gutter=&quot;16&quot;&gt;
  &lt;mz-col :xs=&quot;0&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;
    &lt;div class=&quot;grid-col bg-base text-white text-center&quot;&gt;1&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;4&quot; :sm=&quot;0&quot; :md=&quot;8&quot; :lg=&quot;3&quot; :xl=&quot;10&quot;&gt;
    &lt;div class=&quot;grid-col bg-base text-white text-center&quot;&gt;2&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;0&quot; :lg=&quot;3&quot; :xl=&quot;10&quot;&gt;
    &lt;div class=&quot;grid-col bg-base text-white text-center&quot;&gt;3&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;0&quot; :xl=&quot;1&quot;&gt;
    &lt;div class=&quot;grid-col bg-base text-white text-center&quot;&gt;4&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;0&quot;&gt;
    &lt;div class=&quot;grid-col bg-base text-white text-center&quot;&gt;5&lt;/div&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style&gt;
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
  line-height: 48px;
}
.bg-base{
  background-color: $success;
  opacity:0.8;
}
.bg-light{
  background-color: $success;
  opacity:0.6;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="row-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#row-api" title="Row Api" data-level="3" data-href="#row-api">¶</a>Row Api</h3>
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
<td>gutter</td>
<td>栅格间隔</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>flex</td>
<td>flex布局模式，现代浏览器下有效</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>align</td>
<td>flex 布局下的垂直排列方式</td>
<td>String</td>
<td>top / middle / bottom</td>
<td></td>
</tr>
<tr>
<td>justify</td>
<td>flex 布局下的水平排列方式</td>
<td>String</td>
<td>start / center / end / space-between / space-around / space-evenly</td>
<td></td>
</tr>
<tr>
<td>tag</td>
<td>自定义元素标签</td>
<td>String</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
<h3 id="col-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#col-api" title="Col Api" data-level="3" data-href="#col-api">¶</a>Col Api</h3>
<h4 id="shu-xing-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2" title="属性" data-level="4" data-href="#shu-xing-2">¶</a>属性</h4>
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
<td>span</td>
<td>栅格占据的列数</td>
<td>Number</td>
<td></td>
<td>24</td>
</tr>
<tr>
<td>offset</td>
<td>栅格左侧的间隔格数</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>push</td>
<td>栅格向右移动格数</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>pull</td>
<td>栅格向左移动格数</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>xs</td>
<td>&lt;768px 响应式栅格数或者栅格属性对象</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sm</td>
<td>≥768px 响应式栅格数或者栅格属性对象</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>md</td>
<td>≥992px 响应式栅格数或者栅格属性对象</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>lg</td>
<td>≥1200px 响应式栅格数或者栅格属性对象</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>xl</td>
<td>≥1920px 响应式栅格数或者栅格属性对象</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>tag</td>
<td>自定义元素标签</td>
<td>String</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'ComponentGrid',
  components: {
    GridDemo1: {},
    GridDemo2: {},
    GridDemo3: {},
    GridDemo4: {},
    GridDemo5: {
      data() {
        return {
          align: 'top',
          justify: 'start',
          alignList: ['top', 'middle', 'bottom'],
          justifyList: [
            'start',
            'center',
            'end',
            'space-between',
            'space-around',
            'space-evenly'
          ]
        }
      }
    },
    GridDemo6: {},
    GridDemo7: {}
  }
}
</script>


<style lang="scss">
.component-grid {
  .grid-demo1 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
    .bg-dark {
      background-color: $success;
    }
  }
  .grid-demo2 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
  }
  .grid-demo3 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
  }
  .grid-demo4 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
  }
  .grid-demo5 {
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
  }
  .grid-demo6 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
  }
  .grid-demo7 {
    .mz-row {
      margin-bottom: 20px;
    }
    .mz-row:last-child {
      margin-bottom: 0;
    }
    .mz-col {
      border-radius: 4px;
    }
    .grid-col {
      min-height: 48px;
      line-height: 48px;
    }
    .bg-base {
      background-color: $success;
      opacity: 0.8;
    }
    .bg-light {
      background-color: $success;
      opacity: 0.6;
    }
  }
}
</style>
