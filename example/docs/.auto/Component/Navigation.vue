<template>
  <div class="component-navigation">
    <div class="update-datetime">文档更新时间：2020-07-24 12:03</div>
<h2 id="dao-hang-cai-dan" class="mz-heading mz-document-heading" data-level="2"><a class="mz-document-anchor" href="#dao-hang-cai-dan" title="导航菜单" data-level="2" data-href="#dao-hang-cai-dan">¶</a>导航菜单</h2>
<p>有站点导航功能的菜单。</p>
<h3 id="ji-chu-yong-fa" class="mz-heading mz-document-heading" data-level="3"><a class="mz-document-anchor" href="#ji-chu-yong-fa" title="基础用法" data-level="3" data-href="#ji-chu-yong-fa">¶</a>基础用法</h3>
<demo-block>
  <template #example>
    <navigation-demo1 inline-template>
      <div class="navigation-demo1">
        <mz-navigation :data="data"
          style="width:300px"></mz-navigation>
      </div>
    </navigation-demo1>
  </template>
  <template #description>
      </template><template #highlight><pre v-pre><code class="html">&lt;mz-navigation :data=&quot;data&quot;
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
              icon: 'pricetags-outline',
              title: '组1-1',
              value: '1',
              children: [
                {
                  title: '组1-1-子菜单',
                  value: 'subnav1',
                  children: [
                    {
                      title: '组1-1-子菜单-子菜单',
                      value: 'subnav2',
                      children: [
                        {
                          title: '组1-1-子菜单-子菜单-子菜单1',
                          value: 'subnav3'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: '组1-2',
              value: '2'
            }
          ]
        },
        {
          group: '组2',
          children: [
            {
              title: '组2-1',
              value: '3',
              children: [
                {
                  group: '组2-子组1',
                  children: [
                    {
                      title: 'item1',
                      children: [
                        {
                          group: '组2-子组1-子组1',
                          children: [
                            {
                              title: 'item1-1'
                            },
                            {
                              title: 'item1-2'
                            },
                            {
                              title: 'item1-3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      title: 'item2'
                    },
                    {
                      title: 'item3'
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
<td>data</td>
<td>导航数据</td>
<td><a href="#navigationitem">NavigationItem</a>/NavigationItem[]</td>
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
<tr>
<td>gutter</td>
<td>导航元素的间隔距离</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>auto-scroll</td>
<td>是否启动自动滑动</td>
<td>Boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>auto-scroll-on-change</td>
<td>是否在改变时自动滑动(auto-scroll为true时有效)</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>scroll-behavior</td>
<td>滑动的行为</td>
<td>String</td>
<td>'smooth'/'auto'</td>
<td>'smooth'</td>
</tr>
</tbody>
</table>
<h4 id="navigationitem" class="mz-heading mz-document-heading" data-level="4"><a class="mz-document-anchor" href="#navigationitem" title="NavigationItem" data-level="4" data-href="#navigationitem">¶</a>NavigationItem</h4>
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
<td>title</td>
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
<td>导航选中状态改变时</td>
<td>(value:string)</td>
</tr>
</tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'ComponentNavigation',
  components: {
    NavigationDemo1: {
      data() {
        return {
          data: [
            {
              group: '组1',
              children: [
                {
                  icon: 'pricetags-outline',
                  title: '组1-1',
                  value: '1',
                  children: [
                    {
                      title: '组1-1-子菜单',
                      value: 'subnav1',
                      children: [
                        {
                          title: '组1-1-子菜单-子菜单',
                          value: 'subnav2',
                          children: [
                            {
                              title: '组1-1-子菜单-子菜单-子菜单1',
                              value: 'subnav3'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: '组1-2',
                  value: '2'
                }
              ]
            },
            {
              group: '组2',
              children: [
                {
                  title: '组2-1',
                  value: '3',
                  children: [
                    {
                      group: '组2-子组1',
                      children: [
                        {
                          title: 'item1',
                          children: [
                            {
                              group: '组2-子组1-子组1',
                              children: [
                                {
                                  title: 'item1-1'
                                },
                                {
                                  title: 'item1-2'
                                },
                                {
                                  title: 'item1-3'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          title: 'item2'
                        },
                        {
                          title: 'item3'
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
  }
}
</script>


<style lang="scss">
.component-navigation {
}
</style>
