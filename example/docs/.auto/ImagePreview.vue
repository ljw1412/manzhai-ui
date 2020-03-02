<template>
  <div class="component-image-preview">
    <div class="update-datetime">文档更新时间：2020-03-02 18:50</div>
    <h2 id="imagepreview-tu-pian-yu-lan" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#imagepreview-tu-pian-yu-lan" title="ImagePreview 图片预览" data-level="2" data-href="#imagepreview-tu-pian-yu-lan">¶</a>ImagePreview 图片预览</h2>
<p>以页面全屏的形式预览图片。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><image-preview-demo1 inline-template><div class="image-preview-demo1">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview :visible.sync=&quot;visible&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="suo-lue-tu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#suo-lue-tu" title="缩略图" data-level="3" data-href="#suo-lue-tu">¶</a>缩略图</h3>
<p>有缩略图列表，支持按图切换。</p>
<demo-block>
        <template #example><image-preview-demo2 inline-template><div class="image-preview-demo2">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview thumbnail :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo2></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview thumbnail :visible.sync=&quot;visible&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
        require('@/static/image-star.jpg')
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
  name: 'ComponentImagePreview',
  components: { ImagePreviewDemo1: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo2: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
} }
}
</script>
<style lang="scss">

</style>