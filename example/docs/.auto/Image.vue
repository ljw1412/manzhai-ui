<template>
  <div class="component-image">
    <div class="update-datetime">文档更新时间：2020-03-22 11:25</div>
    <h2 id="image-tu-pian" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#image-tu-pian" title="Image 图片" data-level="2" data-href="#image-tu-pian">¶</a>Image 图片</h2>
<p>显示图片或背景的容器。</p>
<h3 id="ji-ben-yu-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yu-fa" title="基本语法" data-level="3" data-href="#ji-ben-yu-fa">¶</a>基本语法</h3>
<p>既可以作为图片显示，也可以作为背景显示。</p>
<demo-block>
        <template #example><image-demo1 inline-template><div class="image-demo1">
  <mz-image :src="src"
    width="100px"
    height='100px'></mz-image>
  <mz-image background
    :src="src"
    width="100px"
    height='100px'></mz-image>
</div></image-demo1></template>
        <template #description><p><code>background</code>属性为true，image将或以背景模式显示图片。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-image :src=&quot;src&quot;
  width=&quot;100px&quot;
  height='100px'&gt;&lt;/mz-image&gt;
&lt;mz-image background
  :src=&quot;src&quot;
  width=&quot;100px&quot;
  height='100px'&gt;&lt;/mz-image&gt;

&lt;script&gt;
export default {
  data() {
    return {
      src: require('@example/static/image-star.jpg')
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-image {
  border: 1px solid var(--color-border-base);
}
.mz-image {
  margin: 10px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="tu-pian-diao-zheng" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#tu-pian-diao-zheng" title="图片调整" data-level="3" data-href="#tu-pian-diao-zheng">¶</a>图片调整</h3>
<p>可以调整图片的适应容器的情况和图片的位置。</p>
<demo-block>
        <template #example><image-demo2 inline-template><div class="image-demo2">
  <mz-image :src="src"
    :fit="fit"
    :position="position"
    width="100px"
    height='100px'></mz-image>
  <mz-image background
    :src="src"
    :fit="fit"
    :position="position"
    width="100px"
    height='100px'></mz-image>
  <mz-input v-model="fit" label="fit" placeholder="可选值：'fill', 'contain', 'cover', 'none', 'scale-down'"/>
  <mz-input v-model="position" label="position" placeholder="可选值：'top', 'bottom', 'left', 'right', 'center'"/>
</div></image-demo2></template>
        <template #description><p>可通过<code>fit</code>确定图片如何适应到容器框，图片模式同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>，背景模式同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">background-size</a>。可通过<code>position</code>确定图片在容器的位置，图片模式同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position">object-position</a>，背景模式同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-position">background-position</a></p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-image :src=&quot;src&quot;
  :fit=&quot;fit&quot;
  :position=&quot;position&quot;
  width=&quot;100px&quot;
  height='100px'&gt;&lt;/mz-image&gt;
&lt;mz-image background
  :src=&quot;src&quot;
  :fit=&quot;fit&quot;
  :position=&quot;position&quot;
  width=&quot;100px&quot;
  height='100px'&gt;&lt;/mz-image&gt;
&lt;mz-input v-model=&quot;fit&quot; label=&quot;fit&quot; placeholder=&quot;可选值：'fill', 'contain', 'cover', 'none', 'scale-down'&quot;/&gt;
&lt;mz-input v-model=&quot;position&quot; label=&quot;position&quot; placeholder=&quot;可选值：'top', 'bottom', 'left', 'right', 'center'&quot;/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      fit: '',
      position: '',
      src: require('@example/static/image-star.jpg')
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.mz-image {
  border: 1px solid var(--color-border-base);
}
.mz-image {
  margin: 10px;
}
&lt;/style&gt;
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
<td>background</td>
<td>是否为背景</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>src</td>
<td>图片源，同原生</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>图片宽</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>图片高</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>确定图片如何适应容器框</td>
<td>String</td>
<td>图片模式：fill / contain / cover / none / scale-down，背景模式：contain / cover</td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>图片的定位</td>
<td>String</td>
<td>top / bottom / left / right / center</td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>原生 alt</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>referrerPolicy</td>
<td>原生 referrerPolicy</td>
<td>String</td>
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
<td>load</td>
<td>图片加载成功触发</td>
<td>(e: Event)</td>
</tr>
<tr>
<td>error</td>
<td>图片加载失败触发</td>
<td>(e: Error)</td>
</tr>
</tbody>
</table>
<h4 id="cha-cao" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
<td>-</td>
<td>仅在背景模式有效，容器内容</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentImage',
  components: { ImageDemo1: {
  data() {
    return {
      src: require('@example/static/image-star.jpg')
    }
  }
}, ImageDemo2: {
  data() {
    return {
      fit: '',
      position: '',
      src: require('@example/static/image-star.jpg')
    }
  }
} }
}
</script>
<style lang="scss">
.image-demo1{  
  .mz-image {
    border: 1px solid var(--color-border-base);
  }
  .mz-image {
    margin: 10px;
  }
  }
.image-demo2{  
  .mz-image {
    border: 1px solid var(--color-border-base);
  }
  .mz-image {
    margin: 10px;
  }
  }
</style>