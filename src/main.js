import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router/router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

window.vm = vm;

console.log('aaa');
