<template>
  <div class="component-carousel">
    <div class="update-datetime">文档更新时间：2020-02-19 15:47</div>
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
</code></pre></template></demo-block><h3 id="jian-tou" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jian-tou" title="箭头" data-level="3" data-href="#jian-tou">¶</a>箭头</h3>
<p>轮播的手动切换箭头。</p>
<demo-block>
        <template #example><carousel-demo2 inline-template><div class="carousel-demo2">
  <mz-filter-section v-model="arrow"
    label="箭头显示策略：" label-position="right">
    <mz-filter-section-item v-for="item of arrowList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
  
  <mz-carousel height="400px" :arrow="arrow">
    <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
  </mz-carousel>
</div></carousel-demo2></template>
        <template #description><p><code>arrow</code>属性控制箭头显示策略。可选值<code>always</code>,<code>hover</code>,<code>never</code>。默认值<code>always</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-filter-section v-model=&quot;arrow&quot;
  label=&quot;箭头显示策略：&quot; label-position=&quot;right&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of arrowList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;mz-carousel height=&quot;400px&quot; :arrow=&quot;arrow&quot;&gt;
  &lt;mz-carousel-item style=&quot;background-color:#6200ea;&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-success)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-warning)&quot;&gt;&lt;/mz-carousel-item&gt;
  &lt;mz-carousel-item style=&quot;background-color:var(--color-danger)&quot;&gt;&lt;/mz-carousel-item&gt;
&lt;/mz-carousel&gt;


