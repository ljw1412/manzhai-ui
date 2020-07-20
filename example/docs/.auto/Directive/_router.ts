export default [
  {
    path: 'directive-blanking',
    name: 'DirectiveBlanking',
    component: () =>
      import(/* webpackChunkName: "directive" */ './Blanking.vue')
  },
  {
    path: 'directive-elevation',
    name: 'DirectiveElevation',
    component: () =>
      import(/* webpackChunkName: "directive" */ './Elevation.vue')
  },
  {
    path: 'directive-hover',
    name: 'DirectiveHover',
    component: () => import(/* webpackChunkName: "directive" */ './Hover.vue')
  },
  {
    path: 'directive-loading',
    name: 'DirectiveLoading',
    component: () => import(/* webpackChunkName: "directive" */ './Loading.vue')
  },
  {
    path: 'directive-resize',
    name: 'DirectiveResize',
    component: () => import(/* webpackChunkName: "directive" */ './Resize.vue')
  },
  {
    path: 'directive-ripple',
    name: 'DirectiveRipple',
    component: () => import(/* webpackChunkName: "directive" */ './Ripple.vue')
  },
  {
    path: 'directive-tooltip',
    name: 'DirectiveTooltip',
    component: () => import(/* webpackChunkName: "directive" */ './Tooltip.vue')
  }
]
