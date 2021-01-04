const state = {
  cartStatus: 'full',
};
const mutations = {
  change_name(_state, anotherName) {
    _state.cartStatus = anotherName;
  },
};
const actions = {
  changeName(obj, anotherName) {
    console.log('cart action =>', obj);
    const {
      commit,
    } = obj;
    commit('change_name', anotherName);
  },
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters,
};
