import copy from './copy';
import state from './state';

const directives = {
  copy,
  state,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
