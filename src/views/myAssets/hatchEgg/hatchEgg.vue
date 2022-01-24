<template>
	<div class="hatch-egg-view">
		<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
		<button class="theme-type submit-button">Hatch</button>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	components: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
@import '@/styles/theme.scss';
.theme-type {
	@include GradualBGColor;
}
.submit-button {
	color: #FFFFFF;
	width: 300px;
	height: 64px;
	border-radius: 12px;
}
.hatch-egg-view {
	background-color: #292945;
	position: relative;
	background-color: #292945;
	// min-height: 100vh;
	margin-top: 45px;
	padding: 100px 76px;
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-150px, -100px);
	}
}
</style>
