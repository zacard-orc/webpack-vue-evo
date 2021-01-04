const state = {
  userName: 'sam',
};
const mutations = {
  change_name(_state, anotherName) {
    _state.userName = anotherName;
  },
};
const actions = {
  changeName(obj, anotherName) {
    console.log('login action =>', obj);
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
