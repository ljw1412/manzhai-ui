<template>
  <div class="directive-blanking">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="blanking-xuan-ze-xing-xian-shi"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#blanking-xuan-ze-xing-xian-shi"
        title="Blanking 选择性显示"
        data-level="2"
        data-href="#blanking-xuan-ze-xing-xian-shi"
        >¶</a
      >Blanking 选择性显示
    </h2>
    <p>根据本地存储条件控制组件是否需要显示的指令。</p>
    <h3
      id="shi-yong-chang-jing"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#shi-yong-chang-jing"
        title="使用场景"
        data-level="3"
        data-href="#shi-yong-chang-jing"
        >¶</a
      >使用场景
    </h3>
    <p>类似向导提示功能，当用户完成流程后，下一次进入将不在显示。</p>
    <p>使用<code>vm.$blanking.setState</code>修改缓存中的隐藏情况。</p>
    <p>使用<code>vm.$blanking.getState</code>查看缓存中某个索引的隐藏情况。</p>
    <demo-block>
      <template #example
        ><blanking-demo1 inline-template
          ><div class="blanking-demo1">
            <mz-snackbar
              v-model="show"
              v-blanking="blanking - demo - 1"
              content="这是一条测试消息。"
              :timeout="0"
            >
              <template #suffix>
                <mz-button text-color="#fff" @click="close">关闭</mz-button>
              </template>
            </mz-snackbar>
            <p class="demo-font-size-14">当前隐藏状态: {{ state }}</p>
            <mz-button color="success" @click="flush(false)"
              >刷新页面</mz-button
            >
            <mz-button color="danger" @click="flush(true)">重置状态</mz-button>
          </div></blanking-demo1
        ></template
      >
      <template #description
        ><p>使用<code>v-blanking</code>指令，传入一个字符串作为唯一索引。</p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;show&quot;
  v-blanking=&quot;blanking-demo-1&quot;
  content=&quot;这是一条测试消息。&quot;
  :timeout=&quot;0&quot;&gt;
  &lt;template #suffix&gt;
    &lt;mz-button text-color=&quot;#fff&quot; @click=&quot;close&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/template&gt;  
&lt;/mz-snackbar&gt;
&lt;p class=&quot;demo-font-size-14&quot;&gt;当前隐藏状态: {{state}}&lt;/p&gt;
&lt;mz-button color=&quot;success&quot; @click=&quot;flush(false)&quot;&gt;刷新页面&lt;/mz-button&gt;
&lt;mz-button color=&quot;danger&quot; @click=&quot;flush(true)&quot;&gt;重置状态&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      show: true,
      state: false
    }
  },
  
  methods: {
    setState(state) {
      this.$blanking.setState(&quot;blanking-demo-1&quot;, state)
    },

    getState() {
      this.state = this.$blanking.getState(&quot;blanking-demo-1&quot;)
    },

    close() {
      this.setState(true)
      this.show = false
      this.getState()
    },

    flush(reset){
      reset &amp;&amp; this.setState(false)
      window.document.location.reload()
    }
  },

  created() {
    this.getState()
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="kuo-zhan-shi-yong"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#kuo-zhan-shi-yong"
        title="扩展使用"
        data-level="3"
        data-href="#kuo-zhan-shi-yong"
        >¶</a
      >扩展使用
    </h3>
    <demo-block>
      <template #example
        ><blanking-demo2 inline-template
          ><div class="blanking-demo2">
            <mz-snackbar
              v-model="show"
              v-blanking="{
                key: 'blanking-demo-2',
                display: show
              }"
              content="这是一条测试消息。"
              :timeout="0"
            >
              <template #suffix>
                <mz-button text-color="#fff" @click="close">关闭</mz-button>
              </template>
            </mz-snackbar>
            <p class="demo-font-size-14">当前隐藏状态: {{ state }}</p>
            <mz-button color="success" @click="flush(false)"
              >刷新页面</mz-button
            >
            <mz-button color="danger" @click="flush(true)">重置状态</mz-button>
          </div></blanking-demo2
        ></template
      >
      <template #description
        ><p>
          使用<code>v-blanking</code>指令，传入一个对象，<code>key</code>作为唯一索引,<code>display</code>代表当前显示状态。一旦<code>display</code>变为<code>false</code>,则自动切换为已读状态。
        </p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-snackbar v-model=&quot;show&quot;
  v-blanking=&quot;{
    key: 'blanking-demo-2',
    display: show
  }&quot;
  content=&quot;这是一条测试消息。&quot;
  :timeout=&quot;0&quot;&gt;
  &lt;template #suffix&gt;
    &lt;mz-button text-color=&quot;#fff&quot; @click=&quot;close&quot;&gt;关闭&lt;/mz-button&gt;
  &lt;/template&gt;  
&lt;/mz-snackbar&gt;
&lt;p class=&quot;demo-font-size-14&quot;&gt;当前隐藏状态: {{state}}&lt;/p&gt;
&lt;mz-button color=&quot;success&quot; @click=&quot;flush(false)&quot;&gt;刷新页面&lt;/mz-button&gt;
&lt;mz-button color=&quot;danger&quot; @click=&quot;flush(true)&quot;&gt;重置状态&lt;/mz-button&gt;

&lt;script&gt;
export default {
  data() {
    return {
      show: true,
      state: false
    }
  },
  
  methods: {
    getState() {
      this.state = this.$blanking.getState(&quot;blanking-demo-2&quot;)
    },

    close() {
      this.show = false
      this.$nextTick(this.getState)
    },

    flush(reset){
      reset &amp;&amp; this.$blanking.setState(&quot;blanking-demo-2&quot;, false)
      window.document.location.reload()
    }
  },

  created() {
    this.getState()
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
  </div>
</template>

<script>
export default {
  name: 'DirectiveBlanking',
  components: {
    BlankingDemo1: {
      data() {
        return {
          show: true,
          state: false
        }
      },

      methods: {
        setState(state) {
          this.$blanking.setState('blanking-demo-1', state)
        },

        getState() {
          this.state = this.$blanking.getState('blanking-demo-1')
        },

        close() {
          this.setState(true)
          this.show = false
          this.getState()
        },

        flush(reset) {
          reset && this.setState(false)
          window.document.location.reload()
        }
      },

      created() {
        this.getState()
      }
    },
    BlankingDemo2: {
      data() {
        return {
          show: true,
          state: false
        }
      },

      methods: {
        getState() {
          this.state = this.$blanking.getState('blanking-demo-2')
        },

        close() {
          this.show = false
          this.$nextTick(this.getState)
        },

        flush(reset) {
          reset && this.$blanking.setState('blanking-demo-2', false)
          window.document.location.reload()
        }
      },

      created() {
        this.getState()
      }
    }
  }
}
</script>

<style lang="scss">
.directive-blanking {
}
</style>
