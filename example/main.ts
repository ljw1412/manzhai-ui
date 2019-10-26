import './styles/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import manzhaiUI from '../src/index'

Vue.use(manzhaiUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
