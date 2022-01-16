<template>
	<div class="head-nav" :class="[theme]">
		<img class="head-nav-icon" src="@/assets/head-nav/head-nav-icon.png" alt="">
		<nav>
			<ul>
				<li v-for="item in navList" :key="item.path" :class="{'active':currentRoutePath == item.path}" @click="toRoute(item)">
					<span>{{item.title}}</span>
				</li>
			</ul>
			<button class="link-wallet-button">Link Wallet</button>
		</nav>
	</div>
</template>
<script>
export default {
	data(){return{
		navList:[
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
		]
	}},
	computed:{
		theme() {
			return this.$store.state.theme;
		},
		currentRoutePath() {
			return this.$store.state.currentRoutePath;
		}
	},
	components: {
		
	},
	mounted() {
	},
	methods:{
		toRoute({path}) {
			this.$routerUtil.toPath(path)
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
@import "@/styles/theme.scss";
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
		color: #FFFFFF;
	}
	.head-nav-icon {
		padding: 18px 0 0 0;
	}
	nav{
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
			}
			li.active:after {
				content:'';
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
		width: 214px;
		border-radius: 12px;
		color: #FFFFFF;
		margin-right: 20px;
		margin-left: 70px;
		@include GradualBGColor;
	}
}
</style>
