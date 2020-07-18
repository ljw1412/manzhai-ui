<template>
  <div class="component-select">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="select-xuan-ze-kuang"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#select-xuan-ze-kuang"
        title="Select 选择框"
        data-level="2"
        data-href="#select-xuan-ze-kuang"
        >¶</a
      >Select 选择框
    </h2>
    <p>下拉菜单选择器。</p>
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
        ><select-demo1 inline-template
          ><div class="select-demo1">
            <mz-select v-model="value" placeholder="目标">
              <mz-option
                v-for="item of list"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></mz-option>
            </mz-select></div></select-demo1
      ></template>
      <template #description
        ><p>select的<code>list</code>属性与遍历option效果一致。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-select v-model=&quot;value&quot; placeholder=&quot;目标&quot;&gt;
  &lt;mz-option v-for=&quot;item of list&quot;
    :key=&quot;item.value&quot;
    :value=&quot;item.value&quot;
    :label=&quot;item.label&quot;&gt;&lt;/mz-option&gt;
&lt;/mz-select&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="jin-yong" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#jin-yong"
        title="禁用"
        data-level="3"
        data-href="#jin-yong"
        >¶</a
      >禁用
    </h3>
    <demo-block>
      <template #example
        ><select-demo2 inline-template
          ><div class="select-demo2">
            <mz-select v-model="value" placeholder="目标">
              <mz-option
                v-for="item of list"
                :disabled="item.disabled"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></mz-option>
            </mz-select>

            <mz-select v-model="value" placeholder="目标" :disabled="true">
              <mz-option
                v-for="item of list"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></mz-option>
            </mz-select></div></select-demo2
      ></template>
      <template #description
        ><p><code>disabled</code>属性控制下拉框的禁用状态。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-select v-model=&quot;value&quot; placeholder=&quot;目标&quot;&gt;
  &lt;mz-option v-for=&quot;item of list&quot;
    :disabled=&quot;item.disabled&quot;
    :key=&quot;item.value&quot;
    :value=&quot;item.value&quot;
    :label=&quot;item.label&quot;&gt;&lt;/mz-option&gt;
&lt;/mz-select&gt;

&lt;mz-select v-model=&quot;value&quot; placeholder=&quot;目标&quot; :disabled=&quot;true&quot;&gt;
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
</code></pre></template</template
      ></demo-block
    >
    <h3 id="select-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#select-api"
        title="Select API"
        data-level="3"
        data-href="#select-api"
        >¶</a
      >Select API
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
          <td>value</td>
          <td>绑定值</td>
          <td>any</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>占位文本</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>filterable</td>
          <td>是否筛选</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>arrow</td>
          <td>是否显示箭头</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸</td>
          <td>String</td>
          <td>small / medium / large</td>
          <td></td>
        </tr>
        <tr>
          <td>animation</td>
          <td>动画效果</td>
          <td>String</td>
          <td>同Tooltip的animation</td>
          <td>'shift-away-subtle'</td>
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
          <td>选择项选中状态变化</td>
          <td>(value: any)</td>
        </tr>
      </tbody>
    </table>
    <h3 id="option-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#option-api"
        title="Option API"
        data-level="3"
        data-href="#option-api"
        >¶</a
      >Option API
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
          <td>选项的值</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项的标签</td>
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
          <td>选项点击事件</td>
          <td>({value: any,label:string})</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentSelect',
  components: {
    SelectDemo1: {
      data() {
        return {
          value: '',
          list: [
            { value: 1, label: '甲' },
            { value: 2, label: '乙' },
            { value: 3, label: '丙' }
          ]
        }
      }
    },
    SelectDemo2: {
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
  }
}
</script>

<style lang="scss">
.component-select {
}
</style>
