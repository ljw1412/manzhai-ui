<template>
  <div class="component-cell">
    <div class="update-datetime">文档更新时间：2020-07-24 12:03</div>
<h2 id="cell-dan-yuan-ge" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#cell-dan-yuan-ge" title="Cell 单元格" data-level="2" data-href="#cell-dan-yuan-ge">¶</a>Cell 单元格</h2>
<p>单元列表效果。</p>
<h3 id="dan-yuan-ge-zu-ji-dan-yuan-ge-qian-tao" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#dan-yuan-ge-zu-ji-dan-yuan-ge-qian-tao" title="单元格组及单元格嵌套" data-level="3" data-href="#dan-yuan-ge-zu-ji-dan-yuan-ge-qian-tao">¶</a>单元格组及单元格嵌套</h3>
<demo-block>
  <template #example>
    <cell-demo1 inline-template>
      <div class="cell-demo1">
        <mz-cell-group
          title="单元格组"
          type="border">
          <mz-cell title="单元格1"
            desc="描述性文字">
            <mz-cell slot="child"
              title="子单元格1-1"
              desc="子单元格描述性文字">
              <mz-cell slot="child"
                title="子单元格1-1-1"
                desc="子单元格描述性文字">
              </mz-cell>
            </mz-cell>
            <mz-cell slot="child"
              title="子单元格1-2"
              desc="子单元格描述性文字">
            </mz-cell>
          </mz-cell>
          <mz-cell title="单元格2"
            desc="描述性文字">
          </mz-cell>
        </mz-cell-group>
      </div>
    </cell-demo1>
  </template>
  <template #description>
    <p>单元格允许多层嵌套。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-cell-group
  title=&quot;单元格组&quot;
  type=&quot;border&quot;&gt;
  &lt;mz-cell title=&quot;单元格1&quot;
    desc=&quot;描述性文字&quot;&gt;
    &lt;mz-cell slot=&quot;child&quot;
      title=&quot;子单元格1-1&quot;
      desc=&quot;子单元格描述性文字&quot;&gt;
      &lt;mz-cell slot=&quot;child&quot;
        title=&quot;子单元格1-1-1&quot;
        desc=&quot;子单元格描述性文字&quot;&gt;
      &lt;/mz-cell&gt;
    &lt;/mz-cell&gt;
    &lt;mz-cell slot=&quot;child&quot;
      title=&quot;子单元格1-2&quot;
      desc=&quot;子单元格描述性文字&quot;&gt;
    &lt;/mz-cell&gt;
  &lt;/mz-cell&gt;
  &lt;mz-cell title=&quot;单元格2&quot;
    desc=&quot;描述性文字&quot;&gt;
  &lt;/mz-cell&gt;
&lt;/mz-cell-group&gt;
</code></pre></template></demo-block><h3 id="qia-pian-yang-shi-dan-yuan-ge-zu" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#qia-pian-yang-shi-dan-yuan-ge-zu" title="卡片样式单元格组" data-level="3" data-href="#qia-pian-yang-shi-dan-yuan-ge-zu">¶</a>卡片样式单元格组</h3>
<demo-block>
  <template #example>
    <cell-demo2 inline-template>
      <div class="cell-demo2">
        <mz-cell-group
          title="单元格组"
          type="card">
          <mz-cell title="单元格1"
            desc="描述性文字">
          </mz-cell>
          <mz-cell title="单元格2"
            desc="描述性文字">
          </mz-cell>
        </mz-cell-group>
      </div>
    </cell-demo2>
  </template>
  <template #description>
    <p><code>type</code>控制卡片样式，可选值有<code>card</code>、<code>border</code>。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-cell-group
  title=&quot;单元格组&quot;
  type=&quot;card&quot;&gt;
  &lt;mz-cell title=&quot;单元格1&quot;
    desc=&quot;描述性文字&quot;&gt;
  &lt;/mz-cell&gt;
  &lt;mz-cell title=&quot;单元格2&quot;
    desc=&quot;描述性文字&quot;&gt;
  &lt;/mz-cell&gt;
