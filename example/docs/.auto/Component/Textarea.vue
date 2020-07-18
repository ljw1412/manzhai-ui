<template>
  <div class="component-textarea">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="textarea-duo-xing-shu-ru-kuang"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#textarea-duo-xing-shu-ru-kuang"
        title="Textarea 多行输入框"
        data-level="2"
        data-href="#textarea-duo-xing-shu-ru-kuang"
        >¶</a
      >Textarea 多行输入框
    </h2>
    <p>能够输入多行文本内容的输入框。</p>
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
        ><textarea-demo1 inline-template
          ><div class="textarea-demo1">
            <mz-textarea
              v-model="value"
              placeholder="请输入"
            ></mz-textarea></div></textarea-demo1
      ></template>
      <template #description></template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-textarea v-model=&quot;value&quot; placeholder=&quot;请输入&quot;&gt;&lt;/mz-textarea&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="bu-tong-yang-shi"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#bu-tong-yang-shi"
        title="不同样式"
        data-level="3"
        data-href="#bu-tong-yang-shi"
        >¶</a
      >不同样式
    </h3>
    <demo-block>
      <template #example
        ><textarea-demo2 inline-template
          ><div class="textarea-demo2">
            <p class="demo-font-size-14">shadow</p>
            <mz-textarea
              v-model="value"
              shadow
              placeholder="请输入"
            ></mz-textarea>
            <p class="demo-font-size-14">flat</p>
            <mz-textarea
              v-model="value2"
              flat
              placeholder="请输入"
            ></mz-textarea></div></textarea-demo2
      ></template>
      <template #description
        ><p>
          <code>flat</code
          >属性控制是否使用扁平效果。<code>shadow</code>属性控制是否使用阴影显示。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;p class=&quot;demo-font-size-14&quot;&gt;shadow&lt;/p&gt;
&lt;mz-textarea v-model=&quot;value&quot; shadow placeholder=&quot;请输入&quot;&gt;&lt;/mz-textarea&gt;
&lt;p class=&quot;demo-font-size-14&quot;&gt;flat&lt;/p&gt;
&lt;mz-textarea v-model=&quot;value2&quot; flat placeholder=&quot;请输入&quot;&gt;&lt;/mz-textarea&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: '',
      value2: ''
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
        ><textarea-demo3 inline-template
          ><div class="textarea-demo3">
            <mz-textarea
              v-model="value"
              placeholder="请输入"
              disabled
            ></mz-textarea></div></textarea-demo3
      ></template>
      <template #description
        ><p><code>disabled</code>属性控制是否禁用。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-textarea v-model=&quot;value&quot; placeholder=&quot;请输入&quot; disabled&gt;&lt;/mz-textarea&gt;

&lt;script&gt;
export default {
  data (){
    return {
      value: '我是一段禁用文案'
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
          <td>value/v-model</td>
          <td>绑定值</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>rows</td>
          <td>输入框行数</td>
          <td>String/Number</td>
          <td></td>
          <td>5</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>是否能被用户缩放</td>
          <td>string</td>
          <td>none/ both/ horizontal/ vertical</td>
          <td>'vertical'</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td>原生属性，最大输入长度</td>
          <td>String/Number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>原生属性</td>
          <td>Boolean</td>
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
          <td>placeholder</td>
          <td>输入框占位文本</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>autocomplete</td>
          <td>原生属性，自动补全</td>
          <td>String</td>
          <td>'on'/'off'</td>
          <td>'off'</td>
        </tr>
        <tr>
          <td>ripple</td>
          <td>点击涟漪效果</td>
          <td>Boolean / Object</td>
          <td></td>
          <td>true</td>
        </tr>
        <tr>
          <td>flat</td>
          <td>是否为扁平效果</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>是否为阴影效果</td>
          <td>Boolean</td>
          <td></td>
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
          <td>input</td>
          <td>输入事件</td>
          <td>(value:string)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>聚焦事件</td>
          <td>(e:InputEvent)</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>失焦事件</td>
          <td>(e:InputEvent)</td>
        </tr>
        <tr>
          <td>change</td>
          <td>内容改变事件</td>
          <td>(value:string)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentTextarea',
  components: {
    TextareaDemo1: {
      data() {
        return {
          value: ''
        }
      }
    },
    TextareaDemo2: {
      data() {
        return {
          value: '',
          value2: ''
        }
      }
    },
    TextareaDemo3: {
      data() {
        return {
          value: '我是一段禁用文案'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.component-textarea {
}
</style>
