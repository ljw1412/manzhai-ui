<template>
  <div class="component-tooltip">
    <div class="update-datetime">文档更新时间：2020-05-11 21:43</div>
    <h2 id="tooltip-ti-shi-wen-zi" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#tooltip-ti-shi-wen-zi" title="Tooltip 提示文字" data-level="2" data-href="#tooltip-ti-shi-wen-zi">¶</a>Tooltip 提示文字</h2>
<p>常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><tooltip-demo1 inline-template><div class="tooltip-demo1">
  <div>
    <div class="box">
      <div v-for="(list, name) in data" :key="name" :class="name">
        <mz-tooltip v-for="item in list"
          :placement="item.placement"
          :key="item.placement"
          :content="item.content">
          <mz-button width="100px" height="40px"
            color="primary">{{item.placement}}</mz-button>
        </mz-tooltip>
      </div>
    </div>
  </div>
</div></tooltip-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;div&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;div v-for=&quot;(list, name) in data&quot; :key=&quot;name&quot; :class=&quot;name&quot;&gt;
      &lt;mz-tooltip v-for=&quot;item in list&quot;
        :placement=&quot;item.placement&quot;
        :key=&quot;item.placement&quot;
        :content=&quot;item.content&quot;&gt;
        &lt;mz-button width=&quot;100px&quot; height=&quot;40px&quot;
          color=&quot;primary&quot;&gt;{{item.placement}}&lt;/mz-button&gt;
      &lt;/mz-tooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;



&lt;style&gt;
.box{
  width: 540px;
}
.top {
  padding-left: 110px;
}
.left {
  float: left;
  width: 100px;
}
.right {
  float: right;
  width: 100px;
}
.bottom {
  clear: both;
  margin: auto;
  padding-left: 110px;
}
.mz-button{
  margin: 5px;
}
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      data: {
        top: [
          { placement: 'top-start', content: 'top-start 提示文字' },
          { placement: 'top', content: 'top 提示文字' },
          { placement: 'top-end', content: 'top-end 提示文字' }
        ],
        left: [
          { placement: 'left-start', content: 'left-start 提示文字' },
          { placement: 'left', content: 'left 提示文字' },
          { placement: 'left-end', content: 'left-end 提示文字' }
        ],
        right: [
          { placement: 'right-start', content: 'right-start 提示文字' },
          { placement: 'right', content: 'right 提示文字' },
          { placement: 'right-end', content: 'right-end 提示文字' }
        ],
        bottom: [
          { placement: 'bottom-start', content: 'bottom-start 提示文字' },
          { placement: 'bottom', content: 'bottom 提示文字' },
          { placement: 'bottom-end', content: 'bottom-end 提示文字' }
        ]
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentTooltip',
  components: { TooltipDemo1: {
  data() {
    return {
      data: {
        top: [
          { placement: 'top-start', content: 'top-start 提示文字' },
          { placement: 'top', content: 'top 提示文字' },
          { placement: 'top-end', content: 'top-end 提示文字' }
        ],
        left: [
          { placement: 'left-start', content: 'left-start 提示文字' },
          { placement: 'left', content: 'left 提示文字' },
          { placement: 'left-end', content: 'left-end 提示文字' }
        ],
        right: [
          { placement: 'right-start', content: 'right-start 提示文字' },
          { placement: 'right', content: 'right 提示文字' },
          { placement: 'right-end', content: 'right-end 提示文字' }
        ],
        bottom: [
          { placement: 'bottom-start', content: 'bottom-start 提示文字' },
          { placement: 'bottom', content: 'bottom 提示文字' },
          { placement: 'bottom-end', content: 'bottom-end 提示文字' }
        ]
      }
    }
  }
} }
}
</script>
<style lang="scss">
.tooltip-demo1{  
  .box{
    width: 540px;
  }
  .top {
    padding-left: 110px;
  }
  .left {
    float: left;
    width: 100px;
  }
  .right {
    float: right;
    width: 100px;
  }
  .bottom {
    clear: both;
    margin: auto;
    padding-left: 110px;
  }
  .mz-button{
    margin: 5px;
  }
  }
</style>