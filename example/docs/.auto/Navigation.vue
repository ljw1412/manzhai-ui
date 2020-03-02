<template>
  <div class="component-navigation">
    <div class="update-datetime">文档更新时间：2020-03-02 18:50</div>
    <h2 id="dao-hang-cai-dan" class="mz-header mz-document-header" data-level="2"><a class="mz-document-anchor" href="#dao-hang-cai-dan" title="导航菜单" data-level="2" data-href="#dao-hang-cai-dan">¶</a>导航菜单</h2>
<p>有站点导航功能的菜单。</p>
<h3 id="ji-ben-yong-fa" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#ji-ben-yong-fa" title="基本用法" data-level="3" data-href="#ji-ben-yong-fa">¶</a>基本用法</h3>
<demo-block>
        <template #example><navigation-demo1 inline-template><div class="navigation-demo1">
  <mz-navigation :data="data"
    style="width:300px"></mz-navigation>
</div></navigation-demo1></template>
        <template #description></template>
        <template #highlight><pre v-pre><code class="html">&lt;mz-navigation :data=&quot;data&quot;
  style=&quot;width:300px&quot;&gt;&lt;/mz-navigation&gt;

&lt;script&gt;
export default {
  data() {
    return{
      data: [
        {
          group: '组1',
          children: [
            {
              label: '组1-1',
              value: '1',
              children: [
                {
                  label: '组1-1-子菜单',
                  value: 'subnav1',
                  children: [
                    {
                      label: '组1-1-子菜单-子菜单',
                      value: 'subnav2',
                      children: [
                        {
                          label: '组1-1-子菜单-子菜单-子菜单1',
                          value: 'subnav3'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: '组1-2',
              value: '2'
            }
          ]
        },
        {
          group: '组2',
          children: [
            {
              label: '组2-1',
              value: '3',
              children: [
                {
                  group: '组2-子组1',
                  children: [
                    {
                      label: 'item1',
                      children: [
                        {
                          group: '组2-子组1-子组1',
                          children: [
                            {
                              label: 'item1-1'
                            },
                            {
                              label: 'item1-2'
                            },
                            {
                              label: 'item1-3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      label: 'item2'
                    },
                    {
                      label: 'item3'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="api" class="mz-header mz-document-header" data-level="3"><a class="mz-document-anchor" href="#api" title="API" data-level="3" data-href="#api">¶</a>API</h3>
<h4 id="shu-xing" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#shu-xing" title="属性" data-level="4" data-href="#shu-xing">¶</a>属性</h4>
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
<td>data</td>
<td>导航数据</td>
<td>NavigationItem/NavigationItem[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>round</td>
<td>是否为圆角</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ripple</td>
<td>点击涟漪效果</td>
<td>Boolean / Object</td>
<td></td>
<td>true</td>
</tr>
</tbody>
</table>
<h4 id="navigationitem" class="mz-header mz-document-header" data-level="4"><a class="mz-document-anchor" href="#navigationitem" title="NavigationItem" data-level="4" data-href="#navigationitem">¶</a>NavigationItem</h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>选中后的值</td>
<td>any</td>
</tr>
<tr>
<td>group</td>
<td>组名称，当有此属性，对象里只能接children</td>
<td>String</td>
</tr>
<tr>
<td>icon</td>
<td>图标名称</td>
<td>String</td>
</tr>
<tr>
<td>label</td>
<td>标签名称</td>
<td>String</td>
</tr>
<tr>
<td>text</td>
<td>辅助文字</td>
<td>String</td>
</tr>
<tr>
<td>to</td>
<td>跳转路由(同Vue-link的to)</td>
<td>RawLocation</td>
</tr>
<tr>
<td>children</td>
<td>子菜单</td>
<td>NavigationItem[]</td>
</tr>
</tbody>
</table>

  </div>
</template>
<script>
export default {
  name: 'ComponentNavigation',
  components: { NavigationDemo1: {
  data() {
    return{
      data: [
        {
          group: '组1',
          children: [
            {
              label: '组1-1',
              value: '1',
              children: [
                {
                  label: '组1-1-子菜单',
                  value: 'subnav1',
                  children: [
                    {
                      label: '组1-1-子菜单-子菜单',
                      value: 'subnav2',
                      children: [
                        {
                          label: '组1-1-子菜单-子菜单-子菜单1',
                          value: 'subnav3'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: '组1-2',
              value: '2'
            }
          ]
        },
        {
          group: '组2',
          children: [
            {
              label: '组2-1',
              value: '3',
              children: [
                {
                  group: '组2-子组1',
                  children: [
                    {
                      label: 'item1',
                      children: [
                        {
                          group: '组2-子组1-子组1',
                          children: [
                            {
                              label: 'item1-1'
                            },
                            {
                              label: 'item1-2'
                            },
                            {
                              label: 'item1-3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      label: 'item2'
                    },
                    {
                      label: 'item3'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
} }
}
</script>
<style lang="scss">

</style>