<template>
  <div class="component-snackbar">
    <div class="update-datetime">文档更新时间：2020-01-22 17:37</div>
    <h2 id="snackbar-xiao-xi-tiao" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#snackbar-xiao-xi-tiao" title="Snackbar 消息条" data-level="2" data-href="#snackbar-xiao-xi-tiao">¶</a>Snackbar 消息条</h2>
<p>用于页面中展示消息。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><snackbar-demo1 inline-template><div class="snackbar-demo1">
  <mz-snackbar v-model="isShow" text="这是一条测试消息。"></mz-snackbar>
  <mz-button @click="isShow = true">显示</mz-button>
</div></snackbar-demo1></template>
        <template #description><p>消息条默认显示5秒。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot; text=&quot;这是一条测试消息。&quot;&gt;&lt;/mz-snackbar&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shou-dong-guan-bi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#shou-dong-guan-bi" title="手动关闭" data-level="3" data-href="#shou-dong-guan-bi">¶</a>手动关闭</h3>
<p>使用手动模式关闭消息框。</p>
<demo-block>
        <template #example><snackbar-demo2 inline-template><div class="snackbar-demo2">
  <mz-snackbar v-model="isShow"
    text="这是一条测试消息。"
    buttonText="关闭"
    :timeout="0"
    @buttonClick="isShow = false"></mz-snackbar>
  <mz-button @click="isShow = true">显示</mz-button>
</div></snackbar-demo2></template>
        <template #description><p><code>timeout</code>为0时不会自动关闭。<code>buttonText</code>属性值有效，会显示一个操作按钮，点击时会传递出<code>buttonClick</code>事件。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  text=&quot;这是一条测试消息。&quot;
  buttonText=&quot;关闭&quot;
  :timeout=&quot;0&quot;
  @buttonClick=&quot;isShow = false&quot;&gt;&lt;/mz-snackbar&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-xing-bu-ju" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#duo-xing-bu-ju" title="多行布局" data-level="3" data-href="#duo-xing-bu-ju">¶</a>多行布局</h3>
<demo-block>
        <template #example><snackbar-demo3 inline-template><div class="snackbar-demo3">
  <mz-snackbar v-model="isShow"
    vertical
    text="这是一条测试消息。"
    buttonText="关闭"
    :timeout="0"
    @buttonClick="isShow = false"></mz-snackbar>
  <mz-button @click="isShow = true">显示</mz-button>
</div></snackbar-demo3></template>
        <template #description><p><code>vertical</code>属性值控制布局的显示效果。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  vertical
  text=&quot;这是一条测试消息。&quot;
  buttonText=&quot;关闭&quot;
  :timeout=&quot;0&quot;
  @buttonClick=&quot;isShow = false&quot;&gt;&lt;/mz-snackbar&gt;
&lt;mz-button @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-he-wei-zhi" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#gu-ding-he-wei-zhi" title="固定和位置" data-level="3" data-href="#gu-ding-he-wei-zhi">¶</a>固定和位置</h3>
<p>让消息框在全局固定位置显示。</p>
<demo-block>
        <template #example><snackbar-demo4 inline-template><div class="snackbar-demo4">
  <mz-snackbar v-model="isShow"
    fixed
    text="这是一条测试消息。"
    buttonText="关闭"
    :timeout="0"
    :placement="placement"
    @buttonClick="isShow = false"></mz-snackbar>
  <mz-button type="primary" @click="isShow = true">显示</mz-button>
  <br><br>
  <mz-filter-section v-model="placement" label="placement">
    <mz-filter-section-item v-for="item of placementList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
</div></snackbar-demo4></template>
        <template #description><p><code>fixed</code>控制是否固定，<code>placement</code>控制消息框在界面的位置。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;isShow&quot;
  fixed
  text=&quot;这是一条测试消息。&quot;
  buttonText=&quot;关闭&quot;
  :timeout=&quot;0&quot;
  :placement=&quot;placement&quot;
  @buttonClick=&quot;isShow = false&quot;&gt;&lt;/mz-snackbar&gt;
&lt;mz-button type=&quot;primary&quot; @click=&quot;isShow = true&quot;&gt;显示&lt;/mz-button&gt;
&lt;br&gt;&lt;br&gt;
&lt;mz-filter-section v-model=&quot;placement&quot; label=&quot;placement&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of placementList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="quan-ju-fang-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#quan-ju-fang-fa" title="全局方法" data-level="3" data-href="#quan-ju-fang-fa">¶</a>全局方法</h3>
<p>ManZhai 为 Vue.prototype 添加了全局方法 $snackbar。因此在 vue instance 中可以采用本页面中的方式调用 Message。</p>
<demo-block>
        <template #example><snackbar-demo5 inline-template><div class="snackbar-demo5">
  <mz-button @click="onClick">显示</mz-button>
</div></snackbar-demo5></template>
        <template #description><p>方法<code>show</code>里传的config，与组件Snackbar的属性值完全一致。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-button @click=&quot;onClick&quot;&gt;显示&lt;/mz-button&gt;

&lt;script&gt;
export default {
  methods:{
    onClick() {
      this.$snackbar.show({
        text: '测试',
        buttonText: '关闭',
        buttonProps: { fontColor: '#ffffff', flat: true },
        buttonClick: function() {
          this.close()
        },
        placement: 'bottom'
      })
    }    
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  components: { SnackbarDemo1: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo2: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo3: {
  data() {
    return {
      isShow: false
    }
  }
}, SnackbarDemo4: {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}, SnackbarDemo5: {
  methods:{
    onClick() {
      this.$snackbar.show({
        text: '测试',
        buttonText: '关闭',
        buttonProps: { fontColor: '#ffffff', flat: true },
        buttonClick: function() {
          this.close()
        },
        placement: 'bottom'
      })
    }    
  }
} }
}
</script>
<style lang="scss">

</style>