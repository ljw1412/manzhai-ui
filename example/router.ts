import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './views/Component/index.vue'
import DocsRouter from './docs/.auto/router'
import ComponentDropdown from './views/Component/Dropdown.vue'
// import ComponentIcon from './views/Component/Icon.vue'
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
      component: Component,
      children: [
        ...DocsRouter,
        {
          path: 'dropdown',
          name: 'ComponentDropdown',
          component: ComponentDropdown
        }
        // {
        //   path: 'icon',
        //   name: 'ComponentIcon',
        //   component: ComponentIcon
        // }
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
