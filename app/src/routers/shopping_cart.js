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
    {
      path: '/shopping_cart',
      name: 'shopping_cart',
      component: () => import('../views/shopping_cart/shopping_cart.vue'),
    },
    {
      path: '/toorder',
      name: 'toorder',
      component: () => import('../views/order/order_form.vue'),
    },
    {
      path: '/clear_shopping_cart',
      name: 'clear_shopping_cart',
      component: () => import('../views/shopping_cart/shopcartclear.vue'),
    }
  ]
