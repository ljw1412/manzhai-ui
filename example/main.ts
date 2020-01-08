import Vue from 'vue'
import App from './App.vue'
import router from './router'
import manzhaiUI from '../src/index'
import DemoBlock from './components/DemoBlock.vue'
import hljs from 'highlight.js'

import './styles/global.scss'
import './styles/theme/index.scss'

Vue.use(manzhaiUI)

Vue.component('demo-block', DemoBlock)

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
