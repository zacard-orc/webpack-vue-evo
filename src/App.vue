<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/boom">Boom</router-link>
      <router-link to="/noteexp">Note Exp</router-link>
      <router-link to="/css">Css</router-link>
      <router-link to="/direct">Direct</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="less">
  #nav {
    padding: 20px;
    a {
      font-weight:bold;
      color:#2c3e50;
      margin-right: 10px;
      &.router-link-exact-active {
        color:#42b983;
      }
    }
  }
</style>
