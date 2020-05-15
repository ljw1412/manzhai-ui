<template>
  <div class="component-layout">
    <div class="update-datetime">文档更新时间：2020-05-15 19:11</div>
    <h2 id="layout-bu-ju" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#layout-bu-ju" title="Layout 布局" data-level="2" data-href="#layout-bu-ju">¶</a>Layout 布局</h2>
<h3 id="chang-jian-bu-ju" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#chang-jian-bu-ju" title="常见布局" data-level="3" data-href="#chang-jian-bu-ju">¶</a>常见布局</h3>
<demo-block>
        <template #example><layout-demo1 inline-template><div class="layout-demo1">
  <mz-layout class="layout-type">
    <mz-header>Header</mz-header>
    <mz-main>Main</mz-main>
    <mz-footer>Footer</mz-footer>
  </mz-layout>
  <br>
  <mz-layout class="layout-type">
    <mz-header>Header</mz-header>
    <mz-layout>
      <mz-aside>Aside</mz-aside>
      <mz-main>Main</mz-main>
    </mz-layout>
    <mz-footer>Footer</mz-footer>
  </mz-layout>
  <br>
  <mz-layout class="layout-type">
    <mz-aside>Aside</mz-aside>
    <mz-layout>
    <mz-header>Header</mz-header>
    <mz-main>Main</mz-main>
    <mz-footer>Footer</mz-footer>
    </mz-layout>
  </mz-layout>
</div></layout-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-layout class=&quot;layout-type&quot;&gt;
  &lt;mz-header&gt;Header&lt;/mz-header&gt;
  &lt;mz-main&gt;Main&lt;/mz-main&gt;
  &lt;mz-footer&gt;Footer&lt;/mz-footer&gt;
&lt;/mz-layout&gt;
&lt;br&gt;
&lt;mz-layout class=&quot;layout-type&quot;&gt;
  &lt;mz-header&gt;Header&lt;/mz-header&gt;
  &lt;mz-layout&gt;
    &lt;mz-aside&gt;Aside&lt;/mz-aside&gt;
    &lt;mz-main&gt;Main&lt;/mz-main&gt;
  &lt;/mz-layout&gt;
  &lt;mz-footer&gt;Footer&lt;/mz-footer&gt;
&lt;/mz-layout&gt;
&lt;br&gt;
&lt;mz-layout class=&quot;layout-type&quot;&gt;
  &lt;mz-aside&gt;Aside&lt;/mz-aside&gt;
  &lt;mz-layout&gt;
  &lt;mz-header&gt;Header&lt;/mz-header&gt;
  &lt;mz-main&gt;Main&lt;/mz-main&gt;
  &lt;mz-footer&gt;Footer&lt;/mz-footer&gt;
  &lt;/mz-layout&gt;
&lt;/mz-layout&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentLayout',
  components: { LayoutDemo1: {} }
}
</script>
<style lang="scss">

</style>