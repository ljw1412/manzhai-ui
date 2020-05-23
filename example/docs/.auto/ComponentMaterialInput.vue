<template>
  <div class="component-material-input">
    <div class="update-datetime">文档更新时间：2020-05-23 13:52</div>
    <h2 id="materialinput-shu-ru-kuang-leimaterial-feng-ge" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#materialinput-shu-ru-kuang-leimaterial-feng-ge" title="MaterialInput 输入框(类material风格)" data-level="2" data-href="#materialinput-shu-ru-kuang-leimaterial-feng-ge">¶</a>MaterialInput 输入框(类material风格)</h2>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
        <template #example><material-input-demo1 inline-template><div class="material-input-demo1">
  <mz-material-input v-model="value" placeholder="请输入关键词"></mz-material-input>
</div></material-input-demo1></template>
        <template #description><p><code>value/v-model</code>设置input的绑定值。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot; placeholder=&quot;请输入关键词&quot;&gt;&lt;/mz-material-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bian-kuang-yang-shi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#bian-kuang-yang-shi" title="边框样式" data-level="3" data-href="#bian-kuang-yang-shi">¶</a>边框样式</h3>
<demo-block>
        <template #example><material-input-demo2 inline-template><div class="material-input-demo2">
  <mz-material-input v-model="value" 
    placeholder="请输入关键词" outlined></mz-material-input>
</div></material-input-demo2></template>
        <template #description><p><code>outlined</code>控制是否显示边框。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot; 
  placeholder=&quot;请输入关键词&quot; outlined&gt;&lt;/mz-material-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="biao-qian-ming-cheng" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#biao-qian-ming-cheng" title="标签名称" data-level="3" data-href="#biao-qian-ming-cheng">¶</a>标签名称</h3>
<demo-block>
        <template #example><material-input-demo3 inline-template><div class="material-input-demo3">
  <mz-material-input v-model="value" label="姓名">
  </mz-material-input>
  <mz-material-input v-model="value2" label="姓名" outlined>
  </mz-material-input>
</div></material-input-demo3></template>
        <template #description><p><code>label</code>属性为input的标签名称。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot; label=&quot;姓名&quot;&gt;
&lt;/mz-material-input&gt;
&lt;mz-material-input v-model=&quot;value2&quot; label=&quot;姓名&quot; outlined&gt;
&lt;/mz-material-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ti-shi-yu-cuo-wu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ti-shi-yu-cuo-wu" title="提示与错误" data-level="3" data-href="#ti-shi-yu-cuo-wu">¶</a>提示与错误</h3>
<demo-block>
        <template #example><material-input-demo4 inline-template><div class="material-input-demo4">
  <mz-material-input v-model="value" 
    placeholder="请输入关键词"
    :hint="hint"
    :error="error"
    :error-message="errorMsg"
    @focus="handleFocus"
    @blur="handleBlur"></mz-material-input>
