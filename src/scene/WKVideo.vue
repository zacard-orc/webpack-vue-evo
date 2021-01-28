<template>
  <div>
    WKVideo

    <video src="../assets/video/demo.mp4"
           autoplay
           width='100%'
           controls="controls">
      your browser does not support the video tag
    </video>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .lin {

  }
</style>
