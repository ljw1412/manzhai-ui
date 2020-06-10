<template>
  <div class="component-pagination">
    <div class="update-datetime">文档更新时间：2020-06-10 16:19</div>
    <h2 id="pagination-fen-ye" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#pagination-fen-ye" title="Pagination 分页" data-level="2" data-href="#pagination-fen-ye">¶</a>Pagination 分页</h2>
<p>以分页的形式，展示大量的数据。</p>
<demo-block>
        <template #example><pagination-demo1 inline-template><div class="pagination-demo1">
  <mz-pagination v-model="index" 
    :page-size="10" :total="70"></mz-pagination>
  
  <mz-pagination v-model="index2" 
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index2" outlined
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index2" circle
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index2" outlined circle
    :page-size="10" :total="198"></mz-pagination>
  
  <mz-pagination v-model="index3" 
    :page-size="10" :page-count="100" :max="19"></mz-pagination>
</div></pagination-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-pagination v-model=&quot;index&quot; 
  :page-size=&quot;10&quot; :total=&quot;70&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; 
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; outlined
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; circle
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index2&quot; outlined circle
  :page-size=&quot;10&quot; :total=&quot;198&quot;&gt;&lt;/mz-pagination&gt;

&lt;mz-pagination v-model=&quot;index3&quot; 
  :page-size=&quot;10&quot; :page-count=&quot;100&quot; :max=&quot;19&quot;&gt;&lt;/mz-pagination&gt;

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
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentPagination',
  components: { PaginationDemo1: {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1
    }
  }
} }
}
</script>
<style lang="scss">

</style>