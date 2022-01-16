import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		theme: 'transparent',//transparent dark
		currentRoutePath:'',
		isPc: true,
	},
	mutations: {
		SET_THEME:(state,theme)=>{
			state.theme = theme
		},
		SET_CURRENT_ROUTE_PATH:(state,path)=>{
			state.currentRoutePath = path
		},
		SET_IS_PC:(state,isPc)=>{
			state.isPc = isPc
		},
	},
	actions: {
		setTheme({commit},params) {
			commit('SET_THEME', params);
		},
		setCurrentRoutePath({commit},params) {
			commit('SET_CURRENT_ROUTE_PATH', params);
		},
		setIsPc({commit},params) {
			commit('SET_IS_PC', params);
		},
	},
	modules: {}
})
