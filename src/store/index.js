import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		theme: 'transparent',//transparent dark
		currentRoutePath:'',
		isPc: true,
		ethAddress:'',
		web3Provider:null,
		haveAuth:false,
		Lb:'0',
		Lc:'0',
		NFT:0,
		EGG:0,
		timestamp:0,
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
		SET_ETH_ADDRESS:(state,ethAddress)=>{
			state.ethAddress = ethAddress
		},
		SET_WEB3_PROVIDER:(state,web3Provider)=>{
			state.web3Provider = web3Provider
		},
		SET_HAVE_AUTH:(state,haveAuth)=>{
			state.haveAuth = haveAuth
		},
		SET_NFT_EGG_NUM:(state,prop)=>{
			state.NFT = prop.NFT
			state.EGG = prop.EGG
		},
		SET_LB:(state,Lb)=>{
			state.Lb = Lb
		},
		SET_LC:(state,LC)=>{
			state.Lc = LC
		},
		SET_TIME_STAMP:(state,timestamp)=>{
			state.timestamp = timestamp
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
		setEthAddress({commit},params) {
			commit('SET_ETH_ADDRESS', params);
		},
		setWeb3Provider({commit},params) {
			commit('SET_WEB3_PROVIDER', params);
		},
		setHaveAuth({commit},params) {
			commit('SET_HAVE_AUTH', params);
		},
		setLb({commit},params) {
			commit('SET_LB', params);
		},
		setLc({commit},params) {
			commit('SET_LC', params);
		},
		setNftEggNum({commit},Ids) {
			let egg=0;
			let nft=0;
			Ids.map(item=>{
				if(item.length < '2000000000000000000000000000'.length) {
					nft += 1;
				} else {
					egg += 1;
				}
			})
			commit('SET_NFT_EGG_NUM', {
				"EGG":egg,
				"NFT":nft
			});
		},
		setTimestamp({commit},timestamp) {
			commit('SET_TIME_STAMP', timestamp);
		},
	},
	getters:{
		theme:state=>state.theme,
		currentRoutePath:state=>state.currentRoutePath,
		isPc:state=>state.isPc,
		ethAddress:state=>state.ethAddress,
		web3Provider:state=>state.web3Provider,
		haveAuth:state=>state.haveAuth,
		userAssets:state=>({
			"EGG":state.EGG,
			"NFT":state.NFT,
			"Lc":state.Lc,
			"Lb":state.Lb,
		}),
		dateTimestamp:state=>state.timestamp,
	},
})
