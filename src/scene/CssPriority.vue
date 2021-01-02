<template>
  <div>
    <div class="hello" style="background-color: orangered"></div>
    <div class="ab cd">ab cd</div>
    <div class="ab">
      <div class="cd">ab cd</div>
    </div>
    <div class="ax">
      123
      <div class="boom">
        boom
        <div class="cake">
          cake
        </div>
        <div class="cake2">
          cake2
          <div class="door">
            door
          </div>
        </div>
      </div>
      <div class="boom2">
        boom2
      </div>
      <div class="boom3">
        boom3
      </div>
      <div class="boom4">
        boom4
      </div>
    </div>
    <p>bba</p>
    <div>123</div>
  </div>

</template>

<script>
import '@/assets/less/Css.less';

export default {
  name: 'Css',
  components: {},
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
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    width: 100px;
    height: 50px;
    background-color: chartreuse !important;
    background-color: yellow;
  }

  .ab {
    font-size: 24px;

    &.cd {
      background-color: red;
    }
  }

  .ax {
    .door {
      background-color: #42b983;
      color: white;
    }
    >.boom2 {
      background-color: red;
      color: white;
    }
  }

  p + div {
    border: 2px solid blue;
    margin-bottom: 2px;
  }

  /*.ax {*/
  /*  .boom3 + .boom2 {*/
  /*    border: 2px solid blue;*/
  /*    margin-bottom: 2px;*/
  /*  }*/
  /*}*/

</style>
