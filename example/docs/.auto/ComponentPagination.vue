<template>
  <div class="component-pagination">
    <div class="update-datetime">文档更新时间：2020-06-11 15:43</div>
    <h2 id="pagination-fen-ye" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#pagination-fen-ye" title="Pagination 分页" data-level="2" data-href="#pagination-fen-ye">¶</a>Pagination 分页</h2>
<p>以分页的形式，展示大量的数据。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><pagination-demo1 inline-template><div class="pagination-demo1">
  <mz-pagination v-model="index" 
    :page-size="10" :total="70"></mz-pagination>
  
  <mz-pagination v-model="index2" 
    :page-size="10" :total="198"></mz-pagination>
</div></pagination-demo1></template>
        <template #description><p><code>index/v-model</code>绑定当前页码。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-pagination v-model=&quot;index&quot; 
  :page-size=&quot;10&quot; :total=&quot;70&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; 
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;script&gt;
export default {
  data (){
    return {
      index: 1,
      index2: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="she-zhi-zui-da-xian-shi-ye-ma-shu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#she-zhi-zui-da-xian-shi-ye-ma-shu" title="设置最大显示页码数" data-level="3" data-href="#she-zhi-zui-da-xian-shi-ye-ma-shu">¶</a>设置最大显示页码数</h3>
<demo-block>
        <template #example><pagination-demo2 inline-template><div class="pagination-demo2">
  <mz-pagination 
    v-model="index" 
    :page-size="10"
    :total="198"
    :max="13"></mz-pagination>
</div></pagination-demo2></template>
        <template #description><p><code>max</code>属性设置最大显示页码数，即总页数超过<code>max</code>会折叠多余的页码按钮。默认值<code>7</code>,可选值<code>4到20之间的奇数</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-pagination 
  v-model=&quot;index&quot; 
  :page-size=&quot;10&quot;
  :total=&quot;198&quot;
  :max=&quot;13&quot;&gt;&lt;/mz-pagination&gt;

&lt;script&gt;
export default {
  data (){
    return {
      index: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yuan-jiao-he-wai-bian-kuang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#yuan-jiao-he-wai-bian-kuang" title="圆角和外边框" data-level="3" data-href="#yuan-jiao-he-wai-bian-kuang">¶</a>圆角和外边框</h3>
<demo-block>
        <template #example><pagination-demo3 inline-template><div class="pagination-demo3">
  <mz-pagination v-model="index2" outlined
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index2" circle
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index3" outlined circle
    :page-size="10" :total="198"></mz-pagination>
</div></pagination-demo3></template>
        <template #description><p><code>outlined</code>和<code>circle</code>分别控制是否显示外边框和是否为圆角。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-pagination v-model=&quot;index2&quot; outlined
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; circle
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index3&quot; outlined circle
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;script&gt;
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-bu-ju" title="自定义布局" data-level="3" data-href="#zi-ding-yi-bu-ju">¶</a>自定义布局</h3>
<demo-block>
        <template #example><pagination-demo4 inline-template><div class="pagination-demo4">
  <span class="demo-font-size-14">带总数</span>
  <mz-pagination 
    v-model="index" 
    :layout="['total', 'prev', 'pager', 'next']"
    :page-size="10" 
    :total="100"></mz-pagination>
  <span class="demo-font-size-14">自选每页显示条数</span>
  <mz-pagination 
    v-model="index2" 
    :layout="['sizes','prev', 'pager', 'next']"
    :page-size="10" 
    :total="100"></mz-pagination>
  <span class="demo-font-size-14">跳转到指定页数</span>
  <mz-pagination 
    v-model="index3" 
    :layout="['prev', 'pager', 'next', 'jumper']"
    :page-size="10" 
    :total="100"></mz-pagination>
  <span class="demo-font-size-14">全部功能</span>
  <mz-pagination 
    v-model="index4" 
    :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
    :page-size="10" 
    :total="100"></mz-pagination>
</div></pagination-demo4></template>
        <template #description><p>通过<code>layout</code>可以自由设定分页组件的布局。可选值<code>prev</code>,<code>next</code>,<code>sizes</code>,<code>pager</code>,<code>jumper</code>,<code>total</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;span class=&quot;demo-font-size-14&quot;&gt;带总数&lt;/span&gt;
&lt;mz-pagination 
  v-model=&quot;index&quot; 
  :layout=&quot;['total', 'prev', 'pager', 'next']&quot;
  :page-size=&quot;10&quot; 
  :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;
&lt;span class=&quot;demo-font-size-14&quot;&gt;自选每页显示条数&lt;/span&gt;
&lt;mz-pagination 
  v-model=&quot;index2&quot; 
  :layout=&quot;['sizes','prev', 'pager', 'next']&quot;
  :page-size=&quot;10&quot; 
  :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;
&lt;span class=&quot;demo-font-size-14&quot;&gt;跳转到指定页数&lt;/span&gt;
&lt;mz-pagination 
  v-model=&quot;index3&quot; 
  :layout=&quot;['prev', 'pager', 'next', 'jumper']&quot;
  :page-size=&quot;10&quot; 
  :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;
&lt;span class=&quot;demo-font-size-14&quot;&gt;全部功能&lt;/span&gt;
&lt;mz-pagination 
  v-model=&quot;index4&quot; 
  :layout=&quot;['total', 'sizes', 'prev', 'pager', 'next', 'jumper']&quot;
  :page-size=&quot;10&quot; 
  :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;

&lt;script&gt;
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1,
      index4: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-da-xiao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bu-tong-da-xiao" title="不同大小" data-level="3" data-href="#bu-tong-da-xiao">¶</a>不同大小</h3>
<demo-block>
        <template #example><pagination-demo5 inline-template><div class="pagination-demo5">
  <mz-pagination v-model="index" size="small"
    :page-size="10" :total="100"></mz-pagination>
  
  <mz-pagination v-model="index2" size="medium"
    :page-size="10" :total="100"></mz-pagination>
  
  <mz-pagination v-model="index3" 
    :page-size="10" :total="100"></mz-pagination>
  
  <mz-pagination v-model="index4" size="large"
    :page-size="10" :total="100"></mz-pagination>
</div></pagination-demo5></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-pagination v-model=&quot;index&quot; size=&quot;small&quot;
  :page-size=&quot;10&quot; :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; size=&quot;medium&quot;
  :page-size=&quot;10&quot; :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index3&quot; 
  :page-size=&quot;10&quot; :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index4&quot; size=&quot;large&quot;
  :page-size=&quot;10&quot; :total=&quot;100&quot;&gt;&lt;/mz-pagination&gt;

&lt;script&gt;
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1,
      index4: 1
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
<td>index/v-model</td>
<td>当前页码</td>
<td>Number</td>
<td></td>
<td>1</td>
</tr>
<tr>
<td>pageSize</td>
<td>每页显示条目个数，支持 .sync 修饰符</td>
<td>Number</td>
<td></td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>总条目数</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pageCount</td>
<td>总页数，与total二选一</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>max</td>
<td>最大页码按钮的数量，当总页数超过该值时会折叠</td>
<td>Number</td>
<td>4到20之间的奇数</td>
<td>7</td>
</tr>
<tr>
<td>pageSizes</td>
<td>每页显示个数选择器的选项设置，需要配合total属性</td>
<td>number[]</td>
<td></td>
<td>[10, 20, 30, 40, 50]</td>
</tr>
<tr>
<td>outlined</td>
<td>是否使用边框模式</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>circle</td>
<td>是否为圆型</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>layout</td>
<td>布局</td>
<td>string[]</td>
<td><code>prev</code>,<code>next</code>,<code>sizes</code>,<code>pager</code>,<code>jumper</code>,<code>total</code></td>
<td>['prev', 'pager', 'next']</td>
</tr>
<tr>
<td>totalText</td>
<td>总数文案</td>
<td>String</td>
<td></td>
<td>'共 %d 条'</td>
</tr>
<tr>
<td>sizeText</td>
<td>每页显示数量的文案</td>
<td>String</td>
<td></td>
<td>'%d 条/页'</td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
<td>当前页码改变事件</td>
<td>(num:Number)</td>
</tr>
<tr>
<td>size-change</td>
<td>每页显示个数改变事件</td>
<td>(size:Number)</td>
</tr>
<tr>
<td>prev-click</td>
<td>点击上一页改变当前页后触发</td>
<td>(index:Number)</td>
</tr>
<tr>
<td>next-click</td>
<td>点击下一页改变当前页后触发</td>
<td>(index:Number)</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentPagination',
  components: { PaginationDemo1: {
  data (){
    return {
      index: 1,
      index2: 1
    }
  }
}, PaginationDemo2: {
  data (){
    return {
      index: 1
    }
  }
}, PaginationDemo3: {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1
    }
  }
}, PaginationDemo4: {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1,
      index4: 1
    }
  }
}, PaginationDemo5: {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1,
      index4: 1
    }
  }
} }
}
</script>
<style lang="scss">

</style>