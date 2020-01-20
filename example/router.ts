import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './views/Component/index.vue'
import DocsRouter from './docs/.auto/router'
import ComponentDropdown from './views/Component/Dropdown.vue'
import ComponentForm from './views/Component/Form.vue'
import ComponentIcon from './views/Component/Icon.vue'
import ComponentInput from './views/Component/Input.vue'
import ComponentList from './views/Component/List.vue'
import ComponentNavigation from './views/Component/Navigation.vue'
import ComponentRadio from './views/Component/Radio.vue'
import ComponentSelect from './views/Component/Select.vue'
import ComponentScrollbar from './views/Component/Scrollbar.vue'
import ComponentSnackbar from './views/Component/Snackbar.vue'
import ComponentTabs from './views/Component/Tabs.vue'
import ComponentTable from './views/Component/Table.vue'
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
      path: '/component',
      name: 'pageComponent',
      component: Component,
      children: [
        ...DocsRouter,
        {
          path: 'dropdown',
          name: 'ComponentDropdown',
          component: ComponentDropdown
        },
        {
          path: 'form',
          name: 'ComponentForm',
          component: ComponentForm
        },
        {
          path: 'icon',
          name: 'ComponentIcon',
          component: ComponentIcon
        },
        {
          path: 'input',
          name: 'ComponentInput',
          component: ComponentInput
        },
        {
          path: 'list',
          name: 'ComponentList',
          component: ComponentList
        },
        {
          path: 'navigation',
          name: 'ComponentNavigation',
          component: ComponentNavigation
        },
        {
          path: 'radio',
          name: 'ComponentRadio',
          component: ComponentRadio
        },
        {
          path: 'select',
          name: 'ComponentSelect',
          component: ComponentSelect
        },
        {
          path: 'scrollbar',
          name: 'ComponentScrollbar',
          component: ComponentScrollbar
        },
        {
          path: 'snackbar',
          name: 'ComponentSnackbar',
          component: ComponentSnackbar
        },
        {
          path: 'tabs',
          name: 'ComponentTabs',
          component: ComponentTabs
        },
        {
          path: 'table',
          name: 'ComponentTable',
          component: ComponentTable
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
