<template>
  <div class="component-rate">
    <div class="update-datetime">文档更新时间：2020-06-03 16:41</div>
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
</code></pre></template></demo-block><h3 id="zi-ding-yi-tu-biao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-ding-yi-tu-biao" title="自定义图标" data-level="3" data-href="#zi-ding-yi-tu-biao">¶</a>自定义图标</h3>
<p>支持<a href="component-icon">Icon组件</a>的图标。</p>
<demo-block>
        <template #example><rate-demo2 inline-template><div class="rate-demo2">
  <mz-rate icon="airplane-outline" allow-half/>
  <br />
  <mz-rate icon="football" allow-half/>
  <br />
  <mz-rate icon="snow" allow-half/>
  <br />
  <mz-rate :icon="icon" allow-half/>
</div></rate-demo2></template>
        <template #description><p><code>icon</code>属性控制图标。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate icon=&quot;airplane-outline&quot; allow-half/&gt;
&lt;br /&gt;
&lt;mz-rate icon=&quot;football&quot; allow-half/&gt;
&lt;br /&gt;
&lt;mz-rate icon=&quot;snow&quot; allow-half/&gt;
&lt;br /&gt;
&lt;mz-rate :icon=&quot;icon&quot; allow-half/&gt;

&lt;script&gt;
export default {
  methods: {
    icon(score){
      if(score &lt;= 2){
        return 'skull'
      } else if(score &lt;= 4){
        return 'sad'
      } else {
        return 'happy'
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tu-biao-yan-se" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#tu-biao-yan-se" title="图标颜色" data-level="3" data-href="#tu-biao-yan-se">¶</a>图标颜色</h3>
<demo-block>
        <template #example><rate-demo3 inline-template><div class="rate-demo3">
  <mz-rate void-color="black" color="blue"/>
  <br />
  <mz-rate  void-color="black" :color="color"/>
</div></rate-demo3></template>
        <template #description><p><code>color</code>属性控制选中时的颜色，<code>voidColor</code>显示未选中时的颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate void-color=&quot;black&quot; color=&quot;blue&quot;/&gt;
&lt;br /&gt;
&lt;mz-rate  void-color=&quot;black&quot; :color=&quot;color&quot;/&gt;

&lt;script&gt;
export default {
  methods: {
    color(score){
      if(score &lt; 3){
        return 'red'
      } else if(score &lt; 5){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xian-shi-wen-an" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#xian-shi-wen-an" title="显示文案" data-level="3" data-href="#xian-shi-wen-an">¶</a>显示文案</h3>
<demo-block>
        <template #example><rate-demo4 inline-template><div class="rate-demo4">
  <mz-rate v-model="value" show-text text-color="blue"/>
  <br />
  <mz-rate v-model="value2" show-text allow-half :text-color="color"/>
  <br />
  <mz-rate v-model="value3" show-text :format="format" :text-color="color"/>
</div></rate-demo4></template>
        <template #description><p><code>show-text</code>控制是否在尾部显示分数，<code>format</code>来格式化显示文案，<code>text-color</code>控制文案颜色。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate v-model=&quot;value&quot; show-text text-color=&quot;blue&quot;/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value2&quot; show-text allow-half :text-color=&quot;color&quot;/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value3&quot; show-text :format=&quot;format&quot; :text-color=&quot;color&quot;/&gt;

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
    },

    color(score){
      if(score &lt; 2){
        return 'red'
      } else if(score &lt; 4){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhi-du" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zhi-du" title="只读" data-level="3" data-href="#zhi-du">¶</a>只读</h3>
<demo-block>
        <template #example><rate-demo5 inline-template><div class="rate-demo5">
  <mz-rate :value="value" readonly show-text/>
</div></rate-demo5></template>
        <template #description><p><code>readonly</code>属性控制该评分是否只读。此时值可以为任意的一位小数的数值。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate :value=&quot;value&quot; readonly show-text/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 3.7
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="she-zhi-zui-da-zhi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#she-zhi-zui-da-zhi" title="设置最大值" data-level="3" data-href="#she-zhi-zui-da-zhi">¶</a>设置最大值</h3>
<demo-block>
        <template #example><rate-demo6 inline-template><div class="rate-demo6">
  <mz-rate v-model="value" allow-half show-text :max="10"/>
  <br />
  <mz-rate v-model="value2" allow-half show-text :max="15"/>
  <br />
  <mz-rate v-model="value3" allow-half show-text :max="100"/>
</div></rate-demo6></template>
        <template #description><p><code>max</code>属性控制最大得分，其值必须是5的非零倍数。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-rate v-model=&quot;value&quot; allow-half show-text :max=&quot;10&quot;/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value2&quot; allow-half show-text :max=&quot;15&quot;/&gt;
&lt;br /&gt;
&lt;mz-rate v-model=&quot;value3&quot; allow-half show-text :max=&quot;100&quot;/&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 5,
      value2: 12,
      value3: 100
    }
  },

  methods: {
    color(score){
      if(score &lt; 3){
        return 'red'
      } else if(score &lt; 5){
        return 'orange'
      } else {
        return 'green'
      }
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
<td>value/v-model</td>
<td>绑定值</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>max</td>
<td>最大值，5的非零倍数</td>
<td>Number</td>
<td></td>
<td>5</td>
</tr>
<tr>
<td>size</td>
<td>图标大小</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>allow-half</td>
<td>是否允许半选</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否为只读</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>show-text</td>
<td>是否显示评分文案</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>format</td>
<td>格式化评分文案</td>
<td>(val: number) =&gt; any</td>
<td></td>
<td>(val) =&gt; val</td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td>String / (val: number) =&gt; string</td>
<td></td>
<td>'star'</td>
</tr>
<tr>
<td>color</td>
<td>图标选中颜色</td>
<td>String / (val: number) =&gt; string</td>
<td></td>
<td>'#F7BA2A'</td>
</tr>
<tr>
<td>void-color</td>
<td>图标未选中颜色</td>
<td>String</td>
<td></td>
<td>'#E8E8E8'</td>
</tr>
<tr>
<td>text-color</td>
<td>评分文案颜色</td>
<td>String / (val: number) =&gt; string</td>
<td></td>
<td>''</td>
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
<td>change</td>
<td>评分的变化</td>
<td>(value: number)</td>
</tr>
</tbody>
</table>

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
  methods: {
    icon(score){
      if(score <= 2){
        return 'skull'
      } else if(score <= 4){
        return 'sad'
      } else {
        return 'happy'
      }
    }
  }
}, RateDemo3: {
  methods: {
    color(score){
      if(score < 3){
        return 'red'
      } else if(score < 5){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}, RateDemo4: {
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
    },

    color(score){
      if(score < 2){
        return 'red'
      } else if(score < 4){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}, RateDemo5: {
  data() {
    return {
      value: 3.7
    }
  }
}, RateDemo6: {
  data() {
    return {
      value: 5,
      value2: 12,
      value3: 100
    }
  },

  methods: {
    color(score){
      if(score < 3){
        return 'red'
      } else if(score < 5){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
} }
}
</script>
<style lang="scss">

</style>