<template>
  <div class="component-checkbox">
    <div class="update-datetime">文档更新时间：2020-07-23 11:32</div>
      <h2 id="checkbox-duo-xuan-kuang" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#checkbox-duo-xuan-kuang" title="Checkbox 多选框" data-level="2" data-href="#checkbox-duo-xuan-kuang">¶</a>Checkbox 多选框</h2>
      <p>在数个选项中进行多选。</p>
      <h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
      <p>单独使用可以表示两种状态。</p>
      <demo-block>
        <template #example>
          <checkbox-demo1 inline-template>
            <div class="checkbox-demo1">
              <div>
                <mz-checkbox v-model="value2">选择项</mz-checkbox>
                <span class="fs-14">当前值：{{value2}}</span>
              
                <mz-checkbox v-model="value"
                  trueValue="开"
                  falseValue="关">选择项</mz-checkbox>
                <span class="fs-14">当前值：{{value}}</span>
              </div>
            </div>
          </checkbox-demo1>
        </template>
        <template #description>
          <p>定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。如果你定义了<code>trueValue</code>或<code>falseValue</code>时，选中返回<code>trueValue</code>表示的值。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;div&gt;
        &lt;mz-checkbox v-model=&quot;value2&quot;&gt;选择项&lt;/mz-checkbox&gt;
        &lt;span class=&quot;fs-14&quot;&gt;当前值：{{value2}}&lt;/span&gt;
      
        &lt;mz-checkbox v-model=&quot;value&quot;
          trueValue=&quot;开&quot;
          falseValue=&quot;关&quot;&gt;选择项&lt;/mz-checkbox&gt;
        &lt;span class=&quot;fs-14&quot;&gt;当前值：{{value}}&lt;/span&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default{
        data(){
          return {
            value: '关',
            value2: false
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#jin-yong-zhuang-tai" title="禁用状态" data-level="3" data-href="#jin-yong-zhuang-tai">¶</a>禁用状态</h3>
      <p>多选框不可用状态。</p>
      <demo-block>
        <template #example>
          <checkbox-demo2 inline-template>
            <div class="checkbox-demo2">
              <div>
                <mz-checkbox v-model="checked1" disabled>选择项</mz-checkbox>
                <mz-checkbox v-model="checked2" disabled>选择项</mz-checkbox>
              </div>
            </div>
          </checkbox-demo2>
        </template>
        <template #description>
          <p>你可以通过<code>disabled</code>属性来修改按钮的禁用状态。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;div&gt;
        &lt;mz-checkbox v-model=&quot;checked1&quot; disabled&gt;选择项&lt;/mz-checkbox&gt;
        &lt;mz-checkbox v-model=&quot;checked2&quot; disabled&gt;选择项&lt;/mz-checkbox&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default{
        data() {
          return {
            checked1: false,
            checked2: true
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="duo-xuan-kuang-zu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#duo-xuan-kuang-zu" title="多选框组" data-level="3" data-href="#duo-xuan-kuang-zu">¶</a>多选框组</h3>
      <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <demo-block>
        <template #example>
          <checkbox-demo3 inline-template>
            <div class="checkbox-demo3">
              <div>
                <div class="fs-14">当前值：{{value}}</div>
                <mz-checkbox-group v-model="value">
                  <mz-checkbox value="A">选择项A</mz-checkbox>
                  <mz-checkbox value="B">选择项B</mz-checkbox>
                  <mz-checkbox value="C">选择项C</mz-checkbox>
                  <mz-checkbox value="D" disabled>选择项C</mz-checkbox>
                  <mz-checkbox value="E" disabled>选择项E</mz-checkbox>
                </mz-checkbox-group>
              </div>
            </div>
          </checkbox-demo3>
        </template>
        <template #description>
          <p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在<code>Group</code>中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>checkbox</code>的<code>value</code>属性是该 checkbox 对应的值，<code>label</code>属性是该 checkbox 对应的标签，也可以通过默认插槽设置。<code>value</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;div&gt;
        &lt;div class=&quot;fs-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
        &lt;mz-checkbox-group v-model=&quot;value&quot;&gt;
          &lt;mz-checkbox value=&quot;A&quot;&gt;选择项A&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;B&quot;&gt;选择项B&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;C&quot;&gt;选择项C&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;D&quot; disabled&gt;选择项C&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;E&quot; disabled&gt;选择项E&lt;/mz-checkbox&gt;
        &lt;/mz-checkbox-group&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default{
        data() {
          return {
            value: ['A','E']
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="bu-que-ding-zhuang-tai" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bu-que-ding-zhuang-tai" title="不确定状态" data-level="3" data-href="#bu-que-ding-zhuang-tai">¶</a>不确定状态</h3>
      <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
      <demo-block>
        <template #example>
          <checkbox-demo4 inline-template>
            <div class="checkbox-demo4">
              <div>
                <div class="fs-14">当前值：{{value}}</div>
                <mz-checkbox v-model="isAll"
                  :indeterminate="indeterminate"
                  @change="onCheckAll">全选</mz-checkbox>
                <mz-checkbox-group v-model="value"
                  @change="onGroupChange">
                  <mz-checkbox value="A">选择项A</mz-checkbox>
                  <mz-checkbox value="B">选择项B</mz-checkbox>
                  <mz-checkbox value="C">选择项C</mz-checkbox>
                  <mz-checkbox value="D" disabled>选择项C</mz-checkbox>
                </mz-checkbox-group>
              </div>
            </div>
          </checkbox-demo4>
        </template>
        <template #description>
            </template><template #highlight><pre v-pre><code class="html">&lt;div&gt;
        &lt;div class=&quot;fs-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
        &lt;mz-checkbox v-model=&quot;isAll&quot;
          :indeterminate=&quot;indeterminate&quot;
          @change=&quot;onCheckAll&quot;&gt;全选&lt;/mz-checkbox&gt;
        &lt;mz-checkbox-group v-model=&quot;value&quot;
          @change=&quot;onGroupChange&quot;&gt;
          &lt;mz-checkbox value=&quot;A&quot;&gt;选择项A&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;B&quot;&gt;选择项B&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;C&quot;&gt;选择项C&lt;/mz-checkbox&gt;
          &lt;mz-checkbox value=&quot;D&quot; disabled&gt;选择项C&lt;/mz-checkbox&gt;
        &lt;/mz-checkbox-group&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default{
        data() {
          return {
            isAll: false,
            value: ['D']
          }
        },
      
        computed: {
          indeterminate() {
            return this.value.length &gt; 0 &amp;&amp; this.value.length &lt; 4
          }
        },
      
        methods: {
          onCheckAll(checked) {
            this.value = checked ? ['A','B','C','D'] : []
          },
      
          onGroupChange(data) {
            this.isAll = data.length &gt;= 4
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="dai-you-bian-kuang" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dai-you-bian-kuang" title="带有边框" data-level="3" data-href="#dai-you-bian-kuang">¶</a>带有边框</h3>
      <demo-block>
        <template #example>
          <checkbox-demo5 inline-template>
            <div class="checkbox-demo5">
              <div>
                <mz-checkbox v-model="value" border>选择项1</mz-checkbox>
                <mz-checkbox v-model="value2" border>选择项2</mz-checkbox>
                <mz-checkbox :input-value="true" border disabled>选择项3</mz-checkbox>
                <mz-checkbox :input-value="false" border disabled>选择项4</mz-checkbox>
              </div>
            </div>
          </checkbox-demo5>
        </template>
        <template #description>
          <p>设置<code>border</code>属性可以渲染为带有边框的多选框。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;div&gt;
        &lt;mz-checkbox v-model=&quot;value&quot; border&gt;选择项1&lt;/mz-checkbox&gt;
        &lt;mz-checkbox v-model=&quot;value2&quot; border&gt;选择项2&lt;/mz-checkbox&gt;
        &lt;mz-checkbox :input-value=&quot;true&quot; border disabled&gt;选择项3&lt;/mz-checkbox&gt;
        &lt;mz-checkbox :input-value=&quot;false&quot; border disabled&gt;选择项4&lt;/mz-checkbox&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default{
        data(){
          return {
            value: true,
            value2: false
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="checkbox-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#checkbox-api" title="Checkbox API" data-level="3" data-href="#checkbox-api">¶</a>Checkbox API</h3>
      <h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
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
      <td>inputValue/v-model</td>
      <td>当前选中值</td>
      <td>any</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>value</td>
      <td>当前选项代表的值</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>label</td>
      <td>选项名称</td>
      <td>String</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>name</td>
      <td>同原生input的name属性</td>
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
      <td>indeterminate</td>
      <td>是否不确定状态</td>
      <td>Boolean</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>border</td>
      <td>是否边框模式</td>
      <td>Boolean</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>tabIndex</td>
      <td>tab 键控制次序</td>
      <td>Number</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>trueValue</td>
      <td>选中的值</td>
      <td>any</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>falseValue</td>
      <td>未被选中的值</td>
      <td>any</td>
      <td></td>
      <td></td>
      </tr>
      </tbody>
      </table>
      <h4 id="cha-cao" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#cha-cao" title="插槽" data-level="4" data-href="#cha-cao">¶</a>插槽</h4>
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
      <td>-</td>
      <td>同label</td>
      <td></td>
      </tr>
      </tbody>
      </table>
      <h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian" title="事件" data-level="4" data-href="#shi-jian">¶</a>事件</h4>
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
      <td>选项选中状态修改事件</td>
      <td>(value, ev)</td>
      </tr>
      </tbody>
      </table>
      <h3 id="checkboxgroup-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#checkboxgroup-api" title="CheckboxGroup API" data-level="3" data-href="#checkboxgroup-api">¶</a>CheckboxGroup API</h3>
      <h4 id="shu-xing-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shu-xing-2" title="属性" data-level="4" data-href="#shu-xing-2">¶</a>属性</h4>
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
      <td>当前值</td>
      <td>Array</td>
      <td></td>
      <td>[]</td>
      </tr>
      </tbody>
      </table>
      <h4 id="shi-jian-2" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#shi-jian-2" title="事件" data-level="4" data-href="#shi-jian-2">¶</a>事件</h4>
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
      <td>选项选中状态修改事件</td>
      <td>由选中选项的value值组成的数组</td>
      </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentCheckbox',
  components: {
    CheckboxDemo1: {
      data() {
        return {
          value: '关',
          value2: false
        }
      }
    },
    CheckboxDemo2: {
      data() {
        return {
          checked1: false,
          checked2: true
        }
      }
    },
    CheckboxDemo3: {
      data() {
        return {
          value: ['A', 'E']
        }
      }
    },
    CheckboxDemo4: {
      data() {
        return {
          isAll: false,
          value: ['D']
        }
      },

      computed: {
        indeterminate() {
          return this.value.length > 0 && this.value.length < 4
        }
      },

      methods: {
        onCheckAll(checked) {
          this.value = checked ? ['A', 'B', 'C', 'D'] : []
        },

        onGroupChange(data) {
          this.isAll = data.length >= 4
        }
      }
    },
    CheckboxDemo5: {
      data() {
        return {
          value: true,
          value2: false
        }
      }
    }
  }
}
</script>


<style lang="scss">
.component-checkbox {
}
</style>
