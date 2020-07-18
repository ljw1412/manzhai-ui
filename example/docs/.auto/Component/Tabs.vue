<template>
  <div class="component-tabs">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="tabs-biao-qian-ye"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#tabs-biao-qian-ye"
        title="Tabs 标签页"
        data-level="2"
        data-href="#tabs-biao-qian-ye"
        >¶</a
      >Tabs 标签页
    </h2>
    <p>按选项卡显示在对应内容。</p>
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
        ><tabs-demo1 inline-template
          ><div class="tabs-demo1">
            <mz-tabs v-model="value">
              <mz-tab
                v-for="index of 5"
                :key="index"
                :label="'Tab' + index"
                :value="index"
                >标签页{{ index }}</mz-tab
              >
            </mz-tabs>
          </div></tabs-demo1
        ></template
      >
      <template #description
        ><p>
          tabs的<code>value</code>/<code>v-model</code>表示当前显示的标签值，即与tab的<code>value</code>属性对应。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-tabs v-model=&quot;value&quot;&gt;
  &lt;mz-tab v-for=&quot;index of 5&quot;
    :key=&quot;index&quot;
    :label=&quot;'Tab'+index&quot;
    :value=&quot;index&quot;&gt;标签页{{index}}&lt;/mz-tab&gt;
&lt;/mz-tabs&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="biao-qian-ping-pu"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#biao-qian-ping-pu"
        title="标签平铺"
        data-level="3"
        data-href="#biao-qian-ping-pu"
        >¶</a
      >标签平铺
    </h3>
    <demo-block>
      <template #example
        ><tabs-demo2 inline-template
          ><div class="tabs-demo2">
            <mz-tabs v-model="value" grow>
              <mz-tab
                v-for="index of 5"
                :key="index"
                :label="'Tab' + index"
                :value="index"
                >标签页{{ index }}</mz-tab
              >
            </mz-tabs>
          </div></tabs-demo2
        ></template
      >
      <template #description
        ><p>tabs的<code>grow</code>属性可以控制标签是否平铺。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-tabs v-model=&quot;value&quot; grow&gt;
  &lt;mz-tab v-for=&quot;index of 5&quot;
    :key=&quot;index&quot;
    :label=&quot;'Tab'+index&quot;
    :value=&quot;index&quot;&gt;标签页{{index}}&lt;/mz-tab&gt;
&lt;/mz-tabs&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="xuan-zhong-pu-man"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#xuan-zhong-pu-man"
        title="选中铺满"
        data-level="3"
        data-href="#xuan-zhong-pu-man"
        >¶</a
      >选中铺满
    </h3>
    <demo-block>
      <template #example
        ><tabs-demo3 inline-template
          ><div class="tabs-demo3">
            <mz-tabs v-model="value" active-bar-mode="fill">
              <mz-tab
                v-for="index of 5"
                :key="index"
                :label="'Tab' + index"
                :value="index"
                >标签页{{ index }}</mz-tab
              >
            </mz-tabs>
          </div></tabs-demo3
        ></template
      >
      <template #description
        ><p>
          tabs的<code>active-bar-mode</code>表示当前选中的标签的底标模式，可选值<code>fill</code>，默认值<code>none~</code>。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-tabs v-model=&quot;value&quot; active-bar-mode=&quot;fill&quot;&gt;
  &lt;mz-tab v-for=&quot;index of 5&quot;
    :key=&quot;index&quot;
    :label=&quot;'Tab'+index&quot;
    :value=&quot;index&quot;&gt;标签页{{index}}&lt;/mz-tab&gt;
&lt;/mz-tabs&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="biao-qian-hua-dong"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#biao-qian-hua-dong"
        title="标签滑动"
        data-level="3"
        data-href="#biao-qian-hua-dong"
        >¶</a
      >标签滑动
    </h3>
    <demo-block>
      <template #example
        ><tabs-demo4 inline-template
          ><div class="tabs-demo4">
            <mz-tabs v-model="value" grow>
              <mz-tab
                v-for="index of 30"
                :key="index"
                :label="'Tab' + index"
                :value="index"
                >标签页{{ index }}</mz-tab
              >
            </mz-tabs>
          </div></tabs-demo4
        ></template
      >
      <template #description
        ><p>当tabs下的tab超出显示范围，将以滚动显示进行显示。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-tabs v-model=&quot;value&quot; grow&gt;
  &lt;mz-tab v-for=&quot;index of 30&quot;
    :key=&quot;index&quot;
    :label=&quot;'Tab'+index&quot;
    :value=&quot;index&quot;&gt;标签页{{index}}&lt;/mz-tab&gt;
