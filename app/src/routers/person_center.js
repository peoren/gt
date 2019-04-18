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
      ]
    },
   
  ]
