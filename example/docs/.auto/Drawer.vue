<template>
  <div class="component-drawer">
    <div class="update-datetime">文档更新时间：2020-04-17 17:17</div>
    <h2 id="drawer-chou-ti" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#drawer-chou-ti" title="Drawer 抽屉" data-level="2" data-href="#drawer-chou-ti">¶</a>Drawer 抽屉</h2>
<p>屏幕边缘滑出的浮层面板。</p>
<h3 id="ji-chu-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><drawer-demo1 inline-template><div class="drawer-demo1">
  <mz-filter-section v-model="placement"
    label="抽屉弹出位置：" label-position="right">
    <mz-filter-section-item v-for="item of placementList"
      :key="item"
      :value="item"></mz-filter-section-item>
  </mz-filter-section>
  <mz-button color="success"
    @click="visible = true">显示抽屉</mz-button>
  <mz-drawer v-model="visible" :placement="placement"></mz-drawer>
</div></drawer-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-filter-section v-model=&quot;placement&quot;
  label=&quot;抽屉弹出位置：&quot; label-position=&quot;right&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of placementList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;
&lt;mz-button color=&quot;success&quot;
  @click=&quot;visible = true&quot;&gt;显示抽屉&lt;/mz-button&gt;
&lt;mz-drawer v-model=&quot;visible&quot; :placement=&quot;placement&quot;&gt;&lt;/mz-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block>
  </div>
</template>
<script>
export default {
  name: 'ComponentDrawer',
  components: { DrawerDemo1: {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
} }
}
</script>
<style lang="scss">

</style>