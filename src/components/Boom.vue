<template>
    <div class="hello">
        <div class="msg">{{ msg }}</div>
        <div class="msg2">{{msg}}</div>
        <p class="lin1">Boom</p>
    </div>
</template>

<script>
  import '../assets/scss/boom.scss'

  export default {
    name: 'Boom',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $daily: green;

    .msg2 {
        color: $daily;
    }

</style>
