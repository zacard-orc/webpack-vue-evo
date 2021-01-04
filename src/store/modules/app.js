const state = {
  online: 'online',
};
const mutations = {
  change_name(_state, anotherName) {
    _state.online = anotherName;
  },
};
const actions = {
  changeName(obj, anotherName) {
    console.log('app action =>', obj);
    const {
      commit,
    } = obj;
    commit('change_name', anotherName);
  },
};
const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
