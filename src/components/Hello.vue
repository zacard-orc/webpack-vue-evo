<template>
  <div @click="onClick" class="hello">
    Hello, {{msg}}
  </div>
</template>

<script>

export default {
  name: 'Hello',
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    msg: String,
  },
  computed: {

  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onClick(e) {
      this.$emit('evHelloClick', { foo: 'bar' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  padding: 10px;
  background-color: #f3f3f3;
}
</style>
