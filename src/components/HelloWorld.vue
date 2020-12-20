<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p class="lin1">Hello</p>
        <p>
            <boom msg="Nice"></boom>
        </p>
    </div>
</template>

<script>

  import Boom from './Boom';
  import '@/assets/less/helloworld.less';

  export default {
    name: 'HelloWorld',
    components: {
      Boom,
    },
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .hello {
        font-size: 20px;
    }
</style>
