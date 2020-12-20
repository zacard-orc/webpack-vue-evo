<template>
    <div class="hello">
        <div class="msg">{{ msg }}</div>
        <div class="msg2">{{msg}}</div>
        <p class="lin1">Boom</p>
    </div>
</template>

<script>
  import '@/assets/scss/boom.scss';

  export default {
    name: 'Boom',
    props: {
      msg: String,
    },
    created() {
      // const a = 1;
      // console.log(a)
      [1, 2, 3].map(console.log);
      const mx = 'Hello';
      // const b = `asdfa ${mx}bbbb`;
      const b = 'asdfa'+ mx+'bbbb';
      console.log(b);
      const bbb = {
        aa1: 1,
        bb1: 2,
        cc1: 333,
      };
      const {
        aa1, bb1, cc1,
      } = bbb;
      console.log(aa1, bb1, cc1);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $daily: green;

    .msg2 {
        color: $daily;
    }

</style>
