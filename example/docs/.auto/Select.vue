<template>
  <div class="component-select">
    <div class="update-datetime">文档更新时间：2020-02-02 16:15</div>
    <h2 id="select-xuan-ze-kuang" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#select-xuan-ze-kuang" title="Select 选择框" data-level="2" data-href="#select-xuan-ze-kuang">¶</a>Select 选择框</h2>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><select-demo1 inline-template><div class="select-demo1">
  <mz-select v-model="value" :list="list"></mz-select>
  <mz-select v-model="value" label="目标">
    <mz-option v-for="item of list"
      :key="item.value"
      :value="item.value"
      :label="item.label"></mz-option>
  </mz-select>
</div></select-demo1></template>
        <template #description><p>select的<code>list</code>属性与遍历option效果一致。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-select v-model=&quot;value&quot; :list=&quot;list&quot;&gt;&lt;/mz-select&gt;
&lt;mz-select v-model=&quot;value&quot; label=&quot;目标&quot;&gt;
  &lt;mz-option v-for=&quot;item of list&quot;
    :key=&quot;item.value&quot;
    :value=&quot;item.value&quot;
    :label=&quot;item.label&quot;&gt;&lt;/mz-option&gt;
&lt;/mz-select&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tong-kuan-xia-la-kuang" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#tong-kuan-xia-la-kuang" title="同宽下拉框" data-level="3" data-href="#tong-kuan-xia-la-kuang">¶</a>同宽下拉框</h3>
<p>使下拉框与选择框一样宽。</p>
<demo-block>
        <template #example><select-demo2 inline-template><div class="select-demo2">
  <mz-select v-model="value" :list="list" dropdownMatchSelectWidth></mz-select>
</div></select-demo2></template>
        <template #description><p><code>dropdownMatchSelectWidth</code>属性控制下拉框是否与选择框同宽。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-select v-model=&quot;value&quot; :list=&quot;list&quot; dropdownMatchSelectWidth&gt;&lt;/mz-select&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-sou-suo-gong-neng-de-xuan-ze-kuang" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#dai-sou-suo-gong-neng-de-xuan-ze-kuang" title="带搜索功能的选择框" data-level="3" data-href="#dai-sou-suo-gong-neng-de-xuan-ze-kuang">¶</a>带搜索功能的选择框</h3>
<p>选择框能够搜索快速找到选项。</p>
<demo-block>
        <template #example><select-demo3 inline-template><div class="select-demo3">
  <mz-select v-model="value" :list="list" dropdownMatchSelectWidth search under></mz-select>
</div></select-demo3></template>
        <template #description><p><code>search</code>属性控制选择框能否搜索。<code>under</code>属性控制下拉框不会遮住选择框。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-select v-model=&quot;value&quot; :list=&quot;list&quot; dropdownMatchSelectWidth search under&gt;&lt;/mz-select&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>

  </div>
</template>
<script>
export default {
  components: { SelectDemo1: {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}, SelectDemo2: {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}, SelectDemo3: {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
} }
}
</script>
<style lang="scss">

</style>