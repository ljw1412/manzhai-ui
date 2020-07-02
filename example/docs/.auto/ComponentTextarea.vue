<template>
  <div class="component-textarea">
    <div class="update-datetime">文档更新时间：2020-07-02 16:51</div>
    <h2 id="textarea-duo-xing-shu-ru-kuang" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#textarea-duo-xing-shu-ru-kuang" title="Textarea 多行输入框" data-level="2" data-href="#textarea-duo-xing-shu-ru-kuang">¶</a>Textarea 多行输入框</h2>
<p>能够输入多行文本内容的输入框。</p>
<demo-block>
        <template #example><textarea-demo1 inline-template><div class="textarea-demo1">
  <mz-textarea v-model="value"></mz-textarea>
</div></textarea-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-textarea v-model=&quot;value&quot;&gt;&lt;/mz-textarea&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentTextarea',
  components: { TextareaDemo1: {
  data (){
    return {
      value: ''
    }
  }
} }
}
</script>
<style lang="scss">

</style>