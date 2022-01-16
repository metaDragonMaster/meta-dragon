<template>
	<div class="head-nav" :class="[theme]">
		
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
	
}
</style>
