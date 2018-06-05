import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 1
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

export default new Vuex.Store({
	state,
	mutations
})