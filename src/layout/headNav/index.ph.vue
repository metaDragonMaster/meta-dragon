<template>
	<div class="head-nav" :class="[theme]"  @touchmove.prevent>
		<img class="hbg-nav-button" :src="hbgIcon" alt @click="changeOpenNav" />
		<img class="head-nav-icon" src="@/assets/head-nav/head-nav-icon-ph.png" alt />
		<div class="link-wallet-button font-hide" @click="$emit('btnClick')">{{ ethAddress }}</div>
		<div class="mask" :class="{ active: openNav }">
			<ul class="nav-list">
				<li
					v-for="item in navList"
					:key="item.path"
					:class="{ active: currentRoutePath == item.path }"
					@click="toRoute(item)"
				>
					<span>{{ item.title }}</span>
				</li>
				<li @click="openChangeLanguage">
					<span>{{ $t('headerNav.changeLanguage') }}</span>
				</li>
			</ul>
		</div>
		<changeLanguage ref="changeLanguage" @closeDialog="closeMask"></changeLanguage>
	</div>
</template>
<script>
import Hbg from '@/assets/head-nav/hbg.png';
import HbgWhite from '@/assets/head-nav/hbg-white.png';
import { mapGetters } from 'vuex';
import changeLanguage from '@/components/changeLanguage.vue';
export default {
	data() {
		return {
			openNav: false,
			ethereum: null,
			web3js: null,
		};
	},
	components: {
		changeLanguage
	},
	watch: {
		// openNav(n, o) {
		// 	if (n) {
		// 		document.body.style.overflow = 'hidden';
		// 		document.addEventListener("touchmove", this.stopMove($event), { passive: false });//禁止页面滑动
		// 	} else {
		// 		document.body.style.overflow = '';//出现滚动条
		// 		document.removeEventListener("touchmove", this.stopMove, { passive: false });
		// 	}
		// }
	},
	props: {
		navList: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		...mapGetters({
			theme: 'theme',
			web3Provider: 'web3Provider'
		}),
		stopMove(e) {
			console.log(e)
			e.preventDefault();
		},
		// theme() {
		// 	return this.$store.state.theme;
		// },
		currentRoutePath() {
			return this.$store.state.currentRoutePath;
		},
		ethAddress() {
			return this.$store.getters.ethAddress || 'Link Wallet';
		},
		hbgIcon() {
			return this.$route.path == '/homepage' ? Hbg : HbgWhite;
		},
	},
	methods: {
		changeOpenNav() {
			if (!this.web3Provider) return;
			this.openNav = !this.openNav;
		},
		closeMask() {
			this.openNav = false;
		},
		toRoute({ path }) {
			if (!this.web3Provider) return;
			this.$routerUtil.toPath(path);
			this.openNav = false;
		},
		openChangeLanguage() {
			this.$refs['changeLanguage'].open()
		},

	}
};
</script>
<style lang="scss" scoped="scoped">
@import "@/styles/theme.scss";
.head-nav {
	padding: 20px 20px 0;
	z-index: 999999;
	height: 64px;
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
		width: 100%;
		background-color: #35355c;
		color: #ffffff;
		border-radius: 0 0 8px 8px;
		li {
			padding: 12px;
		}
	}
	.mask {
		width: 100vw;
		height: 100vh;
		position: absolute;
		position: absolute;
		// opacity: 0;
		top: 0;
		left: -100%;
		transition: top 0.2s;
		background-color: rgba($color: #000000, $alpha: 0.3);
		&.active {
			opacity: 1;
			top: 100%;
			left: 0;
			z-index: -1;
		}
	}
}
</style>
