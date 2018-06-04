<template>
  <div id="app">
    <div class="tapDiv">
      <div class="navDiv">
        <ul v-on:click="chooseTap">
          <li class="choosed">
            <router-link to='/'>Tap One</router-link>
          </li>
          <li>
            <router-link to='/TapTwo'>Tap Two</router-link>
          </li>
          <li>
            <router-link to='/TapThr'>Tap Thr</router-link>
          </li>
          <li>
            <router-link to='/TapFur'>Tap Fur</router-link>
          </li>
        </ul>
      </div>
      <div class="contDiv">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    chooseTap (evt) {
      var evt = evt || window.event
      var obj = evt.target || evt.srcElement
      if (obj.nodeName == 'a' || obj.nodeName == 'A') {
        var li = obj.parentNode.parentNode.childNodes
        for (var i = 0; i < li.length; i++) {
          li[i].className = ''
        }
        obj.parentNode.className = 'choosed'
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tapDiv {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.tapDiv .navDiv{
  width: 100%;
}
.tapDiv .navDiv ul{
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.tapDiv .navDiv ul li{
  width: 25%;
  height: 32px;
  float: left;
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  line-height: 32px;
}
.tapDiv .navDiv ul li a{
  color: #111;
  display: inline-block;
  width: 100%;
}
.tapDiv .navDiv ul li.choosed{
  background: #99ccff;
}
.tapDiv .navDiv ul li.choosed a{
  color: #fff;
}
.fade.enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
