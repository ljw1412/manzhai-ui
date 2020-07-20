import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AutoComponent from './docs/.auto/Component/_router'
import AutoDirective from './docs/.auto/Directive/_router'
import Guide from './views/Guide/index.vue'
import Theme from './views/Theme/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'pageDocs',
      component: () =>
        import(/* webpackChunkName: "documents" */ './views/Docs/index.vue'),
      children: [...AutoComponent, ...AutoDirective]
    },
    {
      path: '/style',
      name: 'pageStyle',
      component: () =>
        import(/* webpackChunkName: "styles" */ './views/Style/index.vue')
    },
    {
      path: '/guide',
      name: 'pageGuide',
      component: Guide
    },
    {
      path: '/theme',
      name: 'pageTheme',
      component: Theme
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
