<template>
  <div class="component-button">
    <h2 id="button-an-niu"><a class="header-anchor" href="#button-an-niu">¶</a>Button 按钮</h2>
<p>实现常用的按钮功能。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<p>基础按钮的用法。</p>
<demo-block>
        <template #example><button-demo1></button-demo1></template>
        <template #description><p>使用<code>type</code>、<code>outlined</code>、<code>flat</code>、<code>round</code>、<code>circle</code>、<code>icon</code>属性来定义 Button 的样式。<br>你可以通过<code>disabled</code>属性来修改按钮的禁用状态。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;mz-button&gt;默认按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot;&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot;&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot;&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot;&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button outlined&gt;线条按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; outlined&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; outlined&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; outlined&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; outlined&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled outlined&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button flat&gt;扁平按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; flat&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; flat&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; flat&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; flat&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled flat&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button round&gt;圆角按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; round&gt;主要按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; round&gt;成功按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; round&gt;警告按钮&lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; round&gt;危险按钮&lt;/mz-button&gt;
  &lt;mz-button disabled round&gt;禁用按钮&lt;/mz-button&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;mz-button circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;primary&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;success&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;warning&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button type=&quot;danger&quot; circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
  &lt;mz-button disabled circle icon&gt;
    &lt;mz-icon name=&quot;md-alarm&quot;size=&quot;20px&quot;&gt;&lt;/mz-icon&gt;
  &lt;/mz-button&gt;
&lt;/div&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
import ButtonDemo1 from './ButtonDemo1'
export default {
  components: { ButtonDemo1 }
}
</script>