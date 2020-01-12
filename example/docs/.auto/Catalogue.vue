<template>
  <div class="component-catalogue">
    <div class="update-datetime">文档更新时间：2020-01-12 14:23</div>
    <h2 id="catalogue-mu-lu" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#catalogue-mu-lu">¶</a>Catalogue 目录</h2>
<p>用于列出页面目录。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><catalogue-demo1 inline-template><div class="catalogue-demo1">
  <mz-catalogue manual>
    <mz-catalogue-item title="标题1" :level="1">
      <mz-catalogue-item title="标题1-1" :level="2">
        <mz-catalogue-item title="标题1-1-1" :level="3"></mz-catalogue-item>
        <mz-catalogue-item title="标题1-1-2" :level="3"></mz-catalogue-item>
      </mz-catalogue-item>
      <mz-catalogue-item title="标题1-2" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
    <mz-catalogue-item title="标题2" :level="1"></mz-catalogue-item>
    <mz-catalogue-item title="标题3" :level="1">
      <mz-catalogue-item title="标题3-1" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
  </mz-catalogue>
</div></catalogue-demo1></template>
        <template #description><p>当 catalogue 组件的<code>manual</code>属性为 true，默认插槽才可以使用。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-catalogue manual&gt;
  &lt;mz-catalogue-item title=&quot;标题1&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题1-1&quot; :level=&quot;2&quot;&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-1&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-2&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
    &lt;/mz-catalogue-item&gt;
    &lt;mz-catalogue-item title=&quot;标题1-2&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题2&quot; :level=&quot;1&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题3&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题3-1&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
&lt;/mz-catalogue&gt;
</code></pre></template></demo-block><h3 id="mao-dian-mu-lu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#mao-dian-mu-lu">¶</a>锚点目录</h3>
<p>有位置跳转功能的目录。</p>
<demo-block>
        <template #example><catalogue-demo2 inline-template><div class="catalogue-demo2">
  <mz-row>
    <mz-col :span="16" 
      id="demo-scroll-container" 
      style="height: 300px; overflow-y: auto;">
      <div id="anchor-1">位置1</div>
      <div style="height: 200px;"></div>
      <div id="anchor-2">位置2</div>
      <div style="height: 200px;"></div>
      <div id="anchor-3">位置3</div>
      <div style="height: 200px;"></div>
      <div id="anchor-4">位置4</div>
    </mz-col>
  
   <mz-col :span="8">
      <mz-catalogue manual>
        <mz-catalogue-item title="位置1" :level="1" target="anchor-1"/>
        <mz-catalogue-item title="位置2" :level="1" target="anchor-2"/>
        <mz-catalogue-item title="位置3" :level="1" target="anchor-3"/>
        <mz-catalogue-item title="位置4" :level="1" target="anchor-4"/>
      </mz-catalogue>
    </mz-col>
  </mz-row>
</div></catalogue-demo2></template>
        <template #description><p>catalogue-item 的<code>target</code>属性指向页面锚点元素的 id。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;16&quot; 
    id=&quot;demo-scroll-container&quot; 
    style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
    &lt;div id=&quot;anchor-1&quot;&gt;位置1&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-2&quot;&gt;位置2&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-3&quot;&gt;位置3&lt;/div&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;anchor-4&quot;&gt;位置4&lt;/div&gt;
  &lt;/mz-col&gt;

 &lt;mz-col :span=&quot;8&quot;&gt;
    &lt;mz-catalogue manual&gt;
      &lt;mz-catalogue-item title=&quot;位置1&quot; :level=&quot;1&quot; target=&quot;anchor-1&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置2&quot; :level=&quot;1&quot; target=&quot;anchor-2&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置3&quot; :level=&quot;1&quot; target=&quot;anchor-3&quot;/&gt;
      &lt;mz-catalogue-item title=&quot;位置4&quot; :level=&quot;1&quot; target=&quot;anchor-4&quot;/&gt;
    &lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block><h3 id="gu-ding-ding-wei-mu-lu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#gu-ding-ding-wei-mu-lu">¶</a>固定定位目录</h3>
