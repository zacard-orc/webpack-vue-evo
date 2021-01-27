<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/boom">Boom</router-link>
      <router-link to="/noteexp">Note Exp</router-link>
      <router-link to="/css">Css</router-link>
      <router-link to="/css_priority">CssPriority</router-link>
      <router-link to="/direct">Direct</router-link>
      <router-link to="/vxs">Vxs</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { logfn } from '@/utils';

const pr = () => new Promise((resolve) => (
  setTimeout(() => {
    resolve('ok');
  }, 5000)
));
export default {
  name: 'App',
  components: {
  },
  async created() {
    await pr();
    console.log('created');
  },
  async mounted() {
    // await pr();
    // console.log('mounted');
    const log = logfn();
    log.info('mounted');
    log.info(document.cookie);
    log.info('mounted', { a: 2, b: 3, c: 4 },'333');
    console.log(document.cookie);
    console.log(sessionStorage.getItem('foo'));
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
