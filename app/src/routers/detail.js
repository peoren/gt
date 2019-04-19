export default [
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/Detail.vue'),
    },
    // {
    //   path: '/aa',
    //   name: 'about',
    //   component: () => import('../views/about/About.vue'),
    // },
  ]