&lt;/mz-tabs&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="biao-qian-shui-ping-wei-zhi"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#biao-qian-shui-ping-wei-zhi"
        title="标签水平位置"
        data-level="3"
        data-href="#biao-qian-shui-ping-wei-zhi"
        >¶</a
      >标签水平位置
    </h3>
    <demo-block>
      <template #example
        ><tabs-demo5 inline-template
          ><div class="tabs-demo5">
            <mz-filter-section
              v-model="align"
              label="align:"
              label-position="left"
            >
              <mz-filter-section-item
                v-for="item of alignList"
                :key="item"
                :value="item"
              ></mz-filter-section-item>
            </mz-filter-section>

            <mz-tabs v-model="value" :align="align">
              <mz-tab
                v-for="index of 5"
                :key="index"
                :label="'Tab' + index"
                :value="index"
                >标签页{{ index }}</mz-tab
              >
            </mz-tabs>
          </div></tabs-demo5
        ></template
      >
      <template #description
        ><p>
          <code>align</code> 属性控制标签的水平位置，可选值<code>left</code> 、
          <code>center</code> 、 <code>right</code>。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-filter-section v-model=&quot;align&quot; label=&quot;align:&quot; label-position=&quot;left&quot;&gt;
  &lt;mz-filter-section-item v-for=&quot;item of alignList&quot;
    :key=&quot;item&quot;
    :value=&quot;item&quot;&gt;&lt;/mz-filter-section-item&gt;
&lt;/mz-filter-section&gt;

&lt;mz-tabs v-model=&quot;value&quot; :align=&quot;align&quot;&gt;
  &lt;mz-tab v-for=&quot;index of 5&quot;
    :key=&quot;index&quot;
    :label=&quot;'Tab'+index&quot;
    :value=&quot;index&quot;&gt;标签页{{index}}&lt;/mz-tab&gt;
&lt;/mz-tabs&gt;

&lt;script&gt;
export default {
  data() {
    return {
      align: 'left',
      alignList: [ 'left' , 'center' , 'right' ],
      value: 1
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="tabs-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#tabs-api"
        title="Tabs Api"
        data-level="3"
        data-href="#tabs-api"
        >¶</a
      >Tabs Api
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
          <td>animation</td>
          <td>是否有切换时的动画效果</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>grow</td>
          <td>是否平铺</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>align</td>
          <td>标签位置</td>
          <td>String</td>
          <td>'left' / 'center' / 'right'</td>
          <td>'left'</td>
        </tr>
        <tr>
          <td>active-bar-mode</td>
          <td>活动条的样式</td>
          <td>String</td>
          <td>'fill' / 'none'</td>
          <td>'none'</td>
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
          <td>标签卡</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shi-jian"
        title="事件"
        data-level="4"
        data-href="#shi-jian"
        >¶</a
      >事件
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
          <td>change</td>
          <td>标签页切换事件</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
    <h3 id="tab-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#tab-api"
        title="Tab Api"
        data-level="3"
        data-href="#tab-api"
        >¶</a
      >Tab Api
    </h3>
    <h4 id="shu-xing-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shu-xing-2"
        title="属性"
        data-level="4"
        data-href="#shu-xing-2"
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
          <td>value</td>
          <td>选项卡的值</td>
          <td>any</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项卡的标签</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ripple</td>
          <td>点击涟漪效果</td>
          <td>Boolean / Object</td>
          <td></td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h4 id="cha-cao-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#cha-cao-2"
        title="插槽"
        data-level="4"
        data-href="#cha-cao-2"
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
          <td>选项卡下的内容</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="shi-jian-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shi-jian-2"
        title="事件"
        data-level="4"
        data-href="#shi-jian-2"
        >¶</a
      >事件
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
          <td>click</td>
          <td>选项卡点击事件</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentTabs',
  components: {
    TabsDemo1: {
      data() {
        return {
          value: 1
        }
      }
    },
    TabsDemo2: {
      data() {
        return {
          value: 1
        }
      }
    },
    TabsDemo3: {
      data() {
        return {
          value: 1
        }
      }
    },
    TabsDemo4: {
      data() {
        return {
          value: 1
        }
      }
    },
    TabsDemo5: {
      data() {
        return {
          align: 'left',
          alignList: ['left', 'center', 'right'],
          value: 1
        }
      }
    }
  }
}
</script>

<style lang="scss">
.component-tabs {
}
</style>
