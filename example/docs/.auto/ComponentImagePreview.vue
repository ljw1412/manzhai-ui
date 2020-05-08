<template>
  <div class="component-image-preview">
    <div class="update-datetime">文档更新时间：2020-05-08 19:26</div>
    <h2 id="imagepreview-tu-pian-yu-lan" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#imagepreview-tu-pian-yu-lan" title="ImagePreview 图片预览" data-level="2" data-href="#imagepreview-tu-pian-yu-lan">¶</a>ImagePreview 图片预览</h2>
<p>以页面全屏的形式预览图片。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><image-preview-demo1 inline-template><div class="image-preview-demo1">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo1></template>
        <template #description><p><code>images</code>传递图片列表。</p>
</template>
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
        require('@example/static/image-star.jpg')
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
        <template #description><p><code>thumbnail</code>控制是否显示缩略图。</p>
</template>
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
        require('@example/static/image-star.jpg')
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-bo-fang" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ke-bo-fang" title="可播放" data-level="3" data-href="#ke-bo-fang">¶</a>可播放</h3>
<p>能够定时播放。</p>
<demo-block>
        <template #example><image-preview-demo3 inline-template><div class="image-preview-demo3">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview playable :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo3></template>
        <template #description><p><code>playable</code>控制是否能够自动轮播。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview playable :visible.sync=&quot;visible&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xun-huan-yu-lan" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xun-huan-yu-lan" title="循环预览" data-level="3" data-href="#xun-huan-yu-lan">¶</a>循环预览</h3>
<p>最后一张的下一张为第一张。</p>
<demo-block>
        <template #example><image-preview-demo4 inline-template><div class="image-preview-demo4">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview loop :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo4></template>
        <template #description><p><code>loop</code>控制是否能够循环切换。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview loop :visible.sync=&quot;visible&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tu-pian-cao-zuo-lan" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#tu-pian-cao-zuo-lan" title="图片操作栏" data-level="3" data-href="#tu-pian-cao-zuo-lan">¶</a>图片操作栏</h3>
<p>对图片进行缩放的操作栏。</p>
<demo-block>
        <template #example><image-preview-demo5 inline-template><div class="image-preview-demo5">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview actionbar :visible.sync="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo5></template>
        <template #description><p><code>actionbar</code>控制是否显示操作栏。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview actionbar :visible.sync=&quot;visible&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shi-yong-zhi-ling-xing-shi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zhi-ling-xing-shi" title="使用指令形式" data-level="3" data-href="#shi-yong-zhi-ling-xing-shi">¶</a>使用指令形式</h3>
<p>使用$imagePreview指令进行控制预览。</p>
<demo-block>
        <template #example><image-preview-demo6 inline-template><div class="image-preview-demo6">
  <mz-button @click="show">预览</mz-button>
</div></image-preview-demo6></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;show&quot;&gt;预览&lt;/mz-button&gt;


&lt;script&gt;
export default {
  methods:{
    show() {
      this.$imagePreview.show({
        images: [
          'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
          require('@example/static/image-star.jpg')
        ]
      })
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
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
<td>visible</td>
<td>是否显示，可以使用<code>.sync</code>修饰</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>thumbnail</td>
<td>是否显示缩略图</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>playable</td>
<td>是否可以轮播</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>actionbar</td>
<td>是否有图片操作栏</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>loop</td>
<td>是否循环切换</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>appendToBody</td>
<td>是否添加到body上</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>images</td>
<td>图片列表</td>
<td>String[] / { url: string; title?: string; thumbnail?: string }[]</td>
<td></td>
<td>[]</td>
</tr>
<tr>
<td>current</td>
<td>当前图片地址，(与index二选一)</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>index</td>
<td>当前下标，(与current二选一)</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>min-zoom</td>
<td>最小缩放</td>
<td>Number</td>
<td></td>
<td>0.1</td>
</tr>
<tr>
<td>max-zoom</td>
<td>最大缩放</td>
<td>Number</td>
<td></td>
<td>4</td>
</tr>
<tr>
<td>zIndex</td>
<td>同原生 z-index</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="shi-jian" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
<td>action</td>
<td>操作事件</td>
<td>(action:string)</td>
</tr>
<tr>
<td>opened</td>
<td>显示事件</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>关闭事件</td>
<td></td>
</tr>
<tr>
<td>closed</td>
<td>关闭后事件</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentImagePreview',
  components: { ImagePreviewDemo1: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo2: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo3: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo4: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo5: {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}, ImagePreviewDemo6: {
  methods:{
    show() {
      this.$imagePreview.show({
        images: [
          'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
          require('@example/static/image-star.jpg')
        ]
      })
    }
  }
} }
}
</script>
<style lang="scss">

</style>