</div></material-input-demo4></template>
        <template #description><p><code>hint</code>控制底部提示内容，<code>error</code>属性控制当前是否错误，<code>error-message</code>属性控制错误提示文案。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot; 
  placeholder=&quot;请输入关键词&quot;
  :hint=&quot;hint&quot;
  :error=&quot;error&quot;
  :error-message=&quot;errorMsg&quot;
  @focus=&quot;handleFocus&quot;
  @blur=&quot;handleBlur&quot;&gt;&lt;/mz-material-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      error: false,
      errorMsg: '',
      hint: '请输入6个字符'
    }
  },

  methods: {
    handleFocus() {
      this.error = false
    },
    handleBlur() {
      this.error = this.value.length &gt; 6
      this.errorMsg = '错误，最多可输入6个字符'
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-hou-zhi-tu-biao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#qian-hou-zhi-tu-biao" title="前后置图标" data-level="3" data-href="#qian-hou-zhi-tu-biao">¶</a>前后置图标</h3>
<demo-block>
        <template #example><material-input-demo5 inline-template><div class="material-input-demo5">
  <mz-material-input v-model="value" 
    label="密码"
    prepend-icon="key"
    append-icon="eye"
    :type="type"
    @append-icon-click="displayPassword"></mz-material-input>
</div></material-input-demo5></template>
        <template #description><p><code>prepend-icon</code>控制前置显示图标，<code>append-icon</code>控制显示后置图标。<code>@prepend-icon-click</code>、<code>@append-icon-click</code>监听前后置按钮点的绑定事件(当事件绑定后，悬停按钮鼠标将会变为可点击状态)。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot; 
  label=&quot;密码&quot;
  prepend-icon=&quot;key&quot;
  append-icon=&quot;eye&quot;
  :type=&quot;type&quot;
  @append-icon-click=&quot;displayPassword&quot;&gt;&lt;/mz-material-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      type: 'password'
    }
  },

  methods: {
    displayPassword(){
      this.type = (this.type === 'password' ? 'text' : 'password')
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-shu-tong-ji" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#zi-shu-tong-ji" title="字数统计" data-level="3" data-href="#zi-shu-tong-ji">¶</a>字数统计</h3>
<demo-block>
        <template #example><material-input-demo6 inline-template><div class="material-input-demo6">
  <mz-material-input v-model="value"
    show-word-count
    placeholder="请输入关键词"></mz-material-input>
  <mz-material-input v-model="value2"
    show-word-count
    maxlength="10"
    hint="请输入10个字符"
    placeholder="请输入关键词"></mz-material-input>
</div></material-input-demo6></template>
        <template #description><p><code>show-word-count</code>设置是否显示字数统计。<code>maxlength</code>控制最大字符长度。</p>
</template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-material-input v-model=&quot;value&quot;
  show-word-count
  placeholder=&quot;请输入关键词&quot;&gt;&lt;/mz-material-input&gt;
&lt;mz-material-input v-model=&quot;value2&quot;
  show-word-count
  maxlength=&quot;10&quot;
  hint=&quot;请输入10个字符&quot;
  placeholder=&quot;请输入关键词&quot;&gt;&lt;/mz-material-input&gt;


&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
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
<td>value/v-model</td>
<td>绑定值</td>
<td>String / Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">type</a></td>
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
<td>maxlength</td>
<td>原生属性，最大输入长度</td>
<td></td>
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
<td>label</td>
<td>标签名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>label-up</td>
<td>label是否默认抬起</td>
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
<td>show-word-count</td>
<td>是否显示输入字数统计</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>outlined</td>
<td>是否以边框模式显示</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>prepend-icon</td>
<td>前置Icon图标名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>prepend-src</td>
<td>前置图标地址</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>append-icon</td>
<td>后置Icon图标名称</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>append-src</td>
<td>后置图标地址</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>hint</td>
<td>底部提示</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>error</td>
<td>是否错误</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>errorMessage</td>
<td>底部错误提示</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>rule</td>
<td>(未实现)</td>
<td></td>
<td></td>
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
<td>input</td>
<td>input 的输入事件</td>
<td>(value: String)</td>
</tr>
<tr>
<td>focus</td>
<td>input 的聚焦事件</td>
<td>(event: InputEvent)</td>
</tr>
<tr>
<td>blur</td>
<td>input 的失焦事件</td>
<td>(event: InputEvent)</td>
</tr>
<tr>
<td>change</td>
<td>input 的改变事件</td>
<td>(value: String)</td>
</tr>
<tr>
<td>prepend-icon-click</td>
<td>input 的前置点击事件</td>
<td></td>
</tr>
<tr>
<td>append-icon-click</td>
<td>input 的后置点击事件</td>
<td></td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentComponentMaterialInput',
  components: { MaterialInputDemo1: {
  data() {
    return {
      value: ''
    }
  }
}, MaterialInputDemo2: {
  data() {
    return {
      value: ''
    }
  }
}, MaterialInputDemo3: {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
}, MaterialInputDemo4: {
  data() {
    return {
      value: '',
      error: false,
      errorMsg: '',
      hint: '请输入6个字符'
    }
  },

  methods: {
    handleFocus() {
      this.error = false
    },
    handleBlur() {
      this.error = this.value.length > 6
      this.errorMsg = '错误，最多可输入6个字符'
    }
  }
}, MaterialInputDemo5: {
  data() {
    return {
      value: '',
      type: 'password'
    }
  },

  methods: {
    displayPassword(){
      this.type = (this.type === 'password' ? 'text' : 'password')
    }
  }
}, MaterialInputDemo6: {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
} }
}
</script>
<style lang="scss">

</style>