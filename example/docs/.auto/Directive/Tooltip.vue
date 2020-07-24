<template>
  <div class="directive-tooltip">
    <div class="update-datetime">文档更新时间：2020-07-24 12:03</div>
<h2 id="tooltip-ti-shi-wen-zi" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>简单的提示文字处理，如果要进行自定义请使用组件<a href="component-tooltip">Tooltip</a></p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
  <template #example>
    <tooltip-demo1 inline-template>
      <div class="tooltip-demo1">
        <mz-button v-tooltip="'文字'">按钮</mz-button>
      </div>
    </tooltip-demo1>
  </template>
  <template #description>
    <p><code>v-tooltip</code>直接传入字符串。如果内容为假值则不显示。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-button v-tooltip=&quot;'文字'&quot;&gt;按钮&lt;/mz-button&gt;
</code></pre></template></demo-block><h3 id="jin-jie-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#jin-jie-yong-fa" title="进阶用法" data-level="3" data-href="#jin-jie-yong-fa">¶</a>进阶用法</h3>
<p>您也可以向<code>v-tooltip</code>传入一个对象，对象的<a href="https://atomiks.github.io/tippyjs/v6/all-props/" target="_blank">属性</a>。</p>
<demo-block>
  <template #example>
    <tooltip-demo2 inline-template>
      <div class="tooltip-demo2">
        <mz-row flex class="align-items-center">
          <mz-col style="width: 80px; text-align: center;">
            <a v-tooltip="options" target="_blank"
              href="https://atomiks.github.io/tippyjs/v6/all-props/">
              <mz-icon name="cog" size="26"></mz-icon>
              <div>更多属性</div>
            </a>
          </mz-col>
          <mz-col style="width: calc(100% - 80px);">
            <div class="option">
              <span class="fs-14">内容：</span>
              <mz-input v-model="options.content" style="margin-right: 20px;"></mz-input>
            </div>
            <div class="option">
              <span class="fs-14">主题：</span>
              <mz-select v-model="options.theme" style="margin-right: 20px;">
                <mz-option value="" label="默认"></mz-option>
                <mz-option v-for="theme of themes" :value="theme" :key="theme"></mz-option>
              </mz-select>
            </div>
            <div class="option">
            <span class="fs-14">位置：</span>
              <mz-select v-model="options.placement" style="margin-right: 20px;">
                <mz-option v-for="placement of placements" :value="placement" :key="placement"></mz-option>
              </mz-select>
            </div>
          </mz-col>
        </mz-row>
      </div>
    </tooltip-demo2>
  </template>
  <template #description>
    <p>tooltip基于开源项目<a href="https://github.com/atomiks/tippyjs" target="_blank"><code>Tippy.js</code></a>进行简单封装。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-row flex class=&quot;align-items-center&quot;&gt;
  &lt;mz-col style=&quot;width: 80px; text-align: center;&quot;&gt;
    &lt;a v-tooltip=&quot;options&quot; target=&quot;_blank&quot;
      href=&quot;https://atomiks.github.io/tippyjs/v6/all-props/&quot;&gt;
      &lt;mz-icon name=&quot;cog&quot; size=&quot;26&quot;&gt;&lt;/mz-icon&gt;
      &lt;div&gt;更多属性&lt;/div&gt;
    &lt;/a&gt;
  &lt;/mz-col&gt;
  &lt;mz-col style=&quot;width: calc(100% - 80px);&quot;&gt;
    &lt;div class=&quot;option&quot;&gt;
      &lt;span class=&quot;fs-14&quot;&gt;内容：&lt;/span&gt;
      &lt;mz-input v-model=&quot;options.content&quot; style=&quot;margin-right: 20px;&quot;&gt;&lt;/mz-input&gt;
    &lt;/div&gt;
    &lt;div class=&quot;option&quot;&gt;
      &lt;span class=&quot;fs-14&quot;&gt;主题：&lt;/span&gt;
      &lt;mz-select v-model=&quot;options.theme&quot; style=&quot;margin-right: 20px;&quot;&gt;
        &lt;mz-option value=&quot;&quot; label=&quot;默认&quot;&gt;&lt;/mz-option&gt;
        &lt;mz-option v-for=&quot;theme of themes&quot; :value=&quot;theme&quot; :key=&quot;theme&quot;&gt;&lt;/mz-option&gt;
      &lt;/mz-select&gt;
    &lt;/div&gt;
    &lt;div class=&quot;option&quot;&gt;
    &lt;span class=&quot;fs-14&quot;&gt;位置：&lt;/span&gt;
      &lt;mz-select v-model=&quot;options.placement&quot; style=&quot;margin-right: 20px;&quot;&gt;
        &lt;mz-option v-for=&quot;placement of placements&quot; :value=&quot;placement&quot; :key=&quot;placement&quot;&gt;&lt;/mz-option&gt;
      &lt;/mz-select&gt;
    &lt;/div&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;script&gt;
