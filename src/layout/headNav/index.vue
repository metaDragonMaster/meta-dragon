<template>
	<div class="head-nav" :class="[theme]">
		<img class="head-nav-icon" src="@/assets/head-nav/head-nav-icon.png" alt="" />
		<nav>
			<ul>
				<li v-for="item in navList" :key="item.path" :class="{ active: currentRoutePath == item.path }" @click="toRoute(item)">
					<span>{{ item.title }}</span>
				</li>
			</ul>
			<div class="link-wallet-button font-hide" @click="$emit('btnClick')">{{ ethAddress }}</div>
		</nav>
	</div>
</template>

<script>
import Hbg from '@/assets/head-nav/hbg.png';
import HbgWhite from '@/assets/head-nav/hbg-white.png';
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			openNav: false,
			ethereum: null,
			web3js: null,
			navList: [
				{
					title: 'HOME',
					path: '/homepage'
				},
				{
					title: 'NFT MARKET',
					path: '/nftMarket'
				},
				{
					title: 'MY ASSETS',
					path: '/myAssets'
				},
				// {
				// 	title: 'WHITE BOOK',
				// 	path: '/whiteBook'
				// },
				{
					title: 'Auth Code',
					path: '/myAuthorizationCode'
				},
			]
		};
	},
	computed: {
		...mapGetters({
			theme: 'theme',
			web3Provider: 'web3Provider',
		}),
		// theme() {
		// 	return this.$store.state.theme;
		// },
		currentRoutePath() {
			return this.$store.state.currentRoutePath;
		},
		ethAddress() {
			// console.log(this.$store.getters)
			return this.$store.getters.ethAddress || 'Link Wallet';
		},
		hbgIcon() {
			return this.$route.path == '/homepage' ? Hbg : HbgWhite;
		}
	},
	methods: {
		changeOpenNav() {
			if(!this.web3Provider) return;
			this.openNav = !this.openNav;
		},
		toRoute({ path }) {
			if(!this.web3Provider) return;
			this.$routerUtil.toPath(path);
		},
	}
};
</script>

<style lang="scss" scoped="scoped">
@import '@/styles/theme.scss';
.head-nav {
	display: flex;
	height: 100px;
	z-index: 999;
	padding: 0 calc((100% - 1660px) / 2);
	&.transparent {
		background-color: rgba($color: #ffffff, $alpha: 0.2);
	}
	&.dark {
		background-color: rgba($color: #000000, $alpha: 0.2);
		color: #ffffff;
	}
	.head-nav-icon {
		padding: 18px 0 0 0;
	}
	nav {
		display: flex;
		align-items: center;
		margin-left: auto;
		ul {
			display: flex;
			li {
				line-height: 100px;
				font-size: 14px;
				position: relative;
				padding: 0 30px;
				cursor: pointer;
			}
			li.active:after {
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				border-radius: 10px;
				@include GradualBoxShadow;
				@include GradualBGColor;
			}
		}
	}
	.link-wallet-button {
		height: 65px;
		line-height: 65px;
		width: 214px;
		border-radius: 12px;
		padding: 0 10px 0;
		color: #ffffff;
		margin-right: 20px;
		margin-left: 70px;
		text-align: center;
		@include GradualBGColor;
	}
}
</style>
