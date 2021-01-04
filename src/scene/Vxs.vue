<template>
  <div>
    <h2>Vue store</h2>

    <div class="sec">
      <span>mutation count = </span>
      <span class="btn-fm">{{count}}</span>
      <span class="btn-fm"><button @click="add">+1</button></span>
      <span class="btn-fm"><button @click="minus">-1</button></span>
    </div>

    <div class="sec">
      <span>getter name = </span>
      <span class="btn-fm">{{getterName}}</span>
      <span>v-bind name = </span>
      <span class="btn-fm">{{bindName}}</span>
      <span class="btn-fm">& has Tom = </span>
      <span class="btn-fm">{{hasTom}}</span>
      <span class="btn-fm">
        <input type="text" v-model="bindName" @input="queryName">
      </span>
    </div>

    <div class="sec">
      <span>async count = </span>
      <span class="btn-fm">{{asyncCount}}</span>
      <span class="btn-fm"><button @click="asyncAdd">+1</button></span>
      <span class="btn-fm"><button @click="asyncMinus">-1</button></span>
    </div>

    <div class="sec">
      <span>map getters count > 3 = </span>
      <span class="btn-fm">{{bigCount}}</span>
    </div>

    <div class="sec">
      <span>map state count > 6 = </span>
      <span class="btn-fm">{{sixCount}}</span>
    </div>

    <div class="sec">
      <span>module [login,cart,app] state = </span>
      <span class="btn-fm">{{userName}}</span>
      <span class="btn-fm">&</span>
      <span class="btn-fm">{{cart}}</span>
      <span class="btn-fm">&</span>
      <span class="btn-fm">{{online}}</span>

    </div>

    <div class="sec">
      <span>module [login,cart] action = </span>
      <span class="btn-fm">
        <button @click="changeName"> broadcast to Jason</button>
      </span>
    </div>

    <div class="sec">
      <span>module [app] action = </span>
      <span class="btn-fm">
        <button @click="appOnline"> unicast to Offline</button>
      </span>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
} from 'vuex';

export default {
  name: 'Vxs',
  components: {},
  data() {
    return {
      count: 0,
      asyncCount: 0,
      bindName: '',
    };
  },
  props: {
    msg: String,
  },
  computed: {
    hasTom() {
      return this.$store.getters.hasTom;
    },
    getterName() {
      return this.$store.state.entry.name;
    },
    userName() {
      return this.$store.state.login.userName;
    },
    cart() {
      return this.$store.state.cart.cartStatus;
    },
    online() {
      return this.$store.state.app.online;
    },
    ...mapGetters({
      bigCount: 'count3',
    }),
    ...mapState({
      sixCount: (state) => state.entry._count >= 6,
    }),

  },
  methods: {
    asyncAdd() {
      this.$store.dispatch({
        type: 'add',
        amt: 2,
      }).then((res) => {
        this.asyncCount = res;
      });
    },
    asyncMinus() {
      this.$store.dispatch({
        type: 'minus',
        amt: -2,
      }).then((res) => {
        this.asyncCount = res;
      });
    },
    add() {
      this.$store.commit('add');
      this.count = this.$store.state.entry._count;
    },
    minus() {
      this.$store.commit('minus');
      this.count = this.$store.state.entry._count;
    },
    queryName(e) {
      this.$store.commit('setName', e.target.value);
    },
    changeName() {
      this.$store.dispatch('changeName', 'Jason');
    },
    appOnline() {
      this.$store.dispatch('app/changeName', 'Offline');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sec{
  margin-bottom: 14px;
  background-color: #f3f3f3;
  padding: 12px;
}
.btn-fm {
  margin-right: 10px;
}
</style>
