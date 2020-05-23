<template>
  <div class="component-image-preview">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="imagepreview-tu-pian-yu-lan" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#imagepreview-tu-pian-yu-lan" title="ImagePreview 图片预览" data-level="2" data-href="#imagepreview-tu-pian-yu-lan">¶</a>ImagePreview 图片预览</h2>
<p>以页面全屏的形式预览图片。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><image-preview-demo1 inline-template><div class="image-preview-demo1">
  <mz-button @click="visible = true">预览</mz-button>
  <mz-image-preview v-model="visible"
    :images="images"></mz-image-preview>
</div></image-preview-demo1></template>
        <template #description><p><code>images</code>传递图片列表。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;
&lt;mz-image-preview v-model=&quot;visible&quot;
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
</code></pre></template></demo-block><h3 id="gong-neng-bu-ju" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#gong-neng-bu-ju" title="功能布局" data-level="3" data-href="#gong-neng-bu-ju">¶</a>功能布局</h3>
<p>ImagePreview内置了一些功能。</p>
<demo-block>
        <template #example><image-preview-demo2 inline-template><div class="image-preview-demo2">
  <mz-image-preview v-model="visible"
    :layout="layout"
    :images="images"></mz-image-preview>
  <mz-checkbox-group v-model="checkList">
    <mz-checkbox value="zoom">zoom</mz-checkbox>
    <mz-checkbox value="play">play</mz-checkbox>
    <mz-checkbox value="fullscreen">fullscreen</mz-checkbox>
    <mz-checkbox value="download">download</mz-checkbox>
    <mz-checkbox value="thumbnail">thumbnail</mz-checkbox>
  </mz-checkbox-group>
  <mz-button color="primary" @click="visible = true">预览</mz-button>
</div></image-preview-demo2></template>
        <template #description><p><code>layout</code>属性控制布局的展示效果，可选值<code>zoom</code>, <code>play</code>, <code>fullscreen</code>, <code>download</code>, <code>thumbnail</code>，多个布局以英文逗号或者空格分隔。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-image-preview v-model=&quot;visible&quot;
  :layout=&quot;layout&quot;
  :images=&quot;images&quot;&gt;&lt;/mz-image-preview&gt;
&lt;mz-checkbox-group v-model=&quot;checkList&quot;&gt;
  &lt;mz-checkbox value=&quot;zoom&quot;&gt;zoom&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;play&quot;&gt;play&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;fullscreen&quot;&gt;fullscreen&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;download&quot;&gt;download&lt;/mz-checkbox&gt;
  &lt;mz-checkbox value=&quot;thumbnail&quot;&gt;thumbnail&lt;/mz-checkbox&gt;
&lt;/mz-checkbox-group&gt;
&lt;mz-button color=&quot;primary&quot; @click=&quot;visible = true&quot;&gt;预览&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data (){
    return {
      visible: false,
      checkList: ['zoom' ,'play' ,'fullscreen' ,'download' ,'thumbnail'],
      images: [
        {url:'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',title:'测试图片1'},
        require('@example/static/image-star.jpg')
      ]
    }
  },

  computed:{
    layout(){
      return this.checkList.join(' ')
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shi-yong-zhi-ling-xing-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zhi-ling-xing-shi" title="使用指令形式" data-level="3" data-href="#shi-yong-zhi-ling-xing-shi">¶</a>使用指令形式</h3>
<p>使用$imagePreview指令进行控制预览。</p>
<demo-block>
        <template #example><image-preview-demo3 inline-template><div class="image-preview-demo3">
  <mz-button @click="show">预览</mz-button>
</div></image-preview-demo3></template>
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
<td>visible/v-model</td>
<td>是否显示</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>layout</td>
<td>布局，以空格分隔</td>
<td>String</td>
<td><code>zoom play fullscreen download thumbnail</code></td>
<td>''</td>
</tr>
<tr>
<td>images</td>
<td>图片列表</td>
<td>String[] / { url: string; title?: string; thumbnail?: string }[]</td>
<td></td>
<td>[]</td>
</tr>
<tr>
<td>index.sync</td>
<td>当前下标</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>zoom</td>
<td>缩放</td>
<td>Number[]</td>
<td>[min,max]</td>
<td>[0.1, 4]</td>
</tr>
<tr>
<td>mask-color</td>
<td>遮罩颜色</td>
<td>String</td>
<td></td>
<td>'#000'</td>
</tr>
<tr>
<td>z-index</td>
<td>同原生 z-index</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>append-to-body</td>
<td>是否插入至 body 元素上</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>是否可通过按下 ESC 键关闭</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调</td>
<td>(done)=&gt;void / Promise</td>
<td></td>
<td></td>
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
<td>open</td>
<td>显示事件</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>关闭事件</td>
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
      checkList: ['zoom' ,'play' ,'fullscreen' ,'download' ,'thumbnail'],
      images: [
        {url:'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',title:'测试图片1'},
        require('@example/static/image-star.jpg')
      ]
    }
  },

  computed:{
    layout(){
      return this.checkList.join(' ')
    }
  }
}, ImagePreviewDemo3: {
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