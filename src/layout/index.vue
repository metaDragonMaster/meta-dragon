<template>
	<div id="layout">
		<!-- <HeadNav></HeadNav> -->
		<component :is="headComponent"></component>
		<!-- {{ isPc }} -->
		<div class="app-main" :class="{'ph':isPc!==true}">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import HeadNav from "./headNav/index.vue";
import HeadNavPH from "./headNav/index.ph.vue";
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

	computed: {
		isPc() {
			return this.$store.state.isPc;
		},
		headComponent() {
			return this.isPc ? 'HeadNav':'HeadNavPH'
		}
	},
	mounted() {
		this.watchRouteToChangeTheme();
	},
	methods: {
		...mapActions({ setTheme: 'setTheme', setCurrentRoutePath: 'setCurrentRoutePath'}),
		watchRouteToChangeTheme() {
			let theme = this.$route.name == 'homepage' ? 'transparent' : 'dark';
			this.setCurrentRoutePath(this.$route.path)
			this.setTheme(theme);
		},

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
