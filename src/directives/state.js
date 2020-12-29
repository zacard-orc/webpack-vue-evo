const state = {
  bind(el, obj, vnode) {
    console.log('bind');
    console.log(el, obj, vnode);
    const oldfunc = vnode.componentInstance.$listeners.evHelloClick.fns;
    // eslint-disable-next-line func-names
    vnode.componentInstance.$listeners.evHelloClick.fns = function () {
      console.log('hooked');
      console.log(this);
      // eslint-disable-next-line prefer-rest-params
      // return oldfunc.call(this, ...arguments);
      // eslint-disable-next-line prefer-rest-params
      // return oldfunc.call(this, ...arguments);
      // eslint-disable-next-line prefer-rest-params
      return oldfunc(...arguments);
    };
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, obj) {
    console.log('componentUpdated');
    console.log(el, obj);
  },
  update(el, obj) {
    console.log('update');
    console.log(el, obj);
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    console.log('unbind11');
    console.log(el);
  },
};

export default state;
