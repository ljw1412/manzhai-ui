<template>
  <div class="component-image-preview">
    <div class="update-datetime">文档更新时间：2020-05-19 16:43</div>
    <h2 id="imagepreview-tu-pian-yu-lan" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#imagepreview-tu-pian-yu-lan" title="ImagePreview 图片预览" data-level="2" data-href="#imagepreview-tu-pian-yu-lan">¶</a>ImagePreview 图片预览</h2>
<p>以页面全屏的形式预览图片。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
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
</code></pre></template></demo-block><h3 id="gong-neng-bu-ju" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#gong-neng-bu-ju" title="功能布局" data-level="3" data-href="#gong-neng-bu-ju">¶</a>功能布局</h3>
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
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&amp;rf=LaDigue_UHD.jpg&amp;pid=hp&amp;w=1920&amp;h=1080&amp;rs=1&amp;c=4',
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
</code></pre></template></demo-block><h3 id="shi-yong-zhi-ling-xing-shi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zhi-ling-xing-shi" title="使用指令形式" data-level="3" data-href="#shi-yong-zhi-ling-xing-shi">¶</a>使用指令形式</h3>
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
      checkList: ['zoom' ,'play' ,'fullscreen' ,'download' ,'thumbnail'],
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
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