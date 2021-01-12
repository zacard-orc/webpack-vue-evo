import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router/router';
import Directives from './directives';
import lazyload from './directives/lazyload';
import { store } from './store';

console.log('main loaded');

Vue.use(Directives);
Vue.use(lazyload);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

window.vm = vm;
