## 导航菜单

有站点导航功能的菜单。

### 基础用法
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
</script>
```
:::


### API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|data|导航数据|[NavigationItem](#navigationitem)/NavigationItem[]|||
|round|是否为圆角|Boolean|||
| ripple | 点击涟漪效果 | Boolean / Object | | true |
| gutter |导航元素的间隔距离|String|||
|auto-scroll|是否启动自动滑动|Boolean|||
|auto-scroll-on-change|是否在改变时自动滑动(auto-scroll为true时有效)|Boolean||true|
|scroll-behavior|滑动的行为|String|'smooth'/'auto'|'smooth'|


#### NavigationItem
|属性|说明|类型|
|---|---|---|
|value|选中后的值|any|
|group|组名称，当有此属性，对象里只能接children|String|
|icon|图标名称|String|
|title|标签名称|String|
|text|辅助文字|String|
|to|跳转路由(同Vue-link的to)|RawLocation|
|children|子菜单|NavigationItem[]|

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|导航选中状态改变时|(value:string)|