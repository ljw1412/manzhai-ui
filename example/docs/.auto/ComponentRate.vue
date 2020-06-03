<template>
  <div class="component-rate">
    <div class="update-datetime">文档更新时间：2020-06-03 14:26</div>
    <h2 id="rate-ping-fen" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#rate-ping-fen" title="Rate 评分" data-level="2" data-href="#rate-ping-fen">¶</a>Rate 评分</h2>
<p>评分组件。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><rate-demo1 inline-template><div class="rate-demo1">
  <div class="demo-font-size-14">正常</div>
  <mz-rate v-model="value"/>
  <div class="demo-font-size-14">允许半星</div>
  <mz-rate v-model="value2" allow-half/>
</div></rate-demo1></template>
        <template #description><p><code>allow-half</code>控制是否允许半分。如果为 true 满分 10，否则为 5。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;div class=&quot;demo-font-size-14&quot;&gt;正常&lt;/div&gt;
&lt;mz-rate v-model=&quot;value&quot;/&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;允许半星&lt;/div&gt;
&lt;mz-rate v-model=&quot;value2&quot; allow-half/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 0,
      value2: 0
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xian-shi-wen-zi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xian-shi-wen-zi" title="显示文字" data-level="3" data-href="#xian-shi-wen-zi">¶</a>显示文字</h3>
<demo-block>
        <template #example><rate-demo2 inline-template><div class="rate-demo2">
  <mz-rate v-model="value" show-text/>
  <br />
  <mz-rate v-model="value2" show-text allow-half/>
  <br />
  <mz-rate v-model="value3" show-text :format="format"/>
</div></rate-demo2></template>
        <template #description><p><code>show-text</code>控制是否在尾部显示分数。你也可以传入格式化方法<code>format</code>来修改显示文案。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate v-model=&quot;value&quot; show-text/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value2&quot; show-text allow-half/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value3&quot; show-text :format=&quot;format&quot;/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 5,
      value2: 4.5,
      value3: 0
    }
  },

  methods:{
    format(score){
      const texts = ['未评价', '极差', '失望', '一般', '满意', '惊喜']
      return texts[score]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhi-du" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zhi-du" title="只读" data-level="3" data-href="#zhi-du">¶</a>只读</h3>
<demo-block>
        <template #example><rate-demo3 inline-template><div class="rate-demo3">
  <mz-rate v-model="value" readonly exact show-text/>
</div></rate-demo3></template>
        <template #description><p><code>readonly</code>属性控制该评分是否只读。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate v-model=&quot;value&quot; readonly exact show-text/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 3.7
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentComponentRate',
  components: { RateDemo1: {
  data() {
    return {
      value: 0,
      value2: 0
    }
  }
}, RateDemo2: {
  data() {
    return {
      value: 5,
      value2: 4.5,
      value3: 0
    }
  },

  methods:{
    format(score){
      const texts = ['未评价', '极差', '失望', '一般', '满意', '惊喜']
      return texts[score]
    }
  }
}, RateDemo3: {
  data() {
    return {
      value: 3.7
    }
  }
} }
}
</script>
<style lang="scss">

</style>