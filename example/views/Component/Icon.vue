<template>
  <div class="component-icon">
    <div class="update-datetime">文档更新时间：2020-01-21 19:24</div>
    <h2 id="icon-tu-biao"
      class="mz-header mz-document-header"
      data-level="2"><a class="mz-document-anchor"
        href="#icon-tu-biao"
        title="Icon 图标"
        data-level="2"
        data-href="#icon-tu-biao">¶</a>Icon 图标</h2>
    <p>基于 <a href="https://ionicons.com">ionicons</a> 的图标库。</p>
    <h3 id="shi-yong-fang-fa"
      class="mz-header mz-document-header"
      data-level="3"><a class="mz-document-anchor"
        href="#shi-yong-fang-fa"
        title="使用方法"
        data-level="3"
        data-href="#shi-yong-fang-fa">¶</a>使用方法</h3>
    <demo-block>
      <template #example>
        <icon-demo1 inline-template>
          <div class="icon-demo1">
            <mz-icon name="md-sunny"></mz-icon>
            <mz-icon name="md-moon"></mz-icon>
            <mz-icon name="md-lock"></mz-icon>
          </div>
        </icon-demo1>
      </template>
      <template #description></template>
      <template #highlight>
        <pre v-pre><code class="html">&lt;mz-icon name=&quot;md-sunny&quot;&gt;&lt;/mz-icon&gt;
&lt;mz-icon name=&quot;md-moon&quot;&gt;&lt;/mz-icon&gt;
&lt;mz-icon name=&quot;md-lock&quot;&gt;&lt;/mz-icon&gt;
</code></pre></template></demo-block>
    <h3 id="suo-you-tu-biao"
      class="mz-header mz-document-header"
      data-level="3"><a class="mz-document-anchor"
        href="#suo-you-tu-biao"
        title="所有图标"
        data-level="3"
        data-href="#suo-you-tu-biao">¶</a>所有图标</h3>
    <mz-tabs v-model="iconType"
      align="right">
      <mz-tab value="ios"></mz-tab>
      <mz-tab value="md"></mz-tab>
    </mz-tabs>
    <mz-sub-header>图标</mz-sub-header>
    <div class="icon-grid">
      <div v-for="item of icons[iconType]"
        :key="item"
        class="icon-grid__cell flex-double-center is-pointer"
        @click="onIconClick(item)">
        <mz-icon :name="item"
          size="40px"></mz-icon>
      </div>
    </div>
    <mz-sub-header>logo</mz-sub-header>
    <div class="icon-grid">
      <div v-for="item of logos"
        :key="item"
        class="icon-grid__cell flex-double-center">
        <mz-icon :name="item"
          size="40px"></mz-icon>
      </div>
    </div>
    <h3 id="api"
      class="mz-header mz-document-header"
      data-level="3"><a class="mz-document-anchor"
        href="#api"
        title="API"
        data-level="3"
        data-href="#api">¶</a>API</h3>
    <h4 id="shu-xing"
      class="mz-header mz-document-header"
      data-level="4"><a class="mz-document-anchor"
        href="#shu-xing"
        title="属性"
        data-level="4"
        data-href="#shu-xing">¶</a>属性</h4>
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
          <td>颜色</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import icons from '../../options/icon'
import { copyText } from '../../utils/string'

@Component({
  components: { IconDemo1: {} }
})
export default class ComponentIcon extends Vue {
  icons = icons
  logos = icons.logo
  iconType = 'md'

  onIconClick(item: string) {
    copyText(`<mz-icon name="${item}"></mz-icon>`)
  }
}
</script>

<style lang="scss" scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-auto-rows: minmax(70px, auto);
  &__cell {
    margin: 5px;
    color: var(--color-text-primary);
    &:hover {
      border-radius: 5px;
      box-shadow: 0 1px 5px 0 currentColor;
      background-color: var(--color-body-background);
    }
  }
}
</style>
