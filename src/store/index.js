import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    entry: {
      _count: 0,
      _asyncCount: 0,
      name: '',
    },
  },
  getters: {
    hasTom: (state) => state.entry.name.includes('tom'),
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
