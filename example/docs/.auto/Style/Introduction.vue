<template>
  <div class="style-introduction">
    <div class="update-datetime">文档更新时间：2020-07-24 12:14</div>
<h1 id="jian-jie" class="mz-heading mz-document-heading" data-level="1"><a class="mz-document-anchor" href="#jian-jie" title="简介" data-level="1" data-href="#jian-jie">¶</a>简介</h1>
    <introduction-demo1 inline-template>
      <div class="introduction-demo1">
        <mz-snackbar color="warning" text-color="#333">
          <div>"响应式"、"移动设备优先"将在未来版本或者项目重构的时候纳入设计中。</div>
          <div>因为`manzhai-ui`最初设计的时候限定只在pc端使用。</div>
        </mz-snackbar>
      </div>
    </introduction-demo1><p style="font-size:24px">Manzhai-ui预设了一套类名语义化的CSS。</p>
<h2 id="yin-ru-fang-fa" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#yin-ru-fang-fa" title="引入方法" data-level="2" data-href="#yin-ru-fang-fa">¶</a>引入方法</h2>
<h3 id="mo-ren-yin-ru" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#mo-ren-yin-ru" title="默认引入" data-level="3" data-href="#mo-ren-yin-ru">¶</a>默认引入</h3>
<pre><code class="language-js">// 在项目的入口文件
// 其中包含了组件样式和预设的语义化样式
import 'manzhai-ui/lib/manzhai-ui.css';
</code></pre>
<h3 id="yiscss-yin-ru-ke-yi-zi-ding-yi-zhu-ti" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#yiscss-yin-ru-ke-yi-zi-ding-yi-zhu-ti" title="以Scss引入(可以自定义主题)" data-level="3" data-href="#yiscss-yin-ru-ke-yi-zi-ding-yi-zhu-ti">¶</a>以Scss引入(可以自定义主题)</h3>
<p>创建自己配置的Scss变量文件<code>variables.scss</code>。</p>
<pre><code class="language-scss">// 覆盖默认important，默认值true。
$enable-important-utilities: false;
// 使用css-variables，默认值false。
$enable-css-variables: false;

// 覆盖默认颜色变量
// 具体相关变量名请查看，&quot;manzhai-ui/src/styles/scss/variables/*.scss&quot;
$primary: #3f51b5;
$secondary: $gray-600;
$success: #43a047;
$warning: $yellow;
$danger: #ed4014;
$light: $gray-100;
$dark: $gray-800;
</code></pre>
<p>然后创建组件ui样式文件<code>manzhai-ui.scss</code>。</p>
<pre><code class="language-scss">// 引入自定义变量文件来覆盖默认值
@import 'variables.scss';

// manzhai-ui 所有样式的入口
@import '~manzhai-ui/src/styles/index.scss';
</code></pre>
<p>之后创建开发时使用的功能库<code>manzhai.scss</code>。</p>
<pre><code class="language-scss">// 引入自定义变量文件来覆盖默认值
@import 'variables.scss';

@import '~manzhai-ui/src/styles/variables.scss';

// 后面可以引用自己定义的一些scss function、mixins文件
</code></pre>
<p>最后在项目的入口文件引入<code>manzhai-ui.scss</code>。</p>
<pre><code class="language-js">import 'manzhai-ui.scss';
</code></pre>
<p>在你开发的页面或组件中引入<code>manzhai.scss</code>，即可使用所有manzhai-ui的变量、function、mixins。</p>
<pre><code class="language-html">&lt;template&gt;
  &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;...&lt;/script&gt;
&lt;style&gt;
@import 'manzhai.scss';
.content{
  color: $body-color;
  background-color: $body-bg;
}
&lt;/style&gt;
</code></pre>
  </div>
</template>

<script>
export default {
  name: 'StyleIntroduction',
  components: { IntroductionDemo1: {} }
}
</script>


<style lang="scss">
.style-introduction {
}
</style>
