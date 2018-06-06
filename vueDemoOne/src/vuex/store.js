import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 1,
	timeArr: ['18:33', '14:54', '18:32', '13:29', '14:56', '15:41', '14:39', '11:34', '11:09', '16:36', '13:45', '11:03', '13:28', '10:55', '18:50', '13:51', '11:44', '11:46'],
	prData: [{
        name: 'pro_1',
        imgUrl: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d935c45d3b10f359a0319fa50b895e27.jpg',
        imgTtl: 'pic1',
        proIntro: '父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！',
        productCount: 50,
        price: 200,
        priceTtl: 0,
        proCount: 0,
        isChecked: false,
        ifShow: true
      },{
        name: 'pro_2',
        imgUrl: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d935c45d3b10f359a0319fa50b895e27.jpg',
        imgTtl: 'pic2',
        proIntro: '父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！',
        productCount: 40,
        price: 100,
        priceTtl: 0,
        proCount: 0,
        isChecked: false,
        ifShow: true
      },{
        name: 'pro_3',
        imgUrl: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d935c45d3b10f359a0319fa50b895e27.jpg',
        imgTtl: 'pic3',
        proIntro: '父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！',
        productCount: 45,
        price: 230,
        priceTtl: 0,
        proCount: 0,
        isChecked: false,
        ifShow: true
      },{
        name: 'pro_4',
        imgUrl: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d935c45d3b10f359a0319fa50b895e27.jpg',
        imgTtl: 'pic4',
        proIntro: '父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！',
        productCount: 35,
        price: 120,
        priceTtl: 0,
        proCount: 0,
        isChecked: false,
        ifShow: true
      },{
        name: 'pro_5',
        imgUrl: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d935c45d3b10f359a0319fa50b895e27.jpg',
        imgTtl: 'pic5',
        proIntro: '父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！',
        productCount: 30,
        price: 160,
        priceTtl: 0,
        proCount: 0,
        isChecked: false,
        ifShow: true
      }]
}
const mutations = {
	countAdd (state, [n, m]) {
		state.count += n
		state.count *= m
	},
	countRds (state, [n, m]) {
		if (state.count > 0) {
			state.count -= n
			state.count /= m
		}
	}
}
const getters = {               //相当于是computed
	count: function (state) {
		return state.count += 100
	},
	totalTime: state => {
		let ttlTime = 0
		let n = 8
		state.timeArr.map((it, index) => {
			if(index>=n){
				let sglTimeArr = it.split(":")
				let time = parseInt(sglTimeArr[0])*60 + parseInt(sglTimeArr[1])
				ttlTime += time	
			}
			
		})
		return ttlTime
	}
}
const actions = {
	addAction(context){
		context.commit('countAdd', [2, 3])
		setTimeout(()=>{context.commit('countRds', [3, 2])},3000)
	},
	rdsAction({commit}){
		commit('countRds', [3, 2])
	}
}
const moduleA = {
	state,
	mutations,
	getters,
	actions
}


export default new Vuex.Store({
	modules: {
		mdsA: moduleA
	},
	state
})