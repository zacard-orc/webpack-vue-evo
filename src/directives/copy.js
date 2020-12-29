const copy = {
  // eslint-disable-next-line no-unused-vars
  bind(el, obj, vnode) {
    // console.log('bind');
    // console.log(vnode);
    el.$value = el.getAttribute('data-site');
    el.handler = () => {
      console.log('start copy');

      const textarea = document.createElement('textarea');
      textarea.readOnly = true;
      textarea.style.position = 'absolute';
      textarea.style.left = '-999px';
      textarea.value = el.$value;

      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand('Copy');
      if (result) {
        console.log('copy ok', result);
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  // eslint-disable-next-line no-unused-vars
  componentUpdated(el, obj) {
    el.$value = el.getAttribute('data-site');
  },
  // eslint-disable-next-line no-unused-vars
  update(el, obj) {

  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    console.log('unbind');
    el.removeEventListener('click', el.handler);
  },
};

export default copy;