&lt;script&gt;
export default {
  data() {
    return {
      arrow: 'hover',
      arrowList: ['always', 'hover', 'never'],
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhi-shi-qi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#zhi-shi-qi" title="指示器" data-level="3" data-href="#zhi-shi-qi">¶</a>指示器</h3>
<p>轮播内置了多种样式的指示器。</p>
<demo-block>
        <template #example><carousel-demo3 inline-template><div class="carousel-demo3">
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
</div></carousel-demo3></template>
        <template #description><p><code>indicator</code>属性控制指示器的显示和效果。可选值<code>none</code>,<code>line</code>,<code>full-line</code>,<code>circle</code>。默认值<code>none</code>。</p>
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
        <template #example><carousel-demo4 inline-template><div class="carousel-demo4">
  <mz-carousel height="400px">
    <mz-carousel-item style="background-color:#6200ea;"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
    <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
    <template #indicator>
      <mz-carousel-indicator active-color="green" inactive-color="yellow" />
    </template>
  </mz-carousel>
</div></carousel-demo4></template>
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
        <template #example><carousel-demo5 inline-template><div class="carousel-demo5">
  <p>Demo1:</p>
  <mz-carousel ref="carousel" height="200px">
    <mz-carousel-item v-for="(item, index) of list"
      :key="index"
      :data="item"
      :style="{'background-color':item.color}">
      <div style="text-align:center; font-size:40px; color:#fff; line-height:200px;">{{index+1}}</div>
    </mz-carousel-item>
    <template #indicator="{index}">
      <div class="custom-indicator">
        <div v-for="(item, i) of list" 
          :key="i"
          class="custom-indicator__item"
          :class="{'custom-indicator__item--active':index===i}"
          @click="switchPage(i)">
          {{item.title}}
        </div>
      </div>
    </template>
  </mz-carousel>
  <p>Demo2:</p>
  <mz-carousel ref="carousel2" height="200px">
    <mz-carousel-item v-for="(item, index) of list"
      :key="index"
      :data="item"
      :style="{'background-color':item.color}">
      <div style="text-align:center; font-size:40px; color:#fff; line-height:200px;">{{index+1}}</div>
    </mz-carousel-item>
    <template #indicator="{item, pageIndex, length}">
      <div style="position: absolute; right: 10px; bottom: 5px; color: #fff;">
        <!-- 此处的item.data与mz-carousel-item组件传入的data属性一致 -->
        ({{pageIndex}}/{{length}}){{item.data.title}}
      </div>
    </template>
  </mz-carousel>
</div></carousel-demo5></template>
        <template #description><p><code>indicator</code>作用域插槽用于自定义指示器，它返回一个对象包含:item(当前轮播到的CarouselItem实例),index(当前下标),pageIndex(当前页数，即index+1),length(总共页数)。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;p&gt;Demo1:&lt;/p&gt;
&lt;mz-carousel ref=&quot;carousel&quot; height=&quot;200px&quot;&gt;
  &lt;mz-carousel-item v-for=&quot;(item, index) of list&quot;
    :key=&quot;index&quot;
    :data=&quot;item&quot;
    :style=&quot;{'background-color':item.color}&quot;&gt;
    &lt;div style=&quot;text-align:center; font-size:40px; color:#fff; line-height:200px;&quot;&gt;{{index+1}}&lt;/div&gt;
  &lt;/mz-carousel-item&gt;
  &lt;template #indicator=&quot;{index}&quot;&gt;
    &lt;div class=&quot;custom-indicator&quot;&gt;
      &lt;div v-for=&quot;(item, i) of list&quot; 
        :key=&quot;i&quot;
        class=&quot;custom-indicator__item&quot;
        :class=&quot;{'custom-indicator__item--active':index===i}&quot;
        @click=&quot;switchPage(i)&quot;&gt;
        {{item.title}}
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/mz-carousel&gt;
&lt;p&gt;Demo2:&lt;/p&gt;
&lt;mz-carousel ref=&quot;carousel2&quot; height=&quot;200px&quot;&gt;
  &lt;mz-carousel-item v-for=&quot;(item, index) of list&quot;
    :key=&quot;index&quot;
    :data=&quot;item&quot;
    :style=&quot;{'background-color':item.color}&quot;&gt;
    &lt;div style=&quot;text-align:center; font-size:40px; color:#fff; line-height:200px;&quot;&gt;{{index+1}}&lt;/div&gt;
  &lt;/mz-carousel-item&gt;
  &lt;template #indicator=&quot;{item, pageIndex, length}&quot;&gt;
    &lt;div style=&quot;position: absolute; right: 10px; bottom: 5px; color: #fff;&quot;&gt;
      &lt;!-- 此处的item.data与mz-carousel-item组件传入的data属性一致 --&gt;
      ({{pageIndex}}/{{length}}){{item.data.title}}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/mz-carousel&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [
        {color:'#6200ea',title:'标题1'},
        {color:'var(--color-success)',title:'标题2'},
        {color:'var(--color-warning)',title:'标题3'},
        {color:'var(--color-danger)',title:'标题4'}
      ]
    }
  },

  methods: {
    switchPage(index){
      this.$refs.carousel.setIndexAndRestartTimer(index)
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.custom-indicator{
  display: flex;
  background-color: #000;
  color: #fff;
}
.custom-indicator__item{
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
}
.custom-indicator__item:not(.custom-indicator__item--active):hover{
   background-color: #666;
}
.custom-indicator__item--active{
  background-color: #ddd;
  color: #000;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="carousel-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#carousel-api" title="Carousel API" data-level="3" data-href="#carousel-api">¶</a>Carousel API</h3>
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
<td>width</td>
<td>宽度</td>
<td>String</td>
<td></td>
<td>'100%'</td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
<td>String</td>
<td></td>
<td>'100%</td>
</tr>
<tr>
<td>initial-index</td>
<td>初始状态激活的幻灯片的索引，从 0 开始</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>delay</td>
<td>自动切换的时间间隔，单位为毫秒</td>
<td>Number</td>
<td></td>
<td>5000</td>
</tr>
<tr>
<td>transition</td>
<td>切换时的动画名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>reverseTransition</td>
<td>反方向切换时的动画名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>vertical</td>
<td>是否为垂直方向切换</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>arrow</td>
<td>箭头显示的时机</td>
<td>String</td>
<td>'always' / 'hover' / 'never'</td>
<td>'hover'</td>
</tr>
<tr>
<td>indicator</td>
<td>指示器的显示效果</td>
<td>String</td>
<td>'none' / 'line' / 'full-line' / 'circle'</td>
<td>'none'</td>
</tr>
<tr>
<td>indicatorPlacement</td>
<td>指示器的位置</td>
<td>String</td>
<td>'top' / 'bottom' / 'left' / 'right' / 'outside'</td>
<td>'bottom'</td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
<td>change</td>
<td>轮播切换事件</td>
<td>(index: number)</td>
</tr>
</tbody>
</table>
<h4 id="fang-fa" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#fang-fa" title="方法" data-level="4" data-href="#fang-fa">¶</a>方法</h4>
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
<td>setIndexAndRestartTimer</td>
<td>设置当前下标并重置计时器</td>
<td>(index)</td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
<td>轮播的内容</td>
<td></td>
</tr>
<tr>
<td>indicator</td>
<td>指示器</td>
<td>{item,index,pageIndex,length}</td>
</tr>
</tbody>
</table>
<h3 id="carouselitem-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#carouselitem-api" title="CarouselItem API" data-level="3" data-href="#carouselitem-api">¶</a>CarouselItem API</h3>
<h4 id="shu-xing-2" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2" title="属性" data-level="4" data-href="#shu-xing-2">¶</a>属性</h4>
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
<td>data</td>
<td>用来存储单个数据，与指示器作用域插槽的<code>item.data</code>一致</td>
<td>any</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao-2" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao-2" title="插槽" data-level="4" data-href="#cha-cao-2">¶</a>插槽</h4>
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
<td>轮播元素的内容</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="carouselindicator-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#carouselindicator-api" title="CarouselIndicator API" data-level="3" data-href="#carouselindicator-api">¶</a>CarouselIndicator API</h3>
<h4 id="shu-xing-3" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing-3" title="属性" data-level="4" data-href="#shu-xing-3">¶</a>属性</h4>
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
<td>placement</td>
<td>指示器的位置</td>
<td>String</td>
<td>'top' / 'bottom' / 'left' / 'right' / 'outside'</td>
<td>'bottom'</td>
</tr>
<tr>
<td>type</td>
<td>指示器的显示效果</td>
<td>String</td>
<td>'line' / 'full-line' / 'circle'</td>
<td>'none'</td>
</tr>
<tr>
<td>activeColor</td>
<td>选中时颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>inactiveColor</td>
<td>未选中时颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentCarousel',
  components: { CarouselDemo1: {}, CarouselDemo2: {
  data() {
    return {
      arrow: 'hover',
      arrowList: ['always', 'hover', 'never'],
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
}, CarouselDemo4: {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}, CarouselDemo5: {
  data() {
    return {
      list: [
        {color:'#6200ea',title:'标题1'},
        {color:'var(--color-success)',title:'标题2'},
        {color:'var(--color-warning)',title:'标题3'},
        {color:'var(--color-danger)',title:'标题4'}
      ]
    }
  },

  methods: {
    switchPage(index){
      this.$refs.carousel.setIndexAndRestartTimer(index)
    }
  }
} }
}
</script>
<style lang="scss">
.carousel-demo5{  
  .custom-indicator{
    display: flex;
    background-color: #000;
    color: #fff;
  }
  .custom-indicator__item{
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
  }
  .custom-indicator__item:not(.custom-indicator__item--active):hover{
     background-color: #666;
  }
  .custom-indicator__item--active{
    background-color: #ddd;
    color: #000;
  }
  }
</style>