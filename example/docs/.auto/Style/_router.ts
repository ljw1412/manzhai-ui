export default [
  {
    path: 'style-introduction',
    name: 'StyleIntroduction',
    component: () =>
      import(/* webpackChunkName: "style" */ './Introduction.vue')
  }
]
