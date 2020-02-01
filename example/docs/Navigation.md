## 导航菜单

有站点导航功能的菜单。

### 基本用法
:::demo 
```html
<mz-navigation :data="data"
  style="width:300px"></mz-navigation>

<script>
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
</script>
```
:::


### API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|data|导航数据|NavigationItem/NavigationItem[]|||
|round|是否为圆角|Boolean|||
| ripple | 点击涟漪效果 | Boolean / Object | | true |

#### NavigationItem
|属性|说明|类型|
|---|---|---|
|value|选中后的值|any|
|group|组名称，当有此属性，对象里只能接children|String|
|icon|图标名称|String|
|label|标签名称|String|
|text|辅助文字|String|
|to|跳转路由(同Vue-link的to)|RawLocation|
|children|子菜单|NavigationItem[]|