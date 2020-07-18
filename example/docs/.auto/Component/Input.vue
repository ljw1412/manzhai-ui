<template>
  <div class="component-input">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="input-shu-ru-kuang"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#input-shu-ru-kuang"
        title="Input 输入框"
        data-level="2"
        data-href="#input-shu-ru-kuang"
        >¶</a
      >Input 输入框
    </h2>
    <p>通过鼠标或键盘输入内容。</p>
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
        ><input-demo1 inline-template
          ><div class="input-demo1">
            <mz-input
              v-model="value"
              placeholder="请输入文字"
            ></mz-input></div></input-demo1
      ></template>
      <template #description></template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入文字&quot;&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="yuan-jiao" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#yuan-jiao"
        title="圆角"
        data-level="3"
        data-href="#yuan-jiao"
        >¶</a
      >圆角
    </h3>
    <demo-block>
      <template #example
        ><input-demo2 inline-template
          ><div class="input-demo2">
            <mz-input v-model="value" placeholder="请输入文字" rounded>
            </mz-input></div></input-demo2
      ></template>
      <template #description
        ><p><code>rounded</code>属性控制是否使用圆角显示。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入文字&quot; rounded&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
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
      id="bu-tong-da-xiao"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#bu-tong-da-xiao"
        title="不同大小"
        data-level="3"
        data-href="#bu-tong-da-xiao"
        >¶</a
      >不同大小
    </h3>
    <p>提供了3种输入框大小。</p>
    <demo-block>
      <template #example
        ><input-demo3 inline-template
          ><div class="input-demo3">
            <mz-input v-model="value" placeholder="小" size="small"> </mz-input>
            <mz-input v-model="value" placeholder="中" size="medium">
            </mz-input>
            <mz-input v-model="value" placeholder="默认"> </mz-input>
            <mz-input v-model="value" placeholder="大" size="large"> </mz-input>

            <mz-input
              v-model="value"
              placeholder="小(圆角)"
              rounded
              size="small"
            >
            </mz-input>
            <mz-input
              v-model="value"
              placeholder="中(圆角)"
              rounded
              size="medium"
            >
            </mz-input>
            <mz-input v-model="value" placeholder="默认(圆角)" rounded>
            </mz-input>
            <mz-input
              v-model="value"
              placeholder="大(圆角)"
              rounded
              size="large"
            >
            </mz-input></div></input-demo3
      ></template>
      <template #description
        ><p>
          <code>size</code
          >属性控制输入框的大小，可选值<code>small</code>、<code>medium</code>、<code>(默认)</code>、<code>large</code>。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;小&quot; size=&quot;small&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;中&quot; size=&quot;medium&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;默认&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;大&quot; size=&quot;large&quot;&gt;
&lt;/mz-input&gt;

&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;小(圆角)&quot; rounded size=&quot;small&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;中(圆角)&quot; rounded size=&quot;medium&quot;&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;默认(圆角)&quot; rounded&gt;
&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;大(圆角)&quot; rounded size=&quot;large&quot;&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
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
      id="bian-ping-yang-shi"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#bian-ping-yang-shi"
        title="扁平样式"
        data-level="3"
        data-href="#bian-ping-yang-shi"
        >¶</a
      >扁平样式
    </h3>
    <demo-block>
      <template #example
        ><input-demo4 inline-template
          ><div class="input-demo4">
            <mz-input
              v-model="value"
              placeholder="请输入文字"
              flat
            ></mz-input></div></input-demo4
      ></template>
      <template #description
        ><p><code>flat</code>属性控制是否使用扁平效果。</p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot;
  placeholder=&quot;请输入文字&quot;
  flat&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
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
      id="yin-ying-yang-shi"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#yin-ying-yang-shi"
        title="阴影样式"
        data-level="3"
        data-href="#yin-ying-yang-shi"
        >¶</a
      >阴影样式
    </h3>
    <demo-block>
      <template #example
        ><input-demo5 inline-template
          ><div class="input-demo5">
            <mz-input
              v-model="value"
              placeholder="请输入文字"
              shadow
            ></mz-input></div></input-demo5
      ></template>
      <template #description
        ><p><code>shadow</code>属性控制是否使用阴影显示。</p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-input v-model=&quot;value&quot;
  placeholder=&quot;请输入文字&quot;
  shadow&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
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
      id="qian-hou-zhui"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#qian-hou-zhui"
        title="前后缀"
        data-level="3"
        data-href="#qian-hou-zhui"
        >¶</a
      >前后缀
    </h3>
    <demo-block>
      <template #example
        ><input-demo6 inline-template
          ><div class="input-demo6">
            <mz-input v-model="username" placeholder="请输入用户名">
              <mz-icon name="person" slot="prefix"></mz-icon>
            </mz-input>

            <mz-input
              v-model="value"
              placeholder="请输入金额"
              prefix="￥"
              suffix="RMB"
            >
            </mz-input></div></input-demo6
      ></template>
      <template #description
        ><p>
          <code>prefix</code
          >、<code>suffix</code>属性添加字符型的前置内容。你也可以使用同名插槽进行更多的扩展。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-input v-model=&quot;username&quot; placeholder=&quot;请输入用户名&quot;&gt;
  &lt;mz-icon name=&quot;person&quot; slot=&quot;prefix&quot;&gt;&lt;/mz-icon&gt;
