<template>
    <div class="hello">
        <h1 class="msg">{{ msg }}</h1>
        <p class="lin1">Boom</p>
    </div>
</template>

<script>
  export default {
    name: 'Boom',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
