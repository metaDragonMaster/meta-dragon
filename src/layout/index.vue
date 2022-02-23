<template>
	<div id="layout">
		<!-- <HeadNav></HeadNav> -->
		<component :is="headComponent" @btnClick="todo" :navList="navList"></component>
		<!-- {{ isPc }} -->
		<div class="app-main" :class="{ ph: isPc !== true }">
			<keep-alive :include="keepRoute"><router-view></router-view></keep-alive>
		</div>
	</div>
</template>
<script>
import Web3 from 'web3';
import abi721NFT from '@/jsons/abi-721-NFT.js';
import HeadNav from './headNav/index.vue';
import HeadNavPH from './headNav/index.ph.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			// web3js:null,
			// keepRoute:['homepage'],
			keepRoute: ['homepage']
		};
	},
	components: {
		HeadNav,
		HeadNavPH
	},
	watch: {
		$route(now, old) {
			if (old) {
				this.watchRouteToChangeTheme();
			}
		},
	},
	computed: {
		...mapGetters({
			isPc: 'isPc',
			web3Provider: 'web3Provider',
		}),
		headComponent() {
			return this.isPc ? 'HeadNav' : 'HeadNavPH';
		},
		navList() {
			return [
				{
					title: this.$t('headerNav.nav.homepage'),
					path: '/homepage'
				},
				{
					title: this.$t('headerNav.nav.nftMarket') ,
					path: '/nftMarket'
				},
				{
					title: this.$t('headerNav.nav.nftBox'),
					path: '/nftBox'
				},
				{
					title: this.$t('headerNav.nav.whiteBook') ,
					path: '/whiteBook'
				},
				{
					title: this.$t('headerNav.nav.invitationReward') ,
					path: '/invitationReward'
				},
				{
					title: this.$t('headerNav.nav.myAssets'),
					path: '/myAssets'
				},
				{
					title: this.$t('headerNav.nav.authCode'),
					path: '/myAuthorizationCode'
				},
				{
					title: this.$t('headerNav.nav.bindFriends'),
					path: '/bindFriends'
				},
			];
		},

	},
	mounted() {
		this.watchRouteToChangeTheme();
		this.setWeb3();
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
			this.setCurrentRoutePath(this.$route.path);
			this.setTheme(theme);
		},
		setWeb3() {
			let web3Provider = this.web3Provider;
			if (!web3Provider) {
				this.todo();
			}
		},
		todo() {
			let web3Provider = window.ethereum;
			if (web3Provider) {
				try {
					// 请求用户授权
					web3Provider.enable();
					// console.log('web3Provider---', web3Provider);
					// console.log('web3Provider---', web3Provider.chainId);
					// 0x61 测试网络
					// 0x38 正式网络
					if(web3Provider.chainId == '0x38') {
						let web3js = new Web3(web3Provider); //web3js就是你需要的web3实例
						this.setWeb3Provider(web3js);
						// console.log(this.web3Provider);
						web3js.eth.getAccounts().then(res => {
							this.setEthAddress(res[0]);
						});
					} else {
						this.$message({
							duration: 0,
							type: 'error',
							message: 'Please switch the BSC network'
						})
					}
					
				} catch (error) {
					// 用户不授权时
					console.error('User denied accoun t access');
					// that.$message('User denied account access');
					throw new Error(error);
				}
			}
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
#layout {
	position: relative;
	.head-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}
	.app-main > * {
		padding-top: 100px;
	}
	.app-main.ph > * {
		padding-top: 60px;
	}
}
</style>
