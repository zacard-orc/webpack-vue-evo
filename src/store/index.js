import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';
import cart from './modules/cart';
import app from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    cart,
    app,
  },
  state: {
    entry: {
      _count: 0,
      _asyncCount: 0,
      name: '',
    },
  },
  getters: {
    hasTom: (state) => state.entry.name.includes('tom'),
    count3: (state) => state.entry._count >= 3,
  },
  mutations: {
    add(state, amt = 1) {
      state.entry._count += amt;
    },
    minus(state, amt = 1) {
      state.entry._count -= amt;
    },
    setName(state, payload) {
      state.entry.name = payload;
    },
  },
  actions: {
    add({ state }, payload) {
      return new Promise(((resolve) => {
        console.log(payload);
        setTimeout(() => {
          state.entry._asyncCount += payload.amt;
          // ctx.commit('add', payload.amt);
          resolve(state.entry._asyncCount);
        }, 500);
      }));
    },
    minus({ state }, payload) {
      return new Promise(((resolve) => {
        console.log(payload);
        setTimeout(() => {
          state.entry._asyncCount -= payload.amt;
          // ctx.commit('add', payload.amt);
          resolve(state.entry._asyncCount);
        }, 500);
      }));
    },
  },
});
export {
  store,
};
