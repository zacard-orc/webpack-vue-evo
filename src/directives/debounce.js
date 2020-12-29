const debounce = {
  inserted(el, binding) {
    console.log(el, binding);
    let timer;
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }
      console.log('adddddvvv')
      timer = setTimeout(() => {
        binding.value();
      }, 500);
    });
  },
};

export default debounce;
