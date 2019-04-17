import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// axios
import axios from 'axios'


axios.defaults.baseURL = '/v1'

Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