&lt;/mz-input&gt;

&lt;mz-input v-model=&quot;value&quot; placeholder=&quot;请输入金额&quot; prefix=&quot;￥&quot;
suffix=&quot;RMB&quot;&gt;
&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      username:'',
      value: ''
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
        ><input-demo7 inline-template
          ><div class="input-demo7">
            <mz-input v-model="value" disabled></mz-input>
            <mz-input
              v-model="value"
              disabled
              rounded
            ></mz-input></div></input-demo7
      ></template>
      <template #description
        ><p><code>disabled</code>属性控制是否禁用。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-input v-model=&quot;value&quot; disabled&gt;&lt;/mz-input&gt;
&lt;mz-input v-model=&quot;value&quot; disabled rounded&gt;&lt;/mz-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '禁用的输入框'
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="shu-ru-kuang-zu-he"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#shu-ru-kuang-zu-he"
        title="输入框组合"
        data-level="3"
        data-href="#shu-ru-kuang-zu-he"
        >¶</a
      >输入框组合
    </h3>
    <demo-block>
      <template #example
        ><input-demo8 inline-template
          ><div class="input-demo8">
            <mz-input-group>
              <mz-select v-model="protocol">
                <mz-option value="http://"></mz-option>
                <mz-option value="https://"></mz-option>
                <mz-option value="ftp://"></mz-option>
              </mz-select>
              <mz-input v-model="value" outlined></mz-input>
              <mz-button color="primary">确定</mz-button>
            </mz-input-group>
          </div></input-demo8
        ></template
      >
      <template #description></template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-input-group&gt;  
  &lt;mz-select v-model=&quot;protocol&quot;&gt;
    &lt;mz-option value=&quot;http://&quot;&gt;&lt;/mz-option&gt;
    &lt;mz-option value=&quot;https://&quot;&gt;&lt;/mz-option&gt;
    &lt;mz-option value=&quot;ftp://&quot;&gt;&lt;/mz-option&gt;
  &lt;/mz-select&gt;
  &lt;mz-input v-model=&quot;value&quot; outlined&gt;&lt;/mz-input&gt; 
  &lt;mz-button color=&quot;primary&quot;&gt;确定&lt;/mz-button&gt;
&lt;/mz-input-group&gt;


&lt;script&gt;
export default {
  data() {
    return {
      protocol:'',
      value: ''
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
          <td>String / Number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            同原生
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types"
              >type</a
            >
          </td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>max</td>
          <td>原生属性</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>min</td>
          <td>原生属性</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>step</td>
          <td>原生属性</td>
          <td></td>
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
          <td>rounded</td>
          <td>是否为圆角效果</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
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
        <tr>
          <td>prefix</td>
          <td>前缀内容，复杂内容请使用同名插槽</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>后缀内容，复杂内容请使用同名插槽</td>
          <td>String</td>
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
          <td>prefix</td>
          <td>前缀</td>
          <td></td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>后缀</td>
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
  name: 'ComponentInput',
  components: {
    InputDemo1: {
      data() {
        return {
          value: ''
        }
      }
    },
    InputDemo2: {
      data() {
        return {
          value: ''
        }
      }
    },
    InputDemo3: {
      data() {
        return {
          value: ''
        }
      }
    },
    InputDemo4: {
      data() {
        return {
          value: ''
        }
      }
    },
    InputDemo5: {
      data() {
        return {
          value: ''
        }
      }
    },
    InputDemo6: {
      data() {
        return {
          username: '',
          value: ''
        }
      }
    },
    InputDemo7: {
      data() {
        return {
          value: '禁用的输入框'
        }
      }
    },
    InputDemo8: {
      data() {
        return {
          protocol: '',
          value: ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
.component-input {
}
</style>
