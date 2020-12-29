import copy from './copy';
import state from './state';
import debounce from './debounce';

const directives = {
  copy,
  state,
  debounce,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
