<template>
	<ul class="rate">
		<li v-for="item in starList"><img :src="item" alt=""></li>
	</ul>
</template>
<script>
import starAlive from '@/assets/myAssets/star-alive.png';
import starDark from '@/assets/myAssets/star-dark.png';
export default {
	data: () => ({
		starAlive,
		starDark,
		starList: []
	}),
	props: {
		stars: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		this.startList();
	},
	methods: {
		startList() {
			const stars = this.stars;
			const list = new Array(5).fill().map((item, index) => {
				return (item = stars >= index + 1 ? starAlive : starDark);
			});
			this.starList = list;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.rate {
	display: flex;
}
</style>
