import Vue from 'vue';
import Router from 'vue-router';

// 引入自己的路由
import home from './routers/home'

Vue.use(Router);



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...home,
  ],
});
