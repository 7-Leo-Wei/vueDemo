<template>
  <div class="listDiv">
    <h2>Todo List</h2>
    <div class="inputDiv">
      <input type="text" placeholder=" 请输入内容" v-model="listCont" v-on:keyup.enter="addList">
    </div>
    <div class="listUl">
      <ul>
        <li v-for="(item, index) in listArr" v-on:mouseover="btnShow(index)" v-on:mouseleave="btnHide(index)">
          <p>{{index+1}}.<input type="checkbox" v-model="item.isFinished">{{item.content}}</p>
          <button class="ListBtn dltList" v-if="item.BtnShow" v-on:click="deleteList(index)" title="删除">X</button>
          <button class="ListBtn fnsList" v-if="item.BtnShow" v-on:click="finishList(index)" title="完成">√</button>
        </li>
      </ul>
    </div>
    <div class="listInfo">
      <p>共{{allListNum}}项待办事项，其中已完成{{fnsListNum}}项。</p>
    </div>
  </div>
</template>

<script>
function ListFunc(cont){
  this.content = cont;
  this.isFinished = false;
  this.BtnShow = false;
}
export default {
  name: 'TodoList',
  data () {
    return {
      listCont: '',
      listArr: [],
      deleteArr: []
    }
  },
  computed: {
    allListNum () {
      return this.listArr.length
    },
    fnsListNum () {
      var n = 0
      this.listArr.map(it => {
        if(it.isFinished){
          n++
        }
      })
      return n
    }
  },
  methods: {
    addList (evt) {
      if (this.listCont) {
        var list = new ListFunc(this.listCont)
        this.listArr.push(list)
        this.listCont = ''
      }else{
        confirm('请输入内容！')
        var evt = evt || window.event
        var obj = evt.target || evt.srcElement
        obj.focus()
      }
    },
    btnShow (index) {
      this.listArr[index].BtnShow = true
    },
    btnHide (index) {
      this.listArr[index].BtnShow = false
    },
    deleteList (index) {
      this.deleteArr.push(this.listArr[index])
      this.listArr.splice(index, 1)
    },
    finishList (index) {
      this.listArr[index].isFinished = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listDiv{
  width: 80%;
  margin: auto;
}
.inputDiv{
  width: 100%;
}
.inputDiv input{
  width: 100%;
  margin: 10px 0;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.inputDiv input:hover{
  box-shadow: 0 0 5px #3399ff;
}
.listUl{
  width: 100%;
  text-align: left;
}
.listUl ul{
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.listUl ul li{
  height: 32px;
  line-height: 32px;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.listUl ul li:hover{
  box-shadow: 0 0 5px #3399ff;
}
.listUl ul li p{
  margin: 0;
  display: inline-block;
}
.listUl ul li .ListBtn{
  float: right;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 1px 1px 0 0;
}
.listUl ul li .dltList{
  color: #ff0000;
}
.listUl ul li .dltList:hover{
  box-shadow: 0 0 5px #ff0000;
}
.listUl ul li .fnsList{
  color: #00ff00;
}
.listUl ul li .fnsList:hover{
  box-shadow: 0 0 5px #00ff00;
}
</style>