<p>将目录固定在某一个位置。</p>
<demo-block>
        <template #example><catalogue-demo3 inline-template><div class="catalogue-demo3">
  <div>
    固定与偏移: <mz-switch v-model="fixed" /> 
    <span class="demo-font-size-14">{{fixed ? '固定' : '非固定'}}</span>
    <mz-row :gutter="10">
      <mz-col :sm="6">
        <mz-input v-model="offset.top" label="上" />
      </mz-col>
      <mz-col :sm="6">
        <mz-input v-model="offset.right" label="右" />
      </mz-col>
      <mz-col :sm="6">
        <mz-input v-model="offset.bottom" label="下" />
      </mz-col>
      <mz-col :sm="6">
        <mz-input v-model="offset.left" label="左" />
      </mz-col>
    </mz-row>
  
    <mz-catalogue manual :fixed="fixed" :offset="offset">
      <mz-catalogue-item title="位置1" :level="1" target="anchor-1"/>
      <mz-catalogue-item title="位置2" :level="1" target="anchor-2"/>
      <mz-catalogue-item title="位置3" :level="1" target="anchor-3"/>
      <mz-catalogue-item title="位置4" :level="1" target="anchor-4"/>
    </mz-catalogue>
  </div>
</div></catalogue-demo3></template>
        <template #description><p><code>fixed</code>属性控制是否固定。<code>offset</code>控制固定的偏移。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  固定与偏移: &lt;mz-switch v-model=&quot;fixed&quot; /&gt; 
  &lt;span class=&quot;demo-font-size-14&quot;&gt;{{fixed ? '固定' : '非固定'}}&lt;/span&gt;
  &lt;mz-row :gutter=&quot;10&quot;&gt;
    &lt;mz-col :sm=&quot;6&quot;&gt;
      &lt;mz-input v-model=&quot;offset.top&quot; label=&quot;上&quot; /&gt;
    &lt;/mz-col&gt;
    &lt;mz-col :sm=&quot;6&quot;&gt;
      &lt;mz-input v-model=&quot;offset.right&quot; label=&quot;右&quot; /&gt;
    &lt;/mz-col&gt;
    &lt;mz-col :sm=&quot;6&quot;&gt;
      &lt;mz-input v-model=&quot;offset.bottom&quot; label=&quot;下&quot; /&gt;
    &lt;/mz-col&gt;
    &lt;mz-col :sm=&quot;6&quot;&gt;
      &lt;mz-input v-model=&quot;offset.left&quot; label=&quot;左&quot; /&gt;
    &lt;/mz-col&gt;
  &lt;/mz-row&gt;

  &lt;mz-catalogue manual :fixed=&quot;fixed&quot; :offset=&quot;offset&quot;&gt;
    &lt;mz-catalogue-item title=&quot;位置1&quot; :level=&quot;1&quot; target=&quot;anchor-1&quot;/&gt;
    &lt;mz-catalogue-item title=&quot;位置2&quot; :level=&quot;1&quot; target=&quot;anchor-2&quot;/&gt;
    &lt;mz-catalogue-item title=&quot;位置3&quot; :level=&quot;1&quot; target=&quot;anchor-3&quot;/&gt;
    &lt;mz-catalogue-item title=&quot;位置4&quot; :level=&quot;1&quot; target=&quot;anchor-4&quot;/&gt;
  &lt;/mz-catalogue&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data(){
    return {
      fixed: false,
      offset: {
        top: '',
        right: '50px',
        bottom: '50px',
        left: ''
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="you-ce-bian-xian-mu-lu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#you-ce-bian-xian-mu-lu">¶</a>有侧边线目录</h3>
<p>左侧有节点线条。</p>
<demo-block>
        <template #example><catalogue-demo4 inline-template><div class="catalogue-demo4">
  <mz-catalogue manual sidebar>
    <mz-catalogue-item title="标题1" :level="1">
      <mz-catalogue-item title="标题1-1" :level="2">
        <mz-catalogue-item title="标题1-1-1" :level="3"></mz-catalogue-item>
        <mz-catalogue-item title="标题1-1-2" :level="3"></mz-catalogue-item>
      </mz-catalogue-item>
      <mz-catalogue-item title="标题1-2" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
    <mz-catalogue-item title="标题2" :level="1"></mz-catalogue-item>
    <mz-catalogue-item title="标题3" :level="1">
      <mz-catalogue-item title="标题3-1" :level="2"></mz-catalogue-item>
    </mz-catalogue-item>
  </mz-catalogue>
</div></catalogue-demo4></template>
        <template #description><p>通过<code>sidebar</code>属性控制线条显示与否。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-catalogue manual sidebar&gt;
  &lt;mz-catalogue-item title=&quot;标题1&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题1-1&quot; :level=&quot;2&quot;&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-1&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
      &lt;mz-catalogue-item title=&quot;标题1-1-2&quot; :level=&quot;3&quot;&gt;&lt;/mz-catalogue-item&gt;
    &lt;/mz-catalogue-item&gt;
    &lt;mz-catalogue-item title=&quot;标题1-2&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题2&quot; :level=&quot;1&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;mz-catalogue-item title=&quot;标题3&quot; :level=&quot;1&quot;&gt;
    &lt;mz-catalogue-item title=&quot;标题3-1&quot; :level=&quot;2&quot;&gt;&lt;/mz-catalogue-item&gt;
  &lt;/mz-catalogue-item&gt;
&lt;/mz-catalogue&gt;
</code></pre></template></demo-block><h3 id="yu-mao-dian-lian-dong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yu-mao-dian-lian-dong">¶</a>与锚点联动</h3>
<p>配合 <a href="anchor">锚点(Anchor)组件</a> 使用效果更好。</p>
<demo-block>
        <template #example><catalogue-demo5 inline-template><div class="catalogue-demo5">
  <mz-row>
    <mz-col :span="12" 
      id="demo-anchor-scroll-container" 
      style="height: 300px; overflow-y: auto;">
      <mz-anchor name="catalogue-anchor-1" anchorClass="demo-anchor"
        title="锚点-1" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="catalogue-anchor-2" anchorClass="demo-anchor"
        title="锚点-2" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="catalogue-anchor-3" anchorClass="demo-anchor"
        title="锚点-3" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="catalogue-anchor-4" anchorClass="demo-anchor"
        title="锚点-4" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="catalogue-anchor-5" anchorClass="demo-anchor"
        title="锚点-5" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
    </mz-col>
  
    <mz-col :span="12">
      <mz-catalogue sidebar
        container="#demo-anchor-scroll-container"  
        anchorClassName=".demo-anchor"></mz-catalogue>
    </mz-col>
  </mz-row>
</div></catalogue-demo5></template>
        <template #description><p>将 catalogue 设置 <code>anchorClassName</code>(自动匹配的锚点class名称)，与 anchor 设置 <code>anchorClass</code>(锚点class名称)保持一致。这样可以避免锚点出现互串的情况。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;12&quot; 
    id=&quot;demo-anchor-scroll-container&quot; 
    style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
    &lt;mz-anchor name=&quot;catalogue-anchor-1&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-1&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;catalogue-anchor-2&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-2&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;catalogue-anchor-3&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-3&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;catalogue-anchor-4&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-4&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;catalogue-anchor-5&quot; anchorClass=&quot;demo-anchor&quot;
      title=&quot;锚点-5&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
  &lt;/mz-col&gt;

  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;mz-catalogue sidebar
      container=&quot;#demo-anchor-scroll-container&quot;  
      anchorClassName=&quot;.demo-anchor&quot;&gt;&lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block><h3 id="ping-hua-gun-dong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ping-hua-gun-dong">¶</a>平滑滚动</h3>
<p>使用JS方法触发滚动效果。此时不会采用hash。</p>
<demo-block>
        <template #example><catalogue-demo6 inline-template><div class="catalogue-demo6">
  <mz-row>
    <mz-col :span="12" 
      id="demo-anchor-scroll-container-2" 
      style="height: 300px; overflow-y: auto;">
      <mz-anchor name="scroll-by-js-anchor-1" anchorClass="scroll-by-js-anchor"
        title="锚点-1" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="scroll-by-js-anchor-2" anchorClass="scroll-by-js-anchor"
        title="锚点-1.1" :level="5"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="scroll-by-js-anchor-3" anchorClass="scroll-by-js-anchor"
        title="锚点-1.2" :level="5"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="scroll-by-js-anchor-4" anchorClass="scroll-by-js-anchor"
        title="锚点-2" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
      <mz-anchor name="scroll-by-js-anchor-5" anchorClass="scroll-by-js-anchor"
        title="锚点-3" :level="4"></mz-anchor>
      <div style="height: 200px;"></div>
    </mz-col>
  
    <mz-col :span="12">
      <mz-catalogue sidebar scroll-by-js 
        container="#demo-anchor-scroll-container-2"  
        anchorClassName=".scroll-by-js-anchor"></mz-catalogue>
    </mz-col>
  </mz-row>
</div></catalogue-demo6></template>
        <template #description><p>注意: 该方法使用了<code>Element.scrollIntoView({ behavior: 'smooth' })</code>，浏览器兼容性<code>firefox 36+ | chrome 61+ | Opera 48+</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
  &lt;mz-col :span=&quot;12&quot; 
    id=&quot;demo-anchor-scroll-container-2&quot; 
    style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
    &lt;mz-anchor name=&quot;scroll-by-js-anchor-1&quot; anchorClass=&quot;scroll-by-js-anchor&quot;
      title=&quot;锚点-1&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;scroll-by-js-anchor-2&quot; anchorClass=&quot;scroll-by-js-anchor&quot;
      title=&quot;锚点-1.1&quot; :level=&quot;5&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;scroll-by-js-anchor-3&quot; anchorClass=&quot;scroll-by-js-anchor&quot;
      title=&quot;锚点-1.2&quot; :level=&quot;5&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;scroll-by-js-anchor-4&quot; anchorClass=&quot;scroll-by-js-anchor&quot;
      title=&quot;锚点-2&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-anchor name=&quot;scroll-by-js-anchor-5&quot; anchorClass=&quot;scroll-by-js-anchor&quot;
      title=&quot;锚点-3&quot; :level=&quot;4&quot;&gt;&lt;/mz-anchor&gt;
    &lt;div style=&quot;height: 200px;&quot;&gt;&lt;/div&gt;
  &lt;/mz-col&gt;

  &lt;mz-col :span=&quot;12&quot;&gt;
    &lt;mz-catalogue sidebar scroll-by-js 
      container=&quot;#demo-anchor-scroll-container-2&quot;  
      anchorClassName=&quot;.scroll-by-js-anchor&quot;&gt;&lt;/mz-catalogue&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;
</code></pre></template></demo-block><h3 id="catalogue-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#catalogue-api">¶</a>Catalogue API</h3>
<h4 id="shu-xing" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing">¶</a>属性</h4>
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
<td>fixed</td>
<td>是否固定定位</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>absolute</td>
<td>是否绝对定位</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>offset</td>
<td>定位偏移量</td>
<td>Object:{left,right,top,bottom}</td>
<td></td>
<td></td>
</tr>
<tr>
<td>container</td>
<td>锚点所在父级</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>scrollByJs</td>
<td>是否使用js滚动</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>zIndex</td>
<td>层级</td>
<td>Number</td>
<td></td>
<td>1000</td>
</tr>
<tr>
<td>manual</td>
<td>是否为手动目录</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>flat</td>
<td>扁平化目录，仅在非手动模式有效</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>anchorClassName</td>
<td>锚点的类名</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sidebar</td>
<td>是否有侧边线</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sidebarColor</td>
<td>侧边线颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sidebarPointColor</td>
<td>侧边线点的颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sidebarArrowColor</td>
<td>侧边线箭头的颜色</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="fang-fa" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#fang-fa">¶</a>方法</h4>
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
<td>initCatalogue</td>
<td>在自动模式有效，初始化目录，自动获取锚点。</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao">¶</a>插槽</h4>
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
<td>-</td>
<td>在手动模式有效，目录的内容</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="catalogueitem-api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#catalogueitem-api">¶</a>CatalogueItem API</h3>
<h4 id="shu-xing-2" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2">¶</a>属性</h4>
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
<td>title</td>
<td>标题</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>active</td>
<td>是否选中</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>等级</td>
<td>Number</td>
<td>1-9</td>
<td></td>
</tr>
<tr>
<td>target</td>
<td>锚点目标名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>scrollByJs</td>
<td>是否使用js滚动</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="cha-cao-2" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao-2">¶</a>插槽</h4>
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
<td>-</td>
<td>目录子级</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shi-jian">¶</a>事件</h4>
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
<td>click</td>
<td>点击事件</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  components: { CatalogueDemo1: {}, CatalogueDemo2: {}, CatalogueDemo3: {
  data(){
    return {
      fixed: false,
      offset: {
        top: '',
        right: '50px',
        bottom: '50px',
        left: ''
      }
    }
  }
}, CatalogueDemo4: {}, CatalogueDemo5: {}, CatalogueDemo6: {} }
}
</script>