import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AutoComponent from './docs/.auto/Component/_router'
import AutoDirective from './docs/.auto/Directive/_router'
import AutoStyle from './docs/.auto/Style/_router'
import Guide from './views/Guide/index.vue'
import Theme from './views/Theme/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/manzhai-ui/' : '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'pageDocs',
      redirect: { name: 'DirectiveBlanking' },
      component: () =>
        import(/* webpackChunkName: "documents" */ './views/Docs/index.vue'),
      children: [...AutoComponent, ...AutoDirective]
    },
    {
      path: '/style',
      name: 'pageStyle',
      redirect: { name: 'StyleIntroduction' },
      component: () =>
        import(/* webpackChunkName: "styles" */ './views/Style/index.vue'),
      children: AutoStyle
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
