export default [
    {
      path: '/a',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
    },
    {
      path: '/aa',
      name: 'about',
      component: () => import('../views/about/About.vue'),
    },
  ]
 