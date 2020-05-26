<template>
  <div class="component-table-simple">
    <div class="update-datetime">文档更新时间：2020-05-26 15:37</div>
    <h2 id="tablesimple-biao-ge-jian-yi-ban" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#tablesimple-biao-ge-jian-yi-ban" title="TableSimple 表格(简易版)" data-level="2" data-href="#tablesimple-biao-ge-jian-yi-ban">¶</a>TableSimple 表格(简易版)</h2>
<p>快速构建简单的表格。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><table-simple-demo1 inline-template><div class="table-simple-demo1">
  <mz-table-simple :data="data"></mz-table-simple>
</div></table-simple-demo1></template>
        <template #description><p><code>data</code>属性是一个二维数组。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-table-simple :data=&quot;data&quot;&gt;&lt;/mz-table-simple&gt;

&lt;script&gt;
export default {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="you-biao-tou" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#you-biao-tou" title="有表头" data-level="3" data-href="#you-biao-tou">¶</a>有表头</h3>
<demo-block>
        <template #example><table-simple-demo2 inline-template><div class="table-simple-demo2">
  <mz-table-simple :data="data" header></mz-table-simple>
</div></table-simple-demo2></template>
        <template #description><p>如果数组<code>header</code>为<code>true</code>，那么传入的数组下标为0的数组为表头。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-table-simple :data=&quot;data&quot; header&gt;&lt;/mz-table-simple&gt;

&lt;script&gt;
export default {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-xian-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-xian-shi" title="自定义显示" data-level="3" data-href="#zi-ding-yi-xian-shi">¶</a>自定义显示</h3>
<p>进行简单的自定义样式。</p>
<demo-block>
        <template #example><table-simple-demo3 inline-template><div class="table-simple-demo3">
  <mz-table-simple :data="data" header>
    <template #th="{item}">{{item}}</template>
    <template #td="{item}">{{item.value}}</template>
  </mz-table-simple>
</div></table-simple-demo3></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-table-simple :data=&quot;data&quot; header&gt;
  &lt;template #th=&quot;{item}&quot;&gt;{{item}}&lt;/template&gt;
  &lt;template #td=&quot;{item}&quot;&gt;{{item.value}}&lt;/template&gt;
&lt;/mz-table-simple&gt;

&lt;script&gt;
export default {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        [{ value: '2010'},{ value: '庚寅'}],
        [{ value: '2011'},{ value: '辛卯'}],
        [{ value: '2012'},{ value: '壬辰'}],
        [{ value: '2013'},{ value: '癸巳'}],
        [{ value: '2014'},{ value: '甲午'}],
        [{ value: '2015'},{ value: '乙未'}],
        [{ value: '2016'},{ value: '丙申'}],
        [{ value: '2017'},{ value: '丁酉'}],
        [{ value: '2018'},{ value: '庚申'}],
        [{ value: '2019'},{ value: '己亥'}],
        [{ value: '2020'},{ value: '庚子'}],   
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentTableSimple',
  components: { TableSimpleDemo1: {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}, TableSimpleDemo2: {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}, TableSimpleDemo3: {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        [{ value: '2010'},{ value: '庚寅'}],
        [{ value: '2011'},{ value: '辛卯'}],
        [{ value: '2012'},{ value: '壬辰'}],
        [{ value: '2013'},{ value: '癸巳'}],
        [{ value: '2014'},{ value: '甲午'}],
        [{ value: '2015'},{ value: '乙未'}],
        [{ value: '2016'},{ value: '丙申'}],
        [{ value: '2017'},{ value: '丁酉'}],
        [{ value: '2018'},{ value: '庚申'}],
        [{ value: '2019'},{ value: '己亥'}],
        [{ value: '2020'},{ value: '庚子'}],   
      ]
    }
  }
} }
}
</script>
<style lang="scss">

</style>