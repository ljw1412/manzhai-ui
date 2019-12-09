import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './views/Component/index.vue'
import ComponentButton from './views/Component/Button.vue'
import ComponentCard from './views/Component/Card.vue'
import ComponentCell from './views/Component/Cell.vue'
import ComponentCheckbox from './views/Component/Checkbox.vue'
import ComponentDropdown from './views/Component/Dropdown.vue'
import ComponentGrid from './views/Component/Grid.vue'
import ComponentIcon from './views/Component/Icon.vue'
import ComponentImage from './views/Component/Image.vue'
import ComponentInput from './views/Component/Input.vue'
import ComponentList from './views/Component/List.vue'
import ComponentNavigation from './views/Component/Navigation.vue'
import ComponentRadio from './views/Component/Radio.vue'
import ComponentSelect from './views/Component/Select.vue'
import ComponentSwitch from './views/Component/Switch.vue'
import ComponentScrollbar from './views/Component/Scrollbar.vue'
import ComponentSnackbar from './views/Component/Snackbar.vue'
import ComponentTabs from './views/Component/Tabs.vue'
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
          path: 'button',
          name: 'ComponentButton',
          component: ComponentButton
        },
        {
          path: 'card',
          name: 'ComponentCard',
          component: ComponentCard
        },
        {
          path: 'cell',
          name: 'ComponentCell',
          component: ComponentCell
        },
        {
          path: 'checkbox',
          name: 'ComponentCheckbox',
          component: ComponentCheckbox
        },
        {
          path: 'dropdown',
          name: 'ComponentDropdown',
          component: ComponentDropdown
        },
        {
          path: 'grid',
          name: 'ComponentGrid',
          component: ComponentGrid
        },
        {
          path: 'icon',
          name: 'ComponentIcon',
          component: ComponentIcon
        },
        {
          path: 'image',
          name: 'ComponentImage',
          component: ComponentImage
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
          path: 'switch',
          name: 'ComponentSwitch',
          component: ComponentSwitch
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
