import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './views/Component/index.vue'
import ComponentNavigation from './views/Component/Navigation.vue'
import Guide from './views/Guide/index.vue'
import Theme from './views/Theme/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/component',
      name: 'pageComponent',
      component: Component,
      children: [
        {
          path: 'navigation',
          name: 'ComponentNavigation',
          component: ComponentNavigation
        }
      ]
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
