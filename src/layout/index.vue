<template>
	<div id="layout">
		<!-- <HeadNav></HeadNav> -->
		<component :is="headComponent" @btnClick="todo"></component>
		<!-- {{ isPc }} -->
		<div class="app-main" :class="{'ph':isPc!==true}">
			<keep-alive :include="keepRoute">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
import Web3 from 'web3';
import abi721NFT from '@/jsons/abi-721-NFT.js';
import HeadNav from "./headNav/index.vue";
import HeadNavPH from "./headNav/index.ph.vue";
import { mapActions,mapGetters } from "vuex";

export default {
	data() {
		return {
			// web3js:null,
			// keepRoute:['homepage'],
			keepRoute:['homepage','myAssets'],
		}
	},
	components: {
		HeadNav,
		HeadNavPH
	},
	watch: {
		$route(now, old) {
			if (old) {
				this.watchRouteToChangeTheme()
			}
		}
	},
	computed: {
		...mapGetters({
			isPc: 'isPc',
			web3Provider: 'web3Provider',
		}),
		// isPc() {
		// 	return this.$store.state.isPc;
		// },
		headComponent() {
			return this.isPc ? 'HeadNav':'HeadNavPH'
		},
		// web3Provider() {
		// 	return this.$store.state.web3Provider;
		// }
	},
	mounted() {
		this.watchRouteToChangeTheme();
		this.todo();
	},
	methods: {
		...mapActions({ 
			setTheme: 'setTheme', 
			setCurrentRoutePath: 'setCurrentRoutePath',
			setEthAddress: 'setEthAddress',
			setWeb3Provider: 'setWeb3Provider'
		}),
		watchRouteToChangeTheme() {
			let theme = this.$route.name == 'homepage' ? 'transparent' : 'dark';
			this.setCurrentRoutePath(this.$route.path)
			this.setTheme(theme);
		},
		setWeb3() {
			let web3Provider = this.$store.state.web3Provider;
			if(!web3Provider) {
				this.todo();
			} 
		},
		todo() {
			let that = this;
			let web3Provider = window.ethereum;
			
			if (web3Provider) {
				try {
					// 请求用户授权
					web3Provider.enable();
					console.log("web3Provider---",web3Provider);
					console.log("web3Provider---",web3Provider.chainId);
					if(web3Provider.chainId == '0x38') {
						let web3js = new Web3(web3Provider); //web3js就是你需要的web3实例
						this.setWeb3Provider(web3js)
						console.log(this.web3Provider)
						web3js.eth.getAccounts().then(res=>{
							that.setEthAddress(res[0]);
						});
					} else {
						// this.$message.error('Please switch the BSC network');
						this.$message({
							duration: 0,
							type: 'error',
							message: 'Please switch the BSC network'
						})
					}
					// 0x61 测试网络
					// 0x38 正式网络
				} catch (error) {
					// 用户不授权时
					console.error('User denied account access');
					// that.$message('User denied account access');
					throw new Error(error);
				}
			}
			// console.log(this.$store.state.web3Provider);
		},
		getAccounts() {
			
		},
		ethRequest() {
			let params = [
				{
					from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
					to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
					gas: '0x76c0', // 30400
					gasPrice: '0x9184e72a000', // 10000000000000
					value: '0x9184e72a', // 2441406250
					data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'
				}
			];
			console.log(this.web3js);
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#layout {
	position: relative;
	.head-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	.app-main > * {
		padding-top: 100px;
	}
	.app-main.ph > * {
		padding-top: 60px;
	}
}
</style>
