<template>
  <div class="component-input">
    <div class="update-datetime">文档更新时间：2020-04-14 13:59</div>
    <h2 id="input-shu-ru-kuang" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#input-shu-ru-kuang" title="Input 输入框" data-level="2" data-href="#input-shu-ru-kuang">¶</a>Input 输入框</h2>
<p>通过鼠标或键盘输入内容。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><input-demo1 inline-template><div class="input-demo1">
  <mz-input v-model="value" placeholder="请输入文字"></mz-input>
</div></input-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入文字&quot;&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yuan-jiao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yuan-jiao" title="圆角" data-level="3" data-href="#yuan-jiao">¶</a>圆角</h3>
<demo-block>
        <template #example><input-demo2 inline-template><div class="input-demo2">
  <mz-input v-model="value" placeholder="请输入文字" rounded>
  </mz-input>
</div></input-demo2></template>
        <template #description><p><code>rounded</code>属性控制是否使用圆角显示。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入文字&quot; rounded&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-da-xiao" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#bu-tong-da-xiao" title="不同大小" data-level="3" data-href="#bu-tong-da-xiao">¶</a>不同大小</h3>
<p>提供了3种输入框大小。</p>
<demo-block>
        <template #example><input-demo3 inline-template><div class="input-demo3">
  <mz-input v-model="value" placeholder="小" size="small">
  </mz-input>
  <mz-input v-model="value" placeholder="中" size="medium">
  </mz-input>
  <mz-input v-model="value" placeholder="默认">
  </mz-input>
  <mz-input v-model="value" placeholder="大" size="large">
  </mz-input>
  
  <mz-input v-model="value" placeholder="小(圆角)" rounded size="small">
  </mz-input>
  <mz-input v-model="value" placeholder="中(圆角)" rounded size="medium">
  </mz-input>
  <mz-input v-model="value" placeholder="默认(圆角)" rounded>
  </mz-input>
  <mz-input v-model="value" placeholder="大(圆角)" rounded size="large">
  </mz-input>
</div></input-demo3></template>
        <template #description><p><code>size</code>属性控制输入框的大小，可选值<code>small</code>、<code>medium</code>、<code>(默认)</code>、<code>large</code>。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;小&quot; size=&quot;small&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;中&quot; size=&quot;medium&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;默认&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;大&quot; size=&quot;large&quot;&gt;
&lt;/mz-input&gt;

&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;小(圆角)&quot; rounded size=&quot;small&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;中(圆角)&quot; rounded size=&quot;medium&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;默认(圆角)&quot; rounded&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;大(圆角)&quot; rounded size=&quot;large&quot;&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xian-tiao-yang-shi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#xian-tiao-yang-shi" title="线条样式" data-level="3" data-href="#xian-tiao-yang-shi">¶</a>线条样式</h3>
<demo-block>
        <template #example><input-demo4 inline-template><div class="input-demo4">
  <mz-input v-model="value"
    placeholder="请输入文字"
    outlined
    :rounded="rounded"
    @focus="rounded = true"
    @blur="rounded = false"></mz-input>
</div></input-demo4></template>
        <template #description><p><code>outlined</code>属性控制是否使用线条显示。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot;
  placeholder=&quot;请输入文字&quot;
  outlined
  :rounded=&quot;rounded&quot;
  @focus=&quot;rounded = true&quot;
  @blur=&quot;rounded = false&quot;&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      rounded: false,
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yin-ying-yang-shi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#yin-ying-yang-shi" title="阴影样式" data-level="3" data-href="#yin-ying-yang-shi">¶</a>阴影样式</h3>
<demo-block>
        <template #example><input-demo5 inline-template><div class="input-demo5">
  <mz-input v-model="value"
    placeholder="请输入文字"
    shadow></mz-input>
</div></input-demo5></template>
        <template #description><p><code>shadow</code>属性控制是否使用阴影显示。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot;
  placeholder=&quot;请输入文字&quot;
  shadow&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-hou-zhi-nei-rong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#qian-hou-zhi-nei-rong" title="前后置内容" data-level="3" data-href="#qian-hou-zhi-nei-rong">¶</a>前后置内容</h3>
<demo-block>
        <template #example><input-demo6 inline-template><div class="input-demo6">
  <mz-input v-model="username" placeholder="请输入用户名">
    <mz-icon name="md-person" slot="prefix"></mz-icon>
  </mz-input>
  
  <mz-input v-model="value" placeholder="请输入金额" prefix="￥"
  suffix="RMB">
  </mz-input>
</div></input-demo6></template>
        <template #description><p><code>prefix</code>、<code>suffix</code>属性添加字符型的前置内容。你也可以使用同名插槽进行更多的扩展。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;username&quot; placeholder=&quot;请输入用户名&quot;&gt;
  &lt;mz-icon name=&quot;md-person&quot; slot=&quot;prefix&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-input&gt;

&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入金额&quot; prefix=&quot;￥&quot;
suffix=&quot;RMB&quot;&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      username:'',
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#jin-yong" title="禁用" data-level="3" data-href="#jin-yong">¶</a>禁用</h3>
<demo-block>
        <template #example><input-demo7 inline-template><div class="input-demo7">
  <mz-input v-model="value" disabled></mz-input>
  <mz-input v-model="value" disabled rounded></mz-input>
</div></input-demo7></template>
        <template #description><p><code>disabled</code>属性控制是否禁用。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot; disabled&gt;&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; disabled rounded&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '禁用的输入框'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="wei-bu-an-niu" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#wei-bu-an-niu" title="尾部按钮" data-level="3" data-href="#wei-bu-an-niu">¶</a>尾部按钮</h3>
<demo-block>
        <template #example><input-demo8 inline-template><div class="input-demo8">
  <mz-input v-model="value"
    end-button="搜索"></mz-input>
  <mz-input v-model="value"
    :end-button="{ value:'Search', color:'success' }"></mz-input>
</div></input-demo8></template>
        <template #description><p><code>end-button</code>属性控制显示尾部按钮。可以直接传一个String，或传递一个对象（属性与MzButton的props一致）。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot;
  end-button=&quot;搜索&quot;&gt;&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot;
  :end-button=&quot;{ value:'Search', color:'success' }&quot;&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '搜索输入框'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentInput',
  components: { InputDemo1: {
  data() {
    return {
      value: ''
    }
  }
}, InputDemo2: {
  data() {
    return {
      value: ''
    }
  }
}, InputDemo3: {
  data() {
    return {
      value: ''
    }
  }
}, InputDemo4: {
  data() {
    return {
      rounded: false,
      value: ''
    }
  }
}, InputDemo5: {
  data() {
    return {
      value: ''
    }
  }
}, InputDemo6: {
  data() {
    return {
      username:'',
      value: ''
    }
  }
}, InputDemo7: {
  data() {
    return {
      value: '禁用的输入框'
    }
  }
}, InputDemo8: {
  data() {
    return {
      value: '搜索输入框'
    }
  }
} }
}
</script>
<style lang="scss">

</style>