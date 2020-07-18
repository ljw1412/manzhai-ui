<template>
  <div class="component-icon">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2 id="icon-tu-biao" class="mz-heading mz-document-heading" data-level="2">
      <a
        class="mz-document-anchor"
        href="#icon-tu-biao"
        title="Icon 图标"
        data-level="2"
        data-href="#icon-tu-biao"
        >¶</a
      >Icon 图标
    </h2>
    <p>基于 <a href="https://ionicons.com">ionicons@5</a> 的图标库。</p>
    <h3 id="an-zhuang" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#an-zhuang"
        title="安装"
        data-level="3"
        data-href="#an-zhuang"
        >¶</a
      >安装
    </h3>
    <p>第一步：拉取图标依赖。</p>
    <pre><code>npm i @ljw1412/icon
</code></pre>
    <p>第二步：在项目入口文件引入依赖。</p>
    <pre><code class="language-js">import '@ljw1412/icon'
</code></pre>
    <h3
      id="shi-yong-fang-fa"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#shi-yong-fang-fa"
        title="使用方法"
        data-level="3"
        data-href="#shi-yong-fang-fa"
        >¶</a
      >使用方法
    </h3>
    <demo-block>
      <template #example
        ><icon-demo1 inline-template
          ><div class="icon-demo1">
            <mz-icon name="airplane-outline"></mz-icon>
            <mz-icon name="alarm-outline"></mz-icon>
            <mz-icon
              name="american-football-outline"
            ></mz-icon></div></icon-demo1
      ></template>
      <template #description></template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-icon name=&quot;airplane-outline&quot;&gt;&lt;/mz-icon&gt;
&lt;mz-icon name=&quot;alarm-outline&quot;&gt;&lt;/mz-icon&gt;
&lt;mz-icon name=&quot;american-football-outline&quot;&gt;&lt;/mz-icon&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="suo-you-tu-biao"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#suo-you-tu-biao"
        title="所有图标"
        data-level="3"
        data-href="#suo-you-tu-biao"
        >¶</a
      >所有图标
    </h3>
    <icon-demo2 inline-template
      ><div class="icon-demo2">
        <icon-grid></icon-grid></div
    ></icon-demo2>
    <h3 id="api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#api"
        title="API"
        data-level="3"
        data-href="#api"
        >¶</a
      >API
    </h3>
    <h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shu-xing"
        title="属性"
        data-level="4"
        data-href="#shu-xing"
        >¶</a
      >属性
    </h4>
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
          <td>name</td>
          <td>图标名称</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>大小</td>
          <td>Number</td>
          <td></td>
          <td>16</td>
        </tr>
        <tr>
          <td>color</td>
          <td>填充颜色</td>
          <td>String</td>
          <td></td>
          <td>'currentColor'</td>
        </tr>
        <tr>
          <td>stroke</td>
          <td>线条颜色</td>
          <td>String</td>
          <td></td>
          <td>填充颜色 或 'currentColor'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentIcon',
  components: { IconDemo1: {}, IconDemo2: {} }
}
</script>

<style lang="scss">
.component-icon {
}
</style>
