<template>
  <div class="proCount">
    <button v-on:click="reduce" class="countBtn">-</button>
    <input type="text" v-model="proCount" class="count">
    <button v-on:click="add" class="countBtn">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      proCount: 0
    }
  },
  methods: {
    add () {
      this.proCount++
      this.$emit('proCountAdd')
    },
    reduce () {
      if (this.proCount > 0) {
        this.proCount--
        this.$emit('proCountRds')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countBtn{
  width: 40px;
  height: 32px;
  border: 1px solid #ccc;
  background: #fff;
  color: #000;
}
.count{
  text-align: center;
  width: 40px;
  height: 26px;
  border: none;
}
</style>
