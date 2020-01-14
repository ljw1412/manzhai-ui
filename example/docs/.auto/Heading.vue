<template>
  <div class="component-heading">
    <div class="update-datetime">文档更新时间：2020-01-14 17:57</div>
    <h2 id="heading-biao-ti" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#heading-biao-ti" title="Heading 标题" data-level="2" data-href="#heading-biao-ti">¶</a><div class="mz-header__title">Heading 标题</div></h2>
<p>有着不同级别的标题。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a><div class="mz-header__title">基本用法</div></h3>
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
</code></pre></template></demo-block><h3 id="mao-dian-biao-ti" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#mao-dian-biao-ti" title="锚点标题" data-level="3" data-href="#mao-dian-biao-ti">¶</a><div class="mz-header__title">锚点标题</div></h3>
<p>带锚点的标题。</p>
<demo-block>
        <template #example><heading-demo2 inline-template><div class="heading-demo2">
  <mz-heading id="heading-1" :level="1" anchor>Heading 1</mz-heading>
  <mz-heading id="heading-2" :level="2" anchor>Heading 2</mz-heading>
  <mz-heading id="heading-3" :level="3" anchor>Heading 3</mz-heading>
  <mz-heading id="heading-4" :level="4" anchor>Heading 4</mz-heading>
  <mz-heading id="heading-5" :level="5" anchor>Heading 5</mz-heading>
  <mz-heading id="heading-6" :level="6" anchor>Heading 6</mz-heading>
  <mz-heading id="heading-7" :level="7" anchor>Heading 7</mz-heading>
  <mz-heading id="heading-8" :level="8" anchor>Heading 8</mz-heading>
  <mz-heading id="heading-9" :level="9" anchor>Heading 9</mz-heading>
</div></heading-demo2></template>
        <template #description><p>当<code>anchor</code>属性值为 true,会为标题带上锚点，此时 heading 必须有 id。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-heading id=&quot;heading-1&quot; :level=&quot;1&quot; anchor&gt;Heading 1&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-2&quot; :level=&quot;2&quot; anchor&gt;Heading 2&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-3&quot; :level=&quot;3&quot; anchor&gt;Heading 3&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-4&quot; :level=&quot;4&quot; anchor&gt;Heading 4&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-5&quot; :level=&quot;5&quot; anchor&gt;Heading 5&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-6&quot; :level=&quot;6&quot; anchor&gt;Heading 6&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-7&quot; :level=&quot;7&quot; anchor&gt;Heading 7&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-8&quot; :level=&quot;8&quot; anchor&gt;Heading 8&lt;/mz-heading&gt;
&lt;mz-heading id=&quot;heading-9&quot; :level=&quot;9&quot; anchor&gt;Heading 9&lt;/mz-heading&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { HeadingDemo1: {}, HeadingDemo2: {} }
}
</script>