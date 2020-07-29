## 指南

### 使用包管理工具安装

安装组件库
```bash
npm i manzhai-ui -S
# or
yarn add manzhai-ui
```

安装图标
```bash
npm i @ljw1412/ionicons-sprite -S
# or
yarn add @ljw1412/ionicons-sprite
```

### 使用组件库
在入口文件使用
```js
import Vue from 'vue'
import manzhaiUI from 'manzhai-ui'
// 引入样式
import 'manzhai-ui/lib/manzhai-ui.css';

Vue.use(manzhaiUI)
```
