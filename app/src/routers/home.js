export default [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/About.vue'),
    },
  ]
