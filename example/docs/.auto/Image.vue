<template>
  <div class="component-image">
    <div class="update-datetime">文档更新时间：2020-01-19 09:33</div>
    <h2 id="tu-pian" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tu-pian" title="图片" data-level="2" data-href="#tu-pian">¶</a>图片</h2>
<h3 id="ji-ben-yu-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yu-fa" title="基本语法" data-level="3" data-href="#ji-ben-yu-fa">¶</a>基本语法</h3>
<demo-block>
        <template #example><image-demo1 inline-template><div class="image-demo1">
  <mz-input v-model="src" label="图片地址"/>
  <br>
  <mz-image :src="src"
    width="100px"
    height='100px'
    fit="contain"></mz-image>
  <br>
  <mz-image background
    :src="src"
    width="100px"
    height='100px'
    fit="contain"></mz-image>
</div></image-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;src&quot; label=&quot;图片地址&quot;/&gt;
&lt;br&gt;
&lt;mz-image :src=&quot;src&quot;
  width=&quot;100px&quot;
  height='100px'
  fit=&quot;contain&quot;&gt;&lt;/mz-image&gt;
&lt;br&gt;
&lt;mz-image background
  :src=&quot;src&quot;
  width=&quot;100px&quot;
  height='100px'
  fit=&quot;contain&quot;&gt;&lt;/mz-image&gt;

&lt;script&gt;
export default {
  data() {
    return {
      src: 'https://www.baidu.com/img/bd_logo1.png'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { ImageDemo1: {
  data() {
    return {
      src: 'https://www.baidu.com/img/bd_logo1.png'
    }
  }
} }
}
</script>
<style lang="scss">

</style>