export default {
  data() {
    return {
      themes: ['light', 'light-border', 'material', 'translucent'],
      placements: [ 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end' ],
      options: {
        content: '内容',
        theme: '',
        placement: 'top'
      }
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.mz-input {
  width: 150px;
}

a {
  color: #409eff;
  font-size: 14px;
  margin-top: 10px;
}

a:hover{
  opacity: 0.9;
}

.option{
  display: inline-block;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="xiu-shi-fu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xiu-shi-fu" title="修饰符" data-level="3" data-href="#xiu-shi-fu">¶</a>修饰符</h3>
<p><strong>主题:</strong> <code>light</code>, <code>light-border</code>, <code>material</code>, <code>translucent</code></p>
<p><strong>箭头:</strong> <code>arrow</code></p>
<p><strong>触发:</strong> <code>hover</code>, <code>focus</code>, <code>click</code></p>
<p><strong>位置:</strong> <code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code></p>
<demo-block>
  <template #example>
    <tooltip-demo3 inline-template>
      <div class="tooltip-demo3">
        <div class="modifiers">
          <mz-tag v-tooltip="'文字'">默认</mz-tag>
          <mz-tag v-tooltip.light="'light'">light</mz-tag>
          <mz-tag v-tooltip.light-border="'light-border'">light-border</mz-tag>
          <mz-tag v-tooltip.material="'material'">material</mz-tag>
          <mz-tag v-tooltip.translucent="'translucent'">translucent</mz-tag>
        </div>
        <div class="modifiers">
          <mz-tag v-tooltip.arrow="'arrow'">箭头</mz-tag>
          <mz-tag v-tooltip.arrow.light="'light'">light</mz-tag>
          <mz-tag v-tooltip.arrow.light-border="'light-border'">light-border</mz-tag>
          <mz-tag v-tooltip.arrow.material="'material'">material</mz-tag>
          <mz-tag v-tooltip.arrow.translucent="'translucent'">translucent</mz-tag>
        </div>
        <div class="modifiers">
          <mz-button v-tooltip.hover="'hover'">hover</mz-button>
          <mz-button v-tooltip.focus="'focus'">focus</mz-button>
          <mz-button v-tooltip.click="'click'">click</mz-button>
        </div>
        <mz-row :gutter="10">
          <mz-col :span="6">
            <div v-tooltip.top="'top'">top</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.top-start="'top-start'">top-start</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.top-end="'top-end'">top-end</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.right="'right'">right</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.right-start="'right-start'">right-start</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.right-end="'right-end'">right-end</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.bottom="'bottom'">bottom</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.bottom-start="'bottom-start'">bottom-start</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.bottom-end="'bottom-end'">bottom-end</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.left="'left'">left</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.left-start="'left-start'">left-start</div>
          </mz-col>
          <mz-col :span="6">
            <div v-tooltip.left-end="'left-end'">left-end</div>
          </mz-col>
        </mz-row>
      </div>
    </tooltip-demo3>
  </template>
  <template #description>
      </template><template #highlight><pre v-pre><code class="html">&lt;div class=&quot;modifiers&quot;&gt;
  &lt;mz-tag v-tooltip=&quot;'文字'&quot;&gt;默认&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.light=&quot;'light'&quot;&gt;light&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.light-border=&quot;'light-border'&quot;&gt;light-border&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.material=&quot;'material'&quot;&gt;material&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.translucent=&quot;'translucent'&quot;&gt;translucent&lt;/mz-tag&gt;
&lt;/div&gt;
&lt;div class=&quot;modifiers&quot;&gt;
  &lt;mz-tag v-tooltip.arrow=&quot;'arrow'&quot;&gt;箭头&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.arrow.light=&quot;'light'&quot;&gt;light&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.arrow.light-border=&quot;'light-border'&quot;&gt;light-border&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.arrow.material=&quot;'material'&quot;&gt;material&lt;/mz-tag&gt;
  &lt;mz-tag v-tooltip.arrow.translucent=&quot;'translucent'&quot;&gt;translucent&lt;/mz-tag&gt;
&lt;/div&gt;
&lt;div class=&quot;modifiers&quot;&gt;
  &lt;mz-button v-tooltip.hover=&quot;'hover'&quot;&gt;hover&lt;/mz-button&gt;
  &lt;mz-button v-tooltip.focus=&quot;'focus'&quot;&gt;focus&lt;/mz-button&gt;
  &lt;mz-button v-tooltip.click=&quot;'click'&quot;&gt;click&lt;/mz-button&gt;
&lt;/div&gt;
&lt;mz-row :gutter=&quot;10&quot;&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.top=&quot;'top'&quot;&gt;top&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.top-start=&quot;'top-start'&quot;&gt;top-start&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.top-end=&quot;'top-end'&quot;&gt;top-end&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.right=&quot;'right'&quot;&gt;right&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.right-start=&quot;'right-start'&quot;&gt;right-start&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.right-end=&quot;'right-end'&quot;&gt;right-end&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.bottom=&quot;'bottom'&quot;&gt;bottom&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.bottom-start=&quot;'bottom-start'&quot;&gt;bottom-start&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.bottom-end=&quot;'bottom-end'&quot;&gt;bottom-end&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.left=&quot;'left'&quot;&gt;left&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.left-start=&quot;'left-start'&quot;&gt;left-start&lt;/div&gt;
  &lt;/mz-col&gt;
  &lt;mz-col :span=&quot;6&quot;&gt;
    &lt;div v-tooltip.left-end=&quot;'left-end'&quot;&gt;left-end&lt;/div&gt;
  &lt;/mz-col&gt;
&lt;/mz-row&gt;

&lt;style&gt;
.modifiers &gt; .mz-tag, .modifiers &gt; .mz-button {
  margin-bottom: 10px;
}

.mz-col {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #5183f5;
  margin-bottom: 10px;
}

.mz-col &gt; div {
  border: 2px dashed #5183f5;
  transition: background-color 0.2s,color 0.1s;
}
.mz-col &gt; div:hover {
  color: #fff;
  background-color: #5183f5;
}
&lt;/style&gt;
</code></pre></template></demo-block>
  </div>
</template>

<script>
export default {
  name: 'DirectiveTooltip',
  components: {
    TooltipDemo1: {},
    TooltipDemo2: {
      data() {
        return {
          themes: ['light', 'light-border', 'material', 'translucent'],
          placements: [
            'top',
            'top-start',
            'top-end',
            'right',
            'right-start',
            'right-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end'
          ],
          options: {
            content: '内容',
            theme: '',
            placement: 'top'
          }
        }
      }
    },
    TooltipDemo3: {}
  }
}
</script>


<style lang="scss">
.directive-tooltip {
  .tooltip-demo2 {
    .mz-input {
      width: 150px;
    }

    a {
      color: #409eff;
      font-size: 14px;
      margin-top: 10px;
    }

    a:hover {
      opacity: 0.9;
    }

    .option {
      display: inline-block;
    }
  }
  .tooltip-demo3 {
    .modifiers > .mz-tag,
    .modifiers > .mz-button {
      margin-bottom: 10px;
    }

    .mz-col {
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #5183f5;
      margin-bottom: 10px;
    }

    .mz-col > div {
      border: 2px dashed #5183f5;
      transition: background-color 0.2s, color 0.1s;
    }
    .mz-col > div:hover {
      color: #fff;
      background-color: #5183f5;
    }
  }
}
</style>
