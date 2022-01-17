<template>
	<div class="head-nav" :class="[theme]">
		<img class="hbg-nav-button" :src="hbgIcon" alt="" @click="changeOpenNav" />
		<img class="head-nav-icon" src="@/assets/head-nav/head-nav-icon-ph.png" alt="" />
		<div class="link-wallet-button font-hide"  @click="$emit('btnClick')">{{ ethAddress }}</div>
		<ul class="nav-list" :class="{ active: openNav }">
			<li v-for="item in navList" :key="item.path" :class="{ active: currentRoutePath == item.path }" @click="toRoute(item)">
				<span>{{ item.title }}</span>
			</li>
		</ul>
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
			navList: [{
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
				}
			]
		};
	},
	computed: {
		...mapGetters({
			theme: 'theme',
			
		}),
		// theme() {
		// 	return this.$store.state.theme;
		// },
		currentRoutePath() {
			return this.$store.state.currentRoutePath;
		},
		ethAddress() {
			return this.$store.getters.ethAddress || 'Link Wallet'
		},
		hbgIcon() {
			return this.$route.path == '/homepage' ? Hbg : HbgWhite;
		}
	},
	methods: {
		changeOpenNav() {
			this.openNav = !this.openNav;
		},
		toRoute({
			path
		}) {
			this.$routerUtil.toPath(path);
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
@import '@/styles/theme.scss';
.head-nav {
	height: 64px;
	padding: 20px 20px 0;
	z-index: 999;
	display: grid;
	grid-template-columns: 40px 1fr 80px;
	position: relative;
	&.transparent {
		background-color: rgba($color: #ffffff, $alpha: 0.2);
	}
	&.dark {
		background-color: rgba($color: #000000, $alpha: 0.2);
		color: #ffffff;
	}
	.hbg-nav-button {
		height: 17px;
		width: 23px;
		margin-top: 10px;
	}
	.head-nav-icon {
		width: 125px;
		margin: 0 auto;
	}
	.link-wallet-button {
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		width: 78px;
		border-radius: 6px;
		font-size: 0.5em;
		color: #ffffff;
		@include GradualBGColor;
	}
	.nav-list {
		position: absolute;
		// opacity: 0;
		top: 0;
		left: -100%;
		width: 100%;
		background-color: #35355c;
		color: #ffffff;
		border-radius: 0 0 8px 8px;
		transition: top 0.2s;
		&.active {
			opacity: 1;
			top: 100%;
			left: 0;
			z-index: -1;
		}
		li {
			padding: 25px;
		}
	}
}
</style>
