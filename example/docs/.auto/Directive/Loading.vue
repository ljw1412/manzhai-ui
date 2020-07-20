<template>
  <div class="directive-loading">
    <div class="update-datetime">文档更新时间：2020-07-20 18:45</div>
      <h2 id="loading-jia-zai" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#loading-jia-zai" title="Loading 加载" data-level="2" data-href="#loading-jia-zai">¶</a>Loading 加载</h2>
      <p>加载数据时显示动效。</p>
      <p><strong>如果出现样式问题，请使用<a href="component-loading">MzLoading组件</a>。</strong></p>
      <h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
      <demo-block>
        <template #example>
          <loading-demo1 inline-template>
            <div class="loading-demo1">
              <mz-button color="primary" @click="load">加载</mz-button>
              
              <div v-loading="loading">
                <p>欢迎使用加载过渡指令</p>
                <p>
                  <span>当前时间：</span>
                  <span v-if="!loading">{{new Date()}}</span>
                </p>
              </div>
            </div>
          </loading-demo1>
        </template>
        <template #description>
          <p><code>v-loading</code>指令控制加载的状态控制，类型<code>Boolean</code>。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;mz-button color=&quot;primary&quot; @click=&quot;load&quot;&gt;加载&lt;/mz-button&gt;
      
      &lt;div v-loading=&quot;loading&quot;&gt;
        &lt;p&gt;欢迎使用加载过渡指令&lt;/p&gt;
        &lt;p&gt;
          &lt;span&gt;当前时间：&lt;/span&gt;
          &lt;span v-if=&quot;!loading&quot;&gt;{{new Date()}}&lt;/span&gt;
        &lt;/p&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default {
        data() {
          return {
            loading: false,
            timer: null
          }
        },
      
        methods: {
          load() {
            this.loading = true
            clearTimeout(this.timer)
            this.timer = setTimeout(() =&gt; {
              this.loading = false
            }, 3000)
          }
        },
      
        created() {
          this.load()
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block><h3 id="can-shu-pei-zhi" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#can-shu-pei-zhi" title="参数配置" data-level="3" data-href="#can-shu-pei-zhi">¶</a>参数配置</h3>
      <demo-block>
        <template #example>
          <loading-demo2 inline-template>
            <div class="loading-demo2">
              <span class="demo-font-size-14">加载开关：</span>
              <mz-switch v-model="loading"></mz-switch>
              
              <div v-loading="loading"
                mz-loading-text="数据加载中"
                mz-loading-mode="2"
                mz-loading-type="four-color"
                mz-loading-text-color="#ffffff"
                mz-loading-background="rgba(0,0,0,0.8)"
                style="min-height: 200px;">
                <mz-masonry v-if="!loading" :gutter="5">
                  <mz-masonry-item v-for="index of 20"
                    :key="index"
                    :style="{
                      height: '60px',
                      border: '1px solid #ccc'
                    }">内容块{{index}}</mz-masonry-item>
                </mz-masonry>
              </div>
            </div>
          </loading-demo2>
        </template>
        <template #description>
          <p>以下是所有可以配置的属性，它们的可选值与MzLoading对应属性值一致。唯一区别这些属性值都是<code>String</code>类型。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;span class=&quot;demo-font-size-14&quot;&gt;加载开关：&lt;/span&gt;
      &lt;mz-switch v-model=&quot;loading&quot;&gt;&lt;/mz-switch&gt;
      
      &lt;div v-loading=&quot;loading&quot;
        mz-loading-text=&quot;数据加载中&quot;
        mz-loading-mode=&quot;2&quot;
        mz-loading-type=&quot;four-color&quot;
        mz-loading-text-color=&quot;#ffffff&quot;
        mz-loading-background=&quot;rgba(0,0,0,0.8)&quot;
        style=&quot;min-height: 200px;&quot;&gt;
        &lt;mz-masonry v-if=&quot;!loading&quot; :gutter=&quot;5&quot;&gt;
          &lt;mz-masonry-item v-for=&quot;index of 20&quot;
            :key=&quot;index&quot;
            :style=&quot;{
              height: '60px',
              border: '1px solid #ccc'
            }&quot;&gt;内容块{{index}}&lt;/mz-masonry-item&gt;
        &lt;/mz-masonry&gt;
      &lt;/div&gt;
      
      &lt;script&gt;
      export default {
        data() {
          return {
            loading: true
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block>
  </div>
</template>

<script>
export default {
  name: 'DirectiveLoading',
  components: {
    LoadingDemo1: {
      data() {
        return {
          loading: false,
          timer: null
        }
      },

      methods: {
        load() {
          this.loading = true
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.loading = false
          }, 3000)
        }
      },

      created() {
        this.load()
      }
    },
    LoadingDemo2: {
      data() {
        return {
          loading: true
        }
      }
    }
  }
}
</script>


<style lang="scss">
.directive-loading {
}
</style>
