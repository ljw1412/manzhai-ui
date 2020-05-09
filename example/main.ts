import Vue from 'vue'
import App from './App.vue'
import router from './router'
import manzhaiUI from '../src/index'
import DemoBlock from './components/DemoBlock.vue'
import IconGrid from './views/Docs/components/IconGrid.vue'
import hljs from './utils/hljs'

import './styles/manzhai-variables.scss'
import './styles/global.scss'
import './styles/theme/index.scss'

Vue.use(manzhaiUI)

Vue.component('demo-block', DemoBlock)
Vue.component('icon-grid', IconGrid)

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    const descriptions = document.querySelectorAll('.demo-block .description p')
    descriptions.forEach(p => {
      if (p.innerHTML.includes('注意:')) {
        ;(p as HTMLElement).style.color = 'var(--color-warning)'
      }
    })
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
