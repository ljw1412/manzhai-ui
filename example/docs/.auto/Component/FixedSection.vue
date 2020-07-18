<template>
  <div class="component-fixed-section">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="fixedsection-gu-ding-xiang"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#fixedsection-gu-ding-xiang"
        title="FixedSection 固定项"
        data-level="2"
        data-href="#fixedsection-gu-ding-xiang"
        >¶</a
      >FixedSection 固定项
    </h2>
    <p>一个固定块或者与滚动联动的粘性效果。</p>
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
        ><fixed-section-demo1 inline-template
          ><div class="fixed-section-demo1">
            <mz-button @click="fixed = !fixed">{{
              fixed ? '关闭固定' : '开启固定'
            }}</mz-button>
            <mz-fixed-section :fixed="fixed" top="200px" left="300px"
              >我是固定的块</mz-fixed-section
            >
          </div></fixed-section-demo1
        ></template
      >
      <template #description
        ><p><code>fixed</code>属性控制是否固定。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-button @click=&quot;fixed = !fixed&quot;&gt;{{fixed?'关闭固定':'开启固定'}}&lt;/mz-button&gt;
&lt;mz-fixed-section :fixed=&quot;fixed&quot; top=&quot;200px&quot; left=&quot;300px&quot;&gt;我是固定的块&lt;/mz-fixed-section&gt;

&lt;script&gt;
export default {
  data() {
    return {
      fixed: false
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="nian-xing-kuai"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#nian-xing-kuai"
        title="粘性块"
        data-level="3"
        data-href="#nian-xing-kuai"
        >¶</a
      >粘性块
    </h3>
    <demo-block>
      <template #example
        ><fixed-section-demo2 inline-template
          ><div class="fixed-section-demo2">
            <div
              id="sticky-scroll-wrapper"
              style="height:300px;overflow-y:scroll;"
            >
              <div
                style="height:1500px;background: linear-gradient(45deg, blue,orange, yellow);"
              >
                <div style="height:100px;"></div>
                <mz-fixed-section
                  sticky
                  placeholder
                  container="#sticky-scroll-wrapper"
                  :section-style="{
                    'background-color': 'green',
                    padding: '15px'
                  }"
                  >我是固定的块</mz-fixed-section
                >
                <div style="height:200px;"></div>
                <mz-fixed-section
                  sticky
                  container="#sticky-scroll-wrapper"
                  :offsetTop="100"
                  :section-style="{
                    'background-color': 'red',
                    padding: '15px'
                  }"
                  >我是固定的块距离顶部100px时固定</mz-fixed-section
                >
              </div>
            </div>
          </div></fixed-section-demo2
        ></template
      >
      <template #description
        ><p>
          <code>sticky</code
          >属性控制是否为粘性效果，<code>placeholder</code>属性控制在固定时是否有占位空间来撑开原始位置的高度。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;div id=&quot;sticky-scroll-wrapper&quot; style=&quot;height:300px;overflow-y:scroll;&quot;&gt;
  &lt;div style=&quot;height:1500px;background: linear-gradient(45deg, blue,orange, yellow);&quot;&gt;
    &lt;div style=&quot;height:100px;&quot;&gt;&lt;/div&gt;
    &lt;mz-fixed-section sticky placeholder
      container=&quot;#sticky-scroll-wrapper&quot;
      :section-style=&quot;{'background-color':'green',padding:'15px'}&quot;&gt;我是固定的块&lt;/mz-fixed-section&gt;
    &lt;div style=&quot;height:200px;&quot;&gt;&lt;/div&gt;
    &lt;mz-fixed-section sticky 
      container=&quot;#sticky-scroll-wrapper&quot;
      :offsetTop=&quot;100&quot;
      :section-style=&quot;{'background-color':'red',padding:'15px'}&quot;&gt;我是固定的块距离顶部100px时固定&lt;/mz-fixed-section&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
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
          <td>fixed</td>
          <td>是否固定模式</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>top</td>
          <td>固定模式下有效，顶部位置</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>固定模式下有效，底部位置</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>left</td>
          <td>固定模式下有效，左边位置</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>right</td>
          <td>固定模式下有效，右边位置</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>sectionStyle</td>
          <td>板块样式</td>
          <td>Object</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>sticky</td>
          <td>是否粘性布局</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>container</td>
          <td>所在的父级容器，一般为滚动容器。</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>offsetTop</td>
          <td>吸顶时与顶部的距离，单位px</td>
          <td>Number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>是否有占位容器</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td>同原生 z-index</td>
          <td>Number</td>
          <td></td>
          <td>900</td>
        </tr>
      </tbody>
    </table>
    <h4 id="cha-cao" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#cha-cao"
        title="插槽"
        data-level="4"
        data-href="#cha-cao"
        >¶</a
      >插槽
    </h4>
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
          <td>默认</td>
          <td>板块内容</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentFixedSection',
  components: {
    FixedSectionDemo1: {
      data() {
        return {
          fixed: false
        }
      }
    },
    FixedSectionDemo2: {
      data() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.component-fixed-section {
}
</style>
