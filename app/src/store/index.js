import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import classify from './modules/classify';
import detail from './modules/detail';
import order_form from './modules/order_form';
import person_center from './modules/person_center';
import shopping_cart from './modules/shopping_cart';
import home_static from './modules/home_static';
import home_login from './modules/home_login';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    home,
    classify,
    detail,
    order_form,
    person_center,
    shopping_cart,
    home_static,
    home_login
  }
})