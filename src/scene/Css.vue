<template>
  <div>
    <p>
      <button @click="setClear">Clear</button>
      <button @click="setNotClear">Not Clear</button>
    </p>
    <div class="hello">
      <div class="u1"></div>
      <div class="u2"></div>
      <div class="u3"></div>
      <div class="clear" v-show="isClear"></div>
    </div>
    <p>{{clearMessage}}</p>
  </div>

</template>

<script>
import '@/assets/less/Css.less';

export default {
  name: 'Css',
  components: {
  },
  data() {
    return {
      isClear: true,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    clearMessage() {
      console.log(this);
      return `${this.isClear ? '已设置' : '未设置'}清除浮动`;
    },
  },
  methods: {
    setClear() {
      this.isClear = true;
    },
    setNotClear() {
      this.isClear = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  p button{
    margin-right: 10px;
  }
  .hello {
    width: 400px;
    border: 1px dashed grey;
    .u1 {
      float: left;
      height: 100px;
      width: 100px;
      background-color: lightblue;
      opacity: 0.3;
    }
    .u2 {
      float: left;
      height: 200px;
      width: 100px;
      background-color: yellow;
    }
    .u3 {
      height: 50px;
      width: 100px;
      background-color: palevioletred;
    }
    .clear {
      clear: both;
    }
  }
</style>
