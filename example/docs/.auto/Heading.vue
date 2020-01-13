<template>
  <div class="component-heading">
    <div class="update-datetime">文档更新时间：2020-01-13 09:26</div>
    <h2 id="heading-biao-ti" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#heading-biao-ti" title="Heading 标题">¶</a><div class="mz-header__title">Heading 标题</div></h2>
<p>有着不同级别的标题。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法">¶</a><div class="mz-header__title">基本用法</div></h3>
<p>标题的基本用法。</p>
<demo-block>
        <template #example><heading-demo1 inline-template><div class="heading-demo1">
  <mz-heading :level="1">Heading 1</mz-heading>
  <mz-heading :level="2">Heading 2</mz-heading>
  <mz-heading :level="3">Heading 3</mz-heading>
  <mz-heading :level="4">Heading 4</mz-heading>
  <mz-heading :level="5">Heading 5</mz-heading>
  <mz-heading :level="6">Heading 6</mz-heading>
  <mz-heading :level="7">Heading 7</mz-heading>
  <mz-heading :level="8">Heading 8</mz-heading>
  <mz-heading :level="9">Heading 9</mz-heading>
</div></heading-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-heading :level=&quot;1&quot;&gt;Heading 1&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;2&quot;&gt;Heading 2&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;3&quot;&gt;Heading 3&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;4&quot;&gt;Heading 4&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;5&quot;&gt;Heading 5&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;6&quot;&gt;Heading 6&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;7&quot;&gt;Heading 7&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;8&quot;&gt;Heading 8&lt;/mz-heading&gt;
&lt;mz-heading :level=&quot;9&quot;&gt;Heading 9&lt;/mz-heading&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { HeadingDemo1: {} }
}
</script>