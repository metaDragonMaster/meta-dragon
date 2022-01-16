<template>
	<div id="layout">
		<!-- <HeadNav></HeadNav> -->
		<!-- <component :is=""></component> -->
		{{isPc}}
		<!-- <div class="app-main">
			<router-view></router-view>
		</div>-->
	</div>
</template>
<script>
import HeadNav from "./headNav/index.vue";
import HeadNavPH from "./headNav/ph.vue";
import { mapActions } from "vuex"
export default {
	data() {
		return {

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
	computed:{
		isPc() {
			return this.$stroe.state.isPc;
		}
	},
	create() {
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
		if (isAndroid || isIOS) {
			this.setIsPc(false);
		}
	},
	
	mounted() {
		this.watchRouteToChangeTheme();
	},
	methods: {
		...mapActions({ setTheme: 'setTheme', setCurrentRoutePath: 'setCurrentRoutePath', setIsPc: 'setIsPc' }),
		watchRouteToChangeTheme() {
			let theme = this.$route.name == 'homepage' ? 'transparent' : 'dark';
			this.setCurrentRoutePath(this.$route.path)
			this.setTheme(theme);
		},
		// watchPcOrPh() {
		// 	var u = navigator.userAgent;
		// 	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
		// 	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
		// 	if (isAndroid || isIOS) {
		// 		this.setIsPc(false);
		// 	}
		// }
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
}
</style>
