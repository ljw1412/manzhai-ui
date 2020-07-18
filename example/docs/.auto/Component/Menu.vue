<template>
  <div class="component-menu">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="menu-dao-hang-cai-dan"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#menu-dao-hang-cai-dan"
        title="Menu 导航菜单"
        data-level="2"
        data-href="#menu-dao-hang-cai-dan"
        >¶</a
      >Menu 导航菜单
    </h2>
    <p>为页面和功能提供导航的菜单列表。</p>
    <h3
      id="ji-chu-yong-fa"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#ji-chu-yong-fa"
        title="基础用法"
        data-level="3"
        data-href="#ji-chu-yong-fa"
        >¶</a
      >基础用法
    </h3>
    <demo-block>
      <template #example
        ><menu-demo1 inline-template
          ><div class="menu-demo1">
            <mz-menu>
              <mz-menu-item title="测试" prefix="rocket"></mz-menu-item>
              <mz-menu-item title="测试" prefix="rocket" text="描述文字">
                <template #title>标题</template>
              </mz-menu-item>
            </mz-menu>
          </div></menu-demo1
        ></template
      >
      <template #description></template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-menu&gt;
  &lt;mz-menu-item title=&quot;测试&quot; prefix=&quot;rocket&quot;&gt;&lt;/mz-menu-item&gt;
  &lt;mz-menu-item title=&quot;测试&quot; prefix=&quot;rocket&quot; text=&quot;描述文字&quot;&gt;
    &lt;template #title&gt;标题&lt;/template&gt;
  &lt;/mz-menu-item&gt;
&lt;/mz-menu&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="shui-ping-dao-hang-lan"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#shui-ping-dao-hang-lan"
        title="水平导航栏"
        data-level="3"
        data-href="#shui-ping-dao-hang-lan"
        >¶</a
      >水平导航栏
    </h3>
    <demo-block>
      <template #example
        ><menu-demo2 inline-template
          ><div class="menu-demo2">
            <mz-menu placement="top">
              <mz-menu-item
                v-for="i of 10"
                title="测试"
                prefix="rocket"
              ></mz-menu-item>
              <mz-menu-item
                title="禁用"
                prefix="rocket"
                disabled
              ></mz-menu-item>
              <mz-menu-item title="测试" prefix="rocket" text="描述文字">
                <template #title>标题</template>
              </mz-menu-item>
            </mz-menu>
          </div></menu-demo2
        ></template
      >
      <template #description></template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-menu placement=&quot;top&quot;&gt;
  &lt;mz-menu-item v-for=&quot;i of 10&quot; title=&quot;测试&quot; prefix=&quot;rocket&quot;&gt;&lt;/mz-menu-item&gt;
  &lt;mz-menu-item title=&quot;禁用&quot; prefix=&quot;rocket&quot; disabled&gt;&lt;/mz-menu-item&gt;
  &lt;mz-menu-item title=&quot;测试&quot; prefix=&quot;rocket&quot; text=&quot;描述文字&quot;&gt;
    &lt;template #title&gt;标题&lt;/template&gt;
  &lt;/mz-menu-item&gt;
&lt;/mz-menu&gt;
</code></pre></template</template
      ></demo-block
    >
  </div>
</template>

<script>
export default {
  name: 'ComponentMenu',
  components: { MenuDemo1: {}, MenuDemo2: {} }
}
</script>

<style lang="scss">
.component-menu {
}
</style>
