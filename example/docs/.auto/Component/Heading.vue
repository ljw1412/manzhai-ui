<template>
  <div class="component-heading">
    <div class="update-datetime">文档更新时间：2020-07-20 18:45</div>
      <h2 id="heading-biao-ti" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#heading-biao-ti" title="Heading 标题" data-level="2" data-href="#heading-biao-ti">¶</a>Heading 标题</h2>
      <p>有着不同级别的标题。</p>
      <h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
      <p>标题的基础用法。</p>
      <demo-block>
        <template #example>
          <heading-demo1 inline-template>
            <div class="heading-demo1">
              <mz-heading :level="1">Heading 1</mz-heading>
              <mz-heading :level="2">Heading 2</mz-heading>
              <mz-heading :level="3">Heading 3</mz-heading>
              <mz-heading :level="4">Heading 4</mz-heading>
              <mz-heading :level="5">Heading 5</mz-heading>
              <mz-heading :level="6">Heading 6</mz-heading>
              <mz-heading :level="7">Heading 7</mz-heading>
              <mz-heading :level="8">Heading 8</mz-heading>
              <mz-heading :level="9">Heading 9</mz-heading>
            </div>
          </heading-demo1>
        </template>
        <template #description>
            </template><template #highlight><pre v-pre><code class="html">&lt;mz-heading :level=&quot;1&quot;&gt;Heading 1&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;2&quot;&gt;Heading 2&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;3&quot;&gt;Heading 3&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;4&quot;&gt;Heading 4&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;5&quot;&gt;Heading 5&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;6&quot;&gt;Heading 6&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;7&quot;&gt;Heading 7&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;8&quot;&gt;Heading 8&lt;/mz-heading&gt;
      &lt;mz-heading :level=&quot;9&quot;&gt;Heading 9&lt;/mz-heading&gt;
      </code></pre></template></demo-block><h3 id="mao-dian-biao-ti" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#mao-dian-biao-ti" title="锚点标题" data-level="3" data-href="#mao-dian-biao-ti">¶</a>锚点标题</h3>
      <p>带锚点的标题。</p>
      <demo-block>
        <template #example>
          <heading-demo2 inline-template>
            <div class="heading-demo2">
              <mz-heading id="heading-1" :level="1" anchor>Heading 1</mz-heading>
              <mz-heading id="heading-2" :level="2" anchor>Heading 2</mz-heading>
              <mz-heading id="heading-3" :level="3" anchor>Heading 3</mz-heading>
              <mz-heading id="heading-4" :level="4" anchor>Heading 4</mz-heading>
              <mz-heading id="heading-5" :level="5" anchor>Heading 5</mz-heading>
              <mz-heading id="heading-6" :level="6" anchor>Heading 6</mz-heading>
              <mz-heading id="heading-7" :level="7" anchor>Heading 7</mz-heading>
              <mz-heading id="heading-8" :level="8" anchor>Heading 8</mz-heading>
              <mz-heading id="heading-9" :level="9" anchor>Heading 9</mz-heading>
            </div>
          </heading-demo2>
        </template>
        <template #description>
          <p>当<code>anchor</code>属性值为 true，会为标题带上锚点，此时 heading 必须有 id。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;mz-heading id=&quot;heading-1&quot; :level=&quot;1&quot; anchor&gt;Heading 1&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-2&quot; :level=&quot;2&quot; anchor&gt;Heading 2&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-3&quot; :level=&quot;3&quot; anchor&gt;Heading 3&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-4&quot; :level=&quot;4&quot; anchor&gt;Heading 4&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-5&quot; :level=&quot;5&quot; anchor&gt;Heading 5&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-6&quot; :level=&quot;6&quot; anchor&gt;Heading 6&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-7&quot; :level=&quot;7&quot; anchor&gt;Heading 7&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-8&quot; :level=&quot;8&quot; anchor&gt;Heading 8&lt;/mz-heading&gt;
      &lt;mz-heading id=&quot;heading-9&quot; :level=&quot;9&quot; anchor&gt;Heading 9&lt;/mz-heading&gt;
      </code></pre></template></demo-block><h3 id="mao-dian-biao-ti-yu-mu-lu-lian-dong" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#mao-dian-biao-ti-yu-mu-lu-lian-dong" title="锚点标题与目录联动" data-level="3" data-href="#mao-dian-biao-ti-yu-mu-lu-lian-dong">¶</a>锚点标题与目录联动</h3>
      <p>带锚点的标题。配合 <a href="catalogue">目录(Catalogue)组件</a> 使用。</p>
      <demo-block>
        <template #example>
          <heading-demo3 inline-template>
            <div class="heading-demo3">
              <mz-row>
                <mz-col :span="12" 
                  id="demo-heading-scroll-container" 
                  style="height: 300px; overflow-y: auto;">
                  <mz-heading id="heading-c-1" :level="1" anchor="heading-anchor">Heading 1</mz-heading>
                  <br />
                  <mz-heading id="heading-c-2" :level="2" anchor="heading-anchor">Heading 2</mz-heading>
                  <br />
                  <mz-heading id="heading-c-3" :level="3" anchor="heading-anchor">Heading 3</mz-heading>
                  <br />
                  <mz-heading id="heading-c-4" :level="4" anchor="heading-anchor">Heading 4</mz-heading>
                  <br />
                  <mz-heading id="heading-c-5" :level="5" anchor="heading-anchor">Heading 5</mz-heading>
                  <br />
                  <mz-heading id="heading-c-6" :level="6" anchor="heading-anchor">Heading 6</mz-heading>
                  <br />
                  <mz-heading id="heading-c-7" :level="7" anchor="heading-anchor">Heading 7</mz-heading>
                  <br />
                  <mz-heading id="heading-c-8" :level="8" anchor="heading-anchor">Heading 8</mz-heading>
                  <br />
                  <mz-heading id="heading-c-9" :level="9" anchor="heading-anchor">Heading 9</mz-heading>
                  <div class="height-400"></div>
                </mz-col>
              
                <mz-col :span="12">
                  <mz-catalogue sidebar
                    container="#demo-heading-scroll-container"  
                    target=".heading-anchor"></mz-catalogue>
                </mz-col>
              </mz-row>
            </div>
          </heading-demo3>
        </template>
        <template #description>
          <p>当<code>anchor</code>属性值为 string 类型，那么它将作为锚点的 class，此时可将catalogue的<code>target</code>属性值设置为与锚点 class一致时，目录就只会寻找带有指定class的锚点。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
        &lt;mz-col :span=&quot;12&quot; 
          id=&quot;demo-heading-scroll-container&quot; 
          style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
          &lt;mz-heading id=&quot;heading-c-1&quot; :level=&quot;1&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 1&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-2&quot; :level=&quot;2&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 2&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-3&quot; :level=&quot;3&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 3&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-4&quot; :level=&quot;4&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 4&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-5&quot; :level=&quot;5&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 5&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-6&quot; :level=&quot;6&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 6&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-7&quot; :level=&quot;7&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 7&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-8&quot; :level=&quot;8&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 8&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-c-9&quot; :level=&quot;9&quot; anchor=&quot;heading-anchor&quot;&gt;Heading 9&lt;/mz-heading&gt;
          &lt;div class=&quot;height-400&quot;&gt;&lt;/div&gt;
        &lt;/mz-col&gt;
      
        &lt;mz-col :span=&quot;12&quot;&gt;
          &lt;mz-catalogue sidebar
            container=&quot;#demo-heading-scroll-container&quot;  
            target=&quot;.heading-anchor&quot;&gt;&lt;/mz-catalogue&gt;
        &lt;/mz-col&gt;
      &lt;/mz-row&gt;
      </code></pre></template></demo-block><h3 id="kou-shi-xin-fei-de-mao-dian-biao-ti" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#kou-shi-xin-fei-de-mao-dian-biao-ti" title="口是心非的锚点标题" data-level="3" data-href="#kou-shi-xin-fei-de-mao-dian-biao-ti">¶</a>口是心非的锚点标题</h3>
      <demo-block>
        <template #example>
          <heading-demo4 inline-template>
            <div class="heading-demo4">
              <mz-row>
                <mz-col :span="12" 
                  id="demo-heading-scroll-container-2" 
                  style="height: 300px; overflow-y: auto;">
                  <mz-heading id="heading-d-1" :level="1" anchor="heading-anchor-2" title="标题1">Heading 1</mz-heading>
                  <br />
                  <mz-heading id="heading-d-2" :level="2" anchor="heading-anchor-2">Heading 2</mz-heading>
                  <br />
                  <div class="height-400"></div>
                </mz-col>
              
                <mz-col :span="12">
                  <mz-catalogue sidebar
                    container="#demo-heading-scroll-container-2"  
                    target=".heading-anchor-2"></mz-catalogue>
                </mz-col>
              </mz-row>
            </div>
          </heading-demo4>
        </template>
        <template #description>
          <p>heading的<code>title</code>属性在锚点上优先级高于默认插槽。但是heading的文字显示默认插槽优先级高于<code>title</code>属性。因此可以实现目录标题与真实标题不一致的效果。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
        &lt;mz-col :span=&quot;12&quot; 
          id=&quot;demo-heading-scroll-container-2&quot; 
          style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
          &lt;mz-heading id=&quot;heading-d-1&quot; :level=&quot;1&quot; anchor=&quot;heading-anchor-2&quot; title=&quot;标题1&quot;&gt;Heading 1&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-d-2&quot; :level=&quot;2&quot; anchor=&quot;heading-anchor-2&quot;&gt;Heading 2&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;div class=&quot;height-400&quot;&gt;&lt;/div&gt;
        &lt;/mz-col&gt;
      
        &lt;mz-col :span=&quot;12&quot;&gt;
          &lt;mz-catalogue sidebar
            container=&quot;#demo-heading-scroll-container-2&quot;  
            target=&quot;.heading-anchor-2&quot;&gt;&lt;/mz-catalogue&gt;
        &lt;/mz-col&gt;
      &lt;/mz-row&gt;
      </code></pre></template></demo-block><h3 id="mao-dian-biao-ti-mao-dian-bu-ke-jian" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#mao-dian-biao-ti-mao-dian-bu-ke-jian" title="锚点标题(锚点不可见)" data-level="3" data-href="#mao-dian-biao-ti-mao-dian-bu-ke-jian">¶</a>锚点标题(锚点不可见)</h3>
      <p>带锚点的标题，但锚点是隐藏的。</p>
      <demo-block>
        <template #example>
          <heading-demo5 inline-template>
            <div class="heading-demo5">
              <mz-row>
                <mz-col :span="12" 
                  id="demo-heading-scroll-container-3" 
                  style="height: 300px; overflow-y: auto;">
                  <mz-heading id="heading-e-1" :level="1"
                    anchor="heading-anchor-3" invisible-anchor>Heading 1</mz-heading>
                  <br />
                  <mz-heading id="heading-e-2" :level="2"
                    anchor="heading-anchor-3" invisible-anchor>Heading 2</mz-heading>
                  <br />
                  <mz-heading id="heading-e-3" :level="3"
                    anchor="heading-anchor-3" invisible-anchor>Heading 3</mz-heading>
                  <br />
                  <mz-heading id="heading-e-4" :level="4"
                    anchor="heading-anchor-3" invisible-anchor>Heading 4</mz-heading>
                  <br />
                  <mz-heading id="heading-e-5" :level="5"
                    anchor="heading-anchor-3" invisible-anchor>Heading 5</mz-heading>
                  <div class="height-400"></div>
                </mz-col>
              
                <mz-col :span="12">
                  <mz-catalogue sidebar
                    container="#demo-heading-scroll-container-3"  
                    target=".heading-anchor-3"></mz-catalogue>
                </mz-col>
              </mz-row>
            </div>
          </heading-demo5>
        </template>
        <template #description>
          <p><code>invisible-anchor</code>属性来控制锚点的可见性。</p>
        </template><template #highlight><pre v-pre><code class="html">&lt;mz-row&gt;
        &lt;mz-col :span=&quot;12&quot; 
          id=&quot;demo-heading-scroll-container-3&quot; 
          style=&quot;height: 300px; overflow-y: auto;&quot;&gt;
          &lt;mz-heading id=&quot;heading-e-1&quot; :level=&quot;1&quot;
            anchor=&quot;heading-anchor-3&quot; invisible-anchor&gt;Heading 1&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-e-2&quot; :level=&quot;2&quot;
            anchor=&quot;heading-anchor-3&quot; invisible-anchor&gt;Heading 2&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-e-3&quot; :level=&quot;3&quot;
            anchor=&quot;heading-anchor-3&quot; invisible-anchor&gt;Heading 3&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-e-4&quot; :level=&quot;4&quot;
            anchor=&quot;heading-anchor-3&quot; invisible-anchor&gt;Heading 4&lt;/mz-heading&gt;
          &lt;br /&gt;
          &lt;mz-heading id=&quot;heading-e-5&quot; :level=&quot;5&quot;
            anchor=&quot;heading-anchor-3&quot; invisible-anchor&gt;Heading 5&lt;/mz-heading&gt;
          &lt;div class=&quot;height-400&quot;&gt;&lt;/div&gt;
        &lt;/mz-col&gt;
      
        &lt;mz-col :span=&quot;12&quot;&gt;
          &lt;mz-catalogue sidebar
            container=&quot;#demo-heading-scroll-container-3&quot;  
            target=&quot;.heading-anchor-3&quot;&gt;&lt;/mz-catalogue&gt;
        &lt;/mz-col&gt;
      &lt;/mz-row&gt;
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
      <td>level</td>
      <td>层级</td>
      <td>Number</td>
      <td>1-9</td>
      <td>3</td>
      </tr>
      <tr>
      <td>anchor</td>
      <td>是否带有锚点，或者锚点的class</td>
      <td>Boolean/String</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>invisible-anchor</td>
      <td>锚点是否可见</td>
      <td>Boolean</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>title</td>
      <td>标题</td>
      <td>String</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>tag</td>
      <td>元素标签</td>
      <td>String</td>
      <td></td>
      <td>&quot;div&quot;</td>
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
      <td>与title一致，优先级高于title</td>
      <td></td>
      </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeading',
  components: {
    HeadingDemo1: {},
    HeadingDemo2: {},
    HeadingDemo3: {},
    HeadingDemo4: {},
    HeadingDemo5: {}
  }
}
</script>


<style lang="scss">
.component-heading {
}
</style>