&lt;/mz-cell-group&gt;
</code></pre></template></demo-block><h3 id="kai-guan-dan-yuan-ge" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#kai-guan-dan-yuan-ge" title="开关单元格" data-level="3" data-href="#kai-guan-dan-yuan-ge">¶</a>开关单元格</h3>
<p>含有Switch组件的单元格</p>
<demo-block>
  <template #example>
    <cell-demo3 inline-template>
      <div class="cell-demo3">
        <mz-cell-group
          title="开关单元格组">
          <mz-cell title="普通单元格"
            desc="描述性文字">
          </mz-cell>
          <mz-cell title="开关单元格"
            desc="小"
            type="switch"
            size="small">
          </mz-cell>
          <mz-cell title="开关单元格"
            desc="正常"
            type="switch"
            v-model="checked">
          </mz-cell>
          <mz-cell title="开关单元格"
            desc="大"
            type="switch"
            size="large">
          </mz-cell>
        </mz-cell-group>
      </div>
    </cell-demo3>
  </template>
  <template #description>
    <p>cell上的<code>size</code>来调整switch大小。</p>
  </template><template #highlight><pre v-pre><code class="html">&lt;mz-cell-group
  title=&quot;开关单元格组&quot;&gt;
  &lt;mz-cell title=&quot;普通单元格&quot;
    desc=&quot;描述性文字&quot;&gt;
  &lt;/mz-cell&gt;
  &lt;mz-cell title=&quot;开关单元格&quot;
    desc=&quot;小&quot;
    type=&quot;switch&quot;
    size=&quot;small&quot;&gt;
  &lt;/mz-cell&gt;
  &lt;mz-cell title=&quot;开关单元格&quot;
    desc=&quot;正常&quot;
    type=&quot;switch&quot;
    v-model=&quot;checked&quot;&gt;
  &lt;/mz-cell&gt;
  &lt;mz-cell title=&quot;开关单元格&quot;
    desc=&quot;大&quot;
    type=&quot;switch&quot;
    size=&quot;large&quot;&gt;
  &lt;/mz-cell&gt;
&lt;/mz-cell-group&gt;

&lt;script&gt;
export default{
  data(){
    return {
      checked: false
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="cell-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#cell-api" title="Cell API" data-level="3" data-href="#cell-api">¶</a>Cell API</h3>
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
<td>title</td>
<td>标题</td>
<td>String / Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>desc</td>
<td>描述</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>String</td>
<td>switch</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>switch 大小</td>
<td>String</td>
<td>large / small</td>
<td></td>
</tr>
<tr>
<td>value / v-model</td>
<td>switch 的值</td>
<td>String</td>
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
<td>单元格左侧的内容</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>单元格标题</td>
<td></td>
</tr>
<tr>
<td>desc</td>
<td>单元格描述</td>
<td></td>
</tr>
<tr>
<td>right</td>
<td>单元格右侧的内容</td>
<td></td>
</tr>
<tr>
<td>child</td>
<td>单元格子级内容</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cellgroup-api" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#cellgroup-api" title="CellGroup API" data-level="3" data-href="#cellgroup-api">¶</a>CellGroup API</h3>
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
<td>title</td>
<td>标题</td>
<td>String / Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>String</td>
<td>card</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="cha-cao-2" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#cha-cao-2" title="插槽" data-level="3" data-href="#cha-cao-2">¶</a>插槽</h3>
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
<td>单元格组内容</td>
<td></td>
</tr>
</tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'ComponentCell',
  components: {
    CellDemo1: {},
    CellDemo2: {},
    CellDemo3: {
      data() {
        return {
          checked: false
        }
      }
    }
  }
}
</script>


<style lang="scss">
.component-cell {
}
</style>
