<template>
  <div class="hello">
    <span>{{userinfo.name}} <button @click="changeName">点</button></span>
    <div class="g-1px-vw"></div>
    <div class="g-1px-px"></div>
    <div class="g-1px-fix"></div>
    <div class="g-1px-svg"></div>
    <div class="g-1px-svg-rxrect"></div>
    <h1>{{ msg }}</h1>
    <p class="lin1">Hello</p>
    <p>
      <boom msg="Nice"></boom>
    </p>
  </div>
</template>

<script>
import Boom from './Boom';
import '@/assets/less/Home.less';

export default {
  name: 'HelloWorld',
  data() {
    return {
      userinfo: {
        name: 'tom',
      },
    };
  },
  components: {
    Boom,
  },
  props: {
    msg: String,
  },
  methods: {
    changeName() {
      this.userinfo.name = 'work';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    font-size: 20px;
  }

  .g-1px-vw {
    width: 700px;
    border-bottom: 1px solid red;
  }

  .g-1px-px {
    margin-top: 40px;
    width: 700px;
    border-bottom-color: blue;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .g-1px-fix {
    margin-top: 40px;
    position: relative;
    border: none;
    width: 700px;
  }

  .g-1px-fix::after {
    content: '';
    display: block;

    /* position: absolute; */

    /* bottom: 0; */
    background: #000;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }

  .g-1px-svg {
    margin-top: 40px;
    height: 10px;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100%' x2='100%' y2='100%' stroke='red' /></svg>");
  }

  .g-1px-svg-rxrect {
    margin-top: 40px;
    height: 100px;

    /* border-radius: 10px; */
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' rx='30' fill='none' stroke='red' /></svg>");
  }
</style>
