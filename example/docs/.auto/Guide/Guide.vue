<template>
  <div class="guide-guide">
    <div class="update-datetime">文档更新时间：2020-09-17 21:40</div>
<h2 id="zhi-nan" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#zhi-nan" title="指南" data-level="2" data-href="#zhi-nan">¶</a>指南</h2>
<h3 id="shi-yong-bao-guan-li-gong-ju-an-zhuang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#shi-yong-bao-guan-li-gong-ju-an-zhuang" title="使用包管理工具安装" data-level="3" data-href="#shi-yong-bao-guan-li-gong-ju-an-zhuang">¶</a>使用包管理工具安装</h3>
<p>安装组件库</p>
<pre><code class="language-bash">npm i manzhai-ui -S
# or
yarn add manzhai-ui
</code></pre>
<p>安装图标</p>
<pre><code class="language-bash">npm i @ljw1412/ionicons-sprite -S
# or
yarn add @ljw1412/ionicons-sprite
</code></pre>
<h3 id="shi-yong-zu-jian-ku" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#shi-yong-zu-jian-ku" title="使用组件库" data-level="3" data-href="#shi-yong-zu-jian-ku">¶</a>使用组件库</h3>
<p>在入口文件使用</p>
<pre><code class="language-js">import Vue from 'vue'
import manzhaiUI from 'manzhai-ui'
// 引入样式
import 'manzhai-ui/lib/manzhai-ui.css';

Vue.use(manzhaiUI)
</code></pre>
  </div>
</template>

<script>
export default { name: 'GuideGuide', components: {} }
</script>


<style lang="scss">
.guide-guide {
}
</style>
