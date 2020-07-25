export default [
  {
    path: 'guide-guide',
    name: 'GuideGuide',
    component: () => import(/* webpackChunkName: "guide" */ './Guide.vue')
  }
]
