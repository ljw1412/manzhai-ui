## Icon 图标

基于 [ionicons@5](https://ionicons.com) 的图标库。

### 安装

第一步：拉取图标依赖。

```
npm i @ljw1412/icon
```

第二步：在项目入口文件引入依赖。

```js
import '@ljw1412/icon'
```


### 使用方法

:::demo
```html
<mz-icon name="airplane-outline"></mz-icon>
<mz-icon name="alarm-outline"></mz-icon>
<mz-icon name="american-football-outline"></mz-icon>
```
:::

### 所有图标
:::vue
```html
<icon-grid></icon-grid>
```
:::


### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|name|图标名称|String|||
|size|大小|Number||16|
|color|填充颜色|String||'currentColor'|
|stroke|线条颜色|String||填充颜色 或 'currentColor'|