<template>
  <div>
    指令
    <div
      v-copy="copytext"
      data-site="baidu"
    >复制</div>
    <hello
      msg="terry"
      v-state
      @evHelloClick="onHelloClick"
    >
    </hello>
    <button  v-debounce="onLimClick">延迟阻塞按钮</button>

<!--    <img v-LazyLoad="shoe.jpg" data-src="shoe.jpg" />-->
  </div>
</template>

<script>

import Hello from '@/components/Hello';

export default {
  name: 'Direct',
  components: {
    Hello,
  },
  data() {
    return {
      copytext: '这是一段文字',
      copytext3: '这是一段文字3',
      copytext4: '这是一段文字4',
    };
  },
  props: {
    msg: String,
  },
  computed: {

  },
  methods: {
    onHelloClick(e) {
      console.log(e);
    },
    onLimClick(e) {
      console.log('bbb')
      console.log(e);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
