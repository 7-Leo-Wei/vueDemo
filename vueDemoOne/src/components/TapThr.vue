<template>
  <div class="productDiv">
    <table id="productList">
      <tr>
        <th>
          <input type="checkbox" v-on:click="chsAll" v-model="isAll">全选
        </th>
        <th>商品</th>
        <th>数量</th>
        <th>单价（元）</th>
        <th>金额（元）</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in proData" v-if="item.ifShow">
        <td>
          <input type="checkbox" v-model="item.isChecked">
        </td>
        <td>
          <div class="proInfoDiv">
            <div class="imgDiv proInfo">
              <img :src="item.imgUrl" :alt="item.imgTtl">
            </div>
            <div class="proInfo">
              <p>{{item.proIntro}}</p>
            </div>
          </div>
        </td>
        <td>
          <pro-count v-on:proCountAdd="proAdd(index)" v-on:proCountRds="proReduce(index)" :proCnt="item.proCount"></pro-count>
        </td>
        <td>
          <p>￥{{item.price}}</p>
        </td>
        <td>
          <p>￥{{item.priceTtl}}</p>
        </td>
        <td>
          <button v-on:click="deleteItem(index)" >删除</button>
        </td>
      </tr>
    </table>
    <div class="getAll">
      <button class="returnPro" v-on:click="rtnPro">还原删除商品</button>
      <p>共选择商品{{proNum}}件，总金额为：￥{{priceTotal}}元</p>
      <button class="payPro">结算</button>
    </div>
  </div>
</template>

<script>
import proCount from '@/components/proCount'
import store from '@/vuex/store'
import { mapState } from 'vuex'

export default {
  props: ['proDta'],
  name: 'HelloWorld',
  data () {
    return {
      deletePro: [],
      proNum: 0
    }
  },
  computed: {
    ...mapState(['prData']),
    proData () {
      return this.prData
    },
    priceTotal () {
      var res = 0
      this.proData.map(it => {
        if (it.isChecked) {
          res = res + it.priceTtl
        }
      })
      return res
    },
    isAll: {
      get: function () {
        var n = 0
        this.proData.map(it => {
          if (it.isChecked) {
            n++
          }
        })
        this.proNum = n
        if (n == this.proData.length) {
          return true
        }
      },
      set: function () {
      }
    }
  },
  methods: {
    proAdd (index) {
      this.proData[index].proCount++
      this.proData[index].priceTtl = this.proData[index].price*this.proData[index].proCount
    },
    proReduce (index) {
      this.proData[index].proCount--
      this.proData[index].priceTtl = this.proData[index].price*this.proData[index].proCount
    },
    chsAll (evt) {
      var evt = evt || window.event
      var obj = evt.target || evt.srcElement
      this.proData.map(it => {
        it.isChecked = obj.checked
      })
    },
    deleteItem (index) {
      this.proData[index].ifShow = false
      this.deletePro.push(this.proData[index])
      this.proData.splice(index, 1)
    },
    rtnPro () {
      if (this.deletePro.length > 0) {
        this.deletePro.map(it => {
          it.ifShow = true
          this.proData.push(it)
        })
        confirm('删除商品已还原！')
      }else{
        confirm('还未删除商品！')
      }
      this.deletePro = []
    }
  },
  components: {
    "pro-count": proCount
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productDiv{
  width: 100%;
}
.productDiv table{
  width: 100%;
}
.productDiv table tr td:nth-child(2){
  width: 40%;
}
.proInfoDiv{
  overflow: hidden;
}
.proInfoDiv .proInfo{
  float: left;
  width: 50%;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;/*（行数）*/
  -webkit-box-orient: vertical;
}
.proInfoDiv .proInfo img{
  width: 80%;
  height: 100%;
}
.proInfoDiv .proInfo p{
  margin: 0;
  line-height: 24px;
  font-size: 14px;
}
.getAll{
  overflow: hidden;
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
.getAll p{
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin: 0;
}
.getAll button{
  width: 120px;
  background: #3399ff;
  border: none;
  border-radius: 5px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-top: 1px;
}
.getAll button:hover{
  font-size: 16px;
}
.returnPro{
  float: left;
  margin-left: 20px;
}
.payPro{
  float: right;
  margin-right: 20px;
}
</style>
