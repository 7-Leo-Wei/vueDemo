<template>
  <div class="vuexDiv">
    <h1>{{ msg }}</h1>
    <img src="@/assets/logo.png">
    <h2>{{ $store.state.count }}--{{ count }}</h2>
    <!-- <button @click="$store.commit('countRds', [10, 2])">-</button> -->
    <button @click="countAdd([5, 2])">+</button>
    <button @click="countRds([10, 2])">-</button>
  </div>
</template>

<script>
//获取vuex相关代码
import store from '@/vuex/store';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'vuexDiv',
  data () {
    return {
      msg: 'Tap Fur'
    }
  },
  // computed: {                      //方法一
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({             //方法二
  //   count: state => state.count
  // }),
  computed: mapState(['count']),     //方法三
  methods: mapMutations(['countRds', 'countAdd']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
