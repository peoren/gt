export default [
    {
      path: '/person_center',
      name: 'person_center',
      component: () => import('../views/person_center/person_center.vue'),
      children:[
        {
          path: '',
          name: 'myorder',
          component: () => import('@/components/personal_center/NewOrder.vue'),
        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import('@/components/personal_center/Comment.vue'),
        },
        {
          path: 'writecomment',
          name: 'writecomment',
          component: () => import('@/components/personal_center/WriteComment.vue'),
        },
        {
          path: 'address',
          name: 'address',
          component: () => import('@/components/personal_center/Address.vue'),
        },
        {
          path: 'changepassword',
          name: 'changepassword',
          component: () => import('@/components/personal_center/Changepassword.vue'),
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: () => import('@/components/personal_center/Wishlist.vue'),
        },
        {
          path: 'integral',
          name: 'integral',
          component: () => import('@/components/personal_center/Integral.vue'),
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import('@/components/personal_center/Userinfo.vue'),
        },
      ]
    },
   
  ]
