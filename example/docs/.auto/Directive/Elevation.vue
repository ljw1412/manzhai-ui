<template>
  <div class="directive-elevation">
    <div class="update-datetime">文档更新时间：2020-07-20 18:45</div>
      <h2 id="elevation-hai-ba" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#elevation-hai-ba" title="Elevation 海拔" data-level="2" data-href="#elevation-hai-ba">¶</a>Elevation 海拔</h2>
      <p>根据不同海拔给绑定元素增加阴影。</p>
      <h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
      <demo-block>
        <template #example>
          <elevation-demo1 inline-template>
            <div class="elevation-demo1">
              <div v-elevation="elevation"
                style="width:100%;height:200px;">
                <mz-button-group>
                  <mz-button outlined
                    color="primary"
                    :disabled="elevation <= 0"
                    @click="elevation--">-</mz-button>
                  <mz-button outlined
                    color="primary"
                    :disabled="elevation >= 24" 
                    @click="elevation++">+</mz-button>  
                </mz-button-group>
                elevation:{{elevation}}
              </div>
            </div>
          </elevation-demo1>
        </template>
        <template #description>
          <p><code>v-elevation</code>属性传入范围为 0-24 之间的整数。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;div v-elevation=&quot;elevation&quot;
        style=&quot;width:100%;height:200px;&quot;&gt;
        &lt;mz-button-group&gt;
          &lt;mz-button outlined
            color=&quot;primary&quot;
            :disabled=&quot;elevation &lt;= 0&quot;
            @click=&quot;elevation--&quot;&gt;-&lt;/mz-button&gt;
          &lt;mz-button outlined
            color=&quot;primary&quot;
            :disabled=&quot;elevation &gt;= 24&quot; 
            @click=&quot;elevation++&quot;&gt;+&lt;/mz-button&gt;  
        &lt;/mz-button-group&gt;
        elevation:{{elevation}}
      &lt;/div&gt;
      
      &lt;script&gt;
      export default {
        data (){
          return {
            elevation: 0
          }
        }
      }
      &lt;/script&gt;
      </code></pre></template></demo-block>
  </div>
</template>

<script>
export default {
  name: 'DirectiveElevation',
  components: {
    ElevationDemo1: {
      data() {
        return {
          elevation: 0
        }
      }
    }
  }
}
</script>


<style lang="scss">
.directive-elevation {
}
</style